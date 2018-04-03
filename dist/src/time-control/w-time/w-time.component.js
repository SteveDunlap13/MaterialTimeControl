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
var w_clock_component_1 = require("../w-clock/w-clock.component");
var WTimeComponent = (function () {
    function WTimeComponent() {
        this.userTimeChange = new core_1.EventEmitter();
        this.onRevert = new core_1.EventEmitter();
        this.onSubmit = new core_1.EventEmitter();
        this.VIEW_HOURS = w_clock_component_1.CLOCK_TYPE.HOURS;
        this.VIEW_MINUTES = w_clock_component_1.CLOCK_TYPE.MINUTES;
        this.currentView = this.VIEW_HOURS;
    }
    WTimeComponent.prototype.ngOnInit = function () {
        if (!this.userTime) {
            this.userTime = {
                hour: 6,
                minute: 0,
                meriden: 'PM',
                format: 12
            };
        }
        if (!this.revertLabel) {
            this.revertLabel = 'Cancel';
        }
        if (!this.submitLabel) {
            this.submitLabel = 'Okay';
        }
    };
    WTimeComponent.prototype.formatHour = function () {
        if (this.userTime.format === 24) {
            if (this.userTime.hour === 24) {
                return '00';
            }
            else if (this.userTime.hour < 10) {
                return '0' + String(this.userTime.hour);
            }
        }
        return String(this.userTime.hour);
    };
    WTimeComponent.prototype.formatMinute = function () {
        if (this.userTime.minute === 0) {
            return '00';
        }
        else if (this.userTime.minute < 10) {
            return '0' + String(this.userTime.minute);
        }
        else {
            return String(this.userTime.minute);
        }
    };
    WTimeComponent.prototype.setCurrentView = function (type) {
        this.currentView = type;
    };
    WTimeComponent.prototype.setMeridien = function (m) {
        this.userTime.meriden = m;
    };
    WTimeComponent.prototype.revert = function () {
        this.onRevert.emit();
    };
    WTimeComponent.prototype.submit = function () {
        this.onSubmit.emit(this.userTime);
    };
    WTimeComponent.prototype.emituserTimeChange = function (event) {
        this.userTimeChange.emit(this.userTime);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], WTimeComponent.prototype, "userTime", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], WTimeComponent.prototype, "userTimeChange", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], WTimeComponent.prototype, "revertLabel", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], WTimeComponent.prototype, "submitLabel", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], WTimeComponent.prototype, "onRevert", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], WTimeComponent.prototype, "onSubmit", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], WTimeComponent.prototype, "color", void 0);
    WTimeComponent = __decorate([
        core_1.Component({
            selector: 'w-time',
            templateUrl: './w-time.component.html',
            styleUrls: ['./w-time.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], WTimeComponent);
    return WTimeComponent;
}());
exports.WTimeComponent = WTimeComponent;
//# sourceMappingURL=w-time.component.js.map