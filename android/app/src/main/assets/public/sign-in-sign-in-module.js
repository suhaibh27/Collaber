(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sign-in-sign-in-module"],{

/***/ "FuQ6":
/*!*******************************************!*\
  !*** ./src/app/sign-in/sign-in.module.ts ***!
  \*******************************************/
/*! exports provided: SignInPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInPageModule", function() { return SignInPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _sign_in_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sign-in-routing.module */ "j1PK");
/* harmony import */ var _sign_in_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sign-in.page */ "WawN");








let SignInPageModule = class SignInPageModule {
};
SignInPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _sign_in_routing_module__WEBPACK_IMPORTED_MODULE_5__["SignInPageRoutingModule"]
        ],
        declarations: [_sign_in_page__WEBPACK_IMPORTED_MODULE_6__["SignInPage"]]
    })
], SignInPageModule);



/***/ }),

/***/ "P3na":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sign-in/sign-in.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header >\r\n  <ion-toolbar class=\"myBackgroundColor\">\r\n    <ion-title color=\"light\">Register</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <div class=\"login-content\">\r\n    <h1 class=\"Title\" >Collaber</h1>\r\n    <!-- Logo -->\r\n    <ion-img class=\"mImage\" src=\"..\\..\\assets\\icon\\logo.jpeg\"></ion-img>\r\n    <!-- Login form -->\r\n    <div *ngIf=\"login\">\r\n      <form>\r\n        <ion-item>\r\n          <ion-label>\r\n            <ion-icon name=\"mail\"></ion-icon>\r\n            Email\r\n          </ion-label>\r\n          <ion-input [(ngModel)]='signInEmail' name='email' type=\"text\"></ion-input>\r\n        </ion-item>\r\n      <br>\r\n        <ion-item>\r\n          <ion-label >\r\n            <ion-icon name=\"lock-closed\"></ion-icon>\r\n                          Password\r\n          </ion-label>\r\n          <ion-input [(ngModel)]='signInPassword' name='password'  type=\"password\"></ion-input>\r\n        </ion-item>\r\n      </form>\r\n      <br>\r\n      <div class=\"centerDev\">\r\n        <ion-button class=\"myBackgroundColor\" (click)=\"signIn()\">\r\n        <ion-icon name=\"log-in\" ></ion-icon>\r\n            SIGN IN\r\n        </ion-button>\r\n        <div class=\"ion-margin\" style='text-align-last: center;'>\r\n          <ion-text color='danger'>{{signInError}}</ion-text>\r\n        </div>\r\n        <br>\r\n        <ion-label class=\"link\">Forgot Password?</ion-label>\r\n        <p ion-text color=\"secondary\" >New here? <a (click)=\"toggleRegisterForm()\">Sign Up</a></p>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Sign Up Form -->\r\n    <div *ngIf=\"!login\">\r\n      <form [formGroup]=\"signUpForm\" (ngSubmit)=\"checkDup(signUpForm)\">\r\n        <ion-item>\r\n          <ion-label position=\"floating\">\r\n            Email\r\n          </ion-label>\r\n          <ion-input [(ngModel)]='email' formControlName=\"email\" type=\"email\"></ion-input>\r\n        </ion-item>\r\n        <div class=\"validation-errors\">\r\n          <ng-container *ngFor=\"let validation of validation_messages.email\">\r\n            <div class=\"error-message\" *ngIf=\"signUpForm.get('email').hasError(validation.type) && (signUpForm.get('email').dirty || signUpForm.get('email').touched)\">\r\n              <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\r\n            </div>\r\n          </ng-container>\r\n        </div>\r\n        <ion-item>\r\n          <ion-label position=\"floating\">\r\n            Username\r\n          </ion-label>\r\n          <ion-input [(ngModel)]='username' formControlName=\"username\" type=\"text\"></ion-input>\r\n        </ion-item>\r\n        <div class=\"validation-errors\">\r\n          <ng-container *ngFor=\"let validation of validation_messages.username\">\r\n            <div class=\"error-message\" *ngIf=\"signUpForm.get('username').hasError(validation.type) && (signUpForm.get('username').dirty || signUpForm.get('username').touched)\">\r\n              <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\r\n            </div>\r\n          </ng-container>\r\n        </div>\r\n        <br>\r\n        <ion-item>\r\n          <ion-label position=\"floating\" >\r\n            Name\r\n          </ion-label>\r\n          <ion-input [(ngModel)]='name' formControlName=\"name\"></ion-input>\r\n        </ion-item>\r\n        <div class=\"validation-errors\">\r\n          <ng-container *ngFor=\"let validation of validation_messages.name\">\r\n            <div class=\"error-message\" *ngIf=\"signUpForm.get('name').hasError(validation.type) && (signUpForm.get('name').dirty || signUpForm.get('name').touched)\">\r\n              <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\r\n            </div>\r\n          </ng-container>\r\n        </div>\r\n        <br>\r\n        <div formGroupName=\"matching_passwords\">\r\n          <ion-item>\r\n            <ion-label position=\"floating\" >Password</ion-label>\r\n            <ion-input [(ngModel)]='password' type=\"password\" formControlName=\"password\"></ion-input>\r\n          </ion-item>\r\n          <div class=\"validation-errors\">\r\n            <ng-container *ngFor=\"let validation of validation_messages.password\">\r\n              <div class=\"error-message\" *ngIf=\"signUpForm.get('matching_passwords').get('password').hasError(validation.type) && (signUpForm.get('matching_passwords').get('password').dirty || signUpForm.get('matching_passwords').get('password').touched)\">\r\n                <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\r\n              </div>\r\n            </ng-container>\r\n          </div>\r\n          <br>\r\n          <ion-item style=\"--highlight-color-valid: none;\">\r\n            <ion-label position=\"floating\">Confirm Password</ion-label>\r\n            <ion-input type=\"password\" formControlName=\"confirm_password\"></ion-input>\r\n          </ion-item>\r\n          <div class=\"validation-errors\">\r\n            <ng-container *ngFor=\"let validation of validation_messages.confirm_password\">\r\n              <div class=\"error-message\" *ngIf=\"signUpForm.get('matching_passwords').get('confirm_password').hasError(validation.type) && (signUpForm.get('matching_passwords').get('confirm_password').dirty || signUpForm.get('matching_passwords').get('confirm_password').touched)\">\r\n                <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\r\n              </div>\r\n            </ng-container>\r\n          </div>\r\n        </div>\r\n        <div class=\"validation-errors\">\r\n          <ng-container *ngFor=\"let validation of validation_messages.matching_passwords\">\r\n            <div class=\"error-message\" *ngIf=\"signUpForm.get('matching_passwords').hasError(validation.type) && (signUpForm.get('matching_passwords').get('confirm_password').dirty || signUpForm.get('matching_passwords').get('confirm_password').touched)\">\r\n              <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\r\n            </div>\r\n          </ng-container>\r\n        </div>\r\n        <br>\r\n        <ion-item >\r\n        <ion-label position=\"floating\"> Phone Number</ion-label>\r\n          <ion-input [(ngModel)]='phone' formControlName=\"phone\"></ion-input>\r\n        </ion-item>\r\n        <div class=\"validation-errors\">\r\n          <ng-container *ngFor=\"let validation of validation_messages.phone\">\r\n            <div class=\"error-message\" *ngIf=\"signUpForm.get('phone').hasError(validation.type) && (signUpForm.get('phone').dirty || signUpForm.get('phone').touched)\">\r\n              <ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\r\n              <br>\r\n            </div>\r\n          </ng-container>\r\n        </div>\r\n          <div class=\"centerDev\">\r\n            <ion-button class=\"myBackgroundColor\" type=\"submit\">\r\n              <ion-icon name=\"log-in\"></ion-icon>\r\n                  SIGN UP\r\n              </ion-button>\r\n          </div>\r\n          <div class=\"ion-margin\" style='text-align-last: center;'>\r\n            <ion-text color='danger'>{{error}}</ion-text>\r\n          </div>\r\n      </form>\r\n      <div class=\"centerDev\">\r\n        <p ion-text color=\"secondary\"  >Already have an Account?</p>\r\n        <ion-button fill=\"clear\" (click)=\"toggleRegisterForm()\"  shape=\"round\">\r\n          Sign In\r\n        </ion-button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "WawN":
/*!*****************************************!*\
  !*** ./src/app/sign-in/sign-in.page.ts ***!
  \*****************************************/
