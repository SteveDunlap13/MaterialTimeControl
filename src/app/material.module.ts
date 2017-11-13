
import { NgModule } from '@angular/core';


import {
    MatButtonModule, MatButtonToggleModule,
    MatDialogModule, MatIconModule, MatInputModule,
    MatSelectModule, MatToolbarModule,
    MatFormFieldModule
} from '@angular/material';


@NgModule({
    exports: [
        MatButtonModule,
        MatButtonToggleModule,
        MatDialogModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatSelectModule,
        MatToolbarModule
    ],
})
export class ValyrianMaterialModule { }
