(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 3696:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 3252);



const routes = [
    {
        path: 'home',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_home_home_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./home/home.module */ 8245)).then(m => m.HomePageModule)
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 2050:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _E_Education_Capstone_Code_Handyman_node_modules_ngtools_webpack_src_loaders_direct_resource_js_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./app.component.html */ 5158);
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss */ 836);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);




let AppComponent = class AppComponent {
    constructor() { }
};
AppComponent.ctorParameters = () => [];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-root',
        template: _E_Education_Capstone_Code_Handyman_node_modules_ngtools_webpack_src_loaders_direct_resource_js_app_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppComponent);



/***/ }),

/***/ 4750:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 6219);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 2050);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 3696);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/header.component */ 6641);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 3981);
/* harmony import */ var _awesome_cordova_plugins_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @awesome-cordova-plugins/geolocation/ngx */ 5732);
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./map/map.component */ 6186);











let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent, _map_map_component__WEBPACK_IMPORTED_MODULE_4__.MapComponent],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule.forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule],
        providers: [{ provide: _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicRouteStrategy }, _awesome_cordova_plugins_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__.Geolocation],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 5004:
/*!**********************************************************!*\
  !*** ./src/app/authentication/authentication.service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthenticationService": () => (/* binding */ AuthenticationService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 3981);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 8260);




let AuthenticationService = class AuthenticationService {
    constructor(http) {
        this.http = http;
        this.isAuthenticated = false;
        this.BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.BACKEND_URL;
    }
    getIsAuthenticated() {
        return this.isAuthenticated;
    }
    createUser(username, password, role, email, phone) {
        const userData = { username, password, role, email, phone };
        return this.http.post(this.BACKEND_URL + '/user/signup', userData);
    }
};
AuthenticationService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
AuthenticationService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], AuthenticationService);



/***/ }),

/***/ 5488:
/*!*****************************************************************!*\
  !*** ./src/app/authentication/signup/sign-up-page.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignUpPage": () => (/* binding */ SignUpPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _E_Education_Capstone_Code_Handyman_node_modules_ngtools_webpack_src_loaders_direct_resource_js_sign_up_page_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./sign-up-page.component.html */ 3074);
/* harmony import */ var _sign_up_page_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sign-up-page.component.scss */ 1454);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../authentication.service */ 5004);
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../map/map.component */ 6186);








let SignUpPage = class SignUpPage {
    constructor(modalController, authenticationService) {
        this.modalController = modalController;
        this.authenticationService = authenticationService;
        this.formMessage = '';
        this.messageColor = 'danger';
        this.selectedRole = "handyman";
    }
    ngOnInit() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
            // Username
            'username': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', {
                validators: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(5),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.maxLength(10)
                ]
            }),
            // Password
            'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', {
                validators: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(5),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.maxLength(10)
                ]
            }),
        });
    }
    onFormChange() {
        if (this.form.get('username').hasError('incorrect')) {
            this.form.get('username').setErrors(null);
        }
        let isUsernameValid;
        // Username validation
        if (this.form.get('username').value.length === 0) {
            this.formMessage = 'Username is required';
            this.messageColor = 'danger';
            isUsernameValid = false;
        }
        else if (this.form.get('username').value.length < 5) {
            this.formMessage = 'Username should be minimum of 5 characters';
            this.messageColor = 'danger';
            isUsernameValid = false;
        }
        else {
            this.formMessage = '';
            this.messageColor = 'success';
            isUsernameValid = true;
        }
        if (isUsernameValid) {
            // Password validation
            if (this.form.get('password').value.length === 0) {
                this.formMessage = 'Password is required';
                this.messageColor = 'danger';
            }
            else if (this.form.get('password').value.length < 5) {
                this.formMessage = 'Password should be minimum of 5 characters';
                this.messageColor = 'danger';
            }
            else {
                this.formMessage = '';
                this.messageColor = 'success';
            }
        }
    }
    onSignUp() {
        // this.formMessage = '';
        // this.messageColor = 'success';
        //
        // if (this.form.invalid)
        // {
        //   return;
        // }
        //
        // const createUserObservable: Observable<any> = this.authenticationService.createUser
        // (
        //   this.form.get('username').value,
        //   this.form.get('password').value
        // );
        //
        // createUserObservable
        //   .pipe
        //   (
        //     catchError
        //     (
        //       (error: any) =>
        //       {
        //         const errorMessages: string[] = error.error.message;
        //
        //         errorMessages.forEach
        //         (
        //           (message) =>
        //           {
        //             if (message === 'username')
        //             {
        //               this.formMessage = "Username already taken";
        //               this.messageColor = 'danger';
        //               this.form.get('username').setErrors({'incorrect': true});
        //             }
        //           }
        //         )
        //
        //         return throwError('Error occurred');
        //       }
        //     )
        //   )
        //   .subscribe
        //   (
        //     (response: any) =>
        //     {
        //       this.formMessage = "User created successfully";
        //       this.messageColor = 'success';
        //       this.form.reset();
        //     }
        //   )
    }
    closeSignUp() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            yield this.modalController.dismiss(null, 'cancel');
        });
    }
    onRoleChange(event) {
        this.selectedRole = event.detail.value;
    }
    openSignIn() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            // await this.closeSignUp();
            //
            // const modal = await this.modalController.create
            // (
            //   {
            //     component: SignInPage
            //   }
            // );
            //
            // await modal.present();
            const modal = yield this.modalController.create({
                component: _map_map_component__WEBPACK_IMPORTED_MODULE_3__.MapComponent
            });
            yield modal.present();
        });
    }
};
SignUpPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController },
    { type: _authentication_service__WEBPACK_IMPORTED_MODULE_2__.AuthenticationService }
];
SignUpPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-sign-up',
        template: _E_Education_Capstone_Code_Handyman_node_modules_ngtools_webpack_src_loaders_direct_resource_js_sign_up_page_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_sign_up_page_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], SignUpPage);



