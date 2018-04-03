"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var flex_layout_1 = require("@angular/flex-layout");
var material_1 = require("@angular/material");
var time_control_1 = require("./time-control");
var MaterialTimeControlModule = (function () {
    function MaterialTimeControlModule() {
    }
    MaterialTimeControlModule = __decorate([
        core_1.NgModule({
            declarations: [
                time_control_1.WMatTimePickerComponent,
                time_control_1.WTimeDialogComponent,
                time_control_1.WClockComponent,
                time_control_1.WTimeComponent,
            ],
            imports: [
                material_1.MatButtonModule,
                material_1.MatButtonToggleModule,
                material_1.MatDialogModule,
                material_1.MatFormFieldModule,
                material_1.MatIconModule,
                material_1.MatInputModule,
                material_1.MatSelectModule,
                material_1.MatToolbarModule,
                common_1.CommonModule,
                flex_layout_1.FlexLayoutModule,
            ],
            exports: [
                time_control_1.WMatTimePickerComponent,
                time_control_1.WTimeDialogComponent,
                time_control_1.WClockComponent,
                time_control_1.WTimeComponent,
            ],
            entryComponents: [
                time_control_1.WMatTimePickerComponent,
                time_control_1.WTimeDialogComponent,
                time_control_1.WClockComponent,
                time_control_1.WTimeComponent,
            ]
        })
    ], MaterialTimeControlModule);
    return MaterialTimeControlModule;
}());
exports.MaterialTimeControlModule = MaterialTimeControlModule;
//# sourceMappingURL=material-time-control.module.js.map