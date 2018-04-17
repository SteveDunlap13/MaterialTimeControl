import {Component, OnInit, Input, Output, EventEmitter, OnChanges} from '@angular/core';

// Current type to show
export enum CLOCK_TYPE {
  HOURS = 1,
  MINUTES = 2
}

export type TimeFormat = 12 | 24;

export interface ITime {

  hour: number;
  minute: number;
  meriden: 'PM' | 'AM';
  format: TimeFormat;
}

@Component({
  selector: 'w-clock',
  styleUrls: ['./w-clock.component.scss'],
  templateUrl: './w-clock.component.html'
})
export class WClockComponent implements OnChanges {

  @Input() public userTime: ITime;
  @Input() public minTime: ITime;
  @Input() public maxTime: ITime;
  @Output() public userTimeChange: EventEmitter<ITime> = new EventEmitter();

  @Input() public currentView: CLOCK_TYPE;
  @Output() public viewChange = new EventEmitter<CLOCK_TYPE>();

  @Input() public color: string;

  public steps = new Array<number>();
  private selectedTimePart;
  private STEP_DEG: number;

  ngOnChanges() {
    this.setupUI();
  }

  private setupUI() {

    this.steps = new Array<number>();

    switch (this.currentView) {

      case CLOCK_TYPE.HOURS:

        for (let i = 1; i <= this.userTime.format; i++) {

          this.steps.push(i);
          this.selectedTimePart = this.userTime.hour || 0;

          if (this.selectedTimePart > this.userTime.format) {

            this.selectedTimePart -= this.userTime.format;
          }
        }
        break;

      case CLOCK_TYPE.MINUTES:

        for (let i = 1; i <= 59; i += 1) {

          this.steps.push(i);
        }
        this.steps.push(0);
        this.selectedTimePart = this.userTime.minute || 0;
        break;
    }
  }

  public getPointerStyle() {

    let divider = 1;
    switch (this.currentView) {

      case CLOCK_TYPE.HOURS:
        divider = 12; // this.userTime.format;
        break;

      case CLOCK_TYPE.MINUTES:
        divider = 60;
        break;
    }

    let degrees = 0;
    if (this.currentView === CLOCK_TYPE.HOURS) {
      degrees = Math.round(this.userTime.hour * (360 / divider)) - 180;
    } else {
      degrees = Math.round(this.userTime.minute * (360 / divider)) - 180;
    }

    let style = {
      '-webkit-transform': 'rotate(' + degrees + 'deg)',
      '-ms-transform': 'rotate(' + degrees + 'deg)',
      'transform': 'rotate(' + degrees + 'deg)'
    };
    if (this.currentView === CLOCK_TYPE.HOURS && this.userTime.hour <= 12) {
      style = Object.assign(style, {height: '30%', bottom: '20%'});
    }

    return style;
  }

  public disabledTimeValue(step: number): boolean {
    if (!this.minTime && !this.maxTime) {
      return false;
    }
    if (this.currentView === CLOCK_TYPE.HOURS) {
      if (this.minTime && this.minTime.hour > step) {
        return true;
      }
      return this.maxTime && this.maxTime.hour < step;
    }
    if (this.currentView === CLOCK_TYPE.MINUTES) {
      if ((this.minTime && this.minTime.hour > this.userTime.hour) || (this.maxTime && this.maxTime.hour < this.userTime.hour)) {
        return true;
      }
      if (this.minTime && this.maxTime && this.minTime.hour === this.userTime.hour && this.maxTime.hour === this.userTime.hour) {
        return step < this.minTime.minute || step > this.maxTime.minute;
      }
      if (this.minTime && this.minTime.hour === this.userTime.hour) {
        return step < this.minTime.minute;
      }
      if (this.maxTime && this.maxTime.hour === this.userTime.hour) {
        return step > this.maxTime.minute;
      }
      return false;
    }
  }

  public getTimeValueClass(step: number, index: number) {
    // const stepDeg = this.currentView === CLOCK_TYPE.HOURS ? 360 / this.userTime.format : 360 / 12;
    const stepDeg = this.currentView === CLOCK_TYPE.HOURS ? 360 / 12 : 360 / 60;
    // const stepDeg = this.currentView === CLOCK_TYPE.HOURS ? 360 / 12 : 360 / 12;
    const degrees = this.currentView === CLOCK_TYPE.HOURS && step > 12 ? (stepDeg * (index + 1 - 12)) : (stepDeg * (index + 1));
    let classes = 'w-clock-step w-clock-deg' + degrees;
    if (this.currentView === CLOCK_TYPE.MINUTES) classes += ' smaller';
    if (this.currentView === CLOCK_TYPE.HOURS && this.userTime.format === 24 && step <= 12) classes += ' inside';

    if (this.selectedTimePart === step) {

      classes += ' mat-primary';
    }
    return classes;
  }

  public changeTimeValue(step: number) {

    if (this.currentView === CLOCK_TYPE.HOURS) {
      this.userTime.hour = step;

      // auto switch to minutes
      this.viewChange.emit(CLOCK_TYPE.MINUTES);
    } else {
      this.userTime.minute = step;

      // auto switch to hours
      // this.viewChange.emit(CLOCK_TYPE.HOURS);
    }
    this.userTimeChange.emit(this.userTime);
  }

  public displayStep(step: number) {
    if (this.currentView === CLOCK_TYPE.HOURS && step === 24) return '00';
    if (this.currentView === CLOCK_TYPE.MINUTES && step % 5 !== 0) return '';
    return step.toString();
  }
}
