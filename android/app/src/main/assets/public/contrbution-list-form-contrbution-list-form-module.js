(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contrbution-list-form-contrbution-list-form-module"],{

/***/ "L2gK":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contrbution-list-form/contrbution-list-form.page.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"myBackgroundColor\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button color='light' defaultHref=\"home\"></ion-back-button>\n    </ion-buttons>\n    <ion-title color='light'>contrbution-list-form</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-item>\n    <ion-label class='mlables' position='stacked'>Title*</ion-label>\n   <ion-input placeholder=\"Your list Title\" style=\"--padding-start: 10px;\" minlength=3 [(ngModel)]='title'></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label class='mlables' position='stacked'>Description</ion-label>\n    <ion-textarea placeholder=\"details of your list(optional)\" style=\"--padding-start: 10px;\"  [(ngModel)]='description' rows='4' cols='40'></ion-textarea>\n  </ion-item>\n\n  <ion-item>\n    <ion-label class='mlables' position='stacked'>Location</ion-label>\n    <ion-input placeholder=\"where the event will happen\" style=\"--padding-start: 10px;\"  [(ngModel)]='loc'></ion-input>\n  </ion-item>\n\n  <ion-item class=\"ion-align-items-center\">\n    <ion-label class='mlables' position='stacked'>Location link </ion-label>\n    <ion-input placeholder=\"link users to follow and get the location(optional)\" style=\"--padding-start: 10px;\"  [(ngModel)]='locLink'></ion-input>\n    <ion-button class=\"ion-margin\" class='primary'><a style=\"color: white;\" href=\"https://www.google.com/maps\">google maps</a><ion-icon color=\"light\" name=\"map-outline\"></ion-icon></ion-button>\n  </ion-item>\n<ion-item lines='none'>\n  <ion-label class='mlables class=\"ion-no-margin\"' position=\"stacked\">\n    Date & Time\n  </ion-label>\n</ion-item>\n  <ion-item class=\"ion-no-margin\">\n    <ion-button fill='clear' class=\"mpickers\">\n      <ion-icon class=\"mMargin-bottom\" name=\"calendar-outline\"></ion-icon>\n      <ion-datetime [(ngModel)]=\"date\"  class=\"ion-margin\"></ion-datetime>\n    </ion-button>\n    <ion-button fill='clear' class=\"mpickers\">\n      <ion-icon class=\"mMargin-bottom ion-margin-start\" name=\"time-outline\"></ion-icon>\n      <ion-datetime class=\"ion-margin\" display-format=\"h:mm A\" picker-format=\"h:mm A\" [(ngModel)]=\"date\"></ion-datetime>\n    </ion-button>\n  </ion-item>\n\n  <ion-button  (click)='save()' expand='block'>Save</ion-button>\n\n</ion-content>\n");

/***/ }),

/***/ "ZAZ/":
/*!*******************************************************************************!*\
  !*** ./src/app/contrbution-list-form/contrbution-list-form-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: ContrbutionListFormPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContrbutionListFormPageRoutingModule", function() { return ContrbutionListFormPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _contrbution_list_form_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contrbution-list-form.page */ "v3UL");




const routes = [
    {
        path: '',
        component: _contrbution_list_form_page__WEBPACK_IMPORTED_MODULE_3__["ContrbutionListFormPage"]
    }
];
let ContrbutionListFormPageRoutingModule = class ContrbutionListFormPageRoutingModule {
};
ContrbutionListFormPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ContrbutionListFormPageRoutingModule);



/***/ }),

/***/ "ZiDI":
/*!***********************************************************************!*\
  !*** ./src/app/contrbution-list-form/contrbution-list-form.module.ts ***!
  \***********************************************************************/
/*! exports provided: ContrbutionListFormPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContrbutionListFormPageModule", function() { return ContrbutionListFormPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _contrbution_list_form_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contrbution-list-form-routing.module */ "ZAZ/");
/* harmony import */ var _contrbution_list_form_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contrbution-list-form.page */ "v3UL");







let ContrbutionListFormPageModule = class ContrbutionListFormPageModule {
};
ContrbutionListFormPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _contrbution_list_form_routing_module__WEBPACK_IMPORTED_MODULE_5__["ContrbutionListFormPageRoutingModule"]
        ],
        declarations: [_contrbution_list_form_page__WEBPACK_IMPORTED_MODULE_6__["ContrbutionListFormPage"]]
    })
], ContrbutionListFormPageModule);



/***/ }),

/***/ "hfhN":
/*!***********************************************************************!*\
  !*** ./src/app/contrbution-list-form/contrbution-list-form.page.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-input, ion-textarea {\n  margin-top: 16px;\n  width: 100%;\n}\n\n.mpickers {\n  width: 100%;\n  height: 100%;\n  font-size: large;\n  color: #000;\n}\n\n.mlables {\n  font-size: x-large;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNvbnRyYnV0aW9uLWxpc3QtZm9ybS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztBQUNiOztBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWCxnQkFDTTtFQUNQLFdBQVc7QUFDYjs7QUFDQTtFQUFTLGtCQUFpQjtBQUcxQiIsImZpbGUiOiJjb250cmJ1dGlvbi1saXN0LWZvcm0ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWlucHV0LCBpb24tdGV4dGFyZWF7XHJcbiAgbWFyZ2luLXRvcDogMTZweDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4ubXBpY2tlcnN7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gICBmb250LXNpemU6XHJcbiAgICBsYXJnZTtcclxuICBjb2xvcjogIzAwMDtcclxufVxyXG4ubWxhYmxlc3tmb250LXNpemU6eC1sYXJnZTt9XHJcbiJdfQ== */");

/***/ }),

/***/ "v3UL":
/*!*********************************************************************!*\
  !*** ./src/app/contrbution-list-form/contrbution-list-form.page.ts ***!
  \*********************************************************************/
/*! exports provided: ContrbutionListFormPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContrbutionListFormPage", function() { return ContrbutionListFormPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_contrbution_list_form_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./contrbution-list-form.page.html */ "L2gK");
/* harmony import */ var _contrbution_list_form_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contrbution-list-form.page.scss */ "hfhN");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _clist_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../clist.service */ "wp6f");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");







let ContrbutionListFormPage = class ContrbutionListFormPage {
    constructor(clSrv, router, navCtrl) {
        this.clSrv = clSrv;
        this.router = router;
        this.navCtrl = navCtrl;
        this.title = '';
        this.description = '';
        this.loc = '';
        this.locLink = '';
        this.date = new Date().toISOString();
    }
    ngOnInit() {
    }
    save() {
        this.clSrv.createList(this.title, this.description, this.loc, this.locLink, this.date, 'kiLFwJTBSq0yA3OZk8qU');
        this.navCtrl.back();
    }
};
ContrbutionListFormPage.ctorParameters = () => [
    { type: _clist_service__WEBPACK_IMPORTED_MODULE_4__["ClistService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] }
];
ContrbutionListFormPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-contrbution-list-form',
        template: _raw_loader_contrbution_list_form_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_contrbution_list_form_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ContrbutionListFormPage);



/***/ })

}]);
//# sourceMappingURL=contrbution-list-form-contrbution-list-form-module.js.map