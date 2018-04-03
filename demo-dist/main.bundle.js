webpackJsonp(["main"],{

/***/ "../../../../../demo/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../demo/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../demo/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <form class=\"demo-form\">\n    <w-mat-timepicker color=\"primary\" [(userTime)]=\"exportTime\"></w-mat-timepicker>\n  </form>\n</div>\n\n<mat-card>\n  <mat-card-content>\n      <w-time color=\"primary\" [(userTime)]=\"exportTime\"></w-time>\n  </mat-card-content>\n</mat-card>\n\n<mat-card>\n  <mat-card-content>\n      <w-time color=\"accent\" [(userTime)]=\"exportTime\" revertLabel=\"Revert\" submitLabel=\"Submit\"></w-time>\n  </mat-card-content>\n</mat-card>\n\n<mat-card>\n  <mat-card-content>\n      <w-time color=\"warn\" [(userTime)]=\"exportTime\"></w-time>\n  </mat-card-content>\n</mat-card>"

/***/ }),

/***/ "../../../../../demo/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  position: relative;\n  margin: 1em; }\n\n.demo-form {\n  padding: 4em; }\n\n.mat-card {\n  padding: 0;\n  max-width: 600px;\n  margin: 3rem auto; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../demo/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.exportTime = { hour: 7, minute: 15, meriden: 'PM', format: 24 };
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../demo/app/app.component.html"),
            styles: [__webpack_require__("../../../../../demo/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../demo/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../demo/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_material_time_control_module__ = __webpack_require__("../../../../../src/material-time-control.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_4__src_material_time_control_module__["a" /* MaterialTimeControlModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["d" /* MatCardModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../demo/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../demo/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../demo/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../demo/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "../../../../../src/material-time-control.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialTimeControlModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__time_control__ = __webpack_require__("../../../../../src/time-control/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var MaterialTimeControlModule = (function () {
    function MaterialTimeControlModule() {
    }
    MaterialTimeControlModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__time_control__["b" /* WMatTimePickerComponent */],
                __WEBPACK_IMPORTED_MODULE_4__time_control__["d" /* WTimeDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_4__time_control__["a" /* WClockComponent */],
                __WEBPACK_IMPORTED_MODULE_4__time_control__["c" /* WTimeComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["f" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["h" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["i" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["j" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["k" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["l" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["a" /* FlexLayoutModule */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_4__time_control__["b" /* WMatTimePickerComponent */],
                __WEBPACK_IMPORTED_MODULE_4__time_control__["d" /* WTimeDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_4__time_control__["a" /* WClockComponent */],
                __WEBPACK_IMPORTED_MODULE_4__time_control__["c" /* WTimeComponent */],
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__time_control__["b" /* WMatTimePickerComponent */],
                __WEBPACK_IMPORTED_MODULE_4__time_control__["d" /* WTimeDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_4__time_control__["a" /* WClockComponent */],
                __WEBPACK_IMPORTED_MODULE_4__time_control__["c" /* WTimeComponent */],
            ]
        })
    ], MaterialTimeControlModule);
    return MaterialTimeControlModule;
}());



/***/ }),

/***/ "../../../../../src/time-control/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__w_mat_timepicker_w_mat_timepicker_component__ = __webpack_require__("../../../../../src/time-control/w-mat-timepicker/w-mat-timepicker.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__w_mat_timepicker_w_mat_timepicker_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__w_time_dialog_w_time_dialog_component__ = __webpack_require__("../../../../../src/time-control/w-time-dialog/w-time-dialog.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__w_time_dialog_w_time_dialog_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__w_clock_w_clock_component__ = __webpack_require__("../../../../../src/time-control/w-clock/w-clock.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__w_clock_w_clock_component__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__w_time_w_time_component__ = __webpack_require__("../../../../../src/time-control/w-time/w-time.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_3__w_time_w_time_component__["a"]; });






/***/ }),