/*! exports provided: SignInPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInPage", function() { return SignInPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_sign_in_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./sign-in.page.html */ "P3na");
/* harmony import */ var _sign_in_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sign-in.page.scss */ "i5US");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../users.service */ "U0XV");
/* harmony import */ var _validators_password_validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../validators/password.validator */ "sY96");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");



/* eslint-disable no-var */
/* eslint-disable max-len */

/* eslint-disable eqeqeq */

/* eslint-disable arrow-body-style */
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/member-delimiter-style */




let SignInPage = class SignInPage {
    constructor(toastController, userSrv, router, formbuilder) {
        this.toastController = toastController;
        this.userSrv = userSrv;
        this.router = router;
        this.formbuilder = formbuilder;
        this.validation_messages = {
            username: [
                { type: 'required', message: 'Username is required.' },
                { type: 'minlength', message: 'Username must be at least 5 characters long.' },
                { type: 'maxlength', message: 'Username cannot be more than 25 characters long.' },
                { type: 'pattern', message: 'use only letters, number "_", "." _ and . cannot be at start or the end' },
                { type: 'validUsername', message: 'Your username has already been taken.' }
            ],
            password: [
                { type: 'required', message: 'Password is required.' },
                { type: 'minlength', message: 'Password must be at least 8 characters long.' },
                { type: 'pattern', message: 'Your password must contain at least one uppercase, one lowercase, and one number.' }
            ],
            confirm_password: [
                { type: 'required', message: 'Confirm password is required.' }
            ],
            matching_passwords: [
                { type: 'areEqual', message: 'Password mismatch.' }
            ],
            name: [
                { type: 'pattern', message: 'only letters are accepted.' },
                { type: 'required', message: 'name is Required' }
            ],
            phone: [
                { type: 'required', message: 'Phone is required.' },
                { type: 'pattern', message: 'only numbers are accepted.' }
            ],
            email: [{ type: 'required', message: 'Email is required.' },
                { type: 'pattern', message: 'not a valid Email form.' }
            ]
        };
        this.login = true;
        this.error = '';
    }
    toggleRegisterForm() {
        this.login = ((this.login) ? false : true);
    }
    signIn() {
        this.signInError = '';
        this.userSrv.signIn({ email: this.signInEmail, password: this.signInPassword }).then(() => this.presentToast()).catch(er => this.signInError = er.message);
    }
    presentToast() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Successful :).',
                duration: 1500,
            });
            toast.present();
        });
    }
    checkDup(val) {
        this.error = '';
        if (val.status == 'VALID') {
            var mUser;
            this.userSrv.checkDuplicate().subscribe(res => res.forEach(user => { mUser = user.data(); if (mUser.username == this.username) {
                this.error = 'username is already taken';
            }
            else {
                this.signUp();
            } ; }));
        }
    }
    signUp() {
        this.error = '';
        this.userSrv.signup({ email: this.email,
            password: this.password,
            name: this.name,
            usrname: this.username,
            phone: this.phone }).catch(er => console.log(this.error = er.message));
    }
    ngOnInit() {
        this.matching_passwords_group = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormGroup"]({
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].minLength(8),
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
            ])),
            confirm_password: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required)
        }, (formGroup) => {
            return _validators_password_validator__WEBPACK_IMPORTED_MODULE_5__["PasswordValidator"].areEqual(formGroup);
        });
        this.signUpForm = this.formbuilder.group({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(25),
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].minLength(5),
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].pattern('^(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$'),
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required
            ])),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].pattern('^[0-9]*$')
            ])),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$')
            ])),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].pattern('^[a-zA-Z \s]*$')
            ])),
            matching_passwords: this.matching_passwords_group,
        });
    }
};
SignInPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: _users_service__WEBPACK_IMPORTED_MODULE_4__["UsersService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"] }
];
SignInPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: 'app-sign-in',
        template: _raw_loader_sign_in_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_sign_in_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SignInPage);



