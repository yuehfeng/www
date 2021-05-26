(self["webpackChunkwww"] = self["webpackChunkwww"] || []).push([["src_app_component-login_component-login_module_ts"],{

/***/ 2260:
/*!*******************************************************************!*\
  !*** ./src/app/component-login/component-login-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentLoginRoutingModule": () => (/* binding */ ComponentLoginRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forget-password/forget-password.component */ 3127);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.component */ 8136);
/* harmony import */ var _sign_sign_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sign/sign.component */ 4827);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);






const routes = [
    {
        path: '',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent
    },
    {
        path: 'sign',
        component: _sign_sign_component__WEBPACK_IMPORTED_MODULE_2__.SignComponent
    },
    {
        path: 'forget',
        component: _forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_0__.ForgetPasswordComponent
    }
];
class ComponentLoginRoutingModule {
}
ComponentLoginRoutingModule.ɵfac = function ComponentLoginRoutingModule_Factory(t) { return new (t || ComponentLoginRoutingModule)(); };
ComponentLoginRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: ComponentLoginRoutingModule });
ComponentLoginRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ComponentLoginRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 9731:
/*!***********************************************************!*\
  !*** ./src/app/component-login/component-login.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentLoginModule": () => (/* binding */ ComponentLoginModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _component_login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component-login-routing.module */ 2260);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.component */ 8136);
/* harmony import */ var _forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forget-password/forget-password.component */ 3127);
/* harmony import */ var _sign_sign_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sign/sign.component */ 4827);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./logout/logout.component */ 5657);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);








class ComponentLoginModule {
}
ComponentLoginModule.ɵfac = function ComponentLoginModule_Factory(t) { return new (t || ComponentLoginModule)(); };
ComponentLoginModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: ComponentLoginModule });
ComponentLoginModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _component_login_routing_module__WEBPACK_IMPORTED_MODULE_0__.ComponentLoginRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](ComponentLoginModule, { declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent,
        _forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_2__.ForgetPasswordComponent,
        _sign_sign_component__WEBPACK_IMPORTED_MODULE_3__.SignComponent,
        _logout_logout_component__WEBPACK_IMPORTED_MODULE_4__.LogoutComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _component_login_routing_module__WEBPACK_IMPORTED_MODULE_0__.ComponentLoginRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule] }); })();


/***/ }),

/***/ 3127:
/*!******************************************************************************!*\
  !*** ./src/app/component-login/forget-password/forget-password.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgetPasswordComponent": () => (/* binding */ ForgetPasswordComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);

class ForgetPasswordComponent {
    constructor() { }
    ngOnInit() {
    }
}
ForgetPasswordComponent.ɵfac = function ForgetPasswordComponent_Factory(t) { return new (t || ForgetPasswordComponent)(); };
ForgetPasswordComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ForgetPasswordComponent, selectors: [["app-forget-password"]], decls: 3, vars: 0, consts: [[1, "row", "text-center"]], template: function ForgetPasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \u7B11\u6B7B ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3JnZXQtcGFzc3dvcmQuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 8136:
/*!**********************************************************!*\
  !*** ./src/app/component-login/login/login.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 8002);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ 1584);
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/user.service */ 3071);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 9895);