/***/ "../../../../../src/time-control/w-clock/w-clock.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"w-clock-wrapper\">\n    <div class=\"w-clock\">\n        <div class=\"w-clock-container\">\n            \n            <!-- Clock center -->\n            <button  mat-mini-fab [color]=\"color\" class=\"w-clock-center\"></button>\n\n            <!-- Clock hand -->\n            <mat-toolbar [ngStyle]=\"getPointerStyle()\" [color]=\"color\" class=\"w-pointer\">\n                <button mat-mini-fab [color]=\"color\" class=\"w-clock-selected\"></button>\n            </mat-toolbar>\n            \n            <!-- Hour / Minute number faces -->\n            <div *ngFor=\"let step of steps; let i = index\" [class]=\"getTimeValueClass(step, i)\" >\n                <button mat-mini-fab\n                    [color]=\"selectedTimePart === step ? color : ''\"\n                    (click)=\"changeTimeValue(step)\">\n                    {{ step }}\n                </button>\n            </div>\n\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/time-control/w-clock/w-clock.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".w-clock-wrapper {\n  height: 100%;\n  padding: 0 24px; }\n  .w-clock-wrapper .w-clock {\n    width: 200px;\n    height: 200px;\n    border-radius: 50%;\n    cursor: pointer;\n    padding: 24px;\n    background: #ededed; }\n    .w-clock-wrapper .w-clock .w-clock-container {\n      width: 100%;\n      height: 100%;\n      position: relative;\n      display: block; }\n    .w-clock-wrapper .w-clock .w-clock-center {\n      height: 6px;\n      width: 6px;\n      position: absolute;\n      left: 0;\n      right: 0;\n      top: 0;\n      bottom: 0;\n      margin: auto;\n      border-radius: 50%; }\n    .w-clock-wrapper .w-clock .w-pointer {\n      box-shadow: none;\n      width: 1px;\n      height: 50%;\n      position: absolute;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      margin: 0 auto;\n      padding: 0;\n      -webkit-transform-origin: top center;\n              transform-origin: top center;\n      transition: -webkit-transform 200ms;\n      transition: transform 200ms;\n      transition: transform 200ms, -webkit-transform 200ms;\n      z-index: 0;\n      pointer-events: none; }\n    .w-clock-wrapper .w-clock .w-clock-step {\n      display: block;\n      position: absolute;\n      -webkit-transform: translate(-50%, -50%);\n              transform: translate(-50%, -50%);\n      transition: -webkit-transform 200ms;\n      transition: transform 200ms;\n      transition: transform 200ms, -webkit-transform 200ms; }\n      .w-clock-wrapper .w-clock .w-clock-step .mat-mini-fab {\n        box-shadow: none;\n        background-color: transparent; }\n    .w-clock-wrapper .w-clock .w-clock-selected {\n      position: absolute;\n      bottom: -19px;\n      left: -19px;\n      min-width: 0;\n      min-height: 0;\n      pointer-events: none;\n      box-shadow: none;\n      cursor: none; }\n\n.w-clock-deg0 {\n  top: 0%;\n  left: 50%; }\n\n.w-clock-deg15 {\n  top: 1.70370869%;\n  left: 62.94095226%; }\n\n.w-clock-deg30 {\n  top: 6.69872981%;\n  left: 75%; }\n\n.w-clock-deg45 {\n  top: 14.64466094%;\n  left: 85.35533905%; }\n\n.w-clock-deg60 {\n  top: 25%;\n  left: 93.30127019%; }\n\n.w-clock-deg75 {\n  top: 37.05904774%;\n  left: 98.29629131%; }\n\n.w-clock-deg90 {\n  top: 50%;\n  left: 100%; }\n\n.w-clock-deg105 {\n  top: 62.94095226%;\n  left: 98.29629131%; }\n\n.w-clock-deg120 {\n  top: 75%;\n  left: 93.30127019%; }\n\n.w-clock-deg135 {\n  top: 85.35533906%;\n  left: 85.35533906%; }\n\n.w-clock-deg150 {\n  top: 93.30127019%;\n  left: 75%; }\n\n.w-clock-deg165 {\n  top: 98.29629131%;\n  left: 62.94095226%; }\n\n.w-clock-deg180 {\n  top: 100%;\n  left: 50%; }\n\n.w-clock-deg195 {\n  top: 98.29629131%;\n  left: 37.05904774%; }\n\n.w-clock-deg210 {\n  top: 93.30127019%;\n  left: 25%; }\n\n.w-clock-deg225 {\n  top: 85.35533906%;\n  left: 14.64466094%; }\n\n.w-clock-deg240 {\n  top: 75%;\n  left: 6.69872981%; }\n\n.w-clock-deg255 {\n  top: 62.94095226%;\n  left: 1.703708686%; }\n\n.w-clock-deg270 {\n  top: 50%;\n  left: 0%; }\n\n.w-clock-deg285 {\n  top: 37.05904774%;\n  left: 1.703708686%; }\n\n.w-clock-deg300 {\n  top: 25%;\n  left: 6.69872981%; }\n\n.w-clock-deg315 {\n  top: 14.64466094%;\n  left: 14.64466094%; }\n\n.w-clock-deg330 {\n  top: 6.69872981%;\n  left: 25%; }\n\n.w-clock-deg345 {\n  top: 1.703708686%;\n  left: 37.05904774%; }\n\n.w-clock-deg360 {\n  top: 0%;\n  left: 50%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/time-control/w-clock/w-clock.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CLOCK_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return WClockComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// Current type to show
var CLOCK_TYPE;
(function (CLOCK_TYPE) {
    CLOCK_TYPE[CLOCK_TYPE["HOURS"] = 1] = "HOURS";
    CLOCK_TYPE[CLOCK_TYPE["MINUTES"] = 2] = "MINUTES";
})(CLOCK_TYPE || (CLOCK_TYPE = {}));
;
var WClockComponent = (function () {
    function WClockComponent() {
        this.userTimeChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.viewChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], WClockComponent.prototype, "userTime", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */])
    ], WClockComponent.prototype, "userTimeChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], WClockComponent.prototype, "currentView", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", Object)
    ], WClockComponent.prototype, "viewChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], WClockComponent.prototype, "color", void 0);
    WClockComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'w-clock',
            styles: [__webpack_require__("../../../../../src/time-control/w-clock/w-clock.component.scss")],
            template: __webpack_require__("../../../../../src/time-control/w-clock/w-clock.component.html")
        })
    ], WClockComponent);
    return WClockComponent;
}());



