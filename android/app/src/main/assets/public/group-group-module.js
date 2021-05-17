(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["group-group-module"],{

/***/ "8xUH":
/*!***************************************!*\
  !*** ./src/app/group/group.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJncm91cC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "J4zT":
/*!***************************************!*\
  !*** ./src/app/group/group.module.ts ***!
  \***************************************/
/*! exports provided: GroupPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupPageModule", function() { return GroupPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _group_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./group-routing.module */ "c+jM");
/* harmony import */ var _group_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./group.page */ "mbZD");







let GroupPageModule = class GroupPageModule {
};
GroupPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _group_routing_module__WEBPACK_IMPORTED_MODULE_5__["GroupPageRoutingModule"]
        ],
        declarations: [_group_page__WEBPACK_IMPORTED_MODULE_6__["GroupPage"]]
    })
], GroupPageModule);



/***/ }),

/***/ "c+jM":
/*!***********************************************!*\
  !*** ./src/app/group/group-routing.module.ts ***!
  \***********************************************/
/*! exports provided: GroupPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupPageRoutingModule", function() { return GroupPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _group_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./group.page */ "mbZD");




const routes = [
    {
        path: '',
        component: _group_page__WEBPACK_IMPORTED_MODULE_3__["GroupPage"]
    }
];
let GroupPageRoutingModule = class GroupPageRoutingModule {
};
GroupPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], GroupPageRoutingModule);



/***/ }),

/***/ "mbZD":
/*!*************************************!*\
  !*** ./src/app/group/group.page.ts ***!
  \*************************************/
/*! exports provided: GroupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupPage", function() { return GroupPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_group_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./group.page.html */ "rrFO");
/* harmony import */ var _group_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./group.page.scss */ "8xUH");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _groups_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../groups-service.service */ "QLx/");
/* harmony import */ var _clist_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../clist.service */ "wp6f");
/* harmony import */ var _plan_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../plan.service */ "Kddg");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");





/* eslint-disable max-len */

/* eslint-disable @typescript-eslint/no-unused-expressions */




let GroupPage = class GroupPage {
    constructor(router, grpSrv, planSrv, listSrv, activatedRoute, actionSheetController) {
        this.router = router;
        this.grpSrv = grpSrv;
        this.planSrv = planSrv;
        this.listSrv = listSrv;
        this.activatedRoute = activatedRoute;
        this.actionSheetController = actionSheetController;
        this.plans = [];
        this.contLists = [];
        this.displayPlans = true;
        this.displaylists = true;
        this.chevronIcon = 'chevron-down-outline';
        this.listChevronIcon = 'chevron-down-outline';
        this.id = this.activatedRoute.snapshot.paramMap.get('id');
        this.grpSrv.getgroup(this.id).get().subscribe(res => this.g = res);
        this.planSrv.getPlans(this.id).subscribe(res => res.forEach(plan => this.plans.push(plan)));
        this.listSrv.getgroupLists(this.id).subscribe(res => res.forEach(list => this.contLists.push(list)));
        this.grpSrv.getgroup(this.id).get().subscribe(res => this.g = res);
    }
    ngOnInit() {
    }
    viewPlan(id) {
        this.router.navigateByUrl('task/' + id);
    }
    viewList(id) {
        this.router.navigateByUrl('contrbution-list/' + id);
    }
    togglePlans() {
        if (this.displayPlans) {
            this.chevronIcon = 'chevron-forward-outline';
            this.displayPlans = false;
        }
        else {
            this.chevronIcon = 'chevron-down-outline';
            this.displayPlans = true;
        }
    }
    togglecList() {
        if (this.displaylists) {
            this.listChevronIcon = 'chevron-forward-outline';
            this.displaylists = false;
        }
        else {
            this.listChevronIcon = 'chevron-down-outline';
            this.displaylists = true;
        }
    }
    goCalender() {
        this.router.navigateByUrl('calender/' + this.id);
    }
    goChat() {
        this.router.navigateByUrl('chat/' + this.id);
    }
    presentActionSheet() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                header: 'Create',
                cssClass: 'my-custom-class',
                buttons: [
                    {
                        text: 'Create Contbution List',
                        icon: 'add',
                        handler: () => {
                            this.router.navigateByUrl('contrbution-list-form');
                        }
                    },
                    {
                        text: 'Create a new Plan',
                        icon: 'add',
                        handler: () => {
                            this.router.navigateByUrl('plan-form/' + this.id);
                        }
                    },
                    {
                        text: 'Cancel',
                        icon: 'close',
                        role: 'cancel',
                        handler: () => {
                            console.log('Cancel clicked');
                        }
                    }
                ]
            });
            yield actionSheet.present();
            const { role } = yield actionSheet.onDidDismiss();
            console.log('onDidDismiss resolved with role', role);
        });
    }
};
GroupPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _groups_service_service__WEBPACK_IMPORTED_MODULE_5__["GroupsServiceService"] },
    { type: _plan_service__WEBPACK_IMPORTED_MODULE_7__["PlanService"] },
    { type: _clist_service__WEBPACK_IMPORTED_MODULE_6__["ClistService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"] }
];
GroupPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Component"])({
        selector: 'app-group',
        template: _raw_loader_group_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_group_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], GroupPage);



