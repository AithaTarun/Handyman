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
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_home_home_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./home/home.module */ 8245)).then(m => m.HomePageModule)
    },
    {
        path: 'signup',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_authentication_signup_signup_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./authentication/signup/signup.module */ 8364)).then(m => m.SignupPageModule)
    },
    {
        path: 'opVerification',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_authentication_otp-verification_otp-verification_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./authentication/otp-verification/otp-verification.module */ 7748)).then(m => m.OtpVerificationModule)
    },
    {
        path: 'signin',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_authentication_signin_signin_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./authentication/signin/signin.module */ 1510)).then(m => m.SigninPageModule)
    },
    {
        path: 'profile',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_profile_profile_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./profile/profile.module */ 4404)).then(m => m.ProfilePageModule)
    },
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _E_Education_Capstone_Code_Handyman_node_modules_ngtools_webpack_src_loaders_direct_resource_js_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./app.component.html */ 5158);
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss */ 836);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authentication/authentication.service */ 5004);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);






let AppComponent = class AppComponent {
    constructor(authenticationService, router) {
        this.authenticationService = authenticationService;
        this.router = router;
        this.currentBaseRoute = "home";
    }
    ngOnInit() {
        this.authenticationService.autoAuthenticateUser();
        this.router.events.subscribe((routerEvent) => {
            if (routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__.NavigationEnd) {
                const activeRoute = routerEvent.urlAfterRedirects;
                if (activeRoute === '/home' || activeRoute === '') {
                    this.currentBaseRoute = 'home';
                }
                else if (activeRoute === '/profile') {
                    this.currentBaseRoute = 'profile';
                }
                else if (activeRoute === '/bookings') {
                    this.currentBaseRoute = 'bookings';
                }
                else if (activeRoute === '/about') {
                    this.currentBaseRoute = 'about';
                }
            }
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__.AuthenticationService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ 6219);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 2050);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 3696);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/header.component */ 6641);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 3981);
/* harmony import */ var _awesome_cordova_plugins_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @awesome-cordova-plugins/geolocation/ngx */ 5732);
/* harmony import */ var _locationPicker_location_picker_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./locationPicker/location-picker.module */ 6860);
/* harmony import */ var _authentication_authentication_interceptor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./authentication/authentication.interceptor */ 380);












let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent],
        entryComponents: [],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule.forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule,
            _locationPicker_location_picker_module__WEBPACK_IMPORTED_MODULE_4__.LocationPickerModule
        ],
        providers: [
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicRouteStrategy },
            _awesome_cordova_plugins_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__.Geolocation,
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HTTP_INTERCEPTORS,
                useClass: _authentication_authentication_interceptor__WEBPACK_IMPORTED_MODULE_5__.AuthenticationInterceptor,
                multi: true
            }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
        exports: []
    })
], AppModule);



/***/ }),

/***/ 380:
/*!**************************************************************!*\
  !*** ./src/app/authentication/authentication.interceptor.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthenticationInterceptor": () => (/* binding */ AuthenticationInterceptor)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authentication.service */ 5004);



let AuthenticationInterceptor = class AuthenticationInterceptor {
    constructor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    intercept(request, next) {
        const authenticationToken = this.authenticationService.getToken();
        const authenticationRequest = request.clone(
        // Clone and edit that request.
        {
            headers: request.headers.set('Authorization', 'Bearer ' + authenticationToken)
        });
        return next.handle(authenticationRequest);
    }
};
AuthenticationInterceptor.ctorParameters = () => [
    { type: _authentication_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationService }
];
AuthenticationInterceptor = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)()
], AuthenticationInterceptor);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 4008);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 9500);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 3981);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 8260);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 592);
var AuthenticationService_1;







let AuthenticationService = AuthenticationService_1 = class AuthenticationService {
    constructor(http, modalController) {
        this.http = http;
        this.modalController = modalController;
        this.authenticationStatusListener = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
        this.isAuthenticated = false;
        this.BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.BACKEND_URL;
        this.userChangeListener = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    }
    createUser(role, username, password, first_name, last_name, email, phone, locality, landmark, pin_code, city_district_town, state, address_line) {
        const userData = { role, username, password, first_name, last_name, email, phone, locality, landmark, pin_code, city_district_town, state, address_line };
        return this.http.post(this.BACKEND_URL + '/user/signup', userData);
    }
    verifyUser(role, username, otp) {
        const verificationData = { role, username, otp };
        return this.http.post(this.BACKEND_URL + '/user/verify', verificationData);
    }
    resendOTP(role, username) {
        const data = { role, username };
        return this.http.post(this.BACKEND_URL + '/user/resendOTP', data);
    }
    loginUser(role, username, password, remember) {
        const userData = { role, username, password, remember };
        return this.http.post(this.BACKEND_URL + '/user/signin', userData);
    }
    login(response) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            this.token = response.token;
            if (this.token) {
                const expiresInDuration = response.expiresIn;
                this.setAuthenticationTimer(expiresInDuration);
                this.authenticationStatusListener.next(true);
                this.isAuthenticated = true;
                const now = new Date();
                const expirationDate = new Date(now.getTime() + expiresInDuration * 1000);
                AuthenticationService_1.saveAuthenticationData(this.token, expirationDate);
                yield this.fetchUserDetails();
                yield this.modalController.dismiss(null, 'cancel');
            }
        });
    }
    getAuthStatusListener() {
        return this.authenticationStatusListener.asObservable();
    }
    getUserChangeListener() {
        return this.userChangeListener.asObservable();
    }
    setCurrentUser(currentUser) {
        this.currentUser = currentUser;
        this.userChangeListener.next(this.currentUser);
    }
    getIsAuthenticated() {
        return this.isAuthenticated;
    }
    logout() {
        this.token = null;
        this.isAuthenticated = false;
        this.authenticationStatusListener.next(false);
        this.userChangeListener.next(null);
        clearTimeout(this.tokenTimer);
        AuthenticationService_1.clearAuthenticationData();
        this.currentUser = null;
    }
    static saveAuthenticationData(token, expirationDate) {
        localStorage.setItem('token', token);
        localStorage.setItem('expiration', expirationDate.toISOString());
    }
    static clearAuthenticationData() {
        localStorage.removeItem('token');
        localStorage.removeItem('expiration');
    }
    autoAuthenticateUser() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const authInformation = AuthenticationService_1.getAuthenticationData();
            if (!authInformation) {
                return;
            }
            const now = new Date();
            const expiresIn = authInformation.expirationDate.getTime() - now.getTime();
            if (expiresIn > 0) {
                this.token = authInformation.token;
                this.isAuthenticated = true;
                this.setAuthenticationTimer(expiresIn / 1000);
                this.authenticationStatusListener.next(true);
                yield this.fetchUserDetails();
            }
        });
    }
    static getAuthenticationData() {
        const token = localStorage.getItem('token');
        const expirationDate = localStorage.getItem('expiration');
        if (!token || !expirationDate) {
            return;
        }
        return {
            token,
            expirationDate: new Date(expirationDate),
        };
    }
    setAuthenticationTimer(duration) {
        this.tokenTimer = setTimeout(() => {
            this.logout();
        }, duration * 1000 // Seconds -> Milliseconds.
        );
    }
    getToken() {
        return this.token;
    }
    getCurrentUser() {
        return this.currentUser;
    }
    updateUser(first_name, last_name, email, phone, locality, landmark, pin_code, city_district_town, state, address_line) {
        const userData = { first_name, last_name, email, phone, locality, landmark, pin_code, city_district_town, state, address_line };
        return this.http.post(this.BACKEND_URL + '/user/update', userData);
    }
    fetchUserDetails() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            yield this.http.get(this.BACKEND_URL + '/user/fetch')
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)((error) => (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
                console.log("Error while fetching user details : ", error);
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)('Error occurred');
            })))
                .subscribe((response) => {
                this.currentUser = response.user;
                this.userChangeListener.next(this.currentUser);
            });
        });
    }
};
AuthenticationService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController }
];
AuthenticationService = AuthenticationService_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable)({
        providedIn: 'root'
    })
], AuthenticationService);