function LoginComponent_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\u6CE8\u610F: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\u5982\u679C\u53F3\u4E0A\u89D2\u7684\u4F7F\u7528\u8005\u8CC7\u8A0A\u4E0D\u6703\u66F4\u65B0\uFF0C\u5FC5\u9808\u56DE\u5230\u9996\u9801\u4E26\u5237\u65B0\u9801\u9762\uFF0C\u56E0\u70BAAngular\u7684\u50B3\u8F38\u65B9\u5F0F\u53EA\u80FD\u59D1\u4E14\u8A2D\u5B9A\u3002");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "\u5728\u5B50\u5206\u9801(\u5982: /article/1\u6216/login\u7B49\u7B49)\u8A66\u5716\u66F4\u65B0\u7DB2\u9801\u6703\u9020\u6210Cookie\u907A\u5931\uFF0C\u5982\u6709\u8CC7\u6599\u4E0D\u7B26\u8ACB\u56DE\u5230\u9996\u9801\u91CD\u65B0\u6574\u7406\u5373\u53EF\u3002");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "\u4E0A\u67B6\u5728Github\u7684\u7DB2\u9801\uFF0C\u9664\u4E86\u9996\u9801\u4EE5\u5916\uFF0C\u91CD\u65B0\u6574\u7406\u6703\u5C0E\u5411404\u5206\u9801\uFF0C\u8A73\u60C5\u8ACB\u898B\u6700\u65B0\u6D88\u606F\u3002");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.inputUserKeyResponseMessage, " ");
} }
function LoginComponent_div_3_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r2.inputUserKeyResponseMessage, " ");
} }
function LoginComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LoginComponent_div_3_div_1_Template, 11, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, LoginComponent_div_3_div_2_Template, 3, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.inputUserKeyResponseStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r0.inputUserKeyResponseStatus);
} }
class LoginComponent {
    constructor(CookieService, UserService, PlatformLocation, LocationStrategy) {
        this.CookieService = CookieService;
        this.UserService = UserService;
        this.PlatformLocation = PlatformLocation;
        this.LocationStrategy = LocationStrategy;
        this.userKey = '';
        this.inputUserKey = '';
        this.inputUserKeyResponseMessage = '';
        this.inputUserKeyResponseStatus = false;
        this.userLogin = {
            status: false,
            key: '',
            nickname: '',
            admin: false,
        };
        this.userKey = this.CookieService.get('userKey');
        this.findUser();
    }
    ngOnInit() {
        this.inputUserKeyResponseMessage = '';
    }
    requestLogin() {
        this.UserService.getAll().snapshotChanges()
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(changes => changes.map(c => (Object.assign({ key: c.payload.key }, c.payload.val())))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(data => data.filter(c => c.key === this.inputUserKey)))
            .subscribe(res => {
            this.userData = res;
            // console.warn(this.userData);
            if (this.userData.length > 0) {
                // 呈現資料
                this.userLogin.status = true;
                this.userLogin.nickname = String(this.userData[0].nickname);
                this.userLogin.admin = Boolean(this.userData[0].root);
                this.userLogin.key = String(this.userData[0].key);
                // 使用者回饋
                this.inputUserKeyResponseStatus = true;
                this.inputUserKeyResponseMessage = '登入成功!!';
                // this.LocationStrategy.replaceState;
                // this.LocationStrategy.replaceState(null, '', '/', '');
                // 設定Cookie
                this.CookieService.set('userKey', this.userLogin.key, { path: '/' });
                // console.log(this.CookieService.get('userKey'));
            }
            else {
                // 呈現資料
                this.userLogin.status = false;
                this.userLogin.nickname = '';
                this.userLogin.admin = false;
                this.userLogin.key = '';
                // 使用者回饋
                this.inputUserKeyResponseStatus = false;
                this.inputUserKeyResponseMessage = '錯誤的金鑰!!';
            }
        });
    }
    findUser() {
        this.UserService.getAll().snapshotChanges()
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(changes => changes.map(c => (Object.assign({ key: c.payload.key }, c.payload.val())))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(data => data.filter(c => c.key === this.userKey)))
            .subscribe(res => {
            this.userData = res;
            if (this.userData.length > 0) {
                this.userLogin.status = true;
                this.userLogin.nickname = String(this.userData[0].nickname);
                this.userLogin.admin = Boolean(this.userData[0].root);
                this.userLogin.key = String(this.userData[0].key);
            }
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__.CookieService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_0__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.PlatformLocation), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.LocationStrategy)); };
LoginComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 25, vars: 2, consts: [[1, "row", "my-3"], [4, "ngIf"], [1, "d-flex", "justify-content-center", 2, "width", "100%", "height", "50vh"], [1, "d-flex", "align-items-center", "text-center"], [1, "flex-row"], [1, "row", "text-center"], [1, "col-12"], [1, "form-group", "text-center", 2, "min-width", "250px"], ["for", ""], ["type", "text", "id", "key", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "btn", "btn-success", 3, "click"], [1, "col-md-12", "text-center"], ["routerLink", "forget", 1, "p-1"], ["routerLink", "sign", 1, "p-1"], ["class", "alert alert-success text-center", 4, "ngIf"], ["class", "alert alert-danger", 4, "ngIf"], [1, "alert", "alert-success", "text-center"], [1, "m-0", "p-1", "fw-bold"], [1, "alert", "alert-danger"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u60A8\u597D\uFF0C\u4F7F\u7528\u8005!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, LoginComponent_div_3_Template, 3, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "\u8F38\u5165\u60A8\u7684\u8CC7\u6599");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "\u60A8\u7684\u91D1\u9470");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_14_listener($event) { return ctx.inputUserKey = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_17_listener() { return ctx.requestLogin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "\u767B\u5165");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "\u5FD8\u8A18\u91D1\u9470\u9EDE\u6211");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "\u8A3B\u518A\u91D1\u9470\u9EDE\u6211");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.inputUserKeyResponseMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.inputUserKey);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLinkWithHref], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 4827:
/*!********************************************************!*\
  !*** ./src/app/component-login/sign/sign.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignComponent": () => (/* binding */ SignComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);

class SignComponent {
    constructor() { }
    ngOnInit() {
    }
}
SignComponent.ɵfac = function SignComponent_Factory(t) { return new (t || SignComponent)(); };
SignComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignComponent, selectors: [["app-sign"]], decls: 13, vars: 0, consts: [[1, "form-group"], ["for", ""], ["type", "text", "placeholder", "\u8ACB\u586B\u5165\u60A8\u7684\u66B1\u7A31", 1, "form-control"], [1, "row", "text-right"], [1, "col-md-8", "text-right", "text-muted"], [1, "col-md-4", "text-right"], [1, "btn", "btn-success", "px-5"]], template: function SignComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u8A3B\u518A\u8CC7\u6599");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Nickname");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " \u9EDE\u9078\u8A3B\u518A\u5C31\u4EE3\u8868\u60A8\u540C\u610F\u6211\u5011\u53D6\u5F97\u60A8\u7684IP\u4EE5\u53CACookie ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u8A3B\u518A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWduLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_component-login_component-login_module_ts.js.map