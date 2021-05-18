(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+sYO":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/grouppopover/grouppopover.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-list>\r\n  <ion-item *ngIf='admin' (click)='edit()' button>Edit</ion-item>\r\n  <ion-item button>Leave</ion-item>\r\n  <ion-item (click)='view()' button>View Info</ion-item>\r\n  <ion-item (click)='code()' button>Copy Code</ion-item>\r\n</ion-list>\r\n");

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! G:\suhaib\uni\collaber\src\main.ts */"zUnb");


/***/ }),

/***/ "3aCR":
/*!*******************************************!*\
  !*** ./src/app/response/response.page.ts ***!
  \*******************************************/
/*! exports provided: ResponsePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponsePage", function() { return ResponsePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_response_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./response.page.html */ "Hk/Y");
/* harmony import */ var _response_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./response.page.scss */ "Soql");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");






let ResponsePage = class ResponsePage {
    constructor(modalController, router) {
        this.modalController = modalController;
        this.router = router;
    }
    ngOnInit() {
    }
    close() {
        this.modalController.dismiss();
    }
};
ResponsePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
ResponsePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-response',
        template: _raw_loader_response_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_response_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ResponsePage);



/***/ }),

/***/ "5MzG":
/*!*******************************************!*\
  !*** ./src/app/map/map-routing.module.ts ***!
  \*******************************************/
/*! exports provided: MapPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapPageRoutingModule", function() { return MapPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _map_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./map.page */ "SQ20");




const routes = [
    {
        path: '',
        component: _map_page__WEBPACK_IMPORTED_MODULE_3__["MapPage"]
    }
];
let MapPageRoutingModule = class MapPageRoutingModule {
};
MapPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MapPageRoutingModule);



/***/ }),

/***/ "AkbP":
/*!*****************************************************!*\
  !*** ./src/app/response/response-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: ResponsePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponsePageRoutingModule", function() { return ResponsePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _response_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./response.page */ "3aCR");




const routes = [
    {
        path: '',
        component: _response_page__WEBPACK_IMPORTED_MODULE_3__["ResponsePage"]
    }
];
let ResponsePageRoutingModule = class ResponsePageRoutingModule {
};
ResponsePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ResponsePageRoutingModule);



/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* eslint-disable @typescript-eslint/quotes */
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyA0FchEvLNaKNfzEaVKc3RvPuS_eFQJkOA",
        authDomain: "collaber-ef166.firebaseapp.com",
        projectId: "collaber-ef166",
        storageBucket: "collaber-ef166.appspot.com",
        messagingSenderId: "80388126325",
        appId: "1:80388126325:web:062343bc3b9dd9ed1d2a3c",
        measurementId: "G-TR8T9GZFE5"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Hk/Y":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/response/response.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button (click)=\"close()\" color=\"primary\"><ion-icon name=\"close-outline\"></ion-icon></ion-button>\r\n    </ion-buttons>\r\n    <ion-title>Write your Response</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-textarea rows=\"12\" cols=\"10\"></ion-textarea>\r\n  <ion-button color=\"primary\" expand=\"block\">Send Response</ion-button>\r\n</ion-content>\r\n");

/***/ }),

/***/ "Kks8":
/*!*********************************************!*\
  !*** ./src/app/response/response.module.ts ***!
  \*********************************************/
/*! exports provided: ResponsePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponsePageModule", function() { return ResponsePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _response_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./response-routing.module */ "AkbP");
/* harmony import */ var _response_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./response.page */ "3aCR");







let ResponsePageModule = class ResponsePageModule {
};
ResponsePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _response_routing_module__WEBPACK_IMPORTED_MODULE_5__["ResponsePageRoutingModule"]
        ],
        declarations: [_response_page__WEBPACK_IMPORTED_MODULE_6__["ResponsePage"]]
    })
], ResponsePageModule);



/***/ }),