/***/ }),

/***/ 6641:
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _E_Education_Capstone_Code_Handyman_node_modules_ngtools_webpack_src_loaders_direct_resource_js_header_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./header.component.html */ 7030);
/* harmony import */ var _header_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.component.scss */ 530);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../authentication/authentication.service */ 5004);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _authentication_signup_sign_up_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../authentication/signup/sign-up-page.component */ 5488);







let HeaderComponent = class HeaderComponent {
    constructor(authenticationService, modalController) {
        this.authenticationService = authenticationService;
        this.modalController = modalController;
        this.headerTitle = 'Home';
    }
    ngOnInit() {
        this.authenticationIcon = this.authenticationService.getIsAuthenticated() ? 'assets/icons/logout.png' : 'assets/icons/login.png';
    }
    onAuthenticationModalOpen() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _authentication_signup_sign_up_page_component__WEBPACK_IMPORTED_MODULE_3__.SignUpPage
            });
            yield modal.present();
        });
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__.AuthenticationService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController }
];
HeaderComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-header',
        template: _E_Education_Capstone_Code_Handyman_node_modules_ngtools_webpack_src_loaders_direct_resource_js_header_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_header_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], HeaderComponent);



/***/ }),

/***/ 6186:
/*!**************************************!*\
  !*** ./src/app/map/map.component.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapComponent": () => (/* binding */ MapComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _E_Education_Capstone_Code_Handyman_node_modules_ngtools_webpack_src_loaders_direct_resource_js_map_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./map.component.html */ 3324);
/* harmony import */ var _map_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map.component.scss */ 5859);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _awesome_cordova_plugins_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @awesome-cordova-plugins/geolocation/ngx */ 5732);
/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mapbox-gl */ 3858);
/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mapbox_gl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ 8260);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 3981);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 592);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 9500);











