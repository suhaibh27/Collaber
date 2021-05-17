(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["plan-form-plan-form-module"],{

/***/ "5jMB":
/*!***********************************************!*\
  !*** ./src/app/plan-form/plan-form.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwbGFuLWZvcm0ucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "7mmP":
/*!*******************************************************!*\
  !*** ./src/app/plan-form/plan-form-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: PlanFormPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanFormPageRoutingModule", function() { return PlanFormPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _plan_form_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./plan-form.page */ "lV3a");




const routes = [
    {
        path: '',
        component: _plan_form_page__WEBPACK_IMPORTED_MODULE_3__["PlanFormPage"]
    }
];
let PlanFormPageRoutingModule = class PlanFormPageRoutingModule {
};
PlanFormPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PlanFormPageRoutingModule);



/***/ }),

/***/ "czMz":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/plan-form/plan-form.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class='myBackgroundColor'>\n    <ion-title color='light'>New Plan</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button color='light' defaultHref=\"home\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-item >\n    <ion-label color='dark' style=\"font-size: x-large; \" position='stacked'>Title</ion-label><br>\n    <ion-input [(ngModel)]='title' color='dark' placeholder='Your plan name'></ion-input>\n    <ion-text *ngIf=\"error\" color='danger'><ion-icon color='danger' name=\"alert-circle-outline\"></ion-icon>Please fill give the plan a title</ion-text>\n  </ion-item>\n  <ion-item-divider></ion-item-divider>\n  <ion-item>\n    <ion-label style=\"font-size: x-large;\" position='stacked'>Description</ion-label><br>\n    <ion-textarea [(ngModel)]='description' placeholder='what is it about?'></ion-textarea>\n  </ion-item>\n  <div class=\"ion-margin\" style=\"text-align-last: center;\">\n    <ion-button (click)='create()'>Create</ion-button>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "lV3a":
/*!*********************************************!*\
  !*** ./src/app/plan-form/plan-form.page.ts ***!
  \*********************************************/
/*! exports provided: PlanFormPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanFormPage", function() { return PlanFormPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_plan_form_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./plan-form.page.html */ "czMz");
/* harmony import */ var _plan_form_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./plan-form.page.scss */ "5jMB");
/* harmony import */ var _plan_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../plan.service */ "Kddg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






let PlanFormPage = class PlanFormPage {
    constructor(router, planSrv, activatedRoute) {
        this.router = router;
        this.planSrv = planSrv;
        this.activatedRoute = activatedRoute;
        this.title = '';
        this.description = '';
        this.error = false;
        this.id = this.activatedRoute.snapshot.paramMap.get('id');
    }
    ngOnInit() {
    }
    create() {
        if (this.title.length <= 0) {
            this.error = true;
        }
        else {
            this.planSrv.createPlan(this.title, this.description, this.id).then(res => { this.router.navigateByUrl('task/' + res.id); });
        }
    }
};
PlanFormPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _plan_service__WEBPACK_IMPORTED_MODULE_3__["PlanService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
PlanFormPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-plan-form',
        template: _raw_loader_plan_form_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_plan_form_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PlanFormPage);



/***/ }),

/***/ "xSYo":
/*!***********************************************!*\
  !*** ./src/app/plan-form/plan-form.module.ts ***!
  \***********************************************/
/*! exports provided: PlanFormPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanFormPageModule", function() { return PlanFormPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _plan_form_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./plan-form-routing.module */ "7mmP");
/* harmony import */ var _plan_form_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./plan-form.page */ "lV3a");







let PlanFormPageModule = class PlanFormPageModule {
};
PlanFormPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _plan_form_routing_module__WEBPACK_IMPORTED_MODULE_5__["PlanFormPageRoutingModule"]
        ],
        declarations: [_plan_form_page__WEBPACK_IMPORTED_MODULE_6__["PlanFormPage"]]
    })
], PlanFormPageModule);



/***/ })

}]);
//# sourceMappingURL=plan-form-plan-form-module.js.map