/***/ }),

/***/ "i5US":
/*!*******************************************!*\
  !*** ./src/app/sign-in/sign-in.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".Title {\n  text-align: center;\n  color: #000f50;\n  font-variant-caps: small-caps;\n  font-size: 40px;\n}\n\n.link {\n  color: blue;\n}\n\n.centerDev {\n  text-align-last: center;\n}\n\n.mImage {\n  width: 70%;\n  height: 100px;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.error-message {\n  color: red;\n  font-size: 14px;\n  margin-left: 10px;\n  margin-top: 10px;\n}\n\n.submit-btn {\n  margin: 48px 12px 12px;\n}\n\n.myBackgroundColor {\n  --background: #000f50;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHNpZ24taW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCw2QkFBNkI7RUFDN0IsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLFdBQVc7QUFFYjs7QUFBQTtFQUNFLHVCQUF1QjtBQUd6Qjs7QUFEQTtFQUNJLFVBQVU7RUFDVixhQUFhO0VBQ2IsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFJdEI7O0FBRkE7RUFFSSxVQUFVO0VBQ1YsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFJcEI7O0FBRkU7RUFDRSxzQkFBc0I7QUFLMUI7O0FBSEU7RUFDRSxxQkFBYTtBQU1qQiIsImZpbGUiOiJzaWduLWluLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5UaXRsZXtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICMwMDBmNTA7XHJcbiAgZm9udC12YXJpYW50LWNhcHM6IHNtYWxsLWNhcHM7XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG59XHJcbi5saW5re1xyXG4gIGNvbG9yOiBibHVlO1xyXG59XHJcbi5jZW50ZXJEZXZ7XHJcbiAgdGV4dC1hbGlnbi1sYXN0OiBjZW50ZXI7XHJcbn1cclxuLm1JbWFnZXtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG4uZXJyb3ItbWVzc2FnZVxyXG4gIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgfVxyXG4gIC5zdWJtaXQtYnRuIHtcclxuICAgIG1hcmdpbjogNDhweCAxMnB4IDEycHg7XHJcbiAgfVxyXG4gIC5teUJhY2tncm91bmRDb2xvcntcclxuICAgIC0tYmFja2dyb3VuZDogIzAwMGY1MDtcclxuICB9XHJcbiJdfQ== */");