/***/ }),

/***/ 3814:
/*!************************************************************************************!*\
  !*** ./src/app/authentication/otp-verification/otp-verification-page.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OtpVerificationPage": () => (/* binding */ OtpVerificationPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _E_Education_Capstone_Code_Handyman_node_modules_ngtools_webpack_src_loaders_direct_resource_js_otp_verification_page_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./otp-verification-page.component.html */ 6989);
/* harmony import */ var _otp_verification_page_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./otp-verification-page.component.scss */ 2151);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var rxjs_internal_compatibility__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/internal-compatibility */ 7726);
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../authentication.service */ 5004);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 9500);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 592);
/* harmony import */ var _signin_sign_in_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../signin/sign-in-page.component */ 159);











let OtpVerificationPage = class OtpVerificationPage {
    constructor(modalController, authenticationService) {
        this.modalController = modalController;
        this.authenticationService = authenticationService;
        this.remainingResendSeconds = 0;
        this.resendOTPTimer = null;
        this.formMessage = "";
        this.messageColor = "";
    }
    ngOnInit() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
            // OTP 1
            'otp1': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', {
                validators: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required
                ]
            }),
            // OTP 2
            'otp2': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', {
                validators: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required
                ]
            }),
            // OTP 3
            'otp3': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', {
                validators: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required
                ]
            }),
            // OTP 4
            'otp4': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', {
                validators: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required
                ]
            })
        });
        this.resetResendOTPTimer();
    }
    resetResendOTPTimer() {
        this.remainingResendSeconds = 120;
        this.resendOTPTimer = setInterval(() => {
            if (this.remainingResendSeconds != 0) {
                this.remainingResendSeconds--;
            }
            else {
                clearInterval(this.resendOTPTimer);
            }
        }, 1000);
    }
    onDigitDown(inputEvent, input) {
        if (input.value.toString().length > 0 && inputEvent.key !== "Backspace") {
            inputEvent.preventDefault();
            inputEvent.stopPropagation();
        }
    }
    focusForward(inputEvent, input) {
        if (inputEvent.key !== "Backspace" && (0,rxjs_internal_compatibility__WEBPACK_IMPORTED_MODULE_5__.isNumeric)(inputEvent.key)) {
            input.setFocus();
        }
    }
    focusBack(input) {
        input.setFocus();
    }
    onVerify() {
        const otp = this.form.get('otp1').value.toString() + this.form.get('otp2').value.toString() + this.form.get('otp3').value.toString() + this.form.get('otp4').value.toString();
        const verifyObservable = this.authenticationService.verifyUser(this.role, this.username, otp);
        verifyObservable
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)((error) => {
            console.log("Occurred Error : ", error);
            this.formMessage = error.error.message;
            this.messageColor = 'danger';
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.throwError)('Error occurred');
        }))
            .subscribe((response) => {
            this.formMessage = response.message;
            this.messageColor = 'success';
            this.form.reset();
            this.openSignIn();
        });
    }
    resendOTP() {
        if (this.remainingResendSeconds == 0) {
            const resendObservable = this.authenticationService.resendOTP(this.role, this.username);
            resendObservable
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)((error) => {
                console.log("Occurred Error : ", error);
                this.formMessage = error.error.message;
                this.messageColor = 'danger';
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.throwError)('Error occurred');
            }))
                .subscribe((response) => {
                this.formMessage = response.message;
                this.messageColor = 'success';
                this.form.reset();
                this.resetResendOTPTimer();
            });
        }
    }
    openSignIn() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            yield this.closeOTPVerification();
            const modal = yield this.modalController.create({
                component: _signin_sign_in_page_component__WEBPACK_IMPORTED_MODULE_3__.SignInPage
            });
            yield modal.present();
        });
    }
    closeOTPVerification() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            yield this.modalController.dismiss(null, 'cancel');
        });
    }
};
OtpVerificationPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController },
    { type: _authentication_service__WEBPACK_IMPORTED_MODULE_2__.AuthenticationService }
];
OtpVerificationPage.propDecorators = {
    role: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input }],
    username: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input }]
};
OtpVerificationPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-otp-verification',
        template: _E_Education_Capstone_Code_Handyman_node_modules_ngtools_webpack_src_loaders_direct_resource_js_otp_verification_page_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_otp_verification_page_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], OtpVerificationPage);



/***/ }),

/***/ 159:
/*!*****************************************************************!*\
  !*** ./src/app/authentication/signin/sign-in-page.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignInPage": () => (/* binding */ SignInPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _E_Education_Capstone_Code_Handyman_node_modules_ngtools_webpack_src_loaders_direct_resource_js_sign_in_page_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./sign-in-page.component.html */ 4091);
/* harmony import */ var _sign_in_page_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sign-in-page.component.scss */ 3465);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../authentication.service */ 5004);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 9500);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 592);
/* harmony import */ var _otp_verification_otp_verification_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../otp-verification/otp-verification-page.component */ 3814);
/* harmony import */ var _signup_sign_up_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../signup/sign-up-page.component */ 5488);











