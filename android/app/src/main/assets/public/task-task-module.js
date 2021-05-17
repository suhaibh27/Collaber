(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["task-task-module"],{

/***/ "+4SW":
/*!*********************************************!*\
  !*** ./src/app/task/task-routing.module.ts ***!
  \*********************************************/
/*! exports provided: TaskPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskPageRoutingModule", function() { return TaskPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _task_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./task.page */ "mR2m");




const routes = [
    {
        path: '',
        component: _task_page__WEBPACK_IMPORTED_MODULE_3__["TaskPage"]
    }
];
let TaskPageRoutingModule = class TaskPageRoutingModule {
};
TaskPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TaskPageRoutingModule);



/***/ }),

/***/ "09GQ":
/*!*************************************!*\
  !*** ./src/app/task/task.module.ts ***!
  \*************************************/
/*! exports provided: TaskPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskPageModule", function() { return TaskPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _task_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./task-routing.module */ "+4SW");
/* harmony import */ var _task_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./task.page */ "mR2m");







let TaskPageModule = class TaskPageModule {
};
TaskPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _task_routing_module__WEBPACK_IMPORTED_MODULE_5__["TaskPageRoutingModule"]
        ],
        declarations: [_task_page__WEBPACK_IMPORTED_MODULE_6__["TaskPage"]]
    })
], TaskPageModule);



/***/ }),

/***/ "Cep8":
/*!*************************************!*\
  !*** ./src/app/task/task.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#card-outline {\n  height: 130px;\n}\n\n#title {\n  position: absolute;\n  font-size: 17px;\n  top: 2%;\n}\n\n#creator {\n  position: absolute;\n  top: 37%;\n  font-size: 17px;\n}\n\n#more-details {\n  position: absolute;\n  bottom: 2%;\n  font-size: 17px;\n}\n\n#prg-title {\n  font-size: 15px;\n  padding: 0px;\n  letter-spacing: 1px;\n}\n\n#card-avatar {\n  height: 70px;\n  width: 70px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHRhc2sucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsYUFBYTtBQUNkOztBQUdBO0VBQ0ksa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixPQUFPO0FBQVg7O0FBRUE7RUFDSSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLGVBQWU7QUFDbkI7O0FBRUE7RUFDSSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGVBQWU7QUFDbkI7O0FBRUE7RUFDSSxlQUFlO0VBQ2YsWUFBVztFQUNYLG1CQUFtQjtBQUN2Qjs7QUFDQTtFQUNJLFlBQVk7RUFDWixXQUFXO0FBRWYiLCJmaWxlIjoidGFzay5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY2FyZC1vdXRsaW5le1xyXG4gaGVpZ2h0OiAxMzBweDtcclxuICAgIFxyXG5cclxufVxyXG4jdGl0bGV7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICB0b3A6IDIlO1xyXG59XHJcbiNjcmVhdG9ye1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAzNyU7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcblxyXG59XHJcbiNtb3JlLWRldGFpbHN7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDIlO1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG5cclxufVxyXG4jcHJnLXRpdGxle1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgcGFkZGluZzowcHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG59XHJcbiNjYXJkLWF2YXRhcntcclxuICAgIGhlaWdodDogNzBweDtcclxuICAgIHdpZHRoOiA3MHB4O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "dV4v":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/task/task.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar class=\"myBackgroundColor\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button color='light' defaultHref=\"home\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title color=\"light\">{{name}}\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-margin-top\">\r\n  <ion-item>\r\n    <ion-text style=\"font-size: large;\" class=\"ion-margin\">Description: {{desc}}</ion-text>\r\n  </ion-item>\r\n  <div *ngIf=\"tasks.length<=0\" style=\"text-align: -webkit-center;height: 100%; padding-top: 50%; text-align-last: center;\">\r\n    <ion-text style=\"font-size: xx-large;\">\r\n          You Have No Tasks Here !\r\n    </ion-text>\r\n    <ion-button (click)='addTask()'>Add a Task here</ion-button>\r\n  </div>\r\n  <ion-list *ngFor=\"let item of tasks; let i = index\" lines=\"none\"> <!-- i will make this based on array in task.page.ts, change this and connect it to firestore -->\r\n    <ion-card id=\"card-outline\">\r\n        <!--you can change the task [color]=\"color\" based on the date from the database-->\r\n      <!-- i didnt do this because the date from firestore will have another formate so it is better to do it directly -->\r\n    <ion-grid>\r\n      <ion-row (click)='detail(item.id)'>\r\n        <ion-col size=\"3\">\r\n          <ion-avatar id=\"card-avatar\">\r\n            <ion-img src=\"..\\..\\assets\\icon\\logo.jpeg\"></ion-img>\r\n          </ion-avatar>\r\n        </ion-col>\r\n        <ion-col size=\"9\">\r\n          <ion-text id=\"title\">Title: {{item.data().title}} </ion-text><br>\r\n          <ion-text>Due: {{this.toDateTime(item.data().dueDate).toString().slice(0,21)}}\r\n          </ion-text><ion-note *ngIf=\"isOverdue(this.toDateTime(item.data().dueDate))\" color='danger'>(Overdue)</ion-note>\r\n            <br>\r\n          <ion-text *ngIf=\"this.username[i]\"> Created By: {{this.username[i].username}}</ion-text><br>\r\n          <a routerLink='../task-details/{{item.id}}' id=\"more-details\"> View Task Details>> </a> <br>\r\n        </ion-col>\r\n      </ion-row>\r\n      <br>\r\n      <ion-row>\r\n        <ion-col size=\"3\" id=\"prg-title\">Progress</ion-col>\r\n        <ion-col size=\"9\"> <ion-progress-bar color=\"success\" [value]=\"progress[i]\" id=\"prg-bar\"></ion-progress-bar></ion-col>\r\n      </ion-row>\r\n      </ion-grid>\r\n    </ion-card>\r\n  </ion-list>\r\n  <ion-fab *ngIf=\"tasks.length>0\" vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n    <ion-fab-button (click)='addTask()'>\r\n      <ion-icon name=\"add\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n</ion-content>\r\n");

/***/ }),