/***/ }),

/***/ "j1PK":
/*!***************************************************!*\
  !*** ./src/app/sign-in/sign-in-routing.module.ts ***!
  \***************************************************/
/*! exports provided: SignInPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInPageRoutingModule", function() { return SignInPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _sign_in_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sign-in.page */ "WawN");




const routes = [
    {
        path: '',
        component: _sign_in_page__WEBPACK_IMPORTED_MODULE_3__["SignInPage"]
    }
];
let SignInPageRoutingModule = class SignInPageRoutingModule {
};
SignInPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SignInPageRoutingModule);



/***/ }),

/***/ "sY96":
/*!**************************************************!*\
  !*** ./src/app/validators/password.validator.ts ***!
  \**************************************************/
/*! exports provided: PasswordValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordValidator", function() { return PasswordValidator; });
class PasswordValidator {
    // Inspired on: http://plnkr.co/edit/Zcbg2T3tOxYmhxs7vaAm?p=preview
    static areEqual(formGroup) {
        let val;
        let valid = true;
        for (let key in formGroup.controls) {
            if (formGroup.controls.hasOwnProperty(key)) {
                let control = formGroup.controls[key];
                if (val === undefined) {
                    val = control.value;
                }
                else {
                    if (val !== control.value) {
                        valid = false;
                        break;
                    }
                }
            }
        }
        if (valid) {
            return null;
        }
        return {
            areEqual: true
        };
    }
}


/***/ })

}]);
//# sourceMappingURL=sign-in-sign-in-module.js.map