let SignInPage = class SignInPage {
    constructor(modalController, authenticationService) {
        this.modalController = modalController;
        this.authenticationService = authenticationService;
        this.formMessage = "";
        this.messageColor = "danger";
        this.selectedRole = "handyman";
    }
    ngOnInit() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({
            // Username
            'username': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', {
                validators: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(5),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(10)
                ]
            }),
            // Password
            'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', {
                validators: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(5),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(10)
                ]
            }),
            // Remember Me
            'remember': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(false)
        });
    }
    onFormChange() {
        this.formMessage = '';
        this.messageColor = 'success';
        // Username validation
        if (this.form.get('username').touched) {
            if (this.form.get('username').value.length === 0) {
                this.formMessage = 'Username is required';
                this.messageColor = 'danger';
                return;
            }
            else if (this.form.get('username').value.length < 5 || this.form.get('username').value.length > 10) {
                this.formMessage = 'Username length should in between 5 and 10';
                this.messageColor = 'danger';
                return;
            }
        }
        // Password validation
        if (this.form.get('password').touched) {
            if (this.form.get('password').value.length === 0) {
                this.formMessage = 'Password is required';
                this.messageColor = 'danger';
                return;
            }
            else if (this.form.get('password').value.length < 5 || this.form.get('password').value.length > 10) {
                this.formMessage = 'Password length should in between 5 and 10';
                this.messageColor = 'danger';
                return;
            }
        }
    }
    onSignIn() {
        this.formMessage = '';
        this.messageColor = 'success';
        if (this.form.invalid) {
            return;
        }
        const loginUserObservable = this.authenticationService.loginUser(this.selectedRole, this.form.get('username').value, this.form.get('password').value, this.form.get('remember').value);
        loginUserObservable
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)((error) => {
            console.log("Occurred Error : ", error);
            this.formMessage = error.error.message;
            this.messageColor = 'danger';
            if (error.error.message === "Account not verified") {
                const resendObservable = this.authenticationService.resendOTP(this.selectedRole, this.form.get('username').value);
                resendObservable
                    .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)((error) => {
                    console.log("Occurred Error : ", error);
                    this.formMessage = error.error.message;
                    this.messageColor = 'danger';
                    return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.throwError)('Error occurred');
                }))
                    .subscribe((response) => {
                    this.formMessage = response.message;
                    this.messageColor = 'success';
                    this.openOTPVerification(this.selectedRole, this.form.get('username').value);
                    this.form.reset();
                });
            }
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.throwError)('Error occurred');
        }))
            .subscribe((response) => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            this.formMessage = "User logged in successfully";
            this.messageColor = 'success';
            this.form.reset();
            yield this.authenticationService.login(response);
        }));
    }
    openOTPVerification(role, username) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            yield this.closeSignIn();
            const modal = yield this.modalController.create({
                component: _otp_verification_otp_verification_page_component__WEBPACK_IMPORTED_MODULE_3__.OtpVerificationPage,
                componentProps: {
                    role,
                    username
                }
            });
            yield modal.present();
        });
    }
    onClearForm() {
        this.form.reset();
    }
    closeSignIn() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            yield this.modalController.dismiss(null, 'cancel');
        });
    }
    onRoleChange(event) {
        this.selectedRole = event.detail.value;
    }
    openSignUp() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            yield this.closeSignIn();
            const modal = yield this.modalController.create({
                component: _signup_sign_up_page_component__WEBPACK_IMPORTED_MODULE_4__.SignUpPage
            });
            yield modal.present();
        });
    }
};
SignInPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController },
    { type: _authentication_service__WEBPACK_IMPORTED_MODULE_2__.AuthenticationService }
];
SignInPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-sign-in',
        template: _E_Education_Capstone_Code_Handyman_node_modules_ngtools_webpack_src_loaders_direct_resource_js_sign_in_page_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_sign_in_page_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], SignInPage);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _E_Education_Capstone_Code_Handyman_node_modules_ngtools_webpack_src_loaders_direct_resource_js_sign_up_page_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./sign-up-page.component.html */ 3074);
/* harmony import */ var _sign_up_page_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sign-up-page.component.scss */ 1454);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../authentication.service */ 5004);
/* harmony import */ var _signin_sign_in_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../signin/sign-in-page.component */ 159);
/* harmony import */ var _locationPicker_location_picker_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../locationPicker/location-picker.component */ 6762);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 9500);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 592);
/* harmony import */ var _otp_verification_otp_verification_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../otp-verification/otp-verification-page.component */ 3814);












