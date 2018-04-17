import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';

import {WTimeDialogComponent} from '../w-time-dialog/w-time-dialog.component';
import {ITime} from '../w-clock/w-clock.component';


@Component({
  selector: 'w-mat-timepicker',
  styleUrls: ['./w-mat-timepicker.component.scss'],
  templateUrl: './w-mat-timepicker.component.html'
})

export class WMatTimePickerComponent implements OnInit {

  @Input() disabled = false;
  @Input() userTime: ITime;
  @Input() minTime: ITime;
  @Input() maxTime: ITime;
  @Output() userTimeChange: EventEmitter<ITime> = new EventEmitter();

  @Input() color: string;

  constructor(private dialog: MatDialog) {
  }

  ngOnInit() {

    if (!this.userTime) {

      this.userTime = {

        hour: 10,
        minute: 25,
        meriden: 'PM',
        format: 24
      };
    }
  }

  get time(): string {

    if (!this.userTime || this.disabled) {
      return '';
    }

    const meriden = `${this.userTime.meriden}`;

    let hour = `${this.userTime.hour}`;
    if (this.userTime.hour === 24) {
      hour = '00';
    }

    const tt = this.userTime.minute < 10 ? `${hour}:0` + String(this.userTime.minute) : `${hour}:${this.userTime.minute}`;
    return this.userTime.format === 24 ? tt : tt + ` ${meriden}`;
  }

  inputChange(ev) {
    const val = ev.target.value;
    console.log('input change : ', val);
    let [hourStr, minuteStr] = val.split(':');
    let hour = hourStr ? parseInt(hourStr, 10) : 0;
    if (this.userTime.format === 12) {
      const meridenPos = minuteStr.indexOf(' ');
      if (meridenPos > -1) {
        minuteStr = minuteStr.substr(0, meridenPos);
        const meriden = minuteStr.substr(meridenPos).toUpperCase();
        this.userTime.meriden = ['PM', 'AM'].indexOf(meriden) > -1 ? meriden : this.userTime.meriden;
      }
    }
    let minute = minuteStr ? parseInt(minuteStr, 10) : 0;
    console.log('minute, hour : ', minute, hour);
    const minHour = this.minTime ? this.minTime.hour : 0;
    const maxHour = this.maxTime ? this.maxTime.hour : this.userTime.format - 1;
    console.log('minHour, maxHour : ', minHour, maxHour);
    if (hour < minHour) {
      hour = minHour;
      minute = 0;
    }
    if (hour > maxHour) {
      hour = maxHour;
      minute = 59;
    }
    const minMinute = this.minTime && hour === minHour ? this.minTime.minute : 0;
    const maxMinute = this.maxTime && hour === maxHour ? this.maxTime.minute : 59;
    console.log('minMinute, maxMinute: ', minMinute, maxMinute);
    if (minute < minMinute) {
      minute = minMinute;
    }
    if (minute > maxMinute) {
      minute = maxMinute;
    }
    console.log('minute, hour : ', minute, hour);
    this.userTime.hour = hour;
    this.userTime.minute = minute;
    ev.target.value = this.time;
    this.emituserTimeChange();
  }

  public showPicker($event) {

    const dialogRef = this.dialog.open(WTimeDialogComponent, {

      data: {
        time: {
          hour: this.userTime.hour,
          minute: this.userTime.minute,
          meriden: this.userTime.meriden,
          format: this.userTime.format
        },
        minTime: this.minTime,
        maxTime: this.maxTime,
        color: this.color
      },
      width: '600px',
    });

    dialogRef.afterClosed()
        .subscribe((result: ITime | -1) => {

          // result will be update userTime object or -1 or undefined (closed dialog w/o clicking cancel)
          if (result === undefined || (typeof result === 'number' && result === -1)) {
            return;
          } else {
            this.userTime = result as ITime;
            this.emituserTimeChange();
          }
        });
    return false;
  }

  private emituserTimeChange() {

    this.userTimeChange.emit(this.userTime);
  }
}
