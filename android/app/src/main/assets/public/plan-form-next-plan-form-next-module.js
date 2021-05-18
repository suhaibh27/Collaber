(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["plan-form-next-plan-form-next-module"],{

/***/ "3mk4":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/plan-form-next/plan-form-next.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar class='myBackgroundColor'>\r\n    <ion-title color='light'>Add a task</ion-title>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button color='light' defaultHref=\"home\"></ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-content>\r\n    <ion-list>\r\n      <ion-item>\r\n        <ion-label position='stacked' style=\"font-size: x-large;\">Title</ion-label>\r\n        <ion-input [(ngModel)]=\"title\"></ion-input>\r\n        <ion-text *ngIf=\"error\"  color='danger'><ion-icon color='danger' name=\"alert-circle-outline\"></ion-icon>Please fill the Title</ion-text>\r\n      </ion-item>\r\n      <br>\r\n      <ion-item>\r\n        <ion-label position='stacked' style=\"font-size: x-large;\">Description</ion-label>\r\n        <ion-textarea [(ngModel)]=\"desc\"></ion-textarea>\r\n      </ion-item><br>\r\n      <ion-item>\r\n        <ion-label class=\"ion-margin\" position='stacked' style=\"font-size: x-large;\" >Due Date <ion-icon name=\"calendar-outline\"></ion-icon></ion-label>\r\n        <ion-datetime class=\"ion-margin\" placeholder=\"Select Date\" [(ngModel)]=\"date\" ></ion-datetime>\r\n        <ion-datetime placeholder='Select Time' class=\"ion-margin\" display-format=\"h:mm A\" picker-format=\"h:mm A\" [(ngModel)]=\"date\"></ion-datetime>\r\n\r\n      </ion-item>\r\n\r\n    </ion-list>\r\n\r\n    <ion-card id=\"subtaskcard\" *ngFor=\"let item of list; let i=index\">\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col size=\"1\"></ion-col>\r\n          <ion-col size=\"7\"> <ion-input style=\"font-size: large;\" placeholder=\"Sub task Name\" [disabled]=\"list[i].dis\" [(ngModel)]=\"list[i].title\"></ion-input></ion-col>\r\n          <ion-col size=\"2\">\r\n            <ion-button fill=\"none\" (click)=\"done(i)\" ><ion-icon name=\"checkmark-outline\" color=\"success\" ></ion-icon></ion-button></ion-col>\r\n          <ion-col size=\"2\" *ngIf=\"list[i].dis==false\">\r\n            <ion-button fill=\"none\" (click)=\"del(i)\"><ion-icon name=\"trash-outline\" color=\"danger\"></ion-icon></ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-card >\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col size=\"3\">\r\n        </ion-col>\r\n        <ion-col style='text-align-last: center;' size=\"4\" id=\"col\">  <ion-button color=\"medium\" fill=\"outline\"  shape=\"round\" (click)=\"add()\">add a subtask <ion-icon name=\"add-outline\"></ion-icon></ion-button></ion-col>\r\n        <ion-col size=\"4\"></ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n\r\n    <ion-button expand=\"block\" color=\"medium\" (click)=\"sav()\">Save Task!</ion-button>\r\n\r\n    </ion-content>\r\n</ion-content>\r\n");

/***/ }),

/***/ "RdFD":
/*!*******************************************************!*\
  !*** ./src/app/plan-form-next/plan-form-next.page.ts ***!
  \*******************************************************/
/*! exports provided: PlanFormNextPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanFormNextPage", function() { return PlanFormNextPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_plan_form_next_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./plan-form-next.page.html */ "3mk4");
/* harmony import */ var _plan_form_next_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./plan-form-next.page.scss */ "nhRH");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _tasks_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../tasks.service */ "0KrY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");




/* eslint-disable id-blacklist */

/* eslint-disable prefer-const */


/* eslint-disable @typescript-eslint/type-annotation-spacing */
/* eslint-disable @typescript-eslint/member-delimiter-style */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable @typescript-eslint/member-ordering */

let PlanFormNextPage = class PlanFormNextPage {
    constructor(alertController, router, taskSrv, activatedRoute) {
        this.alertController = alertController;
        this.router = router;
        this.taskSrv = taskSrv;
        this.activatedRoute = activatedRoute;
        this.list = [];
        this.array = [];
        this.subtask = "";
        this.dis = false;
        this.title = '';
        this.date = new Date();
        this.desc = '';
        this.error = false;
    }
    ngOnInit() {
    }
    add() {
        this.list.push({ title: this.subtask, dis: false });
    }
    del(index) {
        this.list.splice(index, 1);
    }
    done(index) {
        this.list[index].dis = true;
    }
    presentAlertConfirm() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Confirm!',
                message: 'Are you sure you want to create this task',
                buttons: [
                    {
                        text: 'No',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                        }
                    }, {
                        text: 'Yes',
                        handler: () => {
                            this.create();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    sav() {
        this.error = false;
        if (this.title.length <= 0) {
            this.error = true;
            return;
        }
        this.presentAlertConfirm();
    }
    create() {
        //Add for validation .. i didnt know how to do it :)
        let id = this.activatedRoute.snapshot.paramMap.get('id');
        this.array.push({ title: this.capitalizeFirstLetter(this.title), dueDate: this.date, subtasks: this.list });
        this.taskSrv.addTask(id, this.title, this.date, this.desc, this.list).then(res => {
            {
                for (let i = 0; i < this.list.length; i++) {
                    this.taskSrv.addStep(this.list[i].title, res.id, i);
                }
                this.router.navigateByUrl('task-details/' + res.id);
            }
        });
    }
    capitalizeFirstLetter(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
};
PlanFormNextPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _tasks_service__WEBPACK_IMPORTED_MODULE_5__["TasksService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
PlanFormNextPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: 'app-plan-form-next',
        template: _raw_loader_plan_form_next_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_plan_form_next_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PlanFormNextPage);



/***/ }),

/***/ "nhRH":
/*!*********************************************************!*\
  !*** ./src/app/plan-form-next/plan-form-next.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwbGFuLWZvcm0tbmV4dC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "rWFe":
/*!*********************************************************!*\
  !*** ./src/app/plan-form-next/plan-form-next.module.ts ***!
  \*********************************************************/
/*! exports provided: PlanFormNextPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanFormNextPageModule", function() { return PlanFormNextPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _plan_form_next_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./plan-form-next-routing.module */ "zzeC");
/* harmony import */ var _plan_form_next_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./plan-form-next.page */ "RdFD");







let PlanFormNextPageModule = class PlanFormNextPageModule {
};
PlanFormNextPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _plan_form_next_routing_module__WEBPACK_IMPORTED_MODULE_5__["PlanFormNextPageRoutingModule"]
        ],
        declarations: [_plan_form_next_page__WEBPACK_IMPORTED_MODULE_6__["PlanFormNextPage"]]
    })
], PlanFormNextPageModule);



/***/ }),

/***/ "zzeC":
/*!*****************************************************************!*\
  !*** ./src/app/plan-form-next/plan-form-next-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: PlanFormNextPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanFormNextPageRoutingModule", function() { return PlanFormNextPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _plan_form_next_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./plan-form-next.page */ "RdFD");




const routes = [
    {
        path: '',
        component: _plan_form_next_page__WEBPACK_IMPORTED_MODULE_3__["PlanFormNextPage"]
    }
];
let PlanFormNextPageRoutingModule = class PlanFormNextPageRoutingModule {
};
PlanFormNextPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PlanFormNextPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=plan-form-next-plan-form-next-module.js.map