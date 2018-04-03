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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var material_1 = require("@angular/material");
var w_time_dialog_component_1 = require("../w-time-dialog/w-time-dialog.component");
var WMatTimePickerComponent = (function () {
    function WMatTimePickerComponent(dialog) {
        this.dialog = dialog;
        this.userTimeChange = new core_1.EventEmitter();
    }
    WMatTimePickerComponent.prototype.ngOnInit = function () {
        if (!this.userTime) {
            this.userTime = {
                hour: 10,
                minute: 25,
                meriden: 'PM',
                format: 24
            };
        }
    };
    Object.defineProperty(WMatTimePickerComponent.prototype, "time", {
        get: function () {
            if (!this.userTime) {
                return '';
            }
            var meriden = "" + this.userTime.meriden;
            if (this.userTime.format === 24) {
                meriden = '';
            }
            var hour = "" + this.userTime.hour;
            if (this.userTime.hour === 24) {
                hour = '00';
            }
            if (this.userTime.minute === 0) {
                return hour + ":00 " + meriden;
            }
            else if (this.userTime.minute < 10) {
                var tt = '0' + String(this.userTime.minute);
                return hour + ":" + tt + " " + meriden;
            }
            else {
                return hour + ":" + this.userTime.minute + " " + meriden;
            }
        },
        enumerable: true,
        configurable: true
    });
    WMatTimePickerComponent.prototype.showPicker = function ($event) {
        var _this = this;
        var dialogRef = this.dialog.open(w_time_dialog_component_1.WTimeDialogComponent, {
            data: {
                time: {
                    hour: this.userTime.hour,
                    minute: this.userTime.minute,
                    meriden: this.userTime.meriden,
                    format: this.userTime.format
                },
                color: this.color
            }
        });
        dialogRef.afterClosed()
            .subscribe(function (result) {
            // result will be update userTime object or -1 or undefined (closed dialog w/o clicking cancel)
            if (result === undefined) {
                return;
            }
            else if (result !== -1) {
                _this.userTime = result;
                _this.emituserTimeChange();
            }
        });
        return false;
    };
    WMatTimePickerComponent.prototype.emituserTimeChange = function () {
        this.userTimeChange.emit(this.userTime);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], WMatTimePickerComponent.prototype, "userTime", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], WMatTimePickerComponent.prototype, "userTimeChange", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], WMatTimePickerComponent.prototype, "color", void 0);
    WMatTimePickerComponent = __decorate([
        core_1.Component({
            selector: 'w-mat-timepicker',
            styleUrls: ['./w-mat-timepicker.component.scss'],
            templateUrl: './w-mat-timepicker.component.html'
        }),
        __metadata("design:paramtypes", [material_1.MatDialog])
    ], WMatTimePickerComponent);
    return WMatTimePickerComponent;
}());
exports.WMatTimePickerComponent = WMatTimePickerComponent;
//# sourceMappingURL=w-mat-timepicker.component.js.map