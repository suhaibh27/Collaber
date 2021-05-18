(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"],{

/***/ "cRhG":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.module.ts ***!
  \*******************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile-routing.module */ "v+7O");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile.page */ "ncJE");







let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfilePageRoutingModule"]
        ],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
    })
], ProfilePageModule);



/***/ }),

/***/ "ncJE":
/*!*****************************************!*\
  !*** ./src/app/profile/profile.page.ts ***!
  \*****************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./profile.page.html */ "tXh8");
/* harmony import */ var _profile_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile.page.scss */ "zxxS");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../users.service */ "U0XV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");





/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/naming-convention */



let ProfilePage = class ProfilePage {
    constructor(router, userSrv, activatedRoute, loadingController) {
        this.router = router;
        this.userSrv = userSrv;
        this.activatedRoute = activatedRoute;
        this.loadingController = loadingController;
        this.user = { username: '', Name: '', email: '', phoneNumber: '', userID: '' };
        this.id = this.activatedRoute.snapshot.paramMap.get('id');
        this.userSrv.getUserbyID(this.id).get().subscribe(res => {
            this.us = res.data();
            this.user = this.us;
        });
    }
    ngOnInit() {
    }
    edit() {
        this.router.navigateByUrl('profile-form/' + this.id);
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
};
ProfilePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _users_service__WEBPACK_IMPORTED_MODULE_5__["UsersService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] }
];
ProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: 'app-profile',
        template: _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_profile_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ProfilePage);



/***/ }),

/***/ "tXh8":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header translucent no-border>\n  <ion-toolbar class=\"myBackgroundColor\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button color='light' defaultHref=\"home\"></ion-back-button>\n    </ion-buttons>\n    <ion-title color='light'> Profile</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen=\"true\" slot=\"fixed\" >\n  <div class=\"card\">\n    <div class=\"header\">\n      <div class=\"avatar\">\n        <img src=\"..\\..\\assets\\icon\\logo.jpeg\" alt=\"\">\n      </div>\n    </div>\n  </div>\n  <div class=\"ion-margin-bottom\"  class=\"card-body\">\n  <div class=\"user-meta ion-text-center\">\n    <h3 class=\"playername\"><ion-icon name=\"person-outline\"></ion-icon>{{this.user.username}}</h3>\n    <h5 class=\"country\">{{this.user.Name}}</h5>\n  </div>\n  <ion-item class=\"ion-margin-top \" color='secondary'>\n    <ion-icon color='dark' name=\"mail-outline\"></ion-icon>\n    <ion-label color='dark' class=\"ion-margin\">E-mail:&nbsp;{{this.user.email}}</ion-label><br>\n  </ion-item>\n  <ion-item  color='secondary'>\n    <ion-icon color='dark' name=\"phone-portrait-outline\"></ion-icon>\n    <ion-label color='dark' class=\"ion-margin\">Phone Number:&nbsp;{{this.user.phoneNumber}}</ion-label><br>\n  </ion-item>\n\n  <ion-button (click)=\"edit()\" class=\"ion-margin\" style=\"margin-top: 10%;\" expand=\"full\" color=\"medium\">Edit</ion-button>\n  <ion-button class=\"ion-margin\"  expand=\"full\" color=\"medium\">Change Password</ion-button>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "v+7O":
/*!***************************************************!*\
  !*** ./src/app/profile/profile-routing.module.ts ***!
  \***************************************************/
/*! exports provided: ProfilePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageRoutingModule", function() { return ProfilePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile.page */ "ncJE");




const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePage"]
    }
];
let ProfilePageRoutingModule = class ProfilePageRoutingModule {
};
ProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProfilePageRoutingModule);



/***/ }),

/***/ "zxxS":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\nion-content {\n  position: relative;\n  height: 100%;\n  width: 100%;\n  --background:#fff !important;\n}\nion-toolbar {\n  -–background: transparent;\n}\n.card {\n  margin: 0 auto;\n}\n.card .header {\n  height: 180px;\n}\n.card .header .avatar {\n  width: 160px;\n  height: 160px;\n  position: relative;\n  margin: 0 auto;\n}\n.card .header .avatar img {\n  display: block;\n  border-radius: 50%;\n  position: absolute;\n  bottom: calc(-1*(80px + 4px));\n  border: 8px solid #ab7ed6;\n  background-color: #fff;\n}\n.card-body {\n  background-image: linear-gradient(0deg, #89cdf7, #eff7fc) !important;\n  padding: 10px;\n  height: calc(100vh – (200px + 56px));\n  overflow: hidden;\n  border-radius: 10px;\n}\n.card-body .user-meta {\n  padding-top: 40px;\n}\n.card-body .user-meta .playername {\n  font-size: 24px;\n  font-weight: 600;\n  color: #303940;\n}\n.card-body .user-meta .country {\n  font-size: 90%;\n  color: #575858;\n  text-transform: uppercase;\n  margin: 0 auto;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHByb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQjtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osV0FBVztFQUNYLDRCQUFhO0FBRWY7QUFDQTtFQUNFLHlCQUFlO0FBRWpCO0FBQUE7RUFDRSxjQUFjO0FBR2hCO0FBSkE7RUFJTSxhQUFhO0FBSW5CO0FBUkE7RUFPVSxZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixjQUFjO0FBS3hCO0FBZkE7RUFhYyxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQiw2QkFBNkI7RUFDN0IseUJBQXlCO0VBQ3pCLHNCQUFzQjtBQU1wQztBQURBO0VBQ0Usb0VBQW9FO0VBSXBFLGFBQWE7RUFDYixvQ0FBUTtFQUNSLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7QUFUQTtFQVdNLGlCQUFpQjtBQUV2QjtBQWJBO0VBY1UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjO0FBR3hCO0FBbkJBO0VBb0JVLGNBQWM7RUFDZCxjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLGNBQWM7QUFHeEIiLCJmaWxlIjoicHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG5pb24tY29udGVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgLS1iYWNrZ3JvdW5kOiNmZmYgIWltcG9ydGFudDtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAt4oCTYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbi5jYXJkIHtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5jYXJkIC5oZWFkZXIge1xuICBoZWlnaHQ6IDE4MHB4O1xufVxuXG4uY2FyZCAuaGVhZGVyIC5hdmF0YXIge1xuICB3aWR0aDogMTYwcHg7XG4gIGhlaWdodDogMTYwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5jYXJkIC5oZWFkZXIgLmF2YXRhciBpbWcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogY2FsYygtMSooODBweCArIDRweCkpO1xuICBib3JkZXI6IDhweCBzb2xpZCAjYWI3ZWQ2O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuXG4uY2FyZC1ib2R5IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDBkZWcsICM4OWNkZjcsICNlZmY3ZmMpICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGhlaWdodDogY2FsYygxMDB2aCDigJMgKDIwMHB4ICsgNTZweCkpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4uY2FyZC1ib2R5IC51c2VyLW1ldGEge1xuICBwYWRkaW5nLXRvcDogNDBweDtcbn1cblxuLmNhcmQtYm9keSAudXNlci1tZXRhIC5wbGF5ZXJuYW1lIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzMwMzk0MDtcbn1cblxuLmNhcmQtYm9keSAudXNlci1tZXRhIC5jb3VudHJ5IHtcbiAgZm9udC1zaXplOiA5MCU7XG4gIGNvbG9yOiAjNTc1ODU4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBtYXJnaW46IDAgYXV0bztcbn1cbiJdfQ== */");

/***/ })

}]);
//# sourceMappingURL=profile-profile-module.js.map