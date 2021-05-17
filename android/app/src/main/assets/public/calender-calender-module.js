(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["calender-calender-module"],{

/***/ "21YQ":
/*!*********************************************!*\
  !*** ./src/app/calender/calender.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".indicator-container {\n  padding-left: 0.5rem;\n  padding-bottom: 0.4rem;\n}\n\n.event-indicator {\n  background: var(--ion-color-success);\n  width: 5px;\n  height: 5px;\n  border-radius: 5px;\n  display: table-cell;\n}\n\n:host ::ng-deep .monthview-primary-with-event {\n  background-color: white !important;\n}\n\n:host ::ng-deep .monthview-selected {\n  background-color: var(--ion-color-success) !important;\n}\n\n.with-event {\n  background-color: var(--ion-color-primary);\n  border-radius: 15px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNhbGVuZGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFvQjtFQUNwQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsVUFBVTtFQUNWLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBRUksa0NBQWtDO0FBQXRDOztBQUZBO0VBTUkscURBQXFEO0FBQXpEOztBQUlBO0VBQ0UsMENBQTBDO0VBQzFDLG1CQUFtQjtBQURyQiIsImZpbGUiOiJjYWxlbmRlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5kaWNhdG9yLWNvbnRhaW5lciB7XHJcbiAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XHJcbiAgcGFkZGluZy1ib3R0b206IDAuNHJlbTtcclxufVxyXG5cclxuLmV2ZW50LWluZGljYXRvciB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MpO1xyXG4gIHdpZHRoOiA1cHg7XHJcbiAgaGVpZ2h0OiA1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCB7XHJcbiAgLm1vbnRodmlldy1wcmltYXJ5LXdpdGgtZXZlbnQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5tb250aHZpZXctc2VsZWN0ZWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MpICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4ud2l0aC1ldmVudCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "8I4T":
/*!*******************************************!*\
  !*** ./src/app/calender/calender.page.ts ***!
  \*******************************************/
/*! exports provided: CalenderPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalenderPage", function() { return CalenderPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_calender_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./calender.page.html */ "TVjl");
/* harmony import */ var _calender_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calender.page.scss */ "21YQ");
/* harmony import */ var _clist_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../clist.service */ "wp6f");
/* harmony import */ var _tasks_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../tasks.service */ "0KrY");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var ionic2_calendar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ionic2-calendar */ "L+Ny");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");





/* eslint-disable max-len */
/* eslint-disable no-var */
/* eslint-disable @typescript-eslint/prefer-for-of */
/* eslint-disable arrow-body-style */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable @typescript-eslint/member-delimiter-style */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/type-annotation-spacing */
/* eslint-disable object-shorthand */
/* eslint-disable eqeqeq */
/* eslint-disable curly */