/***/ "KwcL":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/pwa-elements/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./pwa-action-sheet.entry.js": [
		"jDxf",
		43
	],
	"./pwa-camera-modal-instance.entry.js": [
		"37vE",
		44
	],
	"./pwa-camera-modal.entry.js": [
		"cJxf",
		45
	],
	"./pwa-camera.entry.js": [
		"eGHz",
		46
	],
	"./pwa-toast.entry.js": [
		"fHjd",
		47
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "KwcL";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "QLx/":
/*!*******************************************!*\
  !*** ./src/app/groups-service.service.ts ***!
  \*******************************************/
/*! exports provided: GroupsServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupsServiceService", function() { return GroupsServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");

/* eslint-disable eqeqeq */

/* eslint-disable max-len */
/* eslint-disable curly */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/member-delimiter-style */


let GroupsServiceService = class GroupsServiceService {
    constructor(afAuth, afs) {
        this.afAuth = afAuth;
        this.afs = afs;
        this.currentUser = null;
        //this.afAuth.onAuthStateChanged((user) => {
        this.currentUser = 'QSqITrKDOZPEY7qo68OnkTsXF8q1';
        //});
    }
    createGroup() {
        return;
    }
    addTousersGroups() {
        return;
    }
    getFilteredGroups(name) {
        return this.afs.collection('Groups', ref => ref.orderBy('Name').where('Name', '>=', name).where('Name', '<', name + '\uf8ff').where('isPrivate', '==', false)).get();
    }
    //move this to user service
    getuser(mid) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.afs.collection('users').doc(mid);
        });
    }
    getGroupUsers(id) {
        this.userGroupsCollectionRef = this.afs.collection('users-groups', ref => ref.where('groupID', '==', id).orderBy('isAdmin', 'desc'));
        return this.userGroupsCollectionRef.valueChanges();
    }
    getgroup(id) {
        //this.afs.collection('Groups').doc(id.toString()).get().subscribe(res=>console.log(res.data()));
        return this.afs.collection('Groups').doc(id);
    }
    deleteGroup(id) {
        return;
    }
    getGroups() {
        let groups = [];
        this.userGroupsCollectionRef = this.afs.collection('users-groups', ref => ref.where('userID', '==', 'RJvbBwI1ZtCHbEs6EWP3'));
        let count = 0;
        this.userGroupsCollectionRef.valueChanges().subscribe(res => {
            if (count < 1) {
                count++;
                res.map(r => {
                    console.log(r.groupID);
                    let myref = this.afs.collection('Groups').doc(r.groupID);
                    myref.get().subscribe((snap) => {
                        if (snap.exists) {
                            console.log(snap.id);
                            groups.push((snap));
                        }
                        else
                            console.log('no data');
                    });
                });
            }
        });
        return groups;
    }
    getGroups2() {
        let groups = [];
        this.userGroupsCollectionRef = this.afs.collection('users-groups', ref => ref.where('userID', '==', 'QSqITrKDOZPEY7qo68OnkTsXF8q1'));
        let count = 0;
        return this.userGroupsCollectionRef.valueChanges();
        //return groups;
    }
    getMyref(groupID) {
        return this.afs.collection('Groups').doc(groupID);
    }
    updateGroup(doc, newData) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(doc);
            const res = yield this.afs.collection('Groups').doc(doc).set(newData);
        });
    }
    addGroupUsers(users, name, pr, des) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let uid = [];
            for (let user of users) {
                this.usersCollectionRef = yield this.afs.collection('users', ref => ref.where('username', '==', user));
                const data = this.usersCollectionRef.get().forEach(ds => (ds.docs.forEach(d => uid.push(d.id))));
            }
            const id = (yield this.afs.collection('Groups').add({ Name: name, isPrivate: pr, Description: des })).id;
            let count = 0;
            for (let i of uid) {
                if (count == 0) {
                    this.afs.collection('users-groups').add({ userID: 'QSqITrKDOZPEY7qo68OnkTsXF8q1', groupID: id, isAdmin: true });
                    count++;
                }
                this.afs.collection('users-groups').add({ userID: i, groupID: id, isAdmin: false });
            }
        });
    }
    removeUser(id, groupid) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let doc = yield this.afs.collection('users-groups', ref => ref.where('userID', '==', id).where('groupID', '==', groupid));
            doc.get().subscribe(res => res.forEach(d => console.log(this.afs.collection('users-groups').doc(d.id).delete())));
        });
    }
    makeAdmin(id, groupid) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let doc = yield this.afs.collection('users-groups', ref => ref.where('userID', '==', id).where('groupID', '==', groupid));
            doc.get().subscribe(res => res.forEach(d => console.log(this.afs.collection('users-groups').doc(d.id).set({ userID: id, groupID: groupid, isAdmin: true }))));
        });
    }
    makeMember(id, groupid) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let doc = yield this.afs.collection('users-groups', ref => ref.where('userID', '==', id).where('groupID', '==', groupid));
            doc.get().subscribe(res => res.forEach(d => console.log(this.afs.collection('users-groups').doc(d.id).set({ userID: id, groupID: groupid, isAdmin: false }))));
        });
    }
    addUser(uid, gid) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.afs.collection('users-groups').add({ userID: uid, groupID: gid, isAdmin: false });
        });
    }
    searchbyCode(code) {
        let group = this.afs.collection('Groups').doc(code).get();
        return group;
    }
};
GroupsServiceService.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] }
];
GroupsServiceService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], GroupsServiceService);



