(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contrbution-list-contrbution-list-module"],{

/***/ "5Gvg":
/*!***********************************************************!*\
  !*** ./src/app/contrbution-list/contrbution-list.page.ts ***!
  \***********************************************************/
/*! exports provided: ContrbutionListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContrbutionListPage", function() { return ContrbutionListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_contrbution_list_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./contrbution-list.page.html */ "LrLi");
/* harmony import */ var _contrbution_list_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contrbution-list.page.scss */ "d6XV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _clist_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../clist.service */ "wp6f");
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../users.service */ "U0XV");
/* harmony import */ var _groups_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../groups-service.service */ "QLx/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "kU1M");





/* eslint-disable eqeqeq */
/* eslint-disable no-var */

/* eslint-disable curly */
/* eslint-disable prefer-const */
/* eslint-disable max-len */




let ContrbutionListPage = class ContrbutionListPage {
    constructor(activatedRoute, alertController, groupSrv, userSrv, listSrv) {
        this.activatedRoute = activatedRoute;
        this.alertController = alertController;
        this.groupSrv = groupSrv;
        this.userSrv = userSrv;
        this.listSrv = listSrv;
        this.isjoined = [];
        //thisGroup;
        this.users = [];
        this.usersNames = [];
        this.usersjoinedDocs = [];
        this.listID = '';
        this.grId = '';
    }
    ngOnInit() {
        this.listID = this.activatedRoute.snapshot.paramMap.get('id');
        //this.groupSrv.getgroup(this.grId).get().subscribe(res=>{this.thisGroup=res.data();});
        this.listSrv.getcList(this.listID).get().subscribe(res => {
            this.dataObj = res.data();
            this.grId = this.dataObj.groupID;
            this.title = this.dataObj.Title;
            this.description = this.dataObj.Description;
            this.date = this.toDateTime(this.dataObj.dateTime).toISOString();
            this.location = this.dataObj.Location;
            this.locLink = this.dataObj.locationLink;
            this.groupSrv.getGroupUsers(this.grId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["take"])(1)).subscribe(r => r.forEach(re => {
                console.log(this.isjoined.push(false));
                this.users.push(re.userID);
                this.listSrv.getJoinedUsers(this.listID).subscribe(ro => ro.forEach(u => {
                    if (this.users.includes(u.data().userID)) {
                        this.isjoined[this.users.indexOf(u.data().userID)] = true;
                        this.usersjoinedDocs.push(u.id);
                    }
                    else {
                        this.usersjoinedDocs.push('');
                    }
                    ;
                }));
                this.groupSrv.getuser(re.userID).then(n => n.get().subscribe(us => this.usersNames.push(us.data())));
            }));
        });
    }
    toggleJoin(index) {
        if (this.isjoined[index]) {
            this.presentAlertConfirm('unjoin', index);
        }
        else {
            this.presentAlertConfirm('join', index);
        }
    }
    toDateTime(secs) {
        var t = new Date(Date.UTC(10001, 0, 1)); // Epoch
        t.setSeconds(secs);
        return t;
    }
    save() {
        return;
    }
    disable(u) {
        if (this.users[u] != 'QSqITrKDOZPEY7qo68OnkTsXF8q1') {
            return 'disabled';
        }
        return '';
    }
    myUser(i) {
        if (this.users[i] == 'QSqITrKDOZPEY7qo68OnkTsXF8q1') {
            return 'secondary';
        }
        return '';
    }
    presentAlertConfirm(stat, index) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Confirm!',
                message: 'Are you sure you want to ' + stat,
                buttons: [
                    {
                        text: 'Nope',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            this.isjoined[index] = !this.isjoined[index];
                        }
                    }, {
                        text: 'Yes',
                        handler: () => {
                            //update database server
                            this.listSrv.updateJoin(this.users[index], this.isjoined[index], this.listID, this.usersjoinedDocs[index]);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
ContrbutionListPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _groups_service_service__WEBPACK_IMPORTED_MODULE_7__["GroupsServiceService"] },
    { type: _users_service__WEBPACK_IMPORTED_MODULE_6__["UsersService"] },
    { type: _clist_service__WEBPACK_IMPORTED_MODULE_5__["ClistService"] }
];
ContrbutionListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["Component"])({
        selector: 'app-contrbution-list',
        template: _raw_loader_contrbution_list_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_contrbution_list_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ContrbutionListPage);



/***/ }),

