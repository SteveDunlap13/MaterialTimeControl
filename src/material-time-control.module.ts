
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import {
    MatButtonModule, MatButtonToggleModule,
    MatDialogModule, MatIconModule, MatInputModule,
    MatSelectModule, MatToolbarModule,
    MatFormFieldModule
} from '@angular/material';

import { WClockComponent } from './time-control/w-clock/w-clock.component';
import { WMatTimePickerComponent } from './time-control/w-mat-timepicker/w-mat-timepicker.component';
import { WTimeDialogComponent } from './time-control/w-time-dialog/w-time-dialog.component';
import { WTimeComponent } from './time-control/w-time/w-time.component';


@NgModule({
  declarations: [
    WMatTimePickerComponent,
    WTimeDialogComponent,
    WClockComponent,
    WTimeComponent,
  ],
  imports: [
    MatButtonModule,
    MatButtonToggleModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatToolbarModule,
    CommonModule,
    FlexLayoutModule,
  ],
  exports: [
    WMatTimePickerComponent,
    WTimeDialogComponent,
    WClockComponent,
    WTimeComponent,
  ],
  entryComponents: [
    WMatTimePickerComponent,
    WTimeDialogComponent,
    WClockComponent,
    WTimeComponent,
  ]
})

export class MaterialTimeControlModule { }