let SignUpPage = class SignUpPage {
    constructor(modalController, authenticationService) {
        this.modalController = modalController;
        this.authenticationService = authenticationService;
        this.formMessage = '';
        this.messageColor = 'danger';
        this.selectedRole = "handyman";
        this.states = [
            "Andaman and Nicobar Islands",
            "Andhra Pradesh",
            "Arunachal Pradesh",
            "Assam",
            "Bihar",
            "Chandigarh",
            "Chhattisgarh",
            "Dadra and Nagar Haveli and Daman and Diu",
            "Delhi",
            "Goa",
            "Gujarat",
            "Haryana",
            "Himachal Pradesh",
            "Jammu and Kashmir",
            "Jharkhand",
            "Karnataka",
            "Kerala",
            "Ladakh",
            "Lakshadweep",
            "Madhya Pradesh",
            "Maharashtra",
            "Manipur",
            "Meghalaya",
            "Mizoram",
            "Nagaland",
            "Odisha",
            "Puducherry",
            "Punjab",
            "Rajasthan",
            "Sikkim",
            "Tamil Nadu",
            "Telangana",
            "Tripura",
            "Uttar Pradesh",
            "Uttarakhand",
            "West Bengal"
        ];
    }
    ngOnInit() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroup({
            // Username
            'username': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', {
                validators: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(5),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(10)
                ]
            }),
            // Password
            'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', {
                validators: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(5),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(10)
                ]
            }),
            // First Name
            'first_name': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', {
                validators: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern('^[a-zA-Z \-\']+')
                ]
            }),
            // Last Name
            'last_name': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', {
                validators: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern('^[a-zA-Z \-\']+')
                ]
            }),
            // Email
            'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', {
                validators: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.email
                ]
            }),
            // Phone
            'phone': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', {
                validators: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern(/^[6-9]\d{9}$/),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(10)
                ]
            }),
            // Locality
            'locality': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', {
                validators: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required
                ]
            }),
            // Landmark
            'landmark': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(''),
            // PIN Code
            'pin_code': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', {
                validators: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(6),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(6),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern("^[1-9][0-9]{5}$")
                ]
            }),
            // City/District/Town
            'city_district_town': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', {
                validators: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required
                ]
            }),
            // State
            'state': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', {
                validators: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required
                ]
            }),
            // Address
            'address_line': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', {
                validators: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required
                ]
            }),
        });
    }
    onFormChange() {
        this.formMessage = '';
        this.messageColor = 'success';
        // Username validation
        if (this.form.get('username').touched) {
            if (this.form.get('username').value.length === 0) {
                this.formMessage = 'Username is required';
                this.messageColor = 'danger';
                return;
            }
            else if (this.form.get('username').value.length < 5 || this.form.get('username').value.length > 10) {
                this.formMessage = 'Username length should in between 5 and 10';
                this.messageColor = 'danger';
                return;
            }
        }
        // Password validation
        if (this.form.get('password').touched) {
            if (this.form.get('password').value.length === 0) {
                this.formMessage = 'Password is required';
                this.messageColor = 'danger';
                return;
            }
            else if (this.form.get('password').value.length < 5 || this.form.get('password').value.length > 10) {
                this.formMessage = 'Password length should in between 5 and 10';
                this.messageColor = 'danger';
                return;
            }
        }
        // First Name Validation
        if (this.form.get('first_name').touched) {
            if (this.form.get('first_name').value.length == 0) {
                this.formMessage = 'First Name is required';
                this.messageColor = 'danger';
                return;
            }
            else if (this.form.get('first_name').invalid) {
                this.formMessage = 'Enter a valid first name';
                this.messageColor = 'danger';
                return;
            }
        }
        // Last Name Validation
        if (this.form.get('last_name').touched) {
            if (this.form.get('last_name').value.length == 0) {
                this.formMessage = 'Last Name is required';
                this.messageColor = 'danger';
                return;
            }
            else if (this.form.get('last_name').invalid) {
                this.formMessage = 'Enter a valid last name';
                this.messageColor = 'danger';
                return;
            }
        }
        // Email Validation
        if (this.form.get('email').touched) {
            if (this.form.get('email').value.length == 0) {
                this.formMessage = 'Email is required';
                this.messageColor = 'danger';
                return;
            }
            else if (this.form.get('email').invalid) {
                this.formMessage = 'Enter a valid mail address';
                this.messageColor = 'danger';
                return;
            }
        }
        // Phone Validation
        if (this.form.get('phone').touched) {
            if (this.form.get('phone').value.length == 0) {
                this.formMessage = 'Mobile number is required';
                this.messageColor = 'danger';
                return;
            }
            else if (this.form.get('phone').invalid) {
                this.formMessage = 'Enter valid mobile number';
                this.messageColor = 'danger';
                return;
            }
        }
        // Locality Validation
        if (this.form.get('locality').touched) {
            if (this.form.get('locality').value.length == 0) {
                this.formMessage = 'Locality is required';
                this.messageColor = 'danger';
                return;
            }
        }
        // PIN Validation
        if (this.form.get('pin_code').touched) {
            if (this.form.get('pin_code').value.length == 0) {
                this.formMessage = 'PIN Code is required';
                this.messageColor = 'danger';
                return;
            }
            else if (this.form.get('pin_code').invalid) {
                this.formMessage = 'Enter valid pin code';
                this.messageColor = 'danger';
                return;
            }
        }
        // City/District/Town Validation
        if (this.form.get('city_district_town').touched) {
            if (this.form.get('city_district_town').value.length == 0) {
                this.formMessage = 'City/District/Town is required';
                this.messageColor = 'danger';
                return;
            }
        }
        // State Validation
        if (this.form.get('state').touched) {
            if (this.form.get('state').value.length == 0) {
                this.formMessage = 'State is required';
                this.messageColor = 'danger';
                return;
            }
        }
        // Address Validation
        if (this.form.get('address_line').touched) {
            if (this.form.get('address_line').value.length == 0) {
                this.formMessage = 'Address line is required';
                this.messageColor = 'danger';
                return;
            }
        }
    }
    onSignUp() {
        this.formMessage = '';
        this.messageColor = 'success';
        if (this.form.invalid) {
            return;
        }
        const createUserObservable = this.authenticationService.createUser(this.selectedRole, this.form.get('username').value, this.form.get('password').value, this.form.get('first_name').value, this.form.get('last_name').value, this.form.get('email').value, this.form.get('phone').value, this.form.get('locality').value, this.form.get('landmark').value, this.form.get('pin_code').value, this.form.get('city_district_town').value, this.form.get('state').value, this.form.get('address_line').value);
        createUserObservable
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)((error) => {
            console.log("Occurred Error : ", error);
            const errorMessages = error.error.message;
            console.log(errorMessages);
            errorMessages.every((message) => {
                if (message === 'username') {
                    this.formMessage = "Username already taken";
                    this.messageColor = 'danger';
                    this.form.get('username').setErrors({ 'incorrect': true });
                    return false;
                }
                else if (message === 'email') {
                    this.formMessage = "Email already taken";
                    this.messageColor = 'danger';
                    this.form.get('email').setErrors({ 'incorrect': true });
                    return false;
                }
                else if (message === 'phone') {
                    this.formMessage = "Mobile number already taken";
                    this.messageColor = 'danger';
                    this.form.get('phone').setErrors({ 'incorrect': true });
                    return false;
                }
            });
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.throwError)('Error occurred');
        }))
            .subscribe((response) => {
            this.formMessage = "User created successfully";
            this.messageColor = 'success';
            this.form.reset();
            this.openOTPVerification(this.selectedRole, response.result.username);
        });
    }
    openOTPVerification(role, username) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            yield this.closeSignUp();
            const modal = yield this.modalController.create({
                component: _otp_verification_otp_verification_page_component__WEBPACK_IMPORTED_MODULE_5__.OtpVerificationPage,
                componentProps: {
                    role,
                    username
                }
            });
            yield modal.present();
        });
    }
    onClearForm() {
        this.form.reset();
    }
    closeSignUp() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            yield this.modalController.dismiss(null, 'cancel');
        });
    }
    onRoleChange(event) {
        this.selectedRole = event.detail.value;
    }
    openSignIn() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            yield this.closeSignUp();
            const modal = yield this.modalController.create({
                component: _signin_sign_in_page_component__WEBPACK_IMPORTED_MODULE_3__.SignInPage
            });
            yield modal.present();
        });
    }
    openMap() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _locationPicker_location_picker_component__WEBPACK_IMPORTED_MODULE_4__.LocationPickerComponent
            });
            yield modal.present();
            const selectedFeature = yield modal.onWillDismiss();
            if (selectedFeature.data) {
                const context = selectedFeature.data.context;
                context.forEach((c) => {
                    if (c.id.includes('region')) // State
                     {
                        this.form.get('state').setValue(c.text);
                    }
                    else if (c.id.includes('postcode')) {
                        this.form.get('pin_code').setValue(c.text);
                    }
                    else if (c.id.includes('district')) {
                        this.form.get('city_district_town').setValue(c.text);
                    }
                    else if (c.id.includes('place') || c.id.includes('locality')) {
                        this.form.get('locality').setValue(c.text);
                    }
                    else if (c.id.includes('poi')) {
                        this.form.get('landmark').setValue(c.text);
                    }
                });
                this.form.get('address_line').setValue(selectedFeature.data.place_name);
            }
        });
    }
};
SignUpPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ModalController },
    { type: _authentication_service__WEBPACK_IMPORTED_MODULE_2__.AuthenticationService }
];
SignUpPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _E_Education_Capstone_Code_Handyman_node_modules_ngtools_webpack_src_loaders_direct_resource_js_header_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./header.component.html */ 7030);
/* harmony import */ var _header_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.component.scss */ 530);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../authentication/authentication.service */ 5004);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _authentication_signin_sign_in_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../authentication/signin/sign-in-page.component */ 159);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 3252);








let HeaderComponent = class HeaderComponent {
    constructor(authenticationService, modalController, router) {
        this.authenticationService = authenticationService;
        this.modalController = modalController;
        this.router = router;
        this.headerTitle = 'Home';
    }
    ngOnInit() {
        this.authenticationService.getAuthStatusListener().subscribe((isAuthenticated) => {
            this.authenticationIcon = isAuthenticated ? 'assets/icons/logout.png' : 'assets/icons/login.png';
        });
        this.authenticationIcon = this.authenticationService.getIsAuthenticated() ? 'assets/icons/logout.png' : 'assets/icons/login.png';
        this.router.events.subscribe((routerEvent) => {
            if (routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__.NavigationEnd) {
                const activeRoute = routerEvent.urlAfterRedirects;
                if (activeRoute === '/home' || activeRoute === '') {
                    this.headerTitle = 'Home';
                }
                else if (activeRoute === '/profile') {
                    this.headerTitle = 'Profile';
                }
                else if (activeRoute === '/bookings') {
                    this.headerTitle = 'Bookings';
                }
                else if (activeRoute === '/about') {
                    this.headerTitle = 'About';
                }
            }
        });
    }
    onAuthenticationModalOpen() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _authentication_signin_sign_in_page_component__WEBPACK_IMPORTED_MODULE_3__.SignInPage
            });
            yield modal.present();
        });
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__.AuthenticationService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
];
HeaderComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-header',
        template: _E_Education_Capstone_Code_Handyman_node_modules_ngtools_webpack_src_loaders_direct_resource_js_header_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_header_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], HeaderComponent);



