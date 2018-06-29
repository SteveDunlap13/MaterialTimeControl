
import { Component, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { MAT_DIALOG_DATA } from '@angular/material';

import { CLOCK_TYPE, ITime } from '../w-clock/w-clock.component';



@Component({
    styleUrls: ['./w-time-dialog.component.scss'],
    templateUrl: './w-time-dialog.component.html'
})
export class WTimeDialogComponent {

    public userTime: ITime;
    private VIEW_HOURS = CLOCK_TYPE.HOURS;
    private VIEW_MINUTES = CLOCK_TYPE.MINUTES;
    private currentView: CLOCK_TYPE = this.VIEW_HOURS;

    revertLabel: string;
    submitLabel: string;

    constructor(
        @Inject(MAT_DIALOG_DATA) private data: {time: ITime, color: string, submit: string, revert: string},
        @Inject(MAT_DIALOG_DATA) public color: string,
        private dialogRef: MatDialogRef<WTimeDialogComponent>) {

        this.userTime = data.time;
        this.color = data.color;
        this.submitLabel = data.submit;
        this.revertLabel = data.revert;
    }

    public revert() {

        this.dialogRef.close(-1);
    }

    public submit() {

        this.dialogRef.close(this.userTime);
    }
}
