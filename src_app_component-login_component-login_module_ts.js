(self["webpackChunkwww"] = self["webpackChunkwww"] || []).push([["src_app_component-login_component-login_module_ts"],{

/***/ 948:
/*!***************************************************************************!*\
  !*** ./node_modules/ngx-clipboard/__ivy_ngcc__/fesm2015/ngx-clipboard.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClipboardDirective": () => (/* binding */ ClipboardDirective),
/* harmony export */   "ClipboardIfSupportedDirective": () => (/* binding */ ClipboardIfSupportedDirective),
/* harmony export */   "ClipboardModule": () => (/* binding */ ClipboardModule),
/* harmony export */   "ClipboardService": () => (/* binding */ ClipboardService)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var ngx_window_token__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-window-token */ 3552);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 9765);





/**
 * The following code is heavily copied from https://github.com/zenorocha/clipboard.js
 */

class ClipboardService {
    constructor(document, window) {
        this.document = document;
        this.window = window;
        this.copySubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        this.copyResponse$ = this.copySubject.asObservable();
        this.config = {};
    }
    configure(config) {
        this.config = config;
    }
    copy(content) {
        if (!this.isSupported || !content) {
            return this.pushCopyResponse({ isSuccess: false, content });
        }
        const copyResult = this.copyFromContent(content);
        if (copyResult) {
            return this.pushCopyResponse({ content, isSuccess: copyResult });
        }
        return this.pushCopyResponse({ isSuccess: false, content });
    }
    get isSupported() {
        return !!this.document.queryCommandSupported && !!this.document.queryCommandSupported('copy') && !!this.window;
    }
    isTargetValid(element) {
        if (element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement) {
            if (element.hasAttribute('disabled')) {
                throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
            }
            return true;
        }
        throw new Error('Target should be input or textarea');
    }
    /**
     * Attempts to copy from an input `targetElm`
     */
    copyFromInputElement(targetElm, isFocus = true) {
        try {
            this.selectTarget(targetElm);
            const re = this.copyText();
            this.clearSelection(isFocus ? targetElm : undefined, this.window);
            return re && this.isCopySuccessInIE11();
        }
        catch (error) {
            return false;
        }
    }
    /**
     * This is a hack for IE11 to return `true` even if copy fails.
     */
    isCopySuccessInIE11() {
        const clipboardData = this.window['clipboardData'];
        if (clipboardData && clipboardData.getData) {
            if (!clipboardData.getData('Text')) {
                return false;
            }
        }
        return true;
    }
    /**
     * Creates a fake textarea element, sets its value from `text` property,
     * and makes a selection on it.
     */
    copyFromContent(content, container = this.document.body) {
        // check if the temp textarea still belongs to the current container.
        // In case we have multiple places using ngx-clipboard, one is in a modal using container but the other one is not.
        if (this.tempTextArea && !container.contains(this.tempTextArea)) {
            this.destroy(this.tempTextArea.parentElement || undefined);
        }
        if (!this.tempTextArea) {
            this.tempTextArea = this.createTempTextArea(this.document, this.window);
            try {
                container.appendChild(this.tempTextArea);
            }
            catch (error) {
                throw new Error('Container should be a Dom element');
            }
        }
        this.tempTextArea.value = content;
        const toReturn = this.copyFromInputElement(this.tempTextArea, false);
        if (this.config.cleanUpAfterCopy) {
            this.destroy(this.tempTextArea.parentElement || undefined);
        }
        return toReturn;
    }
    /**
     * Remove temporary textarea if any exists.
     */
    destroy(container = this.document.body) {
        if (this.tempTextArea) {
            container.removeChild(this.tempTextArea);
            // removeChild doesn't remove the reference from memory
            this.tempTextArea = undefined;
        }
    }
    /**
     * Select the target html input element.
     */
    selectTarget(inputElement) {
        inputElement.select();
        inputElement.setSelectionRange(0, inputElement.value.length);
        return inputElement.value.length;
    }
    copyText() {
        return this.document.execCommand('copy');
    }
    /**
     * Moves focus away from `target` and back to the trigger, removes current selection.
     */
    clearSelection(inputElement, window) {
        var _a;
        inputElement && inputElement.focus();
        (_a = window.getSelection()) === null || _a === void 0 ? void 0 : _a.removeAllRanges();
    }
    /**
     * Creates a fake textarea for copy command.
     */
    createTempTextArea(doc, window) {
        const isRTL = doc.documentElement.getAttribute('dir') === 'rtl';
        let ta;
        ta = doc.createElement('textarea');
        // Prevent zooming on iOS
        ta.style.fontSize = '12pt';
        // Reset box model
        ta.style.border = '0';
        ta.style.padding = '0';
        ta.style.margin = '0';
        // Move element out of screen horizontally
        ta.style.position = 'absolute';
        ta.style[isRTL ? 'right' : 'left'] = '-9999px';
        // Move element to the same position vertically
        const yPosition = window.pageYOffset || doc.documentElement.scrollTop;
        ta.style.top = yPosition + 'px';
        ta.setAttribute('readonly', '');
        return ta;
    }
    /**
     * Pushes copy operation response to copySubject, to provide global access
     * to the response.
     */
    pushCopyResponse(response) {
        this.copySubject.next(response);
    }
    /**
     * @deprecated use pushCopyResponse instead.
     */
    pushCopyReponse(response) {
        this.pushCopyResponse(response);
    }
}
ClipboardService.??fac = function ClipboardService_Factory(t) { return new (t || ClipboardService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????inject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????inject"](ngx_window_token__WEBPACK_IMPORTED_MODULE_3__.WINDOW, 8)); };
ClipboardService.??prov = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjectable"])({ factory: function ClipboardService_Factory() { return new ClipboardService((0,_angular_core__WEBPACK_IMPORTED_MODULE_1__["????inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__.DOCUMENT), (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__["????inject"])(ngx_window_token__WEBPACK_IMPORTED_MODULE_3__.WINDOW, 8)); }, token: ClipboardService, providedIn: "root" });
ClipboardService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject, args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.DOCUMENT,] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject, args: [ngx_window_token__WEBPACK_IMPORTED_MODULE_3__.WINDOW,] }] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](ClipboardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.DOCUMENT]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
                args: [ngx_window_token__WEBPACK_IMPORTED_MODULE_3__.WINDOW]
            }] }]; }, null); })();