/***/ }),

/***/ 6762:
/*!*************************************************************!*\
  !*** ./src/app/locationPicker/location-picker.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocationPickerComponent": () => (/* binding */ LocationPickerComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _E_Education_Capstone_Code_Handyman_node_modules_ngtools_webpack_src_loaders_direct_resource_js_location_picker_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./location-picker.component.html */ 9926);
/* harmony import */ var _location_picker_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./location-picker.component.scss */ 422);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _awesome_cordova_plugins_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @awesome-cordova-plugins/geolocation/ngx */ 5732);
/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mapbox-gl */ 3858);
/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mapbox_gl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ 8260);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 3981);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 592);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 9500);











let LocationPickerComponent = class LocationPickerComponent {
    constructor(modalController, geoLocation, http) {
        this.modalController = modalController;
        this.geoLocation = geoLocation;
        this.http = http;
        this.mapStyle = 'streets';
        this.selectedAddress = "";
        this.searchLocations = [];
        this.locationFeatures = [];
        this.selectedFeature = null;
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
            this.selectedFeature = features[0];
        });
    }
    changedAddress(input) {
        if (input === '') {
            this.searchLocations = [];
            this.locationFeatures = [];
            return;
        }
        this.http.get(encodeURI(`https://api.mapbox.com/geocoding/v5/mapbox.places/${input}.json?country=IN&limit=5&access_token=${_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.MAPBOX_KEY}`))
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)((error) => {
            console.log("Error while forward geocoding : ", error);
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.throwError)(error);
        })).subscribe((response) => {
            const features = response.features;
            this.searchLocations = [];
            this.locationFeatures = features;
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
        this.selectedFeature = this.locationFeatures[index];
    }
    locationConfirmed() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            yield this.modalController.dismiss(this.selectedFeature, 'dismiss');
        });
    }
};
LocationPickerComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController },
    { type: _awesome_cordova_plugins_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__.Geolocation },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient }
];
LocationPickerComponent.propDecorators = {
    mapHolder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewChild, args: ['mapHolder',] }],
    searchBar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewChild, args: ['searchBar',] }],
    locationsList: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewChild, args: ['locationsList',] }]
};
LocationPickerComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-map-modal',
        template: _E_Education_Capstone_Code_Handyman_node_modules_ngtools_webpack_src_loaders_direct_resource_js_location_picker_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewEncapsulation.None,
        styles: [_location_picker_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], LocationPickerComponent);



/***/ }),

/***/ 6860:
/*!**********************************************************!*\
  !*** ./src/app/locationPicker/location-picker.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocationPickerModule": () => (/* binding */ LocationPickerModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 6219);
/* harmony import */ var _location_picker_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./location-picker.component */ 6762);







let LocationPickerModule = class LocationPickerModule {
};
LocationPickerModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        declarations: [_location_picker_component__WEBPACK_IMPORTED_MODULE_0__.LocationPickerComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule,
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule
        ]
    })
], LocationPickerModule);



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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-app>\n\n  <!-- Header Component -->\n  <ion-header>\n    <app-header></app-header>\n  </ion-header>\n\n  <ion-content>\n\n    <ion-router-outlet></ion-router-outlet>\n\n    <ion-tabs>\n      <ion-tab-bar slot=\"bottom\">\n\n        <ion-tab-button tab=\"home\">\n          <ion-img [src]=\"currentBaseRoute === 'home' ?  'assets/icons/home_active.png' : 'assets/icons/home_inactive.png'\" style=\"width: 32px; height: 32px\"></ion-img>\n          <ion-label>Home</ion-label>\n        </ion-tab-button>\n\n        <ion-tab-button tab=\"profile\">\n          <ion-img [src]=\"currentBaseRoute === 'profile' ? 'assets/icons/profile_active.png' : 'assets/icons/profile_inactive.png'\" style=\"width: 32px; height: 32px\"></ion-img>\n          <ion-label>Profile</ion-label>\n        </ion-tab-button>\n\n        <ion-tab-button tab=\"bookings\">\n          <ion-img [src]=\"currentBaseRoute === 'bookings' ? 'assets/icons/bookings_active.png' : 'assets/icons/bookings_inactive.png'\" style=\"width: 32px; height: 32px\"></ion-img>\n          <ion-label>Bookings</ion-label>\n        </ion-tab-button>\n\n        <ion-tab-button tab=\"about\">\n          <ion-img [src]=\"currentBaseRoute === 'about' ? 'assets/icons/about_active.png' : 'assets/icons/about_inactive.png'\" style=\"width: 32px; height: 32px\"></ion-img>\n          <ion-label>About</ion-label>\n        </ion-tab-button>\n\n      </ion-tab-bar>\n    </ion-tabs>\n\n  </ion-content>\n</ion-app>\n");

/***/ }),

/***/ 6989:
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/authentication/otp-verification/otp-verification-page.component.html ***!
  \*****************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar color=\"light\">\n    <ion-title color=\"primary\">OTP VERIFICATION</ion-title>\n\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"closeOTPVerification()\"><ion-img src=\"assets/icons/close.png\" style=\"height: 24px; width: 24px\"></ion-img></ion-button>\n    </ion-buttons>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\" style=\"background-color: #FFFFFF\">\n\n  <div class=\"ion-align-items-center ion-justify-content-center ion-margin-top\" style=\"display: flex\">\n    <ion-img src=\"assets/landings/otp.png\" style=\"width: 256px; height: 256px\"></ion-img>\n  </div>\n\n  <div class=\"ion-text-center ion-margin-top\">\n    <p style=\"font-weight: bold; color: #6c757d\">Enter the OTP sent to your registered mail</p>\n  </div>\n\n  <form (submit)=\"onVerify()\" action=\"\" [formGroup]=\"form\">\n\n    <div style=\"margin-top: 30px\">\n      <ion-grid>\n        <ion-row class=\"ion-text-center\" style=\"display: flex; justify-content: space-between\">\n\n          <ion-col size=\"2\"><ion-input formControlName=\"otp1\" class=\"otpInput\" type=\"number\" (keydown)=\"onDigitDown($event, otp1)\" (keyup)=\"focusForward($event, otp2)\" required=\"true\" #otp1></ion-input></ion-col>\n\n          <ion-col size=\"2\"><ion-input formControlName=\"otp2\" class=\"otpInput\" type=\"number\" (keydown)=\"onDigitDown($event, otp2)\" (keyup)=\"focusForward($event, otp3)\" (keyup.backspace)=\"focusBack(otp1)\" required=\"true\" #otp2></ion-input></ion-col>\n\n          <ion-col size=\"2\"><ion-input formControlName=\"otp3\" class=\"otpInput\" type=\"number\" (keydown)=\"onDigitDown($event, otp3)\" (keyup)=\"focusForward($event, otp4)\" (keyup.backspace)=\"focusBack(otp2)\" required=\"true\" #otp3></ion-input></ion-col>\n\n          <ion-col size=\"2\"><ion-input formControlName=\"otp4\" class=\"otpInput\" type=\"number\" (keydown)=\"onDigitDown($event, otp4)\" (keyup.backspace)=\"focusBack(otp3)\" required=\"true\" #otp4></ion-input></ion-col>\n\n        </ion-row>\n      </ion-grid>\n    </div>\n\n    <div class=\"ion-margin-top ion-text-center\" [style.display]=\"remainingResendSeconds > 0 ? 'block' : 'none'\">\n      <p style=\"color: #6c757d\">Resend OTP in <span style=\"font-weight: bold\">{{remainingResendSeconds}} s</span> </p>\n    </div>\n\n    <div class=\"ion-text-center\" style=\"margin-top: 25px\">\n      <p style=\"font-weight: bold; color: #6c757d\">Haven't received OTP ?\n        <a [style.color]=\"remainingResendSeconds > 0 ? '#6c757d' : '#3880ff'\"\n           style=\"font-weight: normal\" (click)=\"resendOTP()\">\n          Resend OTP\n        </a>\n      </p>\n    </div>\n\n    <div class=\"ion-margin-vertical ion-text-center\">\n      <ion-label id=\"formMessage\" [color]=\"messageColor\" class=\"ion-margin\" style=\"font-weight: bold\" *ngIf=\"formMessage\">{{formMessage}}</ion-label>\n    </div>\n\n    <div style=\"margin-top: 30px\">\n      <ion-button expand=\"block\" color=\"primary\" type=\"submit\" [disabled]=\"form.invalid\">Verify</ion-button>\n    </div>\n\n  </form>\n\n</ion-content>\n\n");