/***/ }),

/***/ "SQ20":
/*!*********************************!*\
  !*** ./src/app/map/map.page.ts ***!
  \*********************************/
/*! exports provided: MapPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapPage", function() { return MapPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_map_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./map.page.html */ "jBmT");
/* harmony import */ var _map_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./map.page.scss */ "je6D");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @agm/core */ "pxUr");




/* eslint-disable @angular-eslint/use-lifecycle-interface */
/* eslint-disable quote-props */
/* eslint-disable prefer-const */
/* eslint-disable new-parens */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/quotes */


let MapPage = class MapPage {
    constructor(modalController, zone, mapsAPILoader, ngZone) {
        this.modalController = modalController;
        this.zone = zone;
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.options = {
            componentRestrictions: { country: "bh" },
            fields: ["formatted_address", "geometry", "name"],
            strictBounds: false,
            types: ["establishment"],
        };
        this.location = {
            latitude: 19.0760,
            longitude: 72.8777,
            zoom: 200,
            isFullScreen: true,
            markers: [
                {
                    lat: 19.0760,
                    lng: 72.8777,
                    draggable: true
                }
            ]
        };
    }
    ngOnInit() {
        //load Places Autocomplete
        this.mapsAPILoader.load().then(() => {
            this.setCurrentLocation();
            this.geoCoder = new google.maps.Geocoder;
            let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, this.options);
            autocomplete.addListener("place_changed", () => {
                this.ngZone.run(() => {
                    //get the place result
                    let place = autocomplete.getPlace();
                    //verify result
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    //set latitude, longitude and zoom
                    this.location.latitude = place.geometry.location.lat();
                    this.location.longitude = place.geometry.location.lng();
                    this.location.markers[0].lat = place.geometry.location.lat();
                    this.location.markers[0].lng = place.geometry.location.lng();
                    this.location.zoom = 18;
                });
            });
        });
    }
    setCurrentLocation() {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.location.latitude = position.coords.latitude;
                this.location.longitude = position.coords.longitude;
                this.location.markers[0].lat = position.coords.latitude;
                this.location.markers[0].lng = position.coords.longitude;
                this.location.zoom = 8;
                this.getAddress(this.location.latitude, this.location.longitude);
            });
        }
    }
    markerDragEnd($event) {
        console.log($event);
        this.location.markers[0].lat = $event.latLng.lat();
        this.location.markers[0].lng = $event.latLng.lng();
        this.getAddress(this.location.latitude, this.location.longitude);
    }
    /**mapClicked($event: google.maps.MouseEvent) {
      console.log($event);
      this.location.markers[0].lat = $event.latLng.lat();
      this.location.markers[0].lng = $event.latLng.lng();
      this.getAddress(this.location.latitude, this.location.longitude);
    }*/
    getAddress(latitude, longitude) {
        this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, (results, status) => {
            console.log(results);
            console.log(status);
            if (status === 'OK') {
                if (results[0]) {
                    this.location.zoom = 12;
                    //this.address = results[0].formatted_address;
                }
                else {
                    window.alert('No results found');
                }
            }
            else {
                window.alert('Geocoder failed due to: ' + status);
            }
        });
    }
    mapReadyHandler(map) {
        this.map = map;
        this.mapClickListener = this.map.addListener('click', (e) => {
            this.zone.run(() => {
                this.location.markers[0].lat = e.latLng.lat();
                this.location.markers[0].lng = e.latLng.lng();
                // Here we can get correct event
                console.log(e.latLng.lat(), e.latLng.lng());
            });
        });
    }
    save() {
        this.modalController.dismiss(this.location.markers[0]);
    }
    cancel() {
        this.modalController.dismiss('cancel');
    }
    ngOnDestroy() {
        if (this.mapClickListener) {
            this.mapClickListener.remove();
        }
    }
};
MapPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"] },
    { type: _agm_core__WEBPACK_IMPORTED_MODULE_5__["MapsAPILoader"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"] }
];
MapPage.propDecorators = {
    searchElementRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: ['search', { static: false },] }]
};
MapPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-map',
        template: _raw_loader_map_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_map_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MapPage);



/***/ }),

/***/ "Soql":
/*!*********************************************!*\
  !*** ./src/app/response/response.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-textarea {\n  border-style: solid;\n  border-color: #484ab6;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHJlc3BvbnNlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFvQjtFQUNwQixxQkFBNkI7QUFDakMiLCJmaWxlIjoicmVzcG9uc2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRleHRhcmVhe1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZCA7XHJcbiAgICBib3JkZXItY29sb3I6cmdiKDcyLCA3NCwgMTgyKTtcclxufSJdfQ== */");

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./users.service */ "U0XV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");





