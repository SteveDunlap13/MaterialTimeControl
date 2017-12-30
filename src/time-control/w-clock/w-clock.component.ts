
import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

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
};

@Component({
    selector: 'w-clock',
    styleUrls: ['./w-clock.component.scss'],
    templateUrl: './w-clock.component.html'
})
export class WClockComponent implements OnChanges {

    @Input() public userTime: ITime;
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

                for (let i = 5; i <= 55; i += 5) {

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
                divider = this.userTime.format;
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

        const style = {

            '-webkit-transform': 'rotate(' + degrees + 'deg)',
            '-ms-transform': 'rotate(' + degrees + 'deg)',
            'transform': 'rotate(' + degrees + 'deg)'
        };

        return style;
    }

    private getTimeValueClass(step: number, index: number) {

        if (this.currentView === CLOCK_TYPE.HOURS) {
            this.STEP_DEG = 360 / this.userTime.format;
        } else {
            this.STEP_DEG = 360 / 12;
        }
        let classes = 'w-clock-step w-clock-deg' + (this.STEP_DEG * (index + 1));

        if (this.selectedTimePart === step) {

            classes += ' mat-primary';
        }

        return classes;
    }

    private changeTimeValue(step: number) {

        if (this.currentView === CLOCK_TYPE.HOURS) {
            this.userTime.hour = step;

            // auto switch to minutes
            this.viewChange.emit(CLOCK_TYPE.MINUTES);
        } else {
            this.userTime.minute = step;

            // auto switch to hours
            this.viewChange.emit(CLOCK_TYPE.HOURS);
        }
        this.userTimeChange.emit(this.userTime)
    }
}