/***/ }),

/***/ 4091:
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/authentication/signin/sign-in-page.component.html ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar color=\"light\">\n    <ion-title color=\"primary\">SIGN-IN</ion-title>\n\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"closeSignIn()\"><ion-img src=\"assets/icons/close.png\" style=\"height: 24px; width: 24px\"></ion-img></ion-button>\n    </ion-buttons>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\" style=\"--background: url(assets/backgrounds/authentication.png) 0 0/100% 100% no-repeat\">\n\n  <!-- Role Selection -->\n  <ion-segment class=\"ion-margin-bottom\" value=\"handyman\" (ionChange)=\"onRoleChange($event)\">\n    <ion-segment-button value=\"handyman\">\n      <ion-img [src]=\"selectedRole == 'handyman' ? 'assets/icons/handyman_active.png' : 'assets/icons/handyman_inactive.png'\" style=\"width: 48px; height: 48px\"></ion-img>\n      <ion-label style=\"font-weight: bold\">Handyman</ion-label>\n    </ion-segment-button>\n\n    <ion-segment-button value=\"customer\">\n      <ion-img [src]=\"selectedRole == 'customer' ? 'assets/icons/customers_active.png' : 'assets/icons/customers_inactive.png'\" style=\"width: 48px; height: 48px\"></ion-img>\n      <ion-label style=\"font-weight: bold\">Customer</ion-label>\n    </ion-segment-button>\n  </ion-segment>\n\n  <form (submit)=\"onSignIn()\" action=\"\" [formGroup]=\"form\" (change)=\"onFormChange()\" class=\"ion-text-center\">\n\n    <ion-list style=\"background-color: transparent\">\n\n      <ion-item class=\"ion-margin-horizontal ion-margin-bottom\" style=\"--ion-background-color:transparent\">\n        <ion-label><ion-img class=\"ion-float-left\" style=\"height: 32px; width: 32px\" src=\"assets/icons/username.png\"></ion-img></ion-label>\n        <ion-input type=\"text\" autocomplete=\"on\" placeholder=\"Username\" formControlName=\"username\" [clearInput]=\"true\" [minlength]=\"5\" [maxlength]=\"10\" [required]=\"true\"></ion-input>\n      </ion-item>\n\n      <ion-item class=\"ion-margin\" style=\"--ion-background-color:transparent\">\n        <ion-label><ion-img class=\"ion-float-left\" style=\"height: 32px; width: 32px\" src=\"assets/icons/password.png\"></ion-img></ion-label>\n        <ion-input type=\"password\" autocomplete=\"on\" placeholder=\"Password\" formControlName=\"password\" [clearInput]=\"true\" [minlength]=\"5\" [maxlength]=\"15\" [required]=\"true\"></ion-input>\n      </ion-item>\n\n      <ion-item class=\"ion-margin\" style=\"--ion-background-color:transparent\">\n        <ion-checkbox color=\"secondary\" checked=\"false\" formControlName=\"remember\"></ion-checkbox>\n        <ion-label class=\"ion-margin-start\">Remember Me</ion-label>\n      </ion-item>\n\n    </ion-list>\n\n    <ion-label id=\"formMessage\" [color]=\"messageColor\" class=\"ion-margin\" style=\"font-weight: bold\" *ngIf=\"formMessage\">{{formMessage}}</ion-label>\n\n    <ion-grid class=\"ion-margin\">\n      <ion-row>\n\n        <ion-col size=\"6\">\n          <ion-button color=\"danger\" (click)=\"onClearForm()\" type=\"clear\" shape=\"round\">Clear</ion-button>\n        </ion-col>\n\n        <ion-col size=\"6\">\n          <ion-button color=\"primary\" [disabled]=\"!form.valid\" type=\"submit\" shape=\"round\">\n            SIGN IN\n          </ion-button>\n        </ion-col>\n\n      </ion-row>\n    </ion-grid>\n\n    <ion-label class=\"ion-margin\">Don't have account ? <a (click)=\"openSignUp()\">SIGN UP</a></ion-label>\n  </form>\n\n</ion-content>\n");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar color=\"light\">\n    <ion-title color=\"primary\">SIGN-UP</ion-title>\n\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"closeSignUp()\"><ion-img src=\"assets/icons/close.png\" style=\"height: 24px; width: 24px\"></ion-img></ion-button>\n    </ion-buttons>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\" style=\"--background: url(assets/backgrounds/authentication.png) 0 0/100% 100% no-repeat\">\n\n  <!-- Role Selection -->\n  <ion-segment class=\"ion-margin-bottom\" value=\"handyman\" (ionChange)=\"onRoleChange($event)\">\n    <ion-segment-button value=\"handyman\">\n      <ion-img [src]=\"selectedRole == 'handyman' ? 'assets/icons/handyman_active.png' : 'assets/icons/handyman_inactive.png'\" style=\"width: 48px; height: 48px\"></ion-img>\n      <ion-label style=\"font-weight: bold\">Handyman</ion-label>\n    </ion-segment-button>\n\n    <ion-segment-button value=\"customer\">\n      <ion-img [src]=\"selectedRole == 'customer' ? 'assets/icons/customers_active.png' : 'assets/icons/customers_inactive.png'\" style=\"width: 48px; height: 48px\"></ion-img>\n      <ion-label style=\"font-weight: bold\">Customer</ion-label>\n    </ion-segment-button>\n  </ion-segment>\n\n  <form (submit)=\"onSignUp()\" action=\"\" [formGroup]=\"form\" (change)=\"onFormChange()\" class=\"ion-text-center\">\n\n    <ion-list style=\"background-color: transparent\">\n\n      <ion-item-divider color=\"primary\" class=\"ion-margin\">\n        <ion-label style=\"font-weight: bold\">\n          General\n        </ion-label>\n      </ion-item-divider>\n\n      <ion-item class=\"ion-margin-horizontal ion-margin-bottom\" style=\"--ion-background-color:transparent\">\n        <ion-label><ion-img class=\"ion-float-left\" style=\"height: 32px; width: 32px\" src=\"assets/icons/username.png\"></ion-img></ion-label>\n        <ion-input type=\"text\" autocomplete=\"on\" placeholder=\"Username\" formControlName=\"username\" [clearInput]=\"true\" [minlength]=\"5\" [maxlength]=\"10\" [required]=\"true\"></ion-input>\n      </ion-item>\n\n      <ion-item class=\"ion-margin\" style=\"--ion-background-color:transparent\">\n        <ion-label><ion-img class=\"ion-float-left\" style=\"height: 32px; width: 32px\" src=\"assets/icons/password.png\"></ion-img></ion-label>\n        <ion-input type=\"password\" autocomplete=\"on\" placeholder=\"Password\" formControlName=\"password\" [clearInput]=\"true\" [minlength]=\"5\" [maxlength]=\"15\" [required]=\"true\"></ion-input>\n      </ion-item>\n\n      <ion-item class=\"ion-margin-horizontal ion-margin-bottom\" style=\"--ion-background-color:transparent\">\n        <ion-label><ion-img class=\"ion-float-left\" style=\"height: 32px; width: 32px\" src=\"assets/icons/name.png\"></ion-img></ion-label>\n        <ion-input type=\"text\" autocomplete=\"on\" placeholder=\"First Name\" formControlName=\"first_name\" [clearInput]=\"true\" [required]=\"true\"></ion-input>\n      </ion-item>\n\n      <ion-item class=\"ion-margin-horizontal ion-margin-bottom\" style=\"--ion-background-color:transparent\">\n        <ion-label><ion-img class=\"ion-float-left\" style=\"height: 32px; width: 32px\" src=\"assets/icons/name.png\"></ion-img></ion-label>\n        <ion-input type=\"text\" autocomplete=\"on\" placeholder=\"Last Name\" formControlName=\"last_name\" [clearInput]=\"true\" [required]=\"true\"></ion-input>\n      </ion-item>\n\n      <ion-item class=\"ion-margin\" style=\"--ion-background-color:transparent\">\n        <ion-label><ion-img class=\"ion-float-left\" style=\"height: 32px; width: 32px\" src=\"assets/icons/email.png\"></ion-img></ion-label>\n        <ion-input type=\"email\" autocomplete=\"on\" placeholder=\"Email\" formControlName=\"email\" [clearInput]=\"true\" [required]=\"true\"></ion-input>\n      </ion-item>\n\n      <ion-item class=\"ion-margin\" style=\"--ion-background-color:transparent\">\n        <ion-label><ion-img class=\"ion-float-left\" style=\"height: 32px; width: 32px\" src=\"assets/icons/phone.png\"></ion-img></ion-label>\n        <ion-input type=\"tel\" autocomplete=\"on\" placeholder=\"Phone\" formControlName=\"phone\" [clearInput]=\"true\" [required]=\"true\" maxlength=\"10\"></ion-input>\n      </ion-item>\n\n      <ion-item-divider color=\"primary\" style=\"margin-top: 20px\" class=\"ion-margin\">\n        <ion-label style=\"font-weight: bold\">\n          Address\n        </ion-label>\n      </ion-item-divider>\n\n      <ion-button type=\"button\" color=\"primary\" fill=\"outline\" shape=\"round\" (click)=\"openMap()\" >\n        <ion-label class=\"ion-margin-horizontal\">Locate On Map</ion-label>\n        <ion-img class=\"ion-float-right ion-margin-horizontal\" src=\"assets/icons/open_map.png\"></ion-img>\n      </ion-button>\n\n      <ion-item class=\"ion-margin\" style=\"--ion-background-color:transparent\">\n        <ion-label><ion-img class=\"ion-float-left\" style=\"height: 40px; width: 40px\" src=\"assets/icons/locality.png\"></ion-img></ion-label>\n        <ion-input type=\"text\" autocomplete=\"on\" placeholder=\"Locality\" formControlName=\"locality\" [clearInput]=\"true\" [required]=\"true\"></ion-input>\n      </ion-item>\n\n      <ion-item class=\"ion-margin\" style=\"--ion-background-color:transparent\">\n        <ion-label><ion-img class=\"ion-float-left\" style=\"height: 32px; width: 32px\" src=\"assets/icons/landmark.png\"></ion-img></ion-label>\n        <ion-input type=\"text\" autocomplete=\"on\" placeholder=\"Landmark\" formControlName=\"landmark\" [clearInput]=\"true\"></ion-input>\n      </ion-item>\n\n      <ion-item class=\"ion-margin\" style=\"--ion-background-color:transparent\">\n        <ion-label><ion-img class=\"ion-float-left\" style=\"height: 32px; width: 32px\" src=\"assets/icons/pin_code.png\"></ion-img></ion-label>\n        <ion-input type=\"number\" autocomplete=\"on\" placeholder=\"PIN Code\" formControlName=\"pin_code\" [clearInput]=\"true\"\n                   maxlength=\"6\" [required]=\"true\"></ion-input>\n      </ion-item>\n\n      <ion-item class=\"ion-margin\" style=\"--ion-background-color:transparent\">\n        <ion-label><ion-img class=\"ion-float-left\" style=\"height: 32px; width: 32px\" src=\"assets/icons/city_district_town.png\"></ion-img></ion-label>\n        <ion-input type=\"text\" autocomplete=\"on\" placeholder=\"City/District/Town\" formControlName=\"city_district_town\" [clearInput]=\"true\" [required]=\"true\"></ion-input>\n      </ion-item>\n\n      <ion-item class=\"ion-margin\" style=\"--ion-background-color:transparent\">\n        <ion-label><ion-img class=\"ion-float-left\" style=\"height: 32px; width: 32px\" src=\"assets/icons/state.png\"></ion-img></ion-label>\n\n        <ion-select placeholder=\"State\" formControlName=\"state\" style=\"max-width: 90%\">\n\n          <ion-select-option *ngFor=\"let state of states\" [value]=\"state\">\n            {{state}}\n          </ion-select-option>\n\n        </ion-select>\n      </ion-item>\n\n      <ion-item class=\"ion-margin\" style=\"--ion-background-color:transparent\">\n        <ion-label class=\"ion-align-self-center\"><ion-img class=\"ion-float-left\" style=\"height: 40px; width: 40px\" src=\"assets/icons/address.png\"></ion-img></ion-label>\n\n        <ion-textarea placeholder=\"Address Line\" formControlName=\"address_line\" spellcheck=\"true\" [required]=\"true\"></ion-textarea>\n      </ion-item>\n\n    </ion-list>\n\n    <ion-label id=\"formMessage\" [color]=\"messageColor\" class=\"ion-margin\" style=\"font-weight: bold\" *ngIf=\"formMessage\">{{formMessage}}</ion-label>\n\n    <ion-grid class=\"ion-margin\">\n      <ion-row>\n\n        <ion-col size=\"6\">\n          <ion-button color=\"danger\" (click)=\"onClearForm()\" type=\"clear\" shape=\"round\">Clear</ion-button>\n        </ion-col>\n\n        <ion-col size=\"6\">\n          <ion-button color=\"primary\" [disabled]=\"!form.valid\" type=\"submit\" shape=\"round\">\n            SIGN UP\n          </ion-button>\n        </ion-col>\n\n      </ion-row>\n    </ion-grid>\n\n    <ion-label class=\"ion-margin\">Already a user ? <a (click)=\"openSignIn()\">SIGN IN</a></ion-label>\n  </form>\n\n</ion-content>\n");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n\n    <ion-buttons slot=\"start\">\n      <ion-button>\n        <ion-img src=\"assets/icons/favicon.png\" style=\"width: 38px; height: 38px\"></ion-img>\n      </ion-button>\n    </ion-buttons>\n\n    <ion-title class=\"ion-text-center\">{{headerTitle}}</ion-title>\n\n    <ion-buttons slot=\"end\">\n      <ion-button>\n        <ion-img [src]=\"authenticationIcon\" style=\"width: 38px; height: 38px\"\n                 (click)=\"this.authenticationService.getIsAuthenticated() ? this.authenticationService.logout() : onAuthenticationModalOpen()\">\n        </ion-img>\n      </ion-button>\n    </ion-buttons>\n\n  </ion-toolbar>\n</ion-header>\n");

