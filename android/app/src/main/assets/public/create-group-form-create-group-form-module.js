(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["create-group-form-create-group-form-module"],{

/***/ "G+hu":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/create-group-form/create-group-form.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class='myBackgroundColor'>\n    <ion-buttons slot=\"end\" >\n      <ion-back-button color=light icon='close' defaultHref=\"home\"></ion-back-button>\n    </ion-buttons>\n    <ion-title color='light'>Collaber</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-item>\n    <h1>Create Group</h1> <br>\n  </ion-item>\n  <ion-item style=\"--border-color: white;\">\n    <ion-label class=\"ion-margin\">First add the users you want to the group</ion-label>\n  </ion-item>\n  <ion-searchbar placeholder=\"Username\" (ionInput)=\"searchUsers($event)\"></ion-searchbar>\n  <ion-row *ngFor=\"let user of users\" >\n    <ion-item-divider class='divider'>\n    <ion-col size='3' >\n      <ion-avatar><ion-img src=\"..\\..\\assets\\icon\\logo.jpeg\"></ion-img>\n      </ion-avatar>\n    </ion-col>\n    <ion-col size='7'><h3>{{user.username}}</h3></ion-col>\n    <ion-col>\n      <ion-button fill=outline (click)='addUser(user.username)'>\n        <ion-icon name='add'></ion-icon>\n      </ion-button>\n    </ion-col>\n  </ion-item-divider>\n  </ion-row>\n  <ion-item>\n    <h3>Added Users</h3> <br>\n  </ion-item>\n  <ion-row *ngFor=\"let user of addeddUsers; let i=index\" >\n    <ion-item-divider class='divider'>\n    <ion-col size='3' >\n      <ion-avatar><ion-img src=\"..\\..\\assets\\icon\\logo.jpeg\"></ion-img>\n      </ion-avatar>\n    </ion-col>\n    <ion-col size='7'><h3>{{user}}</h3></ion-col>\n    <ion-col>\n      <ion-button color='danger' fill=outline (click)='removeUser(i)'>\n        <ion-icon name='remove'></ion-icon>\n      </ion-button>\n    </ion-col>\n  </ion-item-divider>\n  </ion-row>\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button>\n      <ion-icon (click)='nextPage()' name=\"arrow-forward\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>\n");

/***/ }),

/***/ "QMKJ":
/*!*************************************************************!*\
  !*** ./src/app/create-group-form/create-group-form.page.ts ***!
  \*************************************************************/
/*! exports provided: CreateGroupFormPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateGroupFormPage", function() { return CreateGroupFormPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_create_group_form_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./create-group-form.page.html */ "G+hu");
/* harmony import */ var _create_group_form_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-group-form.page.scss */ "d/dR");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../users.service */ "U0XV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");



/* eslint-disable eqeqeq */

/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable prefer-const */
/* eslint-disable arrow-body-style */



let CreateGroupFormPage = class CreateGroupFormPage {
    constructor(loadingController, usersSrv, toastController, router) {
        this.loadingController = loadingController;
        this.usersSrv = usersSrv;
        this.toastController = toastController;
        this.router = router;
        this.users = [];
        this.addeddUsers = [];
        this.load = 0;
    }
    ngOnInit() {
    }
    searchUsers(e) {
        this.users = [];
        let v = e.target.value;
        if (v.length > 0) {
            if (this.load == 0) {
                this.presentLoading();
                this.load = 1;
            }
            this.usersSrv.searchUser(v).subscribe(res => {
                this.users = [];
                res.docs.forEach(u => this.users.push(u.data()));
                this.loadingController.dismiss();
                this.load = 0;
            });
        }
    }
    presentLoading() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                cssClass: 'loading',
                spinner: 'circles',
                keyboardClose: false,
                duration: 2000
            });
            yield loading.present();
            const { role, data } = yield loading.onDidDismiss();
            console.log('Loading dismissed!');
        });
    }
    addUser(username) {
        if (this.addeddUsers.includes(username)) {
            this.presentRedunduntToast();
        }
        else {
            this.addeddUsers.push(username);
        }
        console.log(this.addeddUsers);
    }
    removeUser(index) {
        this.addeddUsers.splice(index, index + 1);
        console.log(this.addeddUsers);
    }
    presentRedunduntToast() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'User is already added',
                duration: 2000
            });
            toast.present();
        });
    }
    nextPage() {
        this.router.navigateByUrl('/create-group-next/' + JSON.stringify(this.addeddUsers));
    }
};
CreateGroupFormPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"] },
    { type: _users_service__WEBPACK_IMPORTED_MODULE_4__["UsersService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
CreateGroupFormPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-create-group-form',
        template: _raw_loader_create_group_form_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_create_group_form_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CreateGroupFormPage);



/***/ }),

/***/ "SmK0":
/*!***************************************************************!*\
  !*** ./src/app/create-group-form/create-group-form.module.ts ***!
  \***************************************************************/
/*! exports provided: CreateGroupFormPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateGroupFormPageModule", function() { return CreateGroupFormPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _create_group_form_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./create-group-form-routing.module */ "osKB");
/* harmony import */ var _create_group_form_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./create-group-form.page */ "QMKJ");







let CreateGroupFormPageModule = class CreateGroupFormPageModule {
};
CreateGroupFormPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _create_group_form_routing_module__WEBPACK_IMPORTED_MODULE_5__["CreateGroupFormPageRoutingModule"]
        ],
        declarations: [_create_group_form_page__WEBPACK_IMPORTED_MODULE_6__["CreateGroupFormPage"]]
    })
], CreateGroupFormPageModule);



/***/ }),

/***/ "d/dR":
/*!***************************************************************!*\
  !*** ./src/app/create-group-form/create-group-form.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhdGUtZ3JvdXAtZm9ybS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "osKB":
/*!***********************************************************************!*\
  !*** ./src/app/create-group-form/create-group-form-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: CreateGroupFormPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateGroupFormPageRoutingModule", function() { return CreateGroupFormPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _create_group_form_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create-group-form.page */ "QMKJ");




const routes = [
    {
        path: '',
        component: _create_group_form_page__WEBPACK_IMPORTED_MODULE_3__["CreateGroupFormPage"]
    }
];
let CreateGroupFormPageRoutingModule = class CreateGroupFormPageRoutingModule {
};
CreateGroupFormPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CreateGroupFormPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=create-group-form-create-group-form-module.js.map