class ClipboardDirective {
    constructor(clipboardSrv) {
        this.clipboardSrv = clipboardSrv;
        this.cbOnSuccess = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.cbOnError = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    }
    // tslint:disable-next-line:no-empty
    ngOnInit() { }
    ngOnDestroy() {
        this.clipboardSrv.destroy(this.container);
    }
    onClick(event) {
        if (!this.clipboardSrv.isSupported) {
            this.handleResult(false, undefined, event);
        }
        else if (this.targetElm && this.clipboardSrv.isTargetValid(this.targetElm)) {
            this.handleResult(this.clipboardSrv.copyFromInputElement(this.targetElm), this.targetElm.value, event);
        }
        else if (this.cbContent) {
            this.handleResult(this.clipboardSrv.copyFromContent(this.cbContent, this.container), this.cbContent, event);
        }
    }
    /**
     * Fires an event based on the copy operation result.
     * @param succeeded
     */
    handleResult(succeeded, copiedContent, event) {
        let response = {
            isSuccess: succeeded,
            event
        };
        if (succeeded) {
            response = Object.assign(response, {
                content: copiedContent,
                successMessage: this.cbSuccessMsg
            });
            this.cbOnSuccess.emit(response);
        }
        else {
            this.cbOnError.emit(response);
        }
        this.clipboardSrv.pushCopyResponse(response);
    }
}
ClipboardDirective.??fac = function ClipboardDirective_Factory(t) { return new (t || ClipboardDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](ClipboardService)); };
ClipboardDirective.??dir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineDirective"]({ type: ClipboardDirective, selectors: [["", "ngxClipboard", ""]], hostBindings: function ClipboardDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function ClipboardDirective_click_HostBindingHandler($event) { return ctx.onClick($event.target); });
    } }, inputs: { targetElm: ["ngxClipboard", "targetElm"], container: "container", cbContent: "cbContent", cbSuccessMsg: "cbSuccessMsg" }, outputs: { cbOnSuccess: "cbOnSuccess", cbOnError: "cbOnError" } });
ClipboardDirective.ctorParameters = () => [
    { type: ClipboardService }
];
ClipboardDirective.propDecorators = {
    targetElm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input, args: ['ngxClipboard',] }],
    container: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input }],
    cbContent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input }],
    cbSuccessMsg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input }],
    cbOnSuccess: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output }],
    cbOnError: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output }],
    onClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostListener, args: ['click', ['$event.target'],] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](ClipboardDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
        args: [{
                selector: '[ngxClipboard]'
            }]
    }], function () { return [{ type: ClipboardService }]; }, { cbOnSuccess: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
        }], cbOnError: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
        }], onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostListener,
            args: ['click', ['$event.target']]
        }], targetElm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
            args: ['ngxClipboard']
        }], container: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }], cbContent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }], cbSuccessMsg: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }] }); })();

