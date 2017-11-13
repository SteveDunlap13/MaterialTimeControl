
import { Component, Inject, ChangeDetectorRef } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { MAT_DIALOG_DATA } from '@angular/material';

import { CLOCK_TYPE } from './w-clock.component';



@Component({
    styleUrls: ['./w-time-dialog.component.scss'],
    templateUrl: './w-time-dialog.component.html'
})
export class WTimeDialogComponent {

    private userTime: any = {};
    private VIEW_HOURS = CLOCK_TYPE.HOURS;
    private VIEW_MINUTES = CLOCK_TYPE.MINUTES;
    private currentView: CLOCK_TYPE = this.VIEW_HOURS;



    constructor(
        @Inject(MAT_DIALOG_DATA) private userTimeData,
        private dialogRef: MatDialogRef<WTimeDialogComponent>,
        private cdRef: ChangeDetectorRef) {

        this.userTime = userTimeData;
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

    private setMeridien(m: string) {

        this.userTime.meriden = m;
    }

    private revert() {

        this.dialogRef.close(-1);
    }

    private submit() {

        this.dialogRef.close(this.userTime);
    }
}
