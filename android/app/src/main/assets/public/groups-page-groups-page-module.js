(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["groups-page-groups-page-module"],{

/***/ "JLn6":
/*!*************************************************!*\
  !*** ./src/app/groups-page/groups-page.page.ts ***!
  \*************************************************/
/*! exports provided: GroupsPagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupsPagePage", function() { return GroupsPagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_groups_page_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./groups-page.page.html */ "laqB");
/* harmony import */ var _groups_page_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./groups-page.page.scss */ "dVA7");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _groups_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../groups-service.service */ "QLx/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");





/* eslint-disable prefer-const */
/* eslint-disable curly */
/* eslint-disable eqeqeq */


let GroupsPagePage = class GroupsPagePage {
    constructor(loadingController, router, groupSrv) {
        this.loadingController = loadingController;
        this.router = router;
        this.groupSrv = groupSrv;
        this.groups = [];
        this.load = 0;
        this.segment = 'code';
    }
    ngOnInit() {
    }
    changePage() {
        return;
    }
    searchGroups(ev) {
        this.groups = [];
        let v = ev.target.value;
        if (v.length > 0) {
            if (this.load == 0) {
                this.presentLoading();
                this.load = 1;
            }
            this.groups = [];
            console.log(v);
            this.groupSrv.getFilteredGroups(v).subscribe(res => {
                res.forEach(g => this.groups.push(g));
                if (this.load == 1) {
                    this.loadingController.dismiss();
                    this.load = 0;
                }
            });
        }
    }
    searchGroupsCode(ev) {
        this.groups = [];
        let v = ev.target.value.trim();
        if (v.length > 0) {
            if (this.load == 0) {
                this.presentLoading();
                this.load = 1;
            }
            this.groups = [];
            if (v == '') {
                v = '!';
            }
            this.groupSrv.searchbyCode(v).subscribe(res => {
                if (res.data() != undefined)
                    this.groups.push(res);
                if (this.load == 1) {
                    this.loadingController.dismiss();
                    this.load = 0;
                }
                ;
            });
        }
    }
    presentLoading() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                cssClass: 'loading',
                spinner: 'circles',
                keyboardClose: false
            });
            yield loading.present();
            const { role, data } = yield loading.onDidDismiss();
            console.log('Loading dismissed!');
        });
    }
    viewGroup(id) {
        this.router.navigateByUrl('edit-group/' + id + '/true');
    }
};
GroupsPagePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _groups_service_service__WEBPACK_IMPORTED_MODULE_4__["GroupsServiceService"] }
];
GroupsPagePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: 'app-groups-page',
        template: _raw_loader_groups_page_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_groups_page_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], GroupsPagePage);



/***/ }),

/***/ "LUtT":
/*!***************************************************!*\
  !*** ./src/app/groups-page/groups-page.module.ts ***!
  \***************************************************/
/*! exports provided: GroupsPagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupsPagePageModule", function() { return GroupsPagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _groups_page_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./groups-page-routing.module */ "RgzP");
/* harmony import */ var _groups_page_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./groups-page.page */ "JLn6");







let GroupsPagePageModule = class GroupsPagePageModule {
};
GroupsPagePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _groups_page_routing_module__WEBPACK_IMPORTED_MODULE_5__["GroupsPagePageRoutingModule"]
        ],
        declarations: [_groups_page_page__WEBPACK_IMPORTED_MODULE_6__["GroupsPagePage"]]
    })
], GroupsPagePageModule);



/***/ }),

/***/ "RgzP":
/*!***********************************************************!*\
  !*** ./src/app/groups-page/groups-page-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: GroupsPagePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupsPagePageRoutingModule", function() { return GroupsPagePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _groups_page_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./groups-page.page */ "JLn6");




const routes = [
    {
        path: '',
        component: _groups_page_page__WEBPACK_IMPORTED_MODULE_3__["GroupsPagePage"]
    }
];
let GroupsPagePageRoutingModule = class GroupsPagePageRoutingModule {
};
GroupsPagePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], GroupsPagePageRoutingModule);



/***/ }),

/***/ "dVA7":
/*!***************************************************!*\
  !*** ./src/app/groups-page/groups-page.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/**.loading{\r\n  --backdrop-opacity: 0.4 !important;\r\n  background: transparent;\r\n  box-shadow: none;\r\n}*/\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGdyb3Vwcy1wYWdlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztFQUlFIiwiZmlsZSI6Imdyb3Vwcy1wYWdlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKi5sb2FkaW5ne1xyXG4gIC0tYmFja2Ryb3Atb3BhY2l0eTogMC40ICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxufSovXHJcblxyXG4iXX0= */");

/***/ }),

/***/ "laqB":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/groups-page/groups-page.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"myBackgroundColor\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button color='light' defaultHref=\"home\"></ion-back-button>\n    </ion-buttons>\n    <ion-title color='light'>Explore groups</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"segment=='name'\">\n  <h1 class=\"ion-margin-start ion-margin-top\">Join Group by its Name </h1>\n  <ion-searchbar placeholder='name' (ionInput)=\"searchGroups($event)\"></ion-searchbar>\n  <ion-item>\n    <h1>Groups</h1> <br>\n  </ion-item>\n  <ion-row *ngFor=\"let group of groups\" (click)='viewGroup(group.id)'>\n    <ion-item-divider class='divider'>\n    <ion-col size='3' >\n      <ion-avatar><ion-img src=\"..\\..\\assets\\icon\\logo.jpeg\"></ion-img>\n      </ion-avatar>\n    </ion-col>\n    <ion-col size='7'>\n      <h3>{{group.data().Name}}</h3>\n      <ion-note>{{group.id}}</ion-note>\n    </ion-col>\n\n  </ion-item-divider>\n  </ion-row>\n</ion-content>\n<ion-content *ngIf=\"segment=='code'\">\n  <h1 class=\"ion-margin-start ion-margin-top\">Join Group by its Code </h1>\n  <ion-note class=\"ion-margin-start\">Example: IoXfCkxwTULpZHHuAKH4</ion-note>\n  <ion-searchbar placeholder='Enter Code' searchIcon='barcode-outline' (ionInput)=\"searchGroupsCode($event)\"></ion-searchbar>\n  <ion-item>\n    <h1>Group</h1> <br>\n  </ion-item>\n  <ion-row *ngFor=\"let group of groups\" (click)='viewGroup(group.id)'>\n    <ion-item-divider class='divider'>\n    <ion-col size='3' >\n      <ion-avatar><ion-img src=\"..\\..\\assets\\icon\\logo.jpeg\"></ion-img>\n      </ion-avatar>\n    </ion-col>\n    <ion-col size='7'>\n      <h3>{{group.data().Name}}</h3>\n      <ion-note>{{group.id}}</ion-note>\n    </ion-col>\n\n  </ion-item-divider>\n  </ion-row>\n</ion-content>\n<ion-footer>\n  <ion-segment [(ngModel)]='segment' swipeGesture=true>\n    <ion-segment-button color=\"dark\" (click)='changePage()' value=\"code\">\n      <ion-icon name=\"barcode-outline\"></ion-icon>\n      join using code\n    </ion-segment-button>\n    <ion-segment-button color=\"dark\" (click)='changePage()' value=\"name\">\n      <ion-icon name=\"search-circle-outline\"></ion-icon>\n      search group names\n    </ion-segment-button>\n  </ion-segment>\n</ion-footer>\n");

/***/ })

}]);
//# sourceMappingURL=groups-page-groups-page-module.js.map