/* eslint-disable @typescript-eslint/quotes */

let AppComponent = class AppComponent {
    constructor(loadingController, userSrv) {
        this.loadingController = loadingController;
        this.userSrv = userSrv;
        this.sideMenu();
    }
    sideMenu() {
        this.navigate =
            [
                {
                    title: "Home",
                    url: "/home",
                    icon: "home"
                },
                {
                    title: "Profile",
                    url: "/profile/QSqITrKDOZPEY7qo68OnkTsXF8q1",
                    icon: "person"
                },
                {
                    title: "New Group",
                    url: "/create-group-form",
                    icon: "add"
                },
            ];
    }
    signout() {
        this.presentLoading();
        this.userSrv.signOut().then(() => this.loadingController.dismiss()).catch(er => alert(er.message));
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
AppComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _users_service__WEBPACK_IMPORTED_MODULE_4__["UsersService"] }
];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "T5p3":
/*!********************************************************!*\
  !*** ./src/app/grouppopover/grouppopover.component.ts ***!
  \********************************************************/
/*! exports provided: GrouppopoverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GrouppopoverComponent", function() { return GrouppopoverComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_grouppopover_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./grouppopover.component.html */ "+sYO");
/* harmony import */ var _grouppopover_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./grouppopover.component.scss */ "Z0mj");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _groups_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../groups-service.service */ "QLx/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");




/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable max-len */

/* eslint-disable @typescript-eslint/quotes */



let GrouppopoverComponent = class GrouppopoverComponent {
    constructor(toastController, alertController, groupSrv, router, popoverController) {
        this.toastController = toastController;
        this.alertController = alertController;
        this.groupSrv = groupSrv;
        this.router = router;
        this.popoverController = popoverController;
    }
    ngOnInit() {
    }
    delete() {
        alert(this.id);
    }
    edit() {
        this.DismissClick();
        this.router.navigateByUrl('/edit-group/' + this.id + '/' + false);
    }
    view() {
        this.DismissClick();
        this.router.navigateByUrl('/edit-group/' + this.id + '/' + true);
    }
    leave() {
        this.presentAlertConfirm();
    }
    presentAlertConfirm() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Confirm!',
                message: 'Are You sure?',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Delete',
                        handler: () => {
                            console.log('Confirm Okay');
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    DismissClick() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.popoverController.dismiss();
        });
    }
    code() {
        {
            document.addEventListener('copy', (e) => {
                e.clipboardData.setData('text/plain', this.id);
                e.preventDefault();
                //document.removeEventListener('copy');
            });
            document.execCommand('copy');
            this.presentToast();
        }
    }
    presentToast() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'group code copied to clipboard.',
                duration: 1500,
            });
            toast.present();
            yield this.popoverController.dismiss();
        });
    }
};
GrouppopoverComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _groups_service_service__WEBPACK_IMPORTED_MODULE_4__["GroupsServiceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"] }
];
GrouppopoverComponent.propDecorators = {
    id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
    admin: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }]
};
GrouppopoverComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'grouppopover',
        template: _raw_loader_grouppopover_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_grouppopover_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], GrouppopoverComponent);



/***/ }),

/***/ "U0XV":
/*!**********************************!*\
  !*** ./src/app/users.service.ts ***!
  \**********************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");

/* eslint-disable curly */
/* eslint-disable @typescript-eslint/naming-convention */