/***/ }),

/***/ "../../../../../src/time-control/w-mat-timepicker/w-mat-timepicker.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div fxFlex fxLayout=\"row\" class=\"w-mat-timepicker\">\n\n    <button mat-button (click)=\"showPicker($event)\" class=\"time-picker-button\">\n        <mat-icon>access_time</mat-icon>\n    </button>\n    \n    <mat-input-container fxFlex class=\"timeContainer\">\n        <input matInput\n            class=\"timeInput\"\n            placeholder=\"Selec time\" \n            id=\"time_Control\" \n            name=\"time_Control\"\n            [value]=\"time\"\n        >\n    </mat-input-container>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/time-control/w-mat-timepicker/w-mat-timepicker.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".time-picker-button {\n  padding: 0;\n  margin: 0;\n  min-width: 44px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/time-control/w-mat-timepicker/w-mat-timepicker.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WMatTimePickerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__w_time_dialog_w_time_dialog_component__ = __webpack_require__("../../../../../src/time-control/w-time-dialog/w-time-dialog.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WMatTimePickerComponent = (function () {
    function WMatTimePickerComponent(dialog) {
        this.dialog = dialog;
        this.userTimeChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
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
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__w_time_dialog_w_time_dialog_component__["a" /* WTimeDialogComponent */], {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], WMatTimePickerComponent.prototype, "userTime", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */])
    ], WMatTimePickerComponent.prototype, "userTimeChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], WMatTimePickerComponent.prototype, "color", void 0);
    WMatTimePickerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'w-mat-timepicker',
            styles: [__webpack_require__("../../../../../src/time-control/w-mat-timepicker/w-mat-timepicker.component.scss")],
            template: __webpack_require__("../../../../../src/time-control/w-mat-timepicker/w-mat-timepicker.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatDialog */]])
    ], WMatTimePickerComponent);
    return WMatTimePickerComponent;
}());



/***/ }),