let MapComponent = class MapComponent {
    constructor(modalController, geoLocation, http) {
        this.modalController = modalController;
        this.geoLocation = geoLocation;
        this.http = http;
        this.mapStyle = 'streets';
        this.selectedAddress = "";
        this.searchLocations = [];
    }
    ionViewDidEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const geoPosition = yield this.geoLocation.getCurrentPosition();
                const coordinates = geoPosition.coords;
                const mapOptions = {
                    accessToken: _environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.MAPBOX_KEY,
                    center: [coordinates.longitude, coordinates.latitude],
                    container: this.mapHolder.nativeElement,
                    style: 'mapbox://styles/mapbox/streets-v11',
                    zoom: 15,
                    maxBounds: [[68, 7.5], [98, 37.5]],
                    attributionControl: false
                };
                this.map = new mapbox_gl__WEBPACK_IMPORTED_MODULE_3__.Map(mapOptions);
                const geoControl = new mapbox_gl__WEBPACK_IMPORTED_MODULE_3__.GeolocateControl({ trackUserLocation: true });
                geoControl.on('trackuserlocationend', () => {
                    const longitudeLatitude = this.map.getCenter();
                    this.updateSelectedAddress(longitudeLatitude.lng, longitudeLatitude.lat);
                    this.map.flyTo({ center: [longitudeLatitude.lng, longitudeLatitude.lat], zoom: 15 });
                });
                this.map.addControl(geoControl);
                this.marker = new mapbox_gl__WEBPACK_IMPORTED_MODULE_3__.Marker({ draggable: true });
                this.marker.on('dragend', () => {
                    this.updateSelectedAddress(this.marker.getLngLat().lng, this.marker.getLngLat().lat);
                });
                this.updateSelectedAddress(coordinates.longitude, coordinates.latitude);
                this.marker.addTo(this.map);
            }
            catch (error) {
                console.log("Error while fetching user current location : ", error);
            }
        });
    }
    toggleMapStyle() {
        this.mapStyle = this.mapStyle == 'streets' ? 'satellite' : 'streets';
        this.map.setStyle(this.mapStyle == 'streets' ? 'mapbox://styles/mapbox/streets-v11' : 'mapbox://styles/mapbox/satellite-streets-v11');
    }
    closeLocationPick() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            yield this.modalController.dismiss(null, 'cancel');
        });
    }
    updateSelectedAddress(longitude, latitude) {
        this.marker.setLngLat({ lon: longitude, lat: latitude });
        this.selectedAddress = "";
        this.http.get(encodeURI(`https://api.mapbox.com/geocoding/v5/mapbox.places/${longitude},${latitude}.json?access_token=${_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.MAPBOX_KEY}`))
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)((error) => {
            console.log("Error while reverse geocoding : ", error);
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.throwError)(error);
        })).subscribe((response) => {
            const features = response.features;
            if (features.length == 0) {
                console.log("Can't identify location");
            }
            this.selectedAddress = features[0].place_name;
            this.searchBar.el.value = features[0].place_name;
        });
    }
    changedAddress(input) {
        if (input === '') {
            this.searchLocations = [];
            return;
        }
        this.http.get(encodeURI(`https://api.mapbox.com/geocoding/v5/mapbox.places/${input}.json?country=IN&limit=5&access_token=${_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.MAPBOX_KEY}`))
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)((error) => {
            console.log("Error while forward geocoding : ", error);
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.throwError)(error);
        })).subscribe((response) => {
            const features = response.features;
            this.searchLocations = [];
            features.forEach((feature) => {
                const location = { text: feature.text, place_name: feature.place_name, longitude: feature.center[0], latitude: feature.center[1] };
                this.searchLocations.push(location);
            });
            if (this.searchLocations.length > 0) {
                this.locationsList.el.style.display = "block";
            }
            else {
                this.locationsList.el.style.display = "none";
            }
        });
    }
    locationClicked(index) {
        const selectedLocation = this.searchLocations[index];
        this.selectedAddress = selectedLocation.place_name;
        this.searchBar.el.value = selectedLocation.place_name;
        this.map.flyTo({ center: [selectedLocation.longitude, selectedLocation.latitude], zoom: 15 });
        this.marker.setLngLat({ lon: selectedLocation.longitude, lat: selectedLocation.latitude });
        this.locationsList.el.style.display = "none";
    }
};
MapComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController },
    { type: _awesome_cordova_plugins_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__.Geolocation },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient }
];
MapComponent.propDecorators = {
    mapHolder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewChild, args: ['mapHolder',] }],
    searchBar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewChild, args: ['searchBar',] }],
    locationsList: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewChild, args: ['locationsList',] }]
};
MapComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-map-modal',
        template: _E_Education_Capstone_Code_Handyman_node_modules_ngtools_webpack_src_loaders_direct_resource_js_map_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewEncapsulation.None,
        styles: [_map_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], MapComponent);



/***/ }),

/***/ 8260:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
const environment = {
    production: false,
    BACKEND_URL: 'http://localhost:3000/api',
    MAPBOX_KEY: 'pk.eyJ1IjoiYWl0aGF0YXJ1biIsImEiOiJja2NnYTZoMDEwcTk5MzVueHA0MnV0cnk4In0.Is8HmG891aDHhfW4IPLOXA'
};


/***/ }),

/***/ 271:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 2577);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 4750);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 8260);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		3477,
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		7196,
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		8081,
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		5017,
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		9721,
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		9216,
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		6612,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		2694,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		2938,
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		1379,
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		7552,
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		7218,
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		7479,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		4134,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		1439,
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		6397,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		3296,
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		2413,
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		9411,
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		9133,
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		9003,
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		6065,
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		6991,
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		2947,
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		5919,
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		3109,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		9459,
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		301,
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		3799,
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		2140,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		6197,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		1975,
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		8387,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		8659,
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		6404,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		5253,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		2619,
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		2871,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		7668,
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		5342,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		174,
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		6185,
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		7337,
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		4833,
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		9468,
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		5705,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		7463,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 5158:
/*!***************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/app.component.html ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-app>\n\n  <!-- Header Component -->\n  <ion-header>\n    <app-header></app-header>\n  </ion-header>\n\n  <ion-content >\n\n    <ion-router-outlet></ion-router-outlet>\n\n  </ion-content>\n</ion-app>\n");

/***/ }),