let UsersService = class UsersService {
    constructor(afAuth, afs) {
        this.afAuth = afAuth;
        this.afs = afs;
        this.currentUser = null;
        this.afAuth.onAuthStateChanged((user) => {
            this.currentUser = user;
        });
    }
    createUser() {
        return;
    }
    signup({ email, password, name, usrname, phone, }) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const credential = yield this.afAuth.createUserWithEmailAndPassword(email, password);
            const uid = credential.user.uid;
            return this.afs.doc(`users/${uid}`).set({
                userID: uid,
                email: credential.user.email,
                phoneNumber: phone,
                username: usrname,
                Name: name
            });
        });
    }
    signIn({ email, password }) {
        return this.afAuth.signInWithEmailAndPassword(email, password);
    }
    signOut() {
        return this.afAuth.signOut();
    }
    getUsers(val) {
        this.usersCollectionRef = this.afs.collection('users', ref => ref.where('username', '==', val));
        this.usersCollectionRef.get().subscribe(res => res.docs.forEach(a => console.log(a.data())));
        return this.usersCollectionRef.get();
    }
    getUser(id) {
        return this.afs.collection('users', ref => ref.where('username', '==', id)).get();
    }
    getUserbyID(id) {
        return this.afs.collection('users').doc(id);
    }
    searchUser(id) {
        return this.afs.collection('users', ref => ref.orderBy('username').where('username', '>=', id).where('username', '<', id + '\uf8ff'))
            .get();
    }
    updateUser(id, data) {
        return this.afs.collection('users').doc(id).set(data);
    }
    deleteUser() {
    }
    checkDuplicate() {
        return this.afs.collection('users').get();
    }
};
UsersService.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
];
UsersService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UsersService);



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\n  <ion-menu side=\"start\" menuId=\"first\" contentId=\"content1\">\n    <ion-header>\n      <ion-toolbar class=\"myBackgroundColor\">\n        <ion-buttons slot=\"start\">\n        <ion-menu-button color='light'></ion-menu-button>\n      </ion-buttons>\n        <ion-title color='light'>Menu</ion-title>\n      </ion-toolbar>\n    </ion-header>\n    <ion-content>\n      <ion-list *ngFor=\"let pages of navigate\">\n      <ion-menu-toggle auto-hide=\"true\">\n        <ion-item [routerLink]=\"pages.url\" routerDirection=\"forward\">\n            <ion-icon [name]=\"pages.icon\" slot=\"start\"></ion-icon>\n                {{pages.title}}\n        </ion-item>\n      </ion-menu-toggle>\n      </ion-list>\n      <div class='menu'>\n        <ion-item (click)='signout()' class=\"ion-margin-top\" color='medium' >\n          <ion-icon name=\"log-out-outline\" slot=\"start\"></ion-icon>\n          Signout\n        </ion-item>\n    </div>\n    </ion-content>\n  </ion-menu>\n\n  <ion-router-outlet id=\"content1\"></ion-router-outlet>\n</ion-app>\n");

/***/ }),

/***/ "Z0mj":
/*!**********************************************************!*\
  !*** ./src/app/grouppopover/grouppopover.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJncm91cHBvcG92ZXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire */ "spgP");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/storage */ "Vaw3");
/* harmony import */ var _grouppopover_grouppopover_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./grouppopover/grouppopover.component */ "T5p3");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _response_response_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./response/response.module */ "Kks8");
/* harmony import */ var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/image-picker/ngx */ "tAfe");
/* harmony import */ var _ionic_native_File_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic-native/File/ngx */ "B7Vy");
/* harmony import */ var _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic-native/media-capture/ngx */ "/sJY");
/* harmony import */ var _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic-native/media/ngx */ "9YJ4");
/* harmony import */ var _ionic_native_streaming_media_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ionic-native/streaming-media/ngx */ "RU0F");
/* harmony import */ var _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ionic-native/photo-viewer/ngx */ "U3FU");
/* harmony import */ var _map_map_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./map/map.module */ "yX1w");

/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable max-len */



















let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"], _grouppopover_grouppopover_component__WEBPACK_IMPORTED_MODULE_9__["GrouppopoverComponent"]],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(),
            _angular_fire__WEBPACK_IMPORTED_MODULE_6__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].firebaseConfig),
            _angular_fire_storage__WEBPACK_IMPORTED_MODULE_8__["AngularFireStorageModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestoreModule"].enablePersistence(),
            _response_response_module__WEBPACK_IMPORTED_MODULE_12__["ResponsePageModule"], _map_map_module__WEBPACK_IMPORTED_MODULE_19__["MapPageModule"]
        ],
        providers: [_ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_13__["ImagePicker"],
            _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_15__["MediaCapture"],
            _ionic_native_File_ngx__WEBPACK_IMPORTED_MODULE_14__["File"],
            _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_16__["Media"],
            _ionic_native_streaming_media_ngx__WEBPACK_IMPORTED_MODULE_17__["StreamingMedia"],
            _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_18__["PhotoViewer"],
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"] }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "jBmT":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/map/map.page.html ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar class=\"myBackgroundColor\">\r\n    <ion-title color='light'>\r\n      Map\r\n    </ion-title>\r\n      <ion-button fill=clear  style=\"font-size: large;\" slot=\"end\" (click)=\"cancel()\" color='light' defaultHref=\"home\"><ion-icon name=\"close-outline\"></ion-icon></ion-button>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <ion-item style=\"width: 100%;\">\r\n    <input style=\"width: 100%;\" type=\"text\" class=\"native-input sc-ion-input-ios\" (keydown.enter)=\"$event.preventDefault()\" placeholder=\"Search Nearest Location\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"off\" type=\"text\" #search>\r\n  </ion-item>\r\n  <agm-map\r\n      [latitude]=\"location.latitude\"\r\n      [longitude]=\"location.longitude\"\r\n      [zoom]=\"location.zoom\"\r\n\r\n      (mapReady)=\"mapReadyHandler($event)\">\r\n      <agm-marker *ngFor=\"let marker of location.markers\"\r\n                [latitude]=\"marker.lat\"\r\n                [longitude]=\"marker.lng\"\r\n                draggable=\"true\"\r\n                (dragEnd)=\"markerDragEnd($event)\"\r\n                >\r\n    </agm-marker>\r\n  </agm-map>\r\n  <ion-button (click)=\"save()\" expand ='full'>Save</ion-button>\r\n</ion-content>\r\n");