/***/ "../../../../../src/time-control/w-time-dialog/w-time-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div mat-dialog-content class=\"w-timepicker-dialog\">\n    <w-time [color]=\"color\" [userTime]=\"userTime\" (onRevert)=\"revert()\" (onSubmit)=\"submit()\"></w-time>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/time-control/w-time-dialog/w-time-dialog.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".w-timepicker-dialog {\n  padding: 0;\n  margin: -24px;\n  width: calc(100% + 48px); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/time-control/w-time-dialog/w-time-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WTimeDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__w_clock_w_clock_component__ = __webpack_require__("../../../../../src/time-control/w-clock/w-clock.component.ts");
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




var WTimeDialogComponent = (function () {
    function WTimeDialogComponent(data, color, dialogRef) {
        this.data = data;
        this.color = color;
        this.dialogRef = dialogRef;
        this.VIEW_HOURS = __WEBPACK_IMPORTED_MODULE_2__w_clock_w_clock_component__["a" /* CLOCK_TYPE */].HOURS;
        this.VIEW_MINUTES = __WEBPACK_IMPORTED_MODULE_2__w_clock_w_clock_component__["a" /* CLOCK_TYPE */].MINUTES;
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            styles: [__webpack_require__("../../../../../src/time-control/w-time-dialog/w-time-dialog.component.scss")],
            template: __webpack_require__("../../../../../src/time-control/w-time-dialog/w-time-dialog.component.html")
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [Object, String, __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatDialogRef */]])
    ], WTimeDialogComponent);
    return WTimeDialogComponent;
}());



/***/ }),