class ClipboardIfSupportedDirective {
    constructor(_clipboardService, _viewContainerRef, _templateRef) {
        this._clipboardService = _clipboardService;
        this._viewContainerRef = _viewContainerRef;
        this._templateRef = _templateRef;
    }
    ngOnInit() {
        if (this._clipboardService.isSupported) {
            this._viewContainerRef.createEmbeddedView(this._templateRef);
        }
    }
}
ClipboardIfSupportedDirective.??fac = function ClipboardIfSupportedDirective_Factory(t) { return new (t || ClipboardIfSupportedDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](ClipboardService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef)); };
ClipboardIfSupportedDirective.??dir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineDirective"]({ type: ClipboardIfSupportedDirective, selectors: [["", "ngxClipboardIfSupported", ""]] });
ClipboardIfSupportedDirective.ctorParameters = () => [
    { type: ClipboardService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewContainerRef },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](ClipboardIfSupportedDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
        args: [{
                selector: '[ngxClipboardIfSupported]'
            }]
    }], function () { return [{ type: ClipboardService }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewContainerRef }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef }]; }, null); })();

class ClipboardModule {
}
ClipboardModule.??fac = function ClipboardModule_Factory(t) { return new (t || ClipboardModule)(); };
ClipboardModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({ type: ClipboardModule });
ClipboardModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](ClipboardModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],
                declarations: [ClipboardDirective, ClipboardIfSupportedDirective],
                exports: [ClipboardDirective, ClipboardIfSupportedDirective]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](ClipboardModule, { declarations: function () { return [ClipboardDirective, ClipboardIfSupportedDirective]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule]; }, exports: function () { return [ClipboardDirective, ClipboardIfSupportedDirective]; } }); })();

/*
 * Public API Surface of ngx-clipboard
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=ngx-clipboard.js.map

/***/ }),

/***/ 3552:
/*!*********************************************************************************!*\
  !*** ./node_modules/ngx-window-token/__ivy_ngcc__/fesm2015/ngx-window-token.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WINDOW": () => (/* binding */ WINDOW)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);


const WINDOW = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('WindowToken', typeof window !== 'undefined' && window.document
    ? { providedIn: 'root', factory: () => window }
    : { providedIn: 'root', factory: () => undefined });