/***/ "mR2m":
/*!***********************************!*\
  !*** ./src/app/task/task.page.ts ***!
  \***********************************/
/*! exports provided: TaskPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskPage", function() { return TaskPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_task_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./task.page.html */ "dV4v");
/* harmony import */ var _task_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task.page.scss */ "Cep8");
/* harmony import */ var _plan_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../plan.service */ "Kddg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _tasks_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../tasks.service */ "0KrY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");




/* eslint-disable no-var */


/* eslint-disable @typescript-eslint/type-annotation-spacing */
/* eslint-disable @typescript-eslint/member-delimiter-style */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable @typescript-eslint/member-ordering */


let TaskPage = class TaskPage {
    constructor(planSrv, router, activatedRoute, taskSrv, loadingController) {
        this.planSrv = planSrv;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.taskSrv = taskSrv;
        this.loadingController = loadingController;
        this.tasks = [];
        this.planId = 'ISjS0B7sqvjonjiZ3BQo';
        this.username = [];
        this.progress = [];
        this.name = 'plan';
        this.desc = '';
        this.planId = this.activatedRoute.snapshot.paramMap.get('id');
        this.planSrv.getPlan(this.planId).subscribe(res => { this.plan = res.data(); this.name = this.plan.Title; this.desc = this.plan.Description; });
        this.presentLoading();
        this.taskSrv.getTasks(this.planId).subscribe(res => {
            res.forEach(r => {
                (this.tasks.push(r));
                this.tasks.forEach((ros, index) => { this.getUsername(ros.data().creator); this.progress.push(this.calcProgress(ros.id, index)); });
            });
            loadingController.dismiss();
        });
    }
    ngOnInit() {
    }
    //for the date type it will differ from the firestore so you can use the best method to show DD-MM-YYYY in the tasks page
    presentLoading() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                cssClass: 'my-custom-class',
                message: 'Please wait...',
                duration: 2000
            });
            yield loading.present();
            const { role, data } = yield loading.onDidDismiss();
            console.log('Loading dismissed!');
        });
    }
    getUsername(id) {
        let name;
        this.taskSrv.getuser(id).subscribe(res => { this.username.push(res.data()); });
    }
    calcProgress(id, index) {
        let count = 0;
        let finshed = 0;
        this.taskSrv.getSteps(id).subscribe(data => { data.forEach(res => { if (res.data().isFinished) {
            finshed += 1;
        } count++; }); this.progress[index] = finshed / count; });
    }
    detail(id) {
        this.router.navigateByUrl('task-details/' + id);
    }
    addTask() {
        this.router.navigateByUrl('plan-form-next/' + this.planId);
    }
    toDateTime(secs) {
        var t = secs.toDate();
        return t;
    }
    isOverdue(d) {
        let now = new Date();
        let due = new Date(d);
        if (due < now) {
            return true;
        }
        return false;
    }
};
TaskPage.ctorParameters = () => [
    { type: _plan_service__WEBPACK_IMPORTED_MODULE_3__["PlanService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _tasks_service__WEBPACK_IMPORTED_MODULE_5__["TasksService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"] }
];
TaskPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: 'app-task',
        template: _raw_loader_task_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_task_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], TaskPage);



/***/ })

}]);
//# sourceMappingURL=task-task-module.js.map