/***/ "../../../../../src/time-control/w-time/w-time.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutAlign=\"center center\" class=\"w-time\" [ngClass.xs]=\"'vertical-time'\" [ngClass.sm]=\"'vertical-time'\">\n  <mat-toolbar fxLayout=\"column\"  fxLayout.lt-md=\"row\" fxLayoutAlign=\"center center\" [color]=\"color\" class=\"w-timepicker-time-container\">\n      \n      <div class=\"w-timepicker-selected-time\">\n          <span [class]=\"currentView === VIEW_HOURS ? 'active': ''\" (click)=\"setCurrentView(VIEW_HOURS)\">{{ formatHour() }}:</span>\n          <span [class]=\"currentView === VIEW_MINUTES ? 'active': ''\" (click)=\"setCurrentView(VIEW_MINUTES)\">{{ formatMinute() }}</span>\n      </div>\n      <div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"w-timepicker-selected-ampm\" *ngIf=\"userTime.format === 12\">\n          <span (click)=\"setMeridien('AM')\" [class]=\"userTime.meriden === 'AM' ? 'active' : ''\">AM</span>\n          <span (click)=\"setMeridien('PM')\" [class]=\"userTime.meriden === 'PM' ? 'active' : ''\">PM</span>\n      </div>\n\n  </mat-toolbar>\n\n  <div fxLayout=\"column\" fxLayoutAlign=\"space-between center\" class=\"w-time-content\">\n      <w-clock [color]=\"color\" class=\"w-animation-zoom\" [userTime]=\"userTime\" (userTimeChange)=\"emituserTimeChange($event)\" [(currentView)]=\"currentView\" (viewChange)=\"setCurrentView($event)\"></w-clock>\n\n      <div fxFlexAlign=\"end\">\n          <button mat-button (click)=\"revert()\">{{revertLabel}}</button>\n          <button mat-button [color]=\"color\" (click)=\"submit()\">{{submitLabel}}</button>\n      </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/time-control/w-time/w-time.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: block; }\n\n.w-time {\n  max-height: 100%;\n  min-height: 350px;\n  height: 350px; }\n  .w-time .w-timepicker-time-container {\n    padding: 15px;\n    min-width: 160px;\n    width: 160px; }\n    .w-time .w-timepicker-time-container.mat-toolbar-single-row {\n      height: 100%; }\n  .w-time .w-timepicker-selected-time {\n    font-size: 3.5rem;\n    font-weight: 400;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex; }\n  .w-time .w-timepicker-selected-ampm {\n    font-size: 1rem;\n    line-height: 1.3rem;\n    padding-top: 2rem; }\n  .w-time .w-time-content {\n    width: 100%;\n    height: 100%;\n    padding: 6px; }\n    .w-time .w-time-content w-clock {\n      padding: 12px 0;\n      height: calc(100% - 58px); }\n  .w-time.vertical-time {\n    height: auto; }\n    .w-time.vertical-time .w-timepicker-time-container {\n      min-width: auto;\n      width: 100%;\n      height: 100px; }\n      .w-time.vertical-time .w-timepicker-time-container .w-timepicker-selected-ampm {\n        padding: 0 12px; }\n\n.w-timepicker-selected-time > span, .w-timepicker-selected-ampm > span {\n  outline: 0;\n  opacity: 0.5; }\n\n.w-timepicker-selected-time > span:not(.active), .w-timepicker-selected-ampm > span:not(.active) {\n  cursor: pointer; }\n\n.w-timepicker-selected-time > span.active, .w-timepicker-selected-ampm > span.active {\n  opacity: 1; }\n\n.w-animate-next {\n  opacity: 0;\n  -webkit-transform: translate3d(50%, 0, 1px);\n  transform: translate3d(50%, 0, 1px); }\n\n.w-animate-next-remove {\n  transition: all 0.5s cubic-bezier(0.35, 0, 0.25, 1);\n  opacity: 0;\n  -webkit-transform: translate3d(50%, 0, 1px);\n  transform: translate3d(50%, 0, 1px); }\n\n.w-animate-next-remove-active {\n  opacity: 1;\n  -webkit-transform: translate3d(0, 0, 1px);\n  transform: translate3d(0, 0, 1px); }\n\n.w-animate-prev {\n  opacity: 0;\n  -webkit-transform: translate3d(-50%, 0, 1px);\n  transform: translate3d(-50%, 0, 1px); }\n\n.w-animate-prev-remove {\n  transition: all 0.3s cubic-bezier(0.35, 0, 0.25, 1);\n  opacity: 0;\n  -webkit-transform: translate3d(-50%, 0, 1px);\n  transform: translate3d(-50%, 0, 1px); }\n\n.w-animate-prev-remove-active {\n  opacity: 1;\n  -webkit-transform: translate3d(0, 0, 1px);\n  transform: translate3d(0, 0, 1px); }\n\n@-webkit-keyframes w-animation-bounce {\n  from {\n    opacity: 0;\n    -webkit-transform: scale(0.95);\n    transform: scale(0.95); }\n  70% {\n    opacity: 1;\n    -webkit-transform: scale(1.05);\n    transform: scale(1.05); }\n  to {\n    -webkit-transform: scale(1);\n    transform: scale(1); } }\n\n@keyframes w-animation-bounce {\n  from {\n    opacity: 0;\n    -webkit-transform: scale(0.95);\n    transform: scale(0.95); }\n  70% {\n    opacity: 1;\n    -webkit-transform: scale(1.05);\n    transform: scale(1.05); }\n  to {\n    -webkit-transform: scale(1);\n    transform: scale(1); } }\n\n.w-animation-zoom.ng-enter {\n  transition: all 0.3s cubic-bezier(0.35, 0, 0.25, 1);\n  -webkit-animation-duration: 0.3s;\n  animation-duration: 0.3s;\n  -webkit-animation-name: w-animation-bounce;\n  animation-name: w-animation-bounce; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/time-control/w-time/w-time.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WTimeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__w_clock_w_clock_component__ = __webpack_require__("../../../../../src/time-control/w-clock/w-clock.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WTimeComponent = (function () {
    function WTimeComponent() {
        this.userTimeChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.onRevert = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.onSubmit = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.VIEW_HOURS = __WEBPACK_IMPORTED_MODULE_1__w_clock_w_clock_component__["a" /* CLOCK_TYPE */].HOURS;
        this.VIEW_MINUTES = __WEBPACK_IMPORTED_MODULE_1__w_clock_w_clock_component__["a" /* CLOCK_TYPE */].MINUTES;
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], WTimeComponent.prototype, "userTime", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */])
    ], WTimeComponent.prototype, "userTimeChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], WTimeComponent.prototype, "revertLabel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], WTimeComponent.prototype, "submitLabel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */])
    ], WTimeComponent.prototype, "onRevert", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */])
    ], WTimeComponent.prototype, "onSubmit", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], WTimeComponent.prototype, "color", void 0);
    WTimeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'w-time',
            template: __webpack_require__("../../../../../src/time-control/w-time/w-time.component.html"),
            styles: [__webpack_require__("../../../../../src/time-control/w-time/w-time.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], WTimeComponent);
    return WTimeComponent;
}());



/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../demo/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map