(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-form-profile-form-module"],{

/***/ "MW/H":
/*!*************************************************************!*\
  !*** ./src/app/profile-form/profile-form-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: ProfileFormPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileFormPageRoutingModule", function() { return ProfileFormPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _profile_form_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile-form.page */ "dYJB");




const routes = [
    {
        path: '',
        component: _profile_form_page__WEBPACK_IMPORTED_MODULE_3__["ProfileFormPage"]
    }
];
let ProfileFormPageRoutingModule = class ProfileFormPageRoutingModule {
};
ProfileFormPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProfileFormPageRoutingModule);



/***/ }),

/***/ "Usns":
/*!*****************************************************!*\
  !*** ./src/app/profile-form/profile-form.module.ts ***!
  \*****************************************************/
/*! exports provided: ProfileFormPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileFormPageModule", function() { return ProfileFormPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _profile_form_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile-form-routing.module */ "MW/H");
/* harmony import */ var _profile_form_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile-form.page */ "dYJB");







let ProfileFormPageModule = class ProfileFormPageModule {
};
ProfileFormPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _profile_form_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfileFormPageRoutingModule"]
        ],
        declarations: [_profile_form_page__WEBPACK_IMPORTED_MODULE_6__["ProfileFormPage"]]
    })
], ProfileFormPageModule);



/***/ }),

/***/ "Yhlb":
/*!*****************************************************!*\
  !*** ./src/app/profile-form/profile-form.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  position: relative;\n  height: 100%;\n  width: 100%;\n  --background:#eff7fc !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHByb2ZpbGUtZm9ybS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVc7RUFDWCwrQkFBYTtBQUNmIiwiZmlsZSI6InByb2ZpbGUtZm9ybS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICAtLWJhY2tncm91bmQ6I2VmZjdmYyAhaW1wb3J0YW50O1xyXG5cclxufVxyXG4iXX0= */");

/***/ }),

/***/ "dYJB":
/*!***************************************************!*\
  !*** ./src/app/profile-form/profile-form.page.ts ***!
  \***************************************************/
/*! exports provided: ProfileFormPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileFormPage", function() { return ProfileFormPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_profile_form_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./profile-form.page.html */ "ehpG");
/* harmony import */ var _profile_form_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile-form.page.scss */ "Yhlb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../users.service */ "U0XV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");



/* eslint-disable prefer-const */

/* eslint-disable no-var */
/* eslint-disable eqeqeq */



/* eslint-disable @typescript-eslint/naming-convention */

let ProfileFormPage = class ProfileFormPage {
    constructor(router, alertController, userSrv, activatedRoute, loadingController) {
        this.router = router;
        this.alertController = alertController;
        this.userSrv = userSrv;
        this.activatedRoute = activatedRoute;
        this.loadingController = loadingController;
        this.error = '';
        this.user = { username: '', Name: '', email: '', phoneNumber: '', userID: '' };
        this.presentLoading();
        this.id = this.activatedRoute.snapshot.paramMap.get('id');
        this.userSrv.getUserbyID(this.id).get().subscribe(res => {
            this.us = res.data();
            this.user = this.us;
            this.oldName = this.us.username;
            this.loadingController.dismiss();
        });
    }
    ngOnInit() {
    }
    presentLoading() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                cssClass: 'my-custom-class',
                message: 'Please wait...',
            });
            yield loading.present();
        });
    }
    save() {
        this.error = '';
        var mUser;
        this.userSrv.checkDuplicate().subscribe(res => {
            let found = false;
            res.forEach(user => {
                mUser = user.data();
                if (this.oldName != this.user.username) {
                    if (mUser.username.toLowerCase() == this.user.username.toLowerCase()) {
                        this.error = 'username is already taken';
                        found = true;
                    }
                }
                ;
            });
            if (!found) {
                this.presentAlertConfirm();
            }
        });
    }
    saveEdit() {
        this.presentLoading();
        this.userSrv.updateUser(this.id, this.user).then(() => {
            this.loadingController.dismiss();
            alert('Your profile information have been updated');
            this.router.navigateByUrl('profile/' + this.id);
        }).catch(er => alert(er.message));
    }
    presentAlertConfirm() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Confirm!',
                message: 'Are you sure you want to save your informations',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                        }
                    }, {
                        text: 'Yes',
                        handler: () => {
                            this.saveEdit();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
ProfileFormPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _users_service__WEBPACK_IMPORTED_MODULE_4__["UsersService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] }
];
ProfileFormPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: 'app-profile-form',
        template: _raw_loader_profile_form_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_profile_form_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ProfileFormPage);



/***/ }),

/***/ "ehpG":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile-form/profile-form.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"myBackgroundColor\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button color='light' defaultHref=\"home\"></ion-back-button>\n    </ion-buttons>\n    <ion-title color='light'>Edit Profile</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content >\n  <ion-card style=\"margin-top: 15%;\">\n    <div style=\"text-align: -webkit-center;\">\n      <img width=\"244\" height=\"244\" src=\"..\\..\\assets\\icon\\logo.jpeg\"/>\n      <ion-icon size='large' name=\"create-outline\"></ion-icon>\n    </div>\n    <ion-card-header>\n      <ion-item>\n        <ion-label position='stacked'>Name</ion-label>\n        <ion-input clearInput=true style='font-size: 20px;'  placeholder='Name' [(ngModel)]='user.Name'  color='dark' ></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position='stacked'>username</ion-label>\n        <ion-input clearInput=true style='font-size: 20px;'  [(ngModel)]='user.username'  placeholder='Username'  color='dark'></ion-input>\n      </ion-item>\n      <ion-text color='danger'>{{error}}</ion-text>\n      <ion-item>\n        <ion-label position='stacked'>Phone Number</ion-label>\n        <ion-input clearInput=true style='font-size: 20px;' [(ngModel)]='user.phoneNumber'  placeholder='Phone Number'  color='dark' ></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label  style='font-size: 20px;' placeholder='Name'  color='dark' >{{user.email}}</ion-label>\n      <ion-button color='secondary' ><ion-text color='dark'><b>Change</b></ion-text></ion-button>\n    </ion-item>\n  </ion-card-header>\n    <ion-card-content style=\"padding: 0px;\">\n          </ion-card-content>\n    <div  style=\"text-align-last: center;\">\n      <ion-button (click)=\"save()\" color='medium' >Save</ion-button>\n    </div>\n  </ion-card>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=profile-form-profile-form-module.js.map