/***/ "8ki3":
/*!*********************************************************************!*\
  !*** ./src/app/contrbution-list/contrbution-list-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: ContrbutionListPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContrbutionListPageRoutingModule", function() { return ContrbutionListPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _contrbution_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contrbution-list.page */ "5Gvg");




const routes = [
    {
        path: '',
        component: _contrbution_list_page__WEBPACK_IMPORTED_MODULE_3__["ContrbutionListPage"]
    }
];
let ContrbutionListPageRoutingModule = class ContrbutionListPageRoutingModule {
};
ContrbutionListPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ContrbutionListPageRoutingModule);



/***/ }),

/***/ "93Sp":
/*!*************************************************************!*\
  !*** ./src/app/contrbution-list/contrbution-list.module.ts ***!
  \*************************************************************/
/*! exports provided: ContrbutionListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContrbutionListPageModule", function() { return ContrbutionListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _contrbution_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contrbution-list-routing.module */ "8ki3");
/* harmony import */ var _contrbution_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contrbution-list.page */ "5Gvg");







let ContrbutionListPageModule = class ContrbutionListPageModule {
};
ContrbutionListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _contrbution_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["ContrbutionListPageRoutingModule"]
        ],
        declarations: [_contrbution_list_page__WEBPACK_IMPORTED_MODULE_6__["ContrbutionListPage"]]
    })
], ContrbutionListPageModule);



/***/ }),

/***/ "LrLi":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contrbution-list/contrbution-list.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar class=\"myBackgroundColor\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button color='light' defaultHref=\"home\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-buttons class=\"ion-margin-end\" slot=\"end\">\r\n      <ion-icon size='large' color='light' name=\"create-outline\"></ion-icon>\r\n    </ion-buttons>\r\n    <ion-title color='light'>{{this.title}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <div>\r\n    <ion-item>\r\n      <h4    class=\"ion-margin\">{{this.description}}</h4>\r\n    </ion-item>\r\n    <h4 class=\"ion-margin mheader\">Date and Time</h4>\r\n    <ion-item class=\"ion-no-margin\">\r\n          <ion-button fill='clear' class=\"mpickers no-click\">\r\n          <ion-icon class=\"mMargin-bottom\" name=\"calendar-outline\"></ion-icon>\r\n          <ion-datetime [(ngModel)]=\"date\"  class=\"ion-margin\"></ion-datetime>\r\n          </ion-button>\r\n          <ion-button fill='clear' class=\"mpickers no-click\">\r\n          <ion-icon class=\"mMargin-bottom ion-margin-start\" name=\"time-outline\"></ion-icon>\r\n          <ion-datetime class=\"ion-margin\" display-format=\"h:mm A\" picker-format=\"h:mm A\" [(ngModel)]=\"date\"></ion-datetime>\r\n          </ion-button>\r\n    </ion-item>\r\n    <ion-item>\r\n      <h4 class=\" mLheader ion-margin\">Location:</h4>\r\n      <ion-icon name=\"location-outline\"></ion-icon>\r\n      <a style=\"font-size: large;\" class='ion-margin-top' [href]=\"this.locLink\">{{this.location}}</a>\r\n    </ion-item>\r\n  </div>\r\n  <ion-grid>\r\n    <ion-row *ngFor=\"let user of usersNames; let i=index\" >\r\n      <ion-item-divider [color]=\"myUser(i)\" class='divider' >\r\n      <ion-col size=\"3\">\r\n        <ion-avatar>\r\n        <ion-img src=\"..\\..\\assets\\icon\\logo.jpeg\"></ion-img>\r\n        </ion-avatar>\r\n      </ion-col>\r\n      <ion-col  size=\"4\">\r\n        <h4 class='mfont ion-no-margin'>{{user.username}}</h4>\r\n      </ion-col>\r\n      <ion-col  size=\"5\" >\r\n        <ion-item [color]=\"myUser(i)\" lines='none' >\r\n          <ion-label  class=\"ion-no-margin\" color='success' *ngIf=\"this.isjoined[i]\">Joined</ion-label>\r\n          <ion-label class=\"ion-no-margin\" color='danger' *ngIf=\"!this.isjoined[i]\">not Joined</ion-label>\r\n          <ion-checkbox (click)='toggleJoin(i)' [(ngModel)]=\"isjoined[i]\" class=\"ion-no-margin \" [class]=\"disable(i)\"></ion-checkbox>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-item-divider>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n");

