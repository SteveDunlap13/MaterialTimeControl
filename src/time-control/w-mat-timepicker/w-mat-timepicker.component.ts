
import { Component, Input, Output, EventEmitter, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatDialog } from '@angular/material';

import { WTimeDialogComponent } from '../w-time-dialog/w-time-dialog.component';
import { ITime } from '../w-clock/w-clock.component';

@Component({
    selector: 'w-mat-timepicker',
    styleUrls: ['./w-mat-timepicker.component.scss'],
    templateUrl: './w-mat-timepicker.component.html'
})

export class WMatTimePickerComponent implements OnInit {

    @Input() userTime: ITime;
    @Output() userTimeChange: EventEmitter<ITime> = new EventEmitter();

    @Input() color: string;

    /**
     * position can be
     * - left
     * - right
     * - inside
     */
    @Input() position = 'left';

    /**
     * translation for placeholder
     *  default: Select time
     */
    @Input() selectTime = 'Select time';

    /**
     * translation for submit button
     *  default: Okay
     */
    @Input() submit = 'Okay';

    /**
     * translation for submit button
     *  default: Cancel
     */
    @Input() revert = 'Cancel';

    /**
     * the input
     */
    @ViewChild('time_Control') timeInput: ElementRef;

    constructor(private dialog: MatDialog) { }

    ngOnInit() {
      if (!this.userTime) {
        this.userTime = {
            hour: 10,
            minute: 25,
            meriden: 'PM',
            format: 24
        }
      }
    }

    get time(): string {
      if (!this.userTime) {
        return '';
      }

      let hour = this.userTime.hour < 10 ? `0${this.userTime.hour}` : this.userTime.hour.toString();
      hour = this.userTime.hour > 24 ? '23' : hour;
      hour = this.userTime.hour === 24 ? '00' : hour;

      let minute = this.userTime.minute < 10 ? `0${this.userTime.minute}` : this.userTime.minute.toString();
      minute = this.userTime.minute > 59 ? '59' : minute;

      this.userTime.hour = Number(hour);
      this.userTime.minute = Number(minute);

      let meriden = this.userTime.meriden;
      return this.userTime.format === 24 ? `${hour}:${minute}` : `${hour}:${minute} ${meriden}`;
    }

    /**
     * update the time after the input loses focus
     *
     * @param value - input value
     */
    public onInputTimeLosesFocus(value: string ) {
      const time = value.split(':');

      let hour = this.checkForNoLetters(time[0]) ? time[0] : '00';
      let minute = this.checkForNoLetters(time[1]) ? time[1] : '00';
      let meriden = this.userTime.meriden;
      this.timeInput.nativeElement.value = this.userTime.format === 24 ? `${hour}:${minute}` : `${hour}:${minute} ${meriden}`;

      this.userTime.hour = Number(hour);
      this.userTime.minute = Number(minute);
      this.emituserTimeChange();
    }

    /**
     * checks if the string contains letters
     *
     * @param value - string to check
     * @return {@code true} if no letters found, {@code false} if letters found
     */
    checkForNoLetters(value: string): boolean {
      if (isNaN(Number(value))) {
        return false;
      }
      return true;
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
                color: this.color,
                submit: this.submit,
                revert: this.revert
            }
        });

        dialogRef.afterClosed()
            .subscribe((result: ITime | -1) => {

                // result will be update userTime object or -1 or undefined (closed dialog w/o clicking cancel)
                if (result === undefined) {
                    return;
                } else if (result !== -1) {
                    this.userTime = result;
                    this.emituserTimeChange();
                }
            });
        return false;
    }

    private emituserTimeChange() {

        this.userTimeChange.emit(this.userTime);
    }
}