/***/ }),

/***/ 9926:
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/locationPicker/location-picker.component.html ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar color=\"light\">\n    <ion-title color=\"primary\">Pick Your Location</ion-title>\n\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"closeLocationPick()\"><ion-img src=\"assets/icons/close.png\" style=\"height: 24px; width: 24px\"></ion-img></ion-button>\n    </ion-buttons>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div #mapHolder style=\"position: absolute; top: 0; bottom: 0; width: 100%\"></div>\n\n  <ion-grid style=\"padding-top: 0; margin-right: 5px\">\n    <ion-row>\n      <ion-col size=\"11\">\n        <div class=\"addressSearch\">\n          <ion-item color=\"light\" style=\"--highlight-color-focused: var(--ion-color-primary)\">\n            <ion-label style=\"margin-top: 0; margin-bottom: 0\"><ion-img class=\"ion-float-left\" style=\"height: 32px; width: 32px\" src=\"assets/icons/mapSearch.png\"></ion-img></ion-label>\n            <ion-input clearInput=\"true\" type=\"text\" placeholder=\"Search\" (ionInput)=\"changedAddress(searchBar.value)\" #searchBar></ion-input>\n          </ion-item>\n\n\n          <div style=\"width: 100%; display: flex; justify-content: center; position: absolute\">\n            <ion-button expand=\"block\" shape=\"round\" color=\"primary\" (click)=\"locationConfirmed()\">\n              Confirm Location\n            </ion-button>\n          </div>\n\n          <ion-list style=\"margin-top: 2px; border-radius: 10px; display: none\" #locationsList>\n\n            <ion-item lines=\"none\" class=\"ion-no-padding\" style=\"padding-right: 10px; padding-left: 10px\" *ngFor=\"let location of searchLocations; let i = index\" (click)=\"locationClicked(i)\">\n\n              <ion-grid class=\"ion-no-padding\" fixed=\"true\">\n                <ion-row>\n\n                  <ion-col size=\"1\" class=\"ion-align-self-center\">\n                    <ion-img src=\"assets/icons/location.png\" style=\"height: 24px; width: 24px\"></ion-img>\n                  </ion-col>\n\n                  <ion-col size=\"10\" offset=\"1\">\n                    <p class=\"ion-no-margin\" style=\"text-overflow: ellipsis; overflow: hidden; white-space: nowrap; font-weight: bold\">{{location.text}}</p>\n                    <p class=\"ion-no-margin\" style=\"text-overflow: ellipsis; overflow: hidden; white-space: nowrap\">{{location.place_name}}</p>\n                  </ion-col>\n\n                </ion-row>\n              </ion-grid>\n            </ion-item>\n\n          </ion-list>\n        </div>\n      </ion-col>\n\n    </ion-row>\n  </ion-grid>\n\n  <ion-img [src]=\"mapStyle == 'streets' ? 'assets/icons/satelliteMaps.png' : 'assets/icons/streetMaps.png'\"\n           style=\"position: absolute; bottom: 5px; left: 5px; width: 64px; height: 48px\" (click)=\"toggleMapStyle()\"></ion-img>\n\n  <div class=\"address\" [style]=\"selectedAddress !== '' ? 'display:block' : 'display:none' \">\n    {{selectedAddress}}\n  </div>\n</ion-content>\n");