/***/ }),

/***/ "d6XV":
/*!*************************************************************!*\
  !*** ./src/app/contrbution-list/contrbution-list.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".micon {\n  position: absolute;\n  top: 50%;\n  right: 5%;\n  transform: translate(-50%, -50%);\n  display: block;\n}\n\n.mheader {\n  font-family: \"Times New Roman\", Times, serif;\n  margin-bottom: 0px;\n}\n\n.mLheader {\n  font-family: \"Times New Roman\", Times, serif;\n  color: #000;\n}\n\na {\n  margin-bottom: 10px;\n}\n\n.disabled {\n  pointer-events: none;\n  opacity: 0.6;\n}\n\n.mpickers {\n  width: 100%;\n  height: 100%;\n  font-size: large;\n  color: #000;\n}\n\n.mMargin-bottom {\n  margin-bottom: 10px;\n}\n\n.no-click {\n  pointer-events: none;\n}\n\n.this-user {\n  background-color: aqua !important;\n  color: #000;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNvbnRyYnV0aW9uLWxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQU8sa0JBQWtCO0VBQ3ZCLFFBQVE7RUFDUixTQUFTO0VBQ1QsZ0NBQWdDO0VBQ2hDLGNBQWM7QUFFaEI7O0FBREE7RUFDSSw0Q0FBNEM7RUFDNUMsa0JBQWtCO0FBSXRCOztBQUZFO0VBQ0UsNENBQTRDO0VBQzVDLFdBQVc7QUFLZjs7QUFGRTtFQUNFLG1CQUFtQjtBQUt2Qjs7QUFGRTtFQUNFLG9CQUFvQjtFQUNwQixZQUFZO0FBS2hCOztBQUhFO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWCxnQkFDTTtFQUNQLFdBQVc7QUFLZjs7QUFIQTtFQUNFLG1CQUFtQjtBQU1yQjs7QUFIQTtFQUNFLG9CQUFtQjtBQU1yQjs7QUFKQTtFQUNFLGlDQUFpQztFQUNqQyxXQUFXO0FBT2IiLCJmaWxlIjoiY29udHJidXRpb24tbGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWljb257cG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIHJpZ2h0OiA1JTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICBkaXNwbGF5OiBibG9jazt9XHJcbi5taGVhZGVyIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlRpbWVzIE5ldyBSb21hblwiLCBUaW1lcywgc2VyaWY7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgfVxyXG4gIC5tTGhlYWRlciB7XHJcbiAgICBmb250LWZhbWlseTogXCJUaW1lcyBOZXcgUm9tYW5cIiwgVGltZXMsIHNlcmlmO1xyXG4gICAgY29sb3I6ICMwMDA7XHJcblxyXG4gIH1cclxuICBhe1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB9XHJcblxyXG4gIC5kaXNhYmxlZCB7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIG9wYWNpdHk6IDAuNjtcclxuICB9XHJcbiAgLm1waWNrZXJze1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgZm9udC1zaXplOlxyXG4gICAgICBsYXJnZTtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gIH1cclxuLm1NYXJnaW4tYm90dG9te1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5uby1jbGljayB7XHJcbiAgcG9pbnRlci1ldmVudHM6bm9uZTsgLy9UaGlzIG1ha2VzIGl0IG5vdCBjbGlja2FibGVcclxufVxyXG4udGhpcy11c2Vye1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGFxdWEgIWltcG9ydGFudDtcclxuICBjb2xvcjogIzAwMDtcclxufVxyXG5cclxuIl19 */");

/***/ })

}]);
//# sourceMappingURL=contrbution-list-contrbution-list-module.js.map