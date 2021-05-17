(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "A3+G":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "zpKS");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"],
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], HomePageRoutingModule);



/***/ }),

/***/ "WcN3":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar class=\"myBackgroundColor\">\r\n    <ion-title color=\"light\">\r\n      Collaber\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"refresh()\">\r\n    <ion-refresher-content></ion-refresher-content>\r\n  </ion-refresher>\r\n  <ion-searchbar placeholder=\"Filter groups\" (ionInput)=\"getItems($event)\"></ion-searchbar>\r\n  <ion-grid>\r\n    <ion-row *ngFor=\"let group of myGroups; let i = index \" >\r\n      <ion-item-divider class='divider' >\r\n      <ion-col  size=\"2\">\r\n        <ion-avatar>\r\n        <ion-img src=\"..\\..\\assets\\icon\\logo.jpeg\"></ion-img>\r\n        </ion-avatar>\r\n      </ion-col>\r\n      <ion-col (click)='viewGroup(group.id)'  *ngIf=\"group.data().isPrivate\" size=\"8\">\r\n       <h4  class='mfont'><ion-icon name=\"lock-closed\"></ion-icon>&nbsp; <b style='vertical-align: top'>{{group.data().Name}}</b></h4>\r\n      </ion-col>\r\n      <ion-col (click)='viewGroup(group.id)'  *ngIf=\"!group.data().isPrivate\" size=\"8\">\r\n        <h4 class='mfont'> <b >{{group.data().Name }}</b></h4>\r\n      </ion-col>\r\n      <ion-col size='2'>\r\n          <ion-button (click)=\"presentPopover($event,group.id,isAdmin[i])\" color=\"dark\" fill=\"clear\">\r\n            <ion-icon name=\"ellipsis-vertical\"></ion-icon>\r\n          </ion-button>\r\n      </ion-col>\r\n      <ion-item-divider></ion-item-divider>\r\n    </ion-item-divider>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n    <ion-fab-button (click)='createGroup()'>\r\n      <ion-icon name=\"people-outline\"></ion-icon><ion-icon name=\"add\"></ion-icon>\r\n    </ion-fab-button>\r\n\r\n  </ion-fab>\r\n  <ion-fab vertical=\"bottom\" horizontal=\"start\" >\r\n    <ion-fab-button color='success' (click)='goJoin()'>\r\n      <ion-icon name=\"search\"></ion-icon>\r\n    </ion-fab-button>\r\n\r\n  </ion-fab>\r\n\r\n</ion-content>\r\n<ion-footer>\r\n\r\n</ion-footer>\r\n");

/***/ }),

/***/ "ct+p":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.page */ "zpKS");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-routing.module */ "A3+G");







let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomePageRoutingModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "f6od":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBRWxCLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsUUFBUTtFQUNSLFFBQVE7RUFDUiwyQkFBMkI7QUFBN0I7O0FBR0E7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0FBQW5COztBQUdBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUVqQixjQUFjO0VBRWQsU0FBUztBQUZYOztBQUtBO0VBQ0UscUJBQXFCO0FBRnZCIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4jY29udGFpbmVyIHN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG5cbiNjb250YWluZXIgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG5cbiAgY29sb3I6ICM4YzhjOGM7XG5cbiAgbWFyZ2luOiAwO1xufVxuXG4jY29udGFpbmVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cblxuIl19 */");

/***/ }),

/***/ "zpKS":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./home.page.html */ "WcN3");
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.page.scss */ "f6od");
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../users.service */ "U0XV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _groups_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../groups-service.service */ "QLx/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _grouppopover_grouppopover_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../grouppopover/grouppopover.component */ "T5p3");




/* eslint-disable eqeqeq */
/* eslint-disable curly */

/* eslint-disable max-len */
/* eslint-disable no-var */
/* eslint-disable @typescript-eslint/prefer-for-of */
/* eslint-disable arrow-body-style */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable @typescript-eslint/member-delimiter-style */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/type-annotation-spacing */




let HomePage = class HomePage {
    constructor(userSrv, loadingController, groupSrv, popoverController, alertController, router) {
        this.userSrv = userSrv;
        this.loadingController = loadingController;
        this.groupSrv = groupSrv;
        this.popoverController = popoverController;
        this.alertController = alertController;
        this.router = router;
        this.myGroups = [];
        this.currentPopover = null;
        this.count = 0;
        this.isAdmin = [];
        this.seg = 'home';
        this.presentLoading();
        this.groupSrv.getGroups2().subscribe(res => {
            if (this.count < 1) {
                this.count++;
                res.map(r => {
                    this.isAdmin.push(r.isAdmin);
                    let myref = this.groupSrv.getMyref(r.groupID);
                    myref.get().subscribe((snap) => {
                        if (snap.exists) {
                            console.log(snap.id);
                            this.myGroups.push((snap));
                        }
                        else
                            console.log('no data');
                    });
                });
            }
            this.loadingController.dismiss();
            this.filteredList = this.myGroups;
        });
        //this.filteredList=this.myGroups;
    }
    getItems(ev) {
        this.myGroups = this.filteredList;
        let v = ev.target.value;
        this.myGroups = this.myGroups.filter((product) => { return (product.data().Name.toLowerCase().indexOf(v.toLowerCase()) > -1); });
    }
    presentPopover(ev, i, isAd) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let popover = yield this.popoverController.create({
                component: _grouppopover_grouppopover_component__WEBPACK_IMPORTED_MODULE_8__["GrouppopoverComponent"],
                event: ev,
                componentProps: { id: i, admin: isAd },
                translucent: true
            });
            this.currentPopover = popover;
            return popover.present();
        });
    }
    createGroup() {
        this.router.navigateByUrl('\create-group-form');
    }
    refresh() {
        window.location.reload();
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
    changePage() {
        return;
    }
    viewGroup(id) {
        this.router.navigateByUrl('group/' + id);
    }
    goJoin() {
        this.router.navigateByUrl('groups-page');
    }
    file() {
        this.router.navigateByUrl('files');
    }
};
HomePage.ctorParameters = () => [
    { type: _users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"] },
    { type: _groups_service_service__WEBPACK_IMPORTED_MODULE_5__["GroupsServiceService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["PopoverController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map