/*
 * Public API Surface of ngx-window-token
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=ngx-window-token.js.map

/***/ }),

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
/* harmony import */ var ngx_clipboard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-clipboard */ 948);
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
ComponentLoginRoutingModule.??fac = function ComponentLoginRoutingModule_Factory(t) { return new (t || ComponentLoginRoutingModule)(); };
ComponentLoginRoutingModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineNgModule"]({ type: ComponentLoginRoutingModule });
ComponentLoginRoutingModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineInjector"]({ imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes),
            ngx_clipboard__WEBPACK_IMPORTED_MODULE_5__.ClipboardModule
        ], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["????setNgModuleScope"](ComponentLoginRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, ngx_clipboard__WEBPACK_IMPORTED_MODULE_5__.ClipboardModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


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
ComponentLoginModule.??fac = function ComponentLoginModule_Factory(t) { return new (t || ComponentLoginModule)(); };
ComponentLoginModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["????defineNgModule"]({ type: ComponentLoginModule });
ComponentLoginModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["????defineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _component_login_routing_module__WEBPACK_IMPORTED_MODULE_0__.ComponentLoginRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["????setNgModuleScope"](ComponentLoginModule, { declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent,
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
ForgetPasswordComponent.??fac = function ForgetPasswordComponent_Factory(t) { return new (t || ForgetPasswordComponent)(); };
ForgetPasswordComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: ForgetPasswordComponent, selectors: [["app-forget-password"]], decls: 3, vars: 0, consts: [[1, "row", "text-center"]], template: function ForgetPasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, " \u7B11\u6B7B ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
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
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](4, "\u6CE8\u610F: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](6, "\u5982\u679C\u53F3\u4E0A\u89D2\u7684\u4F7F\u7528\u8005\u8CC7\u8A0A\u4E0D\u6703\u66F4\u65B0\uFF0C\u5FC5\u9808\u56DE\u5230\u9996\u9801\u4E26\u5237\u65B0\u9801\u9762\uFF0C\u56E0\u70BAAngular\u7684\u50B3\u8F38\u65B9\u5F0F\u53EA\u80FD\u59D1\u4E14\u8A2D\u5B9A\u3002");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](8, "\u5728\u5B50\u5206\u9801(\u5982: /article/1\u6216/login\u7B49\u7B49)\u8A66\u5716\u66F4\u65B0\u7DB2\u9801\u6703\u9020\u6210Cookie\u907A\u5931\uFF0C\u5982\u6709\u8CC7\u6599\u4E0D\u7B26\u8ACB\u56DE\u5230\u9996\u9801\u91CD\u65B0\u6574\u7406\u5373\u53EF\u3002");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](10, "\u4E0A\u67B6\u5728Github\u7684\u7DB2\u9801\uFF0C\u9664\u4E86\u9996\u9801\u4EE5\u5916\uFF0C\u91CD\u65B0\u6574\u7406\u6703\u5C0E\u5411404\u5206\u9801\uFF0C\u8A73\u60C5\u8ACB\u898B\u6700\u65B0\u6D88\u606F\u3002");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", ctx_r1.inputUserKeyResponseMessage, " ");
} }
function LoginComponent_div_3_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", ctx_r2.inputUserKeyResponseMessage, " ");
} }
function LoginComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](1, LoginComponent_div_3_div_1_Template, 11, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](2, LoginComponent_div_3_div_2_Template, 3, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx_r0.inputUserKeyResponseStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", !ctx_r0.inputUserKeyResponseStatus);
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
                // ????????????
                this.userLogin.status = true;
                this.userLogin.nickname = String(this.userData[0].nickname);
                this.userLogin.admin = Boolean(this.userData[0].root);
                this.userLogin.key = String(this.userData[0].key);
                // ???????????????
                this.inputUserKeyResponseStatus = true;
                this.inputUserKeyResponseMessage = '????????????!!';
                // this.LocationStrategy.replaceState;
                // this.LocationStrategy.replaceState(null, '', '/', '');
                // ??????Cookie
                this.CookieService.set('userKey', this.userLogin.key, { path: '/' });
                // console.log(this.CookieService.get('userKey'));
            }
            else {
                // ????????????
                this.userLogin.status = false;
                this.userLogin.nickname = '';
                this.userLogin.admin = false;
                this.userLogin.key = '';
                // ???????????????
                this.inputUserKeyResponseStatus = false;
                this.inputUserKeyResponseMessage = '???????????????!!';
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
LoginComponent.??fac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__.CookieService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_0__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.PlatformLocation), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.LocationStrategy)); };
LoginComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 25, vars: 2, consts: [[1, "row", "my-3"], [4, "ngIf"], [1, "d-flex", "justify-content-center", 2, "width", "100%", "height", "50vh"], [1, "d-flex", "align-items-center", "text-center"], [1, "flex-row"], [1, "row", "text-center"], [1, "col-12"], [1, "form-group", "text-center", 2, "min-width", "250px"], ["for", ""], ["type", "text", "id", "key", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "btn", "btn-success", 3, "click"], [1, "col-md-12", "text-center"], ["routerLink", "forget", 1, "p-1"], ["routerLink", "sign", 1, "p-1"], ["class", "alert alert-success text-center", 4, "ngIf"], ["class", "alert alert-danger", 4, "ngIf"], [1, "alert", "alert-success", "text-center"], [1, "m-0", "p-1", "fw-bold"], [1, "alert", "alert-danger"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "\u60A8\u597D\uFF0C\u4F7F\u7528\u8005!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](3, LoginComponent_div_3_Template, 3, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](10, "\u8F38\u5165\u60A8\u7684\u8CC7\u6599");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](13, "\u60A8\u7684\u91D1\u9470");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](14, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_14_listener($event) { return ctx.inputUserKey = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](17, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function LoginComponent_Template_button_click_17_listener() { return ctx.requestLogin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](18, "\u767B\u5165");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](19, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](21, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](22, "\u5FD8\u8A18\u91D1\u9470\u9EDE\u6211");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](23, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](24, "\u8A3B\u518A\u91D1\u9470\u9EDE\u6211");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.inputUserKeyResponseMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx.inputUserKey);
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
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 8002);
/* harmony import */ var src_app_models_user_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/user.model */ 4872);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/user.service */ 3071);
/* harmony import */ var ngx_clipboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-clipboard */ 948);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);







function SignComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"](" ", ctx_r0.message, "\n");
} }
function SignComponent_div_3_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"](" ", ctx_r2.copyMessage, " ");
} }
function SignComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "h4", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](2, "\u8A3B\u518A\u6210\u529F\uFF0C\u60A8\u7684\u91D1\u9470\u70BA");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](3, SignComponent_div_3_div_3_Template, 2, 1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](5, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](6, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("ngModelChange", function SignComponent_div_3_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](); return ctx_r3.responseKEY = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](7, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](8, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function SignComponent_div_3_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](); return ctx_r5.copy(ctx_r5.responseKEY); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](9, " \u8907\u88FD ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx_r1.copyMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngModel", ctx_r1.responseKEY);
} }
class SignComponent {
    constructor(UserService, _clipboardService) {
        this.UserService = UserService;
        this._clipboardService = _clipboardService;
        this.user = new src_app_models_user_model__WEBPACK_IMPORTED_MODULE_0__.User();
        this.repeat = true;
        this.submitted = false;
        this.message = '';
        this.responseKEY = '';
        this.copyMessage = '';
    }
    ngOnInit() {
        // ?????????????????????????????????
        this.repeat = true;
        this.submitted = false;
        this.message = '';
        this.responseKEY = '';
        this.copyMessage = '';
    }
    saveUser() {
        this.repeat = true;
        this.UserService.getAll()
            .snapshotChanges()
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(changes => changes.map(c => (Object.assign({ key: c.payload.key }, c.payload.val())))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(c => c.filter(res => res.nickname === this.user.nickname)))
            .subscribe(response => {
            this.userData = response;
            if (this.userData.length === 0) {
                this.createUser();
            }
            else {
                this.message = '????????????????????????????????????';
            }
        });
    }
    createUser() {
        this.user.signin_date = String(new Date());
        this.UserService.create(this.user)
            .then(() => {
            this.submitted = true;
        });
        this.feedback();
    }
    feedback() {
        this.UserService.getAll()
            .snapshotChanges()
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(changes => changes.map(c => (Object.assign({ key: c.payload.key }, c.payload.val())))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(c => c.filter(res => res.nickname === this.user.nickname)))
            .subscribe(response => {
            this.userData = response;
            this.responseKEY = String(this.userData[0].key);
        });
    }
    copy(text) {
        this._clipboardService.copy(text);
        this.copyMessage = '???????????????!';
    }
}
SignComponent.??fac = function SignComponent_Factory(t) { return new (t || SignComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](ngx_clipboard__WEBPACK_IMPORTED_MODULE_4__.ClipboardService)); };
SignComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({ type: SignComponent, selectors: [["app-sign"]], decls: 15, vars: 3, consts: [["class", "alert alert-warning", 4, "ngIf"], ["class", "alert alert-success text-center", 4, "ngIf"], [1, "form-group"], ["for", ""], ["type", "text", "placeholder", "\u8ACB\u586B\u5165\u60A8\u7684\u66B1\u7A31", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "row", "text-right"], [1, "col-md-8", "text-right", "text-muted"], [1, "col-md-4", "text-right"], [1, "btn", "btn-success", "px-5", 3, "click"], [1, "alert", "alert-warning"], [1, "alert", "alert-success", "text-center"], [1, "text-center", "my-2"], ["class", "text-center", 4, "ngIf"], [1, "row", "p-3"], [1, "col-10"], ["disabled", "", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "col-2"], [1, "btn", "btn-secondary", "w-100", 3, "click"], [1, "text-center"]], template: function SignComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, "\u8A3B\u518A\u8CC7\u6599");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](2, SignComponent_div_2_Template, 2, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](3, SignComponent_div_3_Template, 10, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](5, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](6, "Nickname");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](8, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("ngModelChange", function SignComponent_Template_input_ngModelChange_8_listener($event) { return ctx.user.nickname = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](11, " \u9EDE\u9078\u8A3B\u518A\u5C31\u4EE3\u8868\u60A8\u540C\u610F\u6211\u5011\u53D6\u5F97\u60A8\u7684IP\u4EE5\u53CACookie ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](13, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function SignComponent_Template_button_click_13_listener() { return ctx.saveUser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](14, "\u8A3B\u518A");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx.message && !ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngModel", ctx.user.nickname);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWduLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_component-login_component-login_module_ts.js.map