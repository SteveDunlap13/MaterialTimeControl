import { Component, Input, Output, OnInit, Inject, EventEmitter  } from '@angular/core';

import { CLOCK_TYPE, ITime } from '../w-clock/w-clock.component';

@Component({
  selector: 'w-time',
  templateUrl: './w-time.component.html',
  styleUrls: ['./w-time.component.scss']
})
export class WTimeComponent implements OnInit {

  @Input() userTime: ITime;
  @Output() userTimeChange: EventEmitter<ITime> = new EventEmitter();

  @Output() onRevert: EventEmitter<null> = new EventEmitter();
  @Output() onSubmit: EventEmitter<ITime> = new EventEmitter();

  @Input() color: string;

  private VIEW_HOURS = CLOCK_TYPE.HOURS;
  private VIEW_MINUTES = CLOCK_TYPE.MINUTES;
  private currentView: CLOCK_TYPE = this.VIEW_HOURS;

  constructor() {}

  ngOnInit() {
    if (!this.userTime) {
      this.userTime = {
        hour: 6,
        minute: 0,
        meriden: 'PM'
      };
    }
  }

  private formatMinute(): string {

    if (this.userTime.minute < 10) {

      return '0' + String(this.userTime.minute);
    } else {

      return String(this.userTime.minute);
    }
  }

  private setCurrentView(type: CLOCK_TYPE) {

    this.currentView = type;
  }

  private setMeridien(m: 'PM' | 'AM') {

    this.userTime.meriden = m;
  }

  private revert() {
    this.onRevert.emit();
  }

  private submit() {
    this.onSubmit.emit(this.userTime);
  }

  private emituserTimeChange(event) {
    this.userTimeChange.emit(this.userTime);
  }

}