/***/ }),

/***/ "je6D":
/*!***********************************!*\
  !*** ./src/app/map/map.page.scss ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("agm-map {\n  height: 80%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXG1hcC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUNGO0FBQUEiLCJmaWxlIjoibWFwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImFnbS1tYXB7XHJcbiAgaGVpZ2h0OiA4MCVcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "kLfG":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		"dUtr",
		"common",
		0
	],
	"./ion-alert.entry.js": [
		"Q8AI",
		"common",
		1
	],
	"./ion-app_8.entry.js": [
		"hgI1",
		"common",
		2
	],
	"./ion-avatar_3.entry.js": [
		"CfoV",
		"common",
		3
	],
	"./ion-back-button.entry.js": [
		"Nt02",
		"common",
		4
	],
	"./ion-backdrop.entry.js": [
		"Q2Bp",
		5
	],
	"./ion-button_2.entry.js": [
		"0Pbj",
		"common",
		6
	],
	"./ion-card_5.entry.js": [
		"ydQj",
		"common",
		7
	],
	"./ion-checkbox.entry.js": [
		"4fMi",
		"common",
		8
	],
	"./ion-chip.entry.js": [
		"czK9",
		"common",
		9
	],
	"./ion-col_3.entry.js": [
		"/CAe",
		10
	],
	"./ion-datetime_3.entry.js": [
		"WgF3",
		"common",
		11
	],
	"./ion-fab_3.entry.js": [
		"uQcF",
		"common",
		12
	],
	"./ion-img.entry.js": [
		"wHD8",
		13
	],
	"./ion-infinite-scroll_2.entry.js": [
		"2lz6",
		14
	],
	"./ion-input.entry.js": [
		"ercB",
		"common",
		15
	],
	"./ion-item-option_3.entry.js": [
		"MGMP",
		"common",
		16
	],
	"./ion-item_8.entry.js": [
		"9bur",
		"common",
		17
	],
	"./ion-loading.entry.js": [
		"cABk",
		"common",
		18
	],
	"./ion-menu_3.entry.js": [
		"kyFE",
		"common",
		19
	],
	"./ion-modal.entry.js": [
		"TvZU",
		"common",
		20
	],
	"./ion-nav_2.entry.js": [
		"vnES",
		"common",
		21
	],
	"./ion-popover.entry.js": [
		"qCuA",
		"common",
		22
	],
	"./ion-progress-bar.entry.js": [
		"0tOe",
		"common",
		23
	],
	"./ion-radio_2.entry.js": [
		"h11V",
		"common",
		24
	],
	"./ion-range.entry.js": [
		"XGij",
		"common",
		25
	],
	"./ion-refresher_2.entry.js": [
		"nYbb",
		"common",
		26
	],
	"./ion-reorder_2.entry.js": [
		"smMY",
		"common",
		27
	],
	"./ion-ripple-effect.entry.js": [
		"STjf",
		28
	],
	"./ion-route_4.entry.js": [
		"k5eQ",
		"common",
		29
	],
	"./ion-searchbar.entry.js": [
		"OR5t",
		"common",
		30
	],
	"./ion-segment_2.entry.js": [
		"fSgp",
		"common",
		31
	],
	"./ion-select_3.entry.js": [
		"lfGF",
		"common",
		32
	],
	"./ion-slide_2.entry.js": [
		"5xYT",
		33
	],
	"./ion-spinner.entry.js": [
		"nI0H",
		"common",
		34
	],
	"./ion-split-pane.entry.js": [
		"NAQR",
		35
	],
	"./ion-tab-bar_2.entry.js": [
		"knkW",
		"common",
		36
	],
	"./ion-tab_2.entry.js": [
		"TpdJ",
		"common",
		37
	],
	"./ion-text.entry.js": [
		"ISmu",
		"common",
		38
	],
	"./ion-textarea.entry.js": [
		"U7LX",
		"common",
		39
	],
	"./ion-toast.entry.js": [
		"L3sA",
		"common",
		40
	],
	"./ion-toggle.entry.js": [
		"IUOf",
		"common",
		41
	],
	"./ion-virtual-scroll.entry.js": [
		"8Mb5",
		42
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "kLfG";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth-guard */ "HTFn");




