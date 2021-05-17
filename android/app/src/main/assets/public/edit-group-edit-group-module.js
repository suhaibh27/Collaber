(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["edit-group-edit-group-module"],{

/***/ "9+th":
/*!***********************************************!*\
  !*** ./src/app/edit-group/edit-group.page.ts ***!
  \***********************************************/
/*! exports provided: EditGroupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditGroupPage", function() { return EditGroupPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_edit_group_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./edit-group.page.html */ "io+K");
/* harmony import */ var _edit_group_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-group.page.scss */ "b+5t");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _groups_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../groups-service.service */ "QLx/");





/* eslint-disable curly */

/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/semi */
/* eslint-disable eqeqeq */
/* eslint-disable no-var */
/* eslint-disable @typescript-eslint/prefer-for-of */
/* eslint-disable @typescript-eslint/type-annotation-spacing */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable prefer-const */
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/naming-convention */





let EditGroupPage = class EditGroupPage {
    constructor(navCtrl, alertController, groupSrv, activatedRoute, actionSheetController, router) {
        this.navCtrl = navCtrl;
        this.alertController = alertController;
        this.groupSrv = groupSrv;
        this.activatedRoute = activatedRoute;
        this.actionSheetController = actionSheetController;
        this.router = router;
        this.usersNames = [];
        this.userExist = false;
        this.view = true;
        this.myUsersId = [];
        this.desc = '';
        this.saved = false;
        this.usersNames = [];
        this.myUsersId = [];
    }
    ngOnInit() {
        this.usersNames = [];
        this.myUsersId = [];
        this.grId = this.activatedRoute.snapshot.paramMap.get('id');
        this.view = this.activatedRoute.snapshot.paramMap.get('view') == 'true';
        this.thisGroup = this.groupSrv.getgroup(this.grId).get().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)).subscribe(res => { this.thisGroup = res.data(); this.newPrivacy = this.thisGroup.isPrivate; });
        this.users = this.groupSrv.getGroupUsers(this.grId);
        this.users.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)).subscribe(res => {
            res.forEach(r => {
                this.myUsersId.push(r.userID);
                this.groupSrv.getuser(r.userID).then(rr => rr.get().subscribe(ii => this.usersNames.push(ii.data())));
            });
            this.doesUserExist();
        });
    }
    save() {
        let newGroup = { Name: this.newName.toString(), isPrivate: this.newPrivacy === 'true', Description: this.desc.toString() };
        this.groupSrv.updateGroup(this.grId, newGroup);
        this.saved = true;
    }
    selectPrivacy(ev) {
        this.newPrivacy = ev.target.value;
    }
    getUsers() {
    }
    promote(user) {
        this.groupSrv.makeAdmin(user, this.grId);
    }
    demote(user) {
        this.groupSrv.makeMember(user, this.grId);
    }
    presentActionSheet(user, name, index) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let stat = "Delete";
            if (user == 'QSqITrKDOZPEY7qo68OnkTsXF8q1') {
                stat = "Leave";
            }
            const actionSheet = yield this.actionSheetController.create({
                header: 'Actions On ' + name,
                cssClass: 'actionSheet',
                buttons: [{
                        text: stat,
                        role: 'destructive',
                        icon: 'person-remove',
                        cssClass: 'remove',
                        handler: () => {
                            console.log('delete');
                        }
                    }, {
                        text: 'Promote',
                        icon: 'arrow-up-circle-outline',
                        cssClass: 'promoteActionSheet',
                        handler: () => {
                            this.promote(user);
                        }
                    },
                    {
                        text: 'Cancel',
                        icon: 'close',
                        role: 'cancel',
                        handler: () => {
                            console.log('Cancel clicked');
                        }
                    }]
            });
            yield actionSheet.present();
            const { role } = yield actionSheet.onDidDismiss();
            console.log('onDidDismiss resolved with role', role);
        });
    }
    presentDemoteActionSheet(user, name, index) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let stat = "Delete";
            if (user == 'QSqITrKDOZPEY7qo68OnkTsXF8q1') {
                stat = "Leave";
            }
            const actionSheet = yield this.actionSheetController.create({
                header: 'Actions On ' + name,
                cssClass: 'actionSheet',
                buttons: [{
                        text: stat,
                        role: 'destructive',
                        icon: 'person-remove',
                        cssClass: 'remove',
                        handler: () => {
                            this.deleteUser(stat);
                        }
                    },
                    {
                        text: 'Demote',
                        icon: 'arrow-down-circle-outline', cssClass: 'demoteActionSheet',
                        handler: () => {
                            this.demote(user);
                        }
                    },
                    {
                        text: 'Cancel',
                        icon: 'close',
                        role: 'cancel',
                        handler: () => {
                            console.log('Cancel clicked');
                        }
                    }]
            });
            yield actionSheet.present();
            const { role } = yield actionSheet.onDidDismiss();
            console.log('onDidDismiss resolved with role', role);
        });
    }
    doesUserExist(userId = 'QSqITrKDOZPEY7qo68OnkTsXF8q1') {
        for (let user of this.myUsersId) {
            if (user == userId) {
                console.log(this.userExist);
                this.userExist = true;
            }
        }
    }
    deleteUser(stat, user = 'RJvbBwI1ZtCHbEs6EWP3') {
        this.groupSrv.removeUser(user, this.grId).then(() => {
            this.usersNames = [];
            if (stat == 'Leave') {
                this.router.navigateByUrl('home');
            }
        });
    }
    addUser(user = 'RJvbBwI1ZtCHbEs6EWP3') {
        this.groupSrv.addUser(user, this.grId).then(() => this.usersNames = []);
    }
    presentAlertConfirm(stat) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Confirm!',
                message: 'Are you sure you want to ' + stat + '?',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Confirm',
                        handler: () => {
                            if (stat == 'Leave')
                                this.deleteUser(stat);
                            else
                                this.addUser();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    presentconAlert() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Confirm!',
                message: 'Do you want to save you changes',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Confirm',
                        handler: () => {
                            this.save();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    check() {
        if (!this.view) {
            if (!this.saved) {
                this.backpresentconAlert();
            }
        }
        else
            this.navCtrl.back();
    }
    backpresentconAlert() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Confirm!',
                message: 'Do you want to save you changes',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Confirm',
                        handler: () => {
                            this.save();
                            this.navCtrl.back();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
EditGroupPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _groups_service_service__WEBPACK_IMPORTED_MODULE_7__["GroupsServiceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ActionSheetController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
EditGroupPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: 'app-edit-group',
        template: _raw_loader_edit_group_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_edit_group_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], EditGroupPage);



/***/ }),

