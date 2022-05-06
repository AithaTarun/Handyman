"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_authentication_otp-verification_otp-verification_module_ts"],{

/***/ 5676:
/*!************************************************************************************!*\
  !*** ./src/app/authentication/otp-verification/otp-verification-routing.module.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OtpVerificationRoutingModule": () => (/* binding */ OtpVerificationRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _otp_verification_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./otp-verification-page.component */ 3814);




const routes = [
    {
        path: '',
        component: _otp_verification_page_component__WEBPACK_IMPORTED_MODULE_0__.OtpVerificationPage
    }
];
let OtpVerificationRoutingModule = class OtpVerificationRoutingModule {
};
OtpVerificationRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], OtpVerificationRoutingModule);



/***/ }),

/***/ 7748:
/*!****************************************************************************!*\
  !*** ./src/app/authentication/otp-verification/otp-verification.module.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OtpVerificationModule": () => (/* binding */ OtpVerificationModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _otp_verification_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./otp-verification-routing.module */ 5676);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 6219);
/* harmony import */ var _otp_verification_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./otp-verification-page.component */ 3814);








let OtpVerificationModule = class OtpVerificationModule {
};
OtpVerificationModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        declarations: [_otp_verification_page_component__WEBPACK_IMPORTED_MODULE_1__.OtpVerificationPage],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _otp_verification_routing_module__WEBPACK_IMPORTED_MODULE_0__.OtpVerificationRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule
        ]
    })
], OtpVerificationModule);



/***/ })

}]);
//# sourceMappingURL=src_app_authentication_otp-verification_otp-verification_module_ts.js.map