const redirectUnauthorizedToLogin = () => Object(_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_3__["redirectUnauthorizedTo"])(['/sign-in']);
const redirectLoggedInToHome = () => Object(_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_3__["redirectLoggedInTo"])(['/']);
const routes = [
    {
        path: 'home',
        loadChildren: () => __webpack_require__.e(/*! import() | home-home-module */ "home-home-module").then(__webpack_require__.bind(null, /*! ./home/home.module */ "ct+p")).then(m => m.HomePageModule),
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'sign-in',
        loadChildren: () => __webpack_require__.e(/*! import() | sign-in-sign-in-module */ "sign-in-sign-in-module").then(__webpack_require__.bind(null, /*! ./sign-in/sign-in.module */ "FuQ6")).then(m => m.SignInPageModule),
    },
    {
        path: 'edit-group/:id/:view',
        loadChildren: () => __webpack_require__.e(/*! import() | edit-group-edit-group-module */ "edit-group-edit-group-module").then(__webpack_require__.bind(null, /*! ./edit-group/edit-group.module */ "UgyH")).then(m => m.EditGroupPageModule)
    },
    {
        path: 'create-group-form',
        loadChildren: () => __webpack_require__.e(/*! import() | create-group-form-create-group-form-module */ "create-group-form-create-group-form-module").then(__webpack_require__.bind(null, /*! ./create-group-form/create-group-form.module */ "SmK0")).then(m => m.CreateGroupFormPageModule)
    },
    {
        path: 'create-group-next/:users',
        loadChildren: () => __webpack_require__.e(/*! import() | create-group-next-create-group-next-module */ "create-group-next-create-group-next-module").then(__webpack_require__.bind(null, /*! ./create-group-next/create-group-next.module */ "aW9F")).then(m => m.CreateGroupNextPageModule)
    },
    {
        path: 'contrbution-list/:id',
        loadChildren: () => Promise.all(/*! import() | contrbution-list-contrbution-list-module */[__webpack_require__.e("common"), __webpack_require__.e("contrbution-list-contrbution-list-module")]).then(__webpack_require__.bind(null, /*! ./contrbution-list/contrbution-list.module */ "93Sp")).then(m => m.ContrbutionListPageModule)
    },
    {
        path: 'contrbution-list-form',
        loadChildren: () => Promise.all(/*! import() | contrbution-list-form-contrbution-list-form-module */[__webpack_require__.e("common"), __webpack_require__.e("contrbution-list-form-contrbution-list-form-module")]).then(__webpack_require__.bind(null, /*! ./contrbution-list-form/contrbution-list-form.module */ "ZiDI")).then(m => m.ContrbutionListFormPageModule)
    },
    {
        path: 'task/:id',
        loadChildren: () => Promise.all(/*! import() | task-task-module */[__webpack_require__.e("common"), __webpack_require__.e("task-task-module")]).then(__webpack_require__.bind(null, /*! ./task/task.module */ "09GQ")).then(m => m.TaskPageModule)
    },
    {
        path: 'task-details/:id',
        loadChildren: () => Promise.all(/*! import() | task-details-task-details-module */[__webpack_require__.e("default~firebase-auth~task-details-task-details-module"), __webpack_require__.e("common"), __webpack_require__.e("task-details-task-details-module")]).then(__webpack_require__.bind(null, /*! ./task-details/task-details.module */ "DWlm")).then(m => m.TaskDetailsPageModule)
    },
    {
        path: 'response',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./response/response.module */ "Kks8")).then(m => m.ResponsePageModule)
    },
    {
        path: 'groups-page',
        loadChildren: () => __webpack_require__.e(/*! import() | groups-page-groups-page-module */ "groups-page-groups-page-module").then(__webpack_require__.bind(null, /*! ./groups-page/groups-page.module */ "LUtT")).then(m => m.GroupsPagePageModule)
    },
    {
        path: 'calender-modal',
        loadChildren: () => __webpack_require__.e(/*! import() | calender-modal-calender-modal-module */ "default~calender-calender-module~calender-modal-calender-modal-module").then(__webpack_require__.bind(null, /*! ./calender-modal/calender-modal.module */ "ooPm")).then(m => m.CalenderModalPageModule)
    },
    {
        path: 'calender/:id',
        loadChildren: () => Promise.all(/*! import() | calender-calender-module */[__webpack_require__.e("default~calender-calender-module~calender-modal-calender-modal-module"), __webpack_require__.e("common"), __webpack_require__.e("calender-calender-module")]).then(__webpack_require__.bind(null, /*! ./calender/calender.module */ "q3QB")).then(m => m.CalenderPageModule)
    },
    {
        path: 'plan',
        loadChildren: () => __webpack_require__.e(/*! import() | plan-plan-module */ "plan-plan-module").then(__webpack_require__.bind(null, /*! ./plan/plan.module */ "BRqU")).then(m => m.PlanPageModule)
    },
    {
        path: 'group/:id',
        loadChildren: () => Promise.all(/*! import() | group-group-module */[__webpack_require__.e("common"), __webpack_require__.e("group-group-module")]).then(__webpack_require__.bind(null, /*! ./group/group.module */ "J4zT")).then(m => m.GroupPageModule)
    },
    {
        path: 'plan-form/:id',
        loadChildren: () => Promise.all(/*! import() | plan-form-plan-form-module */[__webpack_require__.e("common"), __webpack_require__.e("plan-form-plan-form-module")]).then(__webpack_require__.bind(null, /*! ./plan-form/plan-form.module */ "xSYo")).then(m => m.PlanFormPageModule)
    },
    {
        path: 'plan-form-next/:id',
        loadChildren: () => Promise.all(/*! import() | plan-form-next-plan-form-next-module */[__webpack_require__.e("common"), __webpack_require__.e("plan-form-next-plan-form-next-module")]).then(__webpack_require__.bind(null, /*! ./plan-form-next/plan-form-next.module */ "rWFe")).then(m => m.PlanFormNextPageModule)
    },
    {
        path: 'chat/:id',
        loadChildren: () => __webpack_require__.e(/*! import() | chat-chat-module */ "chat-chat-module").then(__webpack_require__.bind(null, /*! ./chat/chat.module */ "2yxt")).then(m => m.ChatPageModule)
    },
    {
        path: 'map',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./map/map.module */ "yX1w")).then(m => m.MapPageModule)
    },
    {
        path: 'profile/:id',
        loadChildren: () => __webpack_require__.e(/*! import() | profile-profile-module */ "profile-profile-module").then(__webpack_require__.bind(null, /*! ./profile/profile.module */ "cRhG")).then(m => m.ProfilePageModule)
    },
    {
        path: 'profile-form/:id',
        loadChildren: () => __webpack_require__.e(/*! import() | profile-form-profile-form-module */ "profile-form-profile-form-module").then(__webpack_require__.bind(null, /*! ./profile-form/profile-form.module */ "Usns")).then(m => m.ProfileFormPageModule)
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"] })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "yX1w":
/*!***********************************!*\
  !*** ./src/app/map/map.module.ts ***!
  \***********************************/
/*! exports provided: MapPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapPageModule", function() { return MapPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _map_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./map-routing.module */ "5MzG");
/* harmony import */ var _map_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./map.page */ "SQ20");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @agm/core */ "pxUr");








