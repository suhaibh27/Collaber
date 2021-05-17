(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["create-group-next-create-group-next-module"],{

/***/ "A/VS":
/*!*************************************************************!*\
  !*** ./src/app/create-group-next/create-group-next.page.ts ***!
  \*************************************************************/
/*! exports provided: CreateGroupNextPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateGroupNextPage", function() { return CreateGroupNextPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_create_group_next_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./create-group-next.page.html */ "Dcif");
/* harmony import */ var _create_group_next_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-group-next.page.scss */ "Hxdn");
/* harmony import */ var _groups_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../groups-service.service */ "QLx/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");



/* eslint-disable @typescript-eslint/type-annotation-spacing */
/* eslint-disable max-len */




let CreateGroupNextPage = class CreateGroupNextPage {
    constructor(alertController, activatedRoute, groupSrv, router) {
        this.alertController = alertController;
        this.activatedRoute = activatedRoute;
        this.groupSrv = groupSrv;
        this.router = router;
        this.privacy = false;
        this.desc = '';
    }
    ngOnInit() {
        this.users = JSON.parse(this.activatedRoute.snapshot.paramMap.get('users'));
        console.log(this.users);
    }
    createGroup() {
        this.presentAlertConfirm();
    }
    presentAlertConfirm() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Confirm!',
                message: 'Are you sure you want to create this group ',
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
                            this.groupSrv.addGroupUsers(this.users, this.name, this.privacy, this.desc);
                            this.router.navigateByUrl('/home');
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
CreateGroupNextPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _groups_service_service__WEBPACK_IMPORTED_MODULE_3__["GroupsServiceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
CreateGroupNextPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-create-group-next',
        template: _raw_loader_create_group_next_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_create_group_next_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CreateGroupNextPage);



/***/ }),

/***/ "Dcif":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/create-group-next/create-group-next.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class='myBackgroundColor'>\n    <ion-buttons slot=\"start\">\n      <ion-back-button color='light' defaultHref=\"home\"></ion-back-button>\n    </ion-buttons>\n    <ion-title color='light'>Collaber</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-item>\n    <h1>Create Group</h1> <br>\n  </ion-item>\n  <ion-item style=\"--border-color: white;\">\n    <ion-label class=\"ion-margin\">Finaly your group details</ion-label>\n  </ion-item>\n  <ion-card style=\"text-align: -webkit-center;\">\n    <ion-img style=\"width:'280px'; height:'280px'\" src=\"..\\..\\assets\\icon\\logo.jpeg\"></ion-img>\n    <ion-card-header>\n      <ion-input [(ngModel)]='name' placeholder='Group Name' color='dark' style=\"font-size: 26px !important;\"></ion-input>\n    </ion-card-header>\n    <ion-card-content style=\"padding: 0px;\">\n      <ion-item>\n        <ion-textarea [(ngModel)]='desc' placeholder='Description'>\n\n        </ion-textarea>\n      </ion-item>\n      <ion-item>\n          <ion-label class=\"ion-margin-end\" style='max-inline-size: fit-content;'>Privacy</ion-label>\n          <ion-toggle class='ion-margin-end' [(ngModel)]='privacy'></ion-toggle>\n          <div *ngIf=\"privacy\">\n            <ion-label class=\"ion-margin-right\">\n              Private\n            </ion-label>\n            <span style=\"font-size: small;\">(not visible to outsiders)</span>\n          </div>\n          <div *ngIf=\"!privacy\">\n            <ion-label>\n              Public\n            </ion-label>\n            <span style=\"font-size: small;\">(visible to outsiders)</span>\n          </div>\n        </ion-item>\n    </ion-card-content>\n    <div style=\"text-align-last: center;\">\n      <ion-button (click)=\"createGroup()\">Create</ion-button>\n    </div>\n  </ion-card>\n</ion-content>\n");

/***/ }),

/***/ "Hxdn":
/*!***************************************************************!*\
  !*** ./src/app/create-group-next/create-group-next.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhdGUtZ3JvdXAtbmV4dC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "aW9F":
/*!***************************************************************!*\
  !*** ./src/app/create-group-next/create-group-next.module.ts ***!
  \***************************************************************/
/*! exports provided: CreateGroupNextPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateGroupNextPageModule", function() { return CreateGroupNextPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _create_group_next_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./create-group-next-routing.module */ "u1yr");
/* harmony import */ var _create_group_next_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./create-group-next.page */ "A/VS");







let CreateGroupNextPageModule = class CreateGroupNextPageModule {
};
CreateGroupNextPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _create_group_next_routing_module__WEBPACK_IMPORTED_MODULE_5__["CreateGroupNextPageRoutingModule"]
        ],
        declarations: [_create_group_next_page__WEBPACK_IMPORTED_MODULE_6__["CreateGroupNextPage"]]
    })
], CreateGroupNextPageModule);



/***/ }),

/***/ "u1yr":
/*!***********************************************************************!*\
  !*** ./src/app/create-group-next/create-group-next-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: CreateGroupNextPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateGroupNextPageRoutingModule", function() { return CreateGroupNextPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _create_group_next_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create-group-next.page */ "A/VS");




const routes = [
    {
        path: '',
        component: _create_group_next_page__WEBPACK_IMPORTED_MODULE_3__["CreateGroupNextPage"]
    }
];
let CreateGroupNextPageRoutingModule = class CreateGroupNextPageRoutingModule {
};
CreateGroupNextPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CreateGroupNextPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=create-group-next-create-group-next-module.js.map