let CalenderPage = class CalenderPage {
    constructor(activatedRoute, alertCtrl, locale, modalCtrl, loadingController, taskSrv, listSrv) {
        this.activatedRoute = activatedRoute;
        this.alertCtrl = alertCtrl;
        this.locale = locale;
        this.modalCtrl = modalCtrl;
        this.loadingController = loadingController;
        this.taskSrv = taskSrv;
        this.listSrv = listSrv;
        this.gr = '';
        this.s = 6;
        this.e = 20;
        this.st = 30;
        this.sdw = 1;
        this.tasks = [];
        this.lists = [];
        this.pids = [];
        this.eventSource = [];
        this.calendar = {
            mode: 'month',
            currentDate: new Date(),
        };
        this.gr = this.activatedRoute.snapshot.paramMap.get('id');
        this.taskSrv.getCalenderTasks(this.gr).subscribe(res => {
            res
                .forEach(plan => {
                this.pids.push(plan.data());
                this.taskSrv.getTasks(plan.id)
                    .subscribe(r => r
                    .forEach(task => { this.tasks.push({ tt: task, pp: plan.data() }); this.createRandomEvents(); }));
            });
        });
        this.listSrv.getgroupLists(this.gr).subscribe(res => res.forEach(lis => { this.lists.push(lis); this.createRandomEvents(); }));
    }
    ngOnInit() {
    }
    next() {
        this.myCal.slideNext();
    }
    back() {
        this.myCal.slidePrev();
    }
    // Selected date reange and hence title changed
    onViewTitleChanged(title) {
        this.viewTitle = title;
    }
    createRandomEvents() {
        var events = [];
        for (let t of this.tasks) {
            var date = t.tt.data().dueDate.toDate();
            var date2;
            console.log(date = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate())));
            date2 = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + 1));
            var h = date.getHours();
            var m = date.getMinutes();
            if (h < 10) {
                h = '0' + h;
            }
            if (m < 10) {
                m = m + '0';
            }
            h = h.toString();
            m = m.toString();
            var startTime;
            var endTime;
            startTime = date;
            endTime = date2;
            events.push({
                title: t.tt.data().title + ' Due: ' + h + ':' + m + ' In(' + t.pp.Title + ')',
                startTime: startTime,
                endTime: endTime,
                allDay: true,
            });
        }
        for (let t of this.lists) {
            var date = t.data().dateTime.toDate();
            console.log(date);
            var date2;
            console.log(date = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate())));
            date2 = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + 1));
            var h = date.getHours();
            var m = date.getMinutes();
            if (h < 10) {
                h = '0' + h;
            }
            if (m < 10) {
                m = m + '0';
            }
            h = h.toString();
            m = m.toString();
            var startTime;
            var endTime;
            startTime = date;
            endTime = date2;
            events.push({
                title: t.data().Title + ' At: ' + h + ':' + m + ' (Contrbution list)',
                startTime: startTime,
                endTime: endTime,
                allDay: true,
            });
        }
        this.eventSource = events;
    }
    removeEvents() {
        this.eventSource = [];
    }
};
CalenderPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["LOCALE_ID"],] }] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] },
    { type: _tasks_service__WEBPACK_IMPORTED_MODULE_4__["TasksService"] },
    { type: _clist_service__WEBPACK_IMPORTED_MODULE_3__["ClistService"] }
];
CalenderPage.propDecorators = {
    myCal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ViewChild"], args: [ionic2_calendar__WEBPACK_IMPORTED_MODULE_6__["CalendarComponent"],] }]
};
CalenderPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"])({
        selector: 'app-calender',
        template: _raw_loader_calender_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_calender_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CalenderPage);



/***/ }),

/***/ "TVjl":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/calender/calender.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar class=\"myBackgroundColor\">\r\n    <ion-title color='light'>\r\n      Calendar\r\n    </ion-title>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button color='light' defaultHref=\"home\"></ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n\r\n  <ion-row>\r\n    <!-- Move back one screen of the slides -->\r\n    <ion-col size=\"2\">\r\n      <ion-button fill=\"clear\" (click)=\"back()\">\r\n        <ion-icon name=\"arrow-back\" slot=\"icon-only\"></ion-icon>\r\n      </ion-button>\r\n    </ion-col>\r\n\r\n    <ion-col size=\"8\" class=\"ion-text-center\">\r\n      <h2>{{ viewTitle }}</h2>\r\n    </ion-col>\r\n\r\n    <!-- Move forward one screen of the slides -->\r\n    <ion-col size=\"2\">\r\n      <ion-button fill=\"clear\" (click)=\"next()\">\r\n        <ion-icon name=\"arrow-forward\" slot=\"icon-only\"></ion-icon>\r\n      </ion-button>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <calendar\r\n    [eventSource]=\"eventSource\"\r\n    [calendarMode]=\"calendar.mode\"\r\n    [currentDate]=\"calendar.currentDate\"\r\n    (onTitleChanged)=\"onViewTitleChanged($event)\"\r\n    [startingDayWeek]=\"sdw\"\r\n    [monthviewDisplayEventTemplate]=\"template\"\r\n    locale= 'en-GB'\r\n    allDayLabel='Activity'\r\n    formatDayHeader='EEE'\r\n\r\n  >\r\n  </calendar>\r\n<ng-template #template let-view=\"view\" let-row=\"row\" let-col=\"col\">\r\n  <div [class.with-event]=\"view.dates[row*7+col].events.length\">\r\n    {{view.dates[row*7+col].label}}\r\n    <div class=\"indicator-container\">\r\n      <div class=\"event-indicator\" *ngFor=\"let e of view.dates[row*7+col].events\"></div>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n</ion-content>\r\n");

/***/ }),