/***/ "UgyH":
/*!*************************************************!*\
  !*** ./src/app/edit-group/edit-group.module.ts ***!
  \*************************************************/
/*! exports provided: EditGroupPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditGroupPageModule", function() { return EditGroupPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _edit_group_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-group-routing.module */ "n785");
/* harmony import */ var _edit_group_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-group.page */ "9+th");







let EditGroupPageModule = class EditGroupPageModule {
};
EditGroupPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _edit_group_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditGroupPageRoutingModule"]
        ],
        declarations: [_edit_group_page__WEBPACK_IMPORTED_MODULE_6__["EditGroupPage"]]
    })
], EditGroupPageModule);



/***/ }),

/***/ "b+5t":
/*!*************************************************!*\
  !*** ./src/app/edit-group/edit-group.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".select-disabled, .item-select-disabled ion-label {\n  opacity: 1;\n  color: black;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGVkaXQtZ3JvdXAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7QUFDZCIsImZpbGUiOiJlZGl0LWdyb3VwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWxlY3QtZGlzYWJsZWQsIC5pdGVtLXNlbGVjdC1kaXNhYmxlZCBpb24tbGFiZWwge1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "io+K":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit-group/edit-group.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class='myBackgroundColor'>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"check()\" color='light'><ion-icon name=\"arrow-back-outline\"></ion-icon></ion-button>\n    </ion-buttons>\n        <ion-title color='light'>{{thisGroup.Name}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-card >\n    <div style=\"text-align: -webkit-center;\">\n      <img width=\"244\" height=\"244\" src=\"..\\..\\assets\\icon\\logo.jpeg\"/>\n    </div>\n    <ion-card-header>\n      <ion-input [readonly]='view' placeholder='Group Name' [(ngModel)]='newName' value={{thisGroup.Name}} color='dark' style=\"font-size: 26px !important;\"></ion-input>\n      <ion-textarea [readonly]='view' [(ngModel)]='desc' style=\"font-size: large !important; height: fit-content;\" value={{thisGroup.Description}} placeholder='description'></ion-textarea>\n    </ion-card-header>\n    <ion-card-content style=\"padding: 0px;\">\n      <ion-item>\n        <ion-label>Privacy</ion-label>\n        <ion-item *ngIf=\"(newPrivacy==true || newPrivacy=='true')\">\n            <ion-toggle *ngIf=\"!view\" [(ngModel)]='newPrivacy'></ion-toggle>\n          <ion-select *ngIf=\"!view\" class=\"disabled\" [disabled]='view' interface=\"popover\" (ionChange)=selectPrivacy($event) value='true'>\n            <ion-select-option value='true'><ion-icon name=\"lock-closed\"></ion-icon>private</ion-select-option>\n            <ion-select-option value='false'><ion-icon name=\"lock-open\"></ion-icon>public</ion-select-option>\n          </ion-select>\n          <ion-text *ngIf=\"view\" style=\"font-size: large;\">Private</ion-text>\n        </ion-item>\n        <ion-item *ngIf=\"(newPrivacy==false || newPrivacy=='false')\">\n          <ion-toggle *ngIf=\"!view\" [disabled]='view' [(ngModel)]='newPrivacy' ></ion-toggle>\n          <ion-select *ngIf=\"!view\" [disabled]='view' interface=\"popover\" (ionChange)=selectPrivacy($event) value='false'>\n            <ion-select-option value='true'><ion-icon name=\"lock-closed\"></ion-icon>private</ion-select-option>\n            <ion-select-option value='false'><ion-icon name=\"lock-open\"></ion-icon>public</ion-select-option>\n          </ion-select>\n          <ion-text *ngIf=\"view\" style=\"font-size: large;\">Public</ion-text>\n        </ion-item>\n      </ion-item>\n    </ion-card-content>\n    <div  style=\"text-align-last: center;\">\n      <ion-button *ngIf=\"!view\" (click)='presentconAlert()'>Save</ion-button>\n    </div>\n  </ion-card>\n  <div *ngIf=\"this.usersNames.length>0\">\n    <ion-row *ngFor=\"let user of users |async; let i=index\">\n      <ion-item-divider style=\"color: black;\">\n        <ion-col *ngIf=\"user.userID!='QSqITrKDOZPEY7qo68OnkTsXF8q1'\" size='7'>\n          <ion-text style=\"font-size: large;\">{{usersNames[i].username}}</ion-text>\n        </ion-col>\n        <ion-col *ngIf=\"user.userID=='QSqITrKDOZPEY7qo68OnkTsXF8q1'\" size='7'>\n          <ion-text color='primary' style=\"font-size: large;\">{{usersNames[i].username}}</ion-text>\n        </ion-col>\n        <div *ngIf=\"user.isAdmin==true\">\n          <ion-col style=\"align-self: center; margin-left: 3px;\" size='4'>\n          <span style=\"font-size: large;color: green; vertical-align: -webkit-baseline-middle;\">Admin</span>\n          </ion-col>\n          <ion-col size='2'>\n            &nbsp; <ion-button *ngIf=\"!view\" (click)='presentDemoteActionSheet(user.userID,usersNames[i].username,i)'><ion-icon name=\"create-outline\"></ion-icon></ion-button>\n          </ion-col>\n          </div>\n        <div *ngIf=\"user.isAdmin==false\">\n          <ion-col style=\"align-self: center;\" size='4'>\n            <span style=\"font-size: large;color: blue; vertical-align: -webkit-baseline-middle;\">Member</span>\n          </ion-col>\n          <ion-col class=\"align-items-end\" size='1'>\n            <ion-button *ngIf=\"!view\" (click)='presentActionSheet(user.userID,usersNames[i].username,i)'><ion-icon name=\"create-outline\"></ion-icon></ion-button>\n          </ion-col>\n          </div>\n      </ion-item-divider>\n    </ion-row>\n    <div style='text-align: -webkit-center;'>\n      <ion-button  *ngIf=\"!view\"><ion-icon name=\"person-add-outline\"></ion-icon></ion-button>\n      <ion-button (click)=\"presentAlertConfirm('leave')\" color=\"danger\" *ngIf='userExist'>leave<ion-icon name=\"exit-outline\"></ion-icon></ion-button>\n      <ion-button (click)=\"presentAlertConfirm('join')\" color=\"primary\" *ngIf='!userExist'>Join<ion-icon name=\"enter-outline\"></ion-icon></ion-button>\n    </div>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "n785":
/*!*********************************************************!*\
  !*** ./src/app/edit-group/edit-group-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: EditGroupPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditGroupPageRoutingModule", function() { return EditGroupPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _edit_group_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-group.page */ "9+th");




const routes = [
    {
        path: '',
        component: _edit_group_page__WEBPACK_IMPORTED_MODULE_3__["EditGroupPage"]
    }
];
let EditGroupPageRoutingModule = class EditGroupPageRoutingModule {
};
EditGroupPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EditGroupPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=edit-group-edit-group-module.js.map