/***/ }),

/***/ 836:
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 2151:
/*!**************************************************************************************!*\
  !*** ./src/app/authentication/otp-verification/otp-verification-page.component.scss ***!
  \**************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".otpInput {\n  border-bottom: 2px solid #6c757d;\n  --padding-start: 8px;\n  --padding-end: 8px;\n  font-weight: bold;\n  color: #3880ff;\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm90cC12ZXJpZmljYXRpb24tcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFLGdDQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFBRiIsImZpbGUiOiJvdHAtdmVyaWZpY2F0aW9uLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub3RwSW5wdXRcclxue1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNmM3NTdkO1xyXG4gIC0tcGFkZGluZy1zdGFydDogOHB4O1xyXG4gIC0tcGFkZGluZy1lbmQ6IDhweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogIzM4ODBmZjtcclxuICBmb250LXNpemU6IDIwcHhcclxufVxyXG4iXX0= */";

/***/ }),

/***/ 3465:
/*!*******************************************************************!*\
  !*** ./src/app/authentication/signin/sign-in-page.component.scss ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWduLWluLXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */";

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

/***/ 422:
/*!***************************************************************!*\
  !*** ./src/app/locationPicker/location-picker.component.scss ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".address {\n  background: rgba(0, 0, 0, 0.5);\n  color: #fff;\n  padding: 5px 10px;\n  margin: 0;\n  font-size: 11px;\n  line-height: 18px;\n  border-radius: 3px;\n  position: absolute;\n  bottom: 5px;\n  right: 5px;\n  max-width: 80%;\n}\n\n.mapboxgl-ctrl-bottom-left {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvY2F0aW9uLXBpY2tlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFLDhCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBRUEsa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUVBLGNBQUE7QUFGRjs7QUFLQTtFQUVFLGFBQUE7QUFIRiIsImZpbGUiOiJsb2NhdGlvbi1waWNrZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWRkcmVzc1xyXG57XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gIG1hcmdpbjogMDtcclxuICBmb250LXNpemU6IDExcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG5cclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiA1cHg7XHJcbiAgcmlnaHQ6IDVweDtcclxuXHJcbiAgbWF4LXdpZHRoOiA4MCU7XHJcbn1cclxuXHJcbi5tYXBib3hnbC1jdHJsLWJvdHRvbS1sZWZ0XHJcbntcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbiJdfQ== */";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(271)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map