/***/ "VLs4":
/*!****************************************************!*\
  !*** ./node_modules/@angular/common/locales/de.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
(function (factory) {
    if ( true && typeof module.exports === "object") {
        var v = factory(null, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // THIS CODE IS GENERATED - DO NOT MODIFY
    // See angular/tools/gulp-tasks/cldr/extract.js
    var u = undefined;
    function plural(n) {
        var i = Math.floor(Math.abs(n)), v = n.toString().replace(/^[^.]*\.?/, '').length;
        if (i === 1 && v === 0)
            return 1;
        return 5;
    }
    exports.default = [
        'de',
        [['AM', 'PM'], u, u],
        u,
        [
            ['S', 'M', 'D', 'M', 'D', 'F', 'S'], ['So.', 'Mo.', 'Di.', 'Mi.', 'Do.', 'Fr.', 'Sa.'],
            ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'],
            ['So.', 'Mo.', 'Di.', 'Mi.', 'Do.', 'Fr.', 'Sa.']
        ],
        [
            ['S', 'M', 'D', 'M', 'D', 'F', 'S'], ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'],
            ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'],
            ['So.', 'Mo.', 'Di.', 'Mi.', 'Do.', 'Fr.', 'Sa.']
        ],
        [
            ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
            [
                'Jan.', 'Feb.', 'März', 'Apr.', 'Mai', 'Juni', 'Juli', 'Aug.', 'Sept.', 'Okt.', 'Nov.', 'Dez.'
            ],
            [
                'Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober',
                'November', 'Dezember'
            ]
        ],
        [
            ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
            ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'],
            [
                'Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober',
                'November', 'Dezember'
            ]
        ],
        [['v. Chr.', 'n. Chr.'], u, u],
        1,
        [6, 0],
        ['dd.MM.yy', 'dd.MM.y', 'd. MMMM y', 'EEEE, d. MMMM y'],
        ['HH:mm', 'HH:mm:ss', 'HH:mm:ss z', 'HH:mm:ss zzzz'],
        ['{1}, {0}', u, '{1} \'um\' {0}', u],
        [',', '.', ';', '%', '+', '-', 'E', '·', '‰', '∞', 'NaN', ':'],
        ['#,##0.###', '#,##0 %', '#,##0.00 ¤', '#E0'],
        'EUR',
        '€',
        'Euro',
        {
            'ATS': ['öS'],
            'AUD': ['AU$', '$'],
            'BGM': ['BGK'],
            'BGO': ['BGJ'],
            'CUC': [u, 'Cub$'],
            'DEM': ['DM'],
            'FKP': [u, 'Fl£'],
            'GNF': [u, 'F.G.'],
            'KMF': [u, 'FC'],
            'RON': [u, 'L'],
            'RWF': [u, 'F.Rw'],
            'SYP': [],
            'THB': ['฿'],
            'TWD': ['NT$'],
            'XXX': [],
            'ZMW': [u, 'K']
        },
        'ltr',
        plural
    ];
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21tb24vbG9jYWxlcy9kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7OztJQUVILHlDQUF5QztJQUN6QywrQ0FBK0M7SUFFL0MsSUFBTSxDQUFDLEdBQUcsU0FBUyxDQUFDO0lBRXBCLFNBQVMsTUFBTSxDQUFDLENBQVM7UUFDdkIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUNsRixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7WUFBRSxPQUFPLENBQUMsQ0FBQztRQUNqQyxPQUFPLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFRCxrQkFBZTtRQUNiLElBQUk7UUFDSixDQUFDLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDcEIsQ0FBQztRQUNEO1lBQ0UsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQztZQUN0RixDQUFDLFNBQVMsRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLFNBQVMsQ0FBQztZQUNqRixDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxF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RSxNQUFNLENBQUM7WUFDbEIsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDO1lBQ2IsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQztZQUNqQixLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDO1lBQ2xCLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUM7WUFDaEIsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQztZQUNmLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUM7WUFDbEIsS0FBSyxFQUFFLEVBQUU7WUFDVCxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUM7WUFDWixLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFDZCxLQUFLLEVBQUUsRUFBRTtZQUNULEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUM7U0FDaEI7UUFDRCxLQUFLO1FBQ0wsTUFBTTtLQUNQLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuLy8gVEhJUyBDT0RFIElTIEdFTkVSQVRFRCAtIERPIE5PVCBNT0RJRllcbi8vIFNlZSBhbmd1bGFyL3Rvb2xzL2d1bHAtdGFza3MvY2xkci9leHRyYWN0LmpzXG5cbmNvbnN0IHUgPSB1bmRlZmluZWQ7XG5cbmZ1bmN0aW9uIHBsdXJhbChuOiBudW1iZXIpOiBudW1iZXIge1xuICBsZXQgaSA9IE1hdGguZmxvb3IoTWF0aC5hYnMobikpLCB2ID0gbi50b1N0cmluZygpLnJlcGxhY2UoL15bXi5dKlxcLj8vLCAnJykubGVuZ3RoO1xuICBpZiAoaSA9PT0gMSAmJiB2ID09PSAwKSByZXR1cm4gMTtcbiAgcmV0dXJuIDU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFtcbiAgJ2RlJyxcbiAgW1snQU0nLCAnUE0nXSwgdSwgdV0sXG4gIHUsXG4gIFtcbiAgICBbJ1MnLCAnTScsICdEJywgJ00nLCAnRCcsICdGJywgJ1MnXSwgWydTby4nLCAnTW8uJywgJ0RpLicsICdNaS4nLCAnRG8uJywgJ0ZyLicsICdTYS4nXSxcbiAgICBbJ1Nvbm50YWcnLCAnTW9udGFnJywgJ0RpZW5zdGFnJywgJ01pdHR3b2NoJywgJ0Rvbm5lcnN0YWcnLCAnRnJlaXRhZycsICdTYW1zdGFnJ10sXG4gICAgWydTby4nLCAnTW8uJywgJ0RpLicsICdNaS4nLCAnRG8uJywgJ0ZyLicsICdTYS4nXVxuICBdLFxuICBbXG4gICAgWydTJywgJ00nLCAnRCcsICdNJywgJ0QnLCAnRicsICdTJ10sIFsnU28nLCAnTW8nLCAnRGknLCAnTWknLCAnRG8nLCAnRnInLCAnU2EnXSxcbiAgICBbJ1Nvbm50YWcnLCAnTW9udGFnJywgJ0RpZW5zdGFnJywgJ01pdHR3b2NoJywgJ0Rvbm5lcnN0YWcnLCAnRnJlaXRhZycsICdTYW1zdGFnJ10sXG4gICAgWydTby4nLCAnTW8uJywgJ0RpLicsICdNaS4nLCAnRG8uJywgJ0ZyLicsICdTYS4nXVxuICBdLFxuICBbXG4gICAgWydKJywgJ0YnLCAnTScsICdBJywgJ00nLCAnSicsICdKJywgJ0EnLCAnUycsICdPJywgJ04nLCAnRCddLFxuICAgIFtcbiAgICAgICdKYW4uJywgJ0ZlYi4nLCAnTcOkcnonLCAnQXByLicsICdNYWknLCAnSnVuaScsICdKdWxpJywgJ0F1Zy4nLCAnU2VwdC4nLCAnT2t0LicsICdOb3YuJywgJ0Rlei4nXG4gICAgXSxcbiAgICBbXG4gICAgICAnSmFudWFyJywgJ0ZlYnJ1YXInLCAnTcOkcnonLCAnQXByaWwnLCAnTWFpJywgJ0p1bmknLCAnSnVsaScsICdBdWd1c3QnLCAnU2VwdGVtYmVyJywgJ09rdG9iZXInLFxuICAgICAgJ05vdmVtYmVyJywgJ0RlemVtYmVyJ1xuICAgIF1cbiAgXSxcbiAgW1xuICAgIFsnSicsICdGJywgJ00nLCAnQScsICdNJywgJ0onLCAnSicsICdBJywgJ1MnLCAnTycsICdOJywgJ0QnXSxcbiAgICBbJ0phbicsICdGZWInLCAnTcOkcicsICdBcHInLCAnTWFpJywgJ0p1bicsICdKdWwnLCAnQXVnJywgJ1NlcCcsICdPa3QnLCAnTm92JywgJ0RleiddLFxuICAgIFtcbiAgICAgICdKYW51YXInLCAnRmVicnVhcicsICdNw6RyeicsICdBcHJpbCcsICdNYWknLCAnSnVuaScsICdKdWxpJywgJ0F1Z3VzdCcsICdTZXB0ZW1iZXInLCAnT2t0b2JlcicsXG4gICAgICAnTm92ZW1iZXInLCAnRGV6ZW1iZXInXG4gICAgXVxuICBdLFxuICBbWyd2LiBDaHIuJywgJ24uIENoci4nXSwgdSwgdV0sXG4gIDEsXG4gIFs2LCAwXSxcbiAgWydkZC5NTS55eScsICdkZC5NTS55JywgJ2QuIE1NTU0geScsICdFRUVFLCBkLiBNTU1NIHknXSxcbiAgWydISDptbScsICdISDptbTpzcycsICdISDptbTpzcyB6JywgJ0hIOm1tOnNzIHp6enonXSxcbiAgWyd7MX0sIHswfScsIHUsICd7MX0gXFwndW1cXCcgezB9JywgdV0sXG4gIFsnLCcsICcuJywgJzsnLCAnJScsICcrJywgJy0nLCAnRScsICfCtycsICfigLAnLCAn4oieJywgJ05hTicsICc6J10sXG4gIFsnIywjIzAuIyMjJywgJyMsIyMwwqAlJywgJyMsIyMwLjAwwqDCpCcsICcjRTAnXSxcbiAgJ0VVUicsXG4gICfigqwnLFxuICAnRXVybycsXG4gIHtcbiAgICAnQVRTJzogWyfDtlMnXSxcbiAgICAnQVVEJzogWydBVSQnLCAnJCddLFxuICAgICdCR00nOiBbJ0JHSyddLFxuICAgICdCR08nOiBbJ0JHSiddLFxuICAgICdDVUMnOiBbdSwgJ0N1YiQnXSxcbiAgICAnREVNJzogWydETSddLFxuICAgICdGS1AnOiBbdSwgJ0ZswqMnXSxcbiAgICAnR05GJzogW3UsICdGLkcuJ10sXG4gICAgJ0tNRic6IFt1LCAnRkMnXSxcbiAgICAnUk9OJzogW3UsICdMJ10sXG4gICAgJ1JXRic6IFt1LCAnRi5SdyddLFxuICAgICdTWVAnOiBbXSxcbiAgICAnVEhCJzogWyfguL8nXSxcbiAgICAnVFdEJzogWydOVCQnXSxcbiAgICAnWFhYJzogW10sXG4gICAgJ1pNVyc6IFt1LCAnSyddXG4gIH0sXG4gICdsdHInLFxuICBwbHVyYWxcbl07XG4iXX0=

/***/ }),

