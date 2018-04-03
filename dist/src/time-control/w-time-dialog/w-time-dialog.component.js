"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var material_1 = require("@angular/material");
var material_2 = require("@angular/material");
var w_clock_component_1 = require("../w-clock/w-clock.component");
var WTimeDialogComponent = (function () {
    function WTimeDialogComponent(data, color, dialogRef) {
        this.data = data;
        this.color = color;
        this.dialogRef = dialogRef;
        this.VIEW_HOURS = w_clock_component_1.CLOCK_TYPE.HOURS;
        this.VIEW_MINUTES = w_clock_component_1.CLOCK_TYPE.MINUTES;
        this.currentView = this.VIEW_HOURS;
        this.userTime = data.time;
        this.color = data.color;
        console.log('this.color', this.color);
    }
    WTimeDialogComponent.prototype.revert = function () {
        this.dialogRef.close(-1);
    };
    WTimeDialogComponent.prototype.submit = function () {
        this.dialogRef.close(this.userTime);
    };
    WTimeDialogComponent = __decorate([
        core_1.Component({
            styleUrls: ['./w-time-dialog.component.scss'],
            templateUrl: './w-time-dialog.component.html'
        }),
        __param(0, core_1.Inject(material_2.MAT_DIALOG_DATA)),
        __param(1, core_1.Inject(material_2.MAT_DIALOG_DATA)),
        __metadata("design:paramtypes", [Object, String, material_1.MatDialogRef])
    ], WTimeDialogComponent);
    return WTimeDialogComponent;
}());
exports.WTimeDialogComponent = WTimeDialogComponent;
//# sourceMappingURL=w-time-dialog.component.js.map