/***/ 3074:
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/authentication/signup/sign-up-page.component.html ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar color=\"light\">\n    <ion-title color=\"primary\">SIGN-UP</ion-title>\n\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"closeSignUp()\"><ion-img src=\"assets/icons/close.png\" style=\"height: 24px; width: 24px\"></ion-img></ion-button>\n    </ion-buttons>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\" style=\"--background: url(assets/backgrounds/signup.png) 0 0/100% 100% no-repeat\">\n\n  <!-- Role Selection -->\n  <ion-segment class=\"ion-margin-bottom\" value=\"handyman\" (ionChange)=\"onRoleChange($event)\">\n    <ion-segment-button value=\"handyman\">\n      <ion-img [src]=\"selectedRole == 'handyman' ? 'assets/icons/handyman_active.png' : 'assets/icons/handyman_inactive.png'\" style=\"width: 48px; height: 48px\"></ion-img>\n      <ion-label style=\"font-weight: bold\">Handyman</ion-label>\n    </ion-segment-button>\n\n    <ion-segment-button value=\"customer\">\n      <ion-img [src]=\"selectedRole == 'customer' ? 'assets/icons/customers_active.png' : 'assets/icons/customers_inactive.png'\" style=\"width: 48px; height: 48px\"></ion-img>\n      <ion-label style=\"font-weight: bold\">Customer</ion-label>\n    </ion-segment-button>\n  </ion-segment>\n\n  <form (submit)=\"onSignUp()\" action=\"\" [formGroup]=\"form\" (change)=\"onFormChange()\" class=\"ion-text-center\">\n    <ion-list style=\"background-color: transparent\">\n\n      <ion-item class=\"ion-margin-horizontal ion-margin-bottom\" style=\"--ion-background-color:transparent\">\n        <ion-label><ion-img class=\"ion-float-left\" style=\"height: 32px; width: 32px\" src=\"assets/icons/username.png\"></ion-img></ion-label>\n        <ion-input type=\"text\" placeholder=\"Username\" formControlName=\"username\" [clearInput]=\"true\" [minlength]=\"5\" [maxlength]=\"10\" [required]=\"true\"></ion-input>\n      </ion-item>\n\n      <ion-item class=\"ion-margin\" style=\"--ion-background-color:transparent\">\n        <ion-label><ion-img class=\"ion-float-left\" style=\"height: 32px; width: 32px\" src=\"assets/icons/password.png\"></ion-img></ion-label>\n        <ion-input type=\"password\" placeholder=\"Password\" formControlName=\"password\" [clearInput]=\"true\" [minlength]=\"5\" [maxlength]=\"15\" [required]=\"true\"></ion-input>\n      </ion-item>\n\n      <ion-item class=\"ion-margin\" style=\"--ion-background-color:transparent\">\n        <ion-label><ion-img class=\"ion-float-left\" style=\"height: 32px; width: 32px\" src=\"assets/icons/email.png\"></ion-img></ion-label>\n        <ion-input type=\"email\" placeholder=\"Email\" formControlName=\"email\" [clearInput]=\"true\" [required]=\"true\"></ion-input>\n      </ion-item>\n\n      <ion-item class=\"ion-margin\" style=\"--ion-background-color:transparent\">\n        <ion-label><ion-img class=\"ion-float-left\" style=\"height: 32px; width: 32px\" src=\"assets/icons/phone.png\"></ion-img></ion-label>\n        <ion-input type=\"tel\" placeholder=\"Phone\" formControlName=\"phone\" [clearInput]=\"true\" [required]=\"true\"></ion-input>\n      </ion-item>\n\n    </ion-list>\n\n    <ion-label id=\"formMessage\" [color]=\"messageColor\" class=\"ion-margin\" style=\"font-weight: bold\" *ngIf=\"formMessage\">{{formMessage}}</ion-label>\n\n    <ion-button color=\"primary\" expand=\"block\" class=\"ion-margin\" (click)=\"onSignUp()\" type=\"submit\" shape=\"round\">SIGN UP</ion-button>\n\n    <ion-label class=\"ion-margin\">Already a user ? <a (click)=\"openSignIn()\">SIGN IN</a></ion-label>\n  </form>\n\n</ion-content>\n");

/***/ }),