/***/ }),

/***/ "rrFO":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/group/group.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar class=\"myBackgroundColor\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button color='light' defaultHref=\"home\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title *ngIf=\"g\" color='light'>{{g.data().Name}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-searchbar></ion-searchbar>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col size='10'><h3>plans</h3></ion-col>\r\n      <ion-col size='2' style='align-self: flex-end;'><ion-button (click)='togglePlans()' fill='clear' color='dark'><ion-icon [name]=\"chevronIcon\"></ion-icon></ion-button></ion-col>\r\n    </ion-row>\r\n    <div *ngIf=\"displayPlans\">\r\n    <ion-row *ngFor=\"let plan of plans; let i = index \" >\r\n      <ion-item-divider class='divider' >\r\n      <ion-col  size=\"1\">\r\n        <ion-img style=\"height:24px; width: 24px;\" src=\"..\\..\\assets\\icon\\planning.png\"></ion-img>\r\n      </ion-col>\r\n      <ion-col (click)='viewPlan(plan.id)' size=\"9\">\r\n       <h4  class='mfont' style=\"margin-top:0px ;\">\r\n        <b style='vertical-align: -webkit-baseline-middle;'>{{plan.data().Title}}</b></h4>\r\n      </ion-col>\r\n      <ion-col size='2'>\r\n          <ion-button color=\"dark\" fill=\"clear\">\r\n            <ion-icon name=\"ellipsis-vertical\"></ion-icon>\r\n          </ion-button>\r\n      </ion-col>\r\n      <ion-item-divider></ion-item-divider>\r\n    </ion-item-divider>\r\n    </ion-row>\r\n  </div>\r\n  </ion-grid>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col size='10'><h3>Contbution Lists</h3></ion-col>\r\n      <ion-col size='2' style='align-self: flex-end;'><ion-button (click)='togglecList()' fill='clear' color='dark'><ion-icon [name]=\"listChevronIcon\"></ion-icon></ion-button></ion-col>\r\n    </ion-row>\r\n    <div *ngIf=\"displaylists\">\r\n    <ion-row *ngFor=\"let list of contLists; let i = index \" >\r\n      <ion-item-divider class='divider' >\r\n      <ion-col  size=\"1\">\r\n        <ion-img style=\"height:24px; width: 24px;\" src=\"..\\..\\assets\\icon\\attendant-list.png\"></ion-img>\r\n      </ion-col>\r\n      <ion-col (click)='viewList(list.id)' size=\"9\">\r\n       <h4  class='mfont' style=\"margin-top:0px ;\">\r\n        <b style='vertical-align: -webkit-baseline-middle;'>{{list.data().Title}}</b></h4>\r\n      </ion-col>\r\n      <ion-col size='2'>\r\n          <ion-button color=\"dark\" fill=\"clear\">\r\n            <ion-icon name=\"ellipsis-vertical\"></ion-icon>\r\n          </ion-button>\r\n      </ion-col>\r\n      <ion-item-divider></ion-item-divider>\r\n    </ion-item-divider>\r\n    </ion-row>\r\n  </div>\r\n  </ion-grid>\r\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n    <ion-fab-button (click)='presentActionSheet()'>\r\n      <ion-icon name=\"add\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n</ion-content>\r\n<ion-footer>\r\n  <ion-row>\r\n    <ion-col  size='6' class=\"ion-no-padding\"><ion-button (click)='goChat()' color='dark' fill='outline' size='large' expand='full'><ion-icon name=\"chatbubbles\"></ion-icon>Chat Lobby</ion-button></ion-col>\r\n    <ion-col size='6' class=\"ion-no-padding\"><ion-button (click)='goCalender()' color='dark' fill='outline' size='large' expand='full'><ion-icon name=\"calendar\"></ion-icon>Calender</ion-button>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-footer>\r\n");

/***/ })

}]);
//# sourceMappingURL=group-group-module.js.map