/***/ "pVus":
/*!*****************************************************!*\
  !*** ./src/app/calender/calender-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: CalenderPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalenderPageRoutingModule", function() { return CalenderPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _calender_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./calender.page */ "8I4T");




const routes = [
    {
        path: '',
        component: _calender_page__WEBPACK_IMPORTED_MODULE_3__["CalenderPage"]
    }
];
let CalenderPageRoutingModule = class CalenderPageRoutingModule {
};
CalenderPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CalenderPageRoutingModule);



/***/ }),

/***/ "q3QB":
/*!*********************************************!*\
  !*** ./src/app/calender/calender.module.ts ***!
  \*********************************************/
/*! exports provided: CalenderPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalenderPageModule", function() { return CalenderPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _calender_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./calender-routing.module */ "pVus");
/* harmony import */ var _calender_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./calender.page */ "8I4T");
/* harmony import */ var ionic2_calendar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ionic2-calendar */ "L+Ny");
/* harmony import */ var _calender_modal_calender_modal_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../calender-modal/calender-modal.module */ "ooPm");
/* harmony import */ var _angular_common_locales_de__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/locales/de */ "VLs4");
/* harmony import */ var _angular_common_locales_de__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_de__WEBPACK_IMPORTED_MODULE_9__);











Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["registerLocaleData"])(_angular_common_locales_de__WEBPACK_IMPORTED_MODULE_9___default.a);
let CalenderPageModule = class CalenderPageModule {
};
CalenderPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _calender_routing_module__WEBPACK_IMPORTED_MODULE_5__["CalenderPageRoutingModule"],
            ionic2_calendar__WEBPACK_IMPORTED_MODULE_7__["NgCalendarModule"],
            _calender_modal_calender_modal_module__WEBPACK_IMPORTED_MODULE_8__["CalenderModalPageModule"]
        ],
        declarations: [_calender_page__WEBPACK_IMPORTED_MODULE_6__["CalenderPage"]],
        providers: [
            { provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"], useValue: 'de-DE' }
        ]
    })
], CalenderPageModule);



/***/ })

}]);
//# sourceMappingURL=calender-calender-module.js.map