/***/ 7030:
/*!*************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/header/header.component.html ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n\n    <ion-buttons slot=\"start\">\n      <ion-button>\n        <ion-img src=\"assets/icons/favicon.png\" style=\"width: 38px; height: 38px\"></ion-img>\n      </ion-button>\n    </ion-buttons>\n\n    <ion-title class=\"ion-text-center\">{{headerTitle}}</ion-title>\n\n    <ion-buttons slot=\"end\">\n      <ion-button>\n        <ion-img [src]=\"authenticationIcon\" style=\"width: 38px; height: 38px\" (click)=\"onAuthenticationModalOpen()\"></ion-img>\n      </ion-button>\n    </ion-buttons>\n\n  </ion-toolbar>\n</ion-header>\n");

/***/ }),

/***/ 3324:
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/map/map.component.html ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar color=\"light\">\n    <ion-title color=\"primary\">Pick Your Location</ion-title>\n\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"closeLocationPick()\"><ion-img src=\"assets/icons/close.png\" style=\"height: 24px; width: 24px\"></ion-img></ion-button>\n    </ion-buttons>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div #mapHolder style=\"position: absolute; top: 0; bottom: 0; width: 100%\"></div>\n\n  <div style=\"margin-top: 5px; width: 65%; margin-right: auto; margin-left: auto\" class=\"addressSearch\">\n    <ion-item color=\"light\" style=\"--highlight-color-focused: var(--ion-color-primary)\">\n      <ion-label style=\"margin-top: 0; margin-bottom: 0\"><ion-img class=\"ion-float-left\" style=\"height: 32px; width: 32px\" src=\"assets/icons/mapSearch.png\"></ion-img></ion-label>\n      <ion-input type=\"text\" placeholder=\"Search\" (ionInput)=\"changedAddress(searchBar.value)\" #searchBar></ion-input>\n    </ion-item>\n\n    <ion-list style=\"margin-top: 2px; border-radius: 10px; display: none\" #locationsList>\n\n      <ion-item lines=\"none\" class=\"ion-no-padding\" style=\"padding-right: 10px; padding-left: 10px\" *ngFor=\"let location of searchLocations; let i = index\" (click)=\"locationClicked(i)\">\n\n        <ion-grid class=\"ion-no-padding\" fixed=\"true\">\n          <ion-row>\n\n            <ion-col size=\"1\" class=\"ion-align-self-center\">\n              <ion-img src=\"assets/icons/location.png\" style=\"height: 24px; width: 24px\"></ion-img>\n            </ion-col>\n\n            <ion-col size=\"10\" offset=\"1\">\n              <p class=\"ion-no-margin\" style=\"text-overflow: ellipsis; overflow: hidden; white-space: nowrap; font-weight: bold\">{{location.text}}</p>\n              <p class=\"ion-no-margin\" style=\"text-overflow: ellipsis; overflow: hidden; white-space: nowrap\">{{location.place_name}}</p>\n            </ion-col>\n\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n\n    </ion-list>\n  </div>\n\n\n  <ion-img [src]=\"mapStyle == 'streets' ? 'assets/icons/satelliteMaps.png' : 'assets/icons/streetMaps.png'\"\n           style=\"position: absolute; top: 5px; left: 5px; width: 64px; height: 48px\" (click)=\"toggleMapStyle()\"></ion-img>\n\n  <div class=\"address\" [style]=\"selectedAddress !== '' ? 'display:block' : 'display:none' \">\n    {{selectedAddress}}\n  </div>\n</ion-content>\n");

/***/ }),

/***/ 836:
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 1454:
/*!*******************************************************************!*\
  !*** ./src/app/authentication/signup/sign-up-page.component.scss ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWduLXVwLXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 530:
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 5859:
/*!****************************************!*\
  !*** ./src/app/map/map.component.scss ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = ".address {\n  background: rgba(0, 0, 0, 0.5);\n  color: #fff;\n  padding: 5px 10px;\n  margin: 0;\n  font-size: 11px;\n  line-height: 18px;\n  border-radius: 3px;\n  position: absolute;\n  bottom: 5px;\n  right: 5px;\n  max-width: 40%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFLDhCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBRUEsa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUVBLGNBQUE7QUFGRiIsImZpbGUiOiJtYXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWRkcmVzc1xyXG57XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gIG1hcmdpbjogMDtcclxuICBmb250LXNpemU6IDExcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG5cclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiA1cHg7XHJcbiAgcmlnaHQ6IDVweDtcclxuXHJcbiAgbWF4LXdpZHRoOiA0MCU7XHJcbn1cclxuIl19 */";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(271)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map