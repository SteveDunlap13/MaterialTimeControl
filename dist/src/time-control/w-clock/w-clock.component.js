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
// Current type to show
var CLOCK_TYPE;
(function (CLOCK_TYPE) {
    CLOCK_TYPE[CLOCK_TYPE["HOURS"] = 1] = "HOURS";
    CLOCK_TYPE[CLOCK_TYPE["MINUTES"] = 2] = "MINUTES";
})(CLOCK_TYPE = exports.CLOCK_TYPE || (exports.CLOCK_TYPE = {}));
;
var WClockComponent = (function () {
    function WClockComponent() {
        this.userTimeChange = new core_1.EventEmitter();
        this.viewChange = new core_1.EventEmitter();
        this.steps = new Array();
    }
    WClockComponent.prototype.ngOnChanges = function () {
        this.setupUI();
    };
    WClockComponent.prototype.setupUI = function () {
        this.steps = new Array();
        switch (this.currentView) {
            case CLOCK_TYPE.HOURS:
                for (var i = 1; i <= this.userTime.format; i++) {
                    this.steps.push(i);
                    this.selectedTimePart = this.userTime.hour || 0;
                    if (this.selectedTimePart > this.userTime.format) {
                        this.selectedTimePart -= this.userTime.format;
                    }
                }
                break;
            case CLOCK_TYPE.MINUTES:
                for (var i = 5; i <= 55; i += 5) {
                    this.steps.push(i);
                }
                this.steps.push(0);
                this.selectedTimePart = this.userTime.minute || 0;
                break;
        }
    };
    WClockComponent.prototype.getPointerStyle = function () {
        var divider = 1;
        switch (this.currentView) {
            case CLOCK_TYPE.HOURS:
                divider = this.userTime.format;
                break;
            case CLOCK_TYPE.MINUTES:
                divider = 60;
                break;
        }
        var degrees = 0;
        if (this.currentView === CLOCK_TYPE.HOURS) {
            degrees = Math.round(this.userTime.hour * (360 / divider)) - 180;
        }
        else {
            degrees = Math.round(this.userTime.minute * (360 / divider)) - 180;
        }
        var style = {
            '-webkit-transform': 'rotate(' + degrees + 'deg)',
            '-ms-transform': 'rotate(' + degrees + 'deg)',
            'transform': 'rotate(' + degrees + 'deg)'
        };
        return style;
    };
    WClockComponent.prototype.getTimeValueClass = function (step, index) {
        if (this.currentView === CLOCK_TYPE.HOURS) {
            this.STEP_DEG = 360 / this.userTime.format;
        }
        else {
            this.STEP_DEG = 360 / 12;
        }
        var classes = 'w-clock-step w-clock-deg' + (this.STEP_DEG * (index + 1));
        if (this.selectedTimePart === step) {
            classes += ' mat-primary';
        }
        return classes;
    };
    WClockComponent.prototype.changeTimeValue = function (step) {
        if (this.currentView === CLOCK_TYPE.HOURS) {
            this.userTime.hour = step;
            // auto switch to minutes
            this.viewChange.emit(CLOCK_TYPE.MINUTES);
        }
        else {
            this.userTime.minute = step;
            // auto switch to hours
            this.viewChange.emit(CLOCK_TYPE.HOURS);
        }
        this.userTimeChange.emit(this.userTime);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], WClockComponent.prototype, "userTime", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], WClockComponent.prototype, "userTimeChange", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], WClockComponent.prototype, "currentView", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], WClockComponent.prototype, "viewChange", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], WClockComponent.prototype, "color", void 0);
    WClockComponent = __decorate([
        core_1.Component({
            selector: 'w-clock',
            styleUrls: ['./w-clock.component.scss'],
            templateUrl: './w-clock.component.html'
        })
    ], WClockComponent);
    return WClockComponent;
}());
exports.WClockComponent = WClockComponent;
//# sourceMappingURL=w-clock.component.js.map