let MapPageModule = class MapPageModule {
};
MapPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _map_routing_module__WEBPACK_IMPORTED_MODULE_5__["MapPageRoutingModule"],
            _agm_core__WEBPACK_IMPORTED_MODULE_7__["AgmCoreModule"].forRoot({
                apiKey: 'AIzaSyDAHKx6qty0oKdh0qSdl1-iEWS1agQzf-w',
                libraries: ['places']
            })
        ],
        declarations: [_map_page__WEBPACK_IMPORTED_MODULE_6__["MapPage"]]
    })
], MapPageModule);



/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".myBackgroundColor {\n  --background: #000f50;\n}\n\n.menu {\n  padding-top: 20%;\n  height: -webkit-fill-available;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQWE7QUFDZjs7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQiw4QkFBOEI7QUFFaEMiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm15QmFja2dyb3VuZENvbG9ye1xyXG4gIC0tYmFja2dyb3VuZDogIzAwMGY1MDtcclxufVxyXG4ubWVudSB7XHJcbiAgcGFkZGluZy10b3A6IDIwJTtcclxuICBoZWlnaHQ6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XHJcblxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _ionic_pwa_elements_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/pwa-elements/loader */ "2Zi2");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}

Object(_ionic_pwa_elements_loader__WEBPACK_IMPORTED_MODULE_4__["defineCustomElements"])(window);
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));
// aqeela hussain


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map