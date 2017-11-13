
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';


import 'hammerjs';

import { ValyrianMaterialModule } from './material.module';

import { AppRoutes } from './app.routes'

import { AppComponent } from './app.component';

import {
  DashboardComponent,
  WMatTimePickerComponent,
  WTimeDialogComponent,
  WClockComponent
} from './ui';



@NgModule({
  imports: [

    BrowserModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    ValyrianMaterialModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    RouterModule.forRoot(AppRoutes)
  ],

  declarations: [

    AppComponent,
    DashboardComponent,
    WMatTimePickerComponent,
    WTimeDialogComponent,
    WClockComponent
  ],

  exports: [

  ],

  providers: [

  ],

  entryComponents: [

    WTimeDialogComponent
  ],

  bootstrap: [AppComponent]
})

export class AppModule { }
