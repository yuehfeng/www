(self["webpackChunkwww"] = self["webpackChunkwww"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/home.component */ 5067);
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./not-found/not-found.component */ 1142);
/* harmony import */ var _component_news_news_add_news_add_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component-news/news-add/news-add.component */ 3304);
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/auth.guard */ 3870);
/* harmony import */ var src_environments_path_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/path.map */ 6957);
/* harmony import */ var _component_login_logout_logout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component-login/logout/logout.component */ 5657);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);





// ????????????

// Guard
// import { EditingGuard } from './auth/editing.guard';



const routes = [
    {
        path: src_environments_path_map__WEBPACK_IMPORTED_MODULE_4__.path.home,
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent,
    },
    {
        path: 'add',
        component: _component_news_news_add_news_add_component__WEBPACK_IMPORTED_MODULE_2__.NewsAddComponent,
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__.AuthGuard],
    },
    {
        path: src_environments_path_map__WEBPACK_IMPORTED_MODULE_4__.path.users,
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_component-users_component-users_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./component-users/component-users.module */ 2896)).then(m => m.ComponentUsersModule)
    },
    {
        path: src_environments_path_map__WEBPACK_IMPORTED_MODULE_4__.path.rooms,
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_component-rooms_component-rooms_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./component-rooms/component-rooms.module */ 5430)).then(m => m.ComponentRoomsModule)
    },
    {
        path: src_environments_path_map__WEBPACK_IMPORTED_MODULE_4__.path.chats,
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_component-chats_component-chats_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./component-chats/component-chats.module */ 7506)).then(m => m.ComponentChatsModule)
    },
    {
        path: src_environments_path_map__WEBPACK_IMPORTED_MODULE_4__.path.article,
        // canLoad: [CanLoadArticleGuard],
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_component-articles_component-articles_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./component-articles/component-articles.module */ 8087)).then(m => m.ComponentArticlesModule)
    },
    {
        path: src_environments_path_map__WEBPACK_IMPORTED_MODULE_4__.path.login,
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_component-login_component-login_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./component-login/component-login.module */ 9731)).then(m => m.ComponentLoginModule)
    },
    {
        path: src_environments_path_map__WEBPACK_IMPORTED_MODULE_4__.path.logout,
        component: _component_login_logout_logout_component__WEBPACK_IMPORTED_MODULE_5__.LogoutComponent,
        // ???????????????????????????
    },
    {
        path: '**',
        component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_1__.NotFoundComponent,
        pathMatch: 'full'
    }
];
class AppRoutingModule {
}
AppRoutingModule.??fac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["????defineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["????defineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload', enableTracing: false })], _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["????setNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _environments_path_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../environments/path.map */ 6957);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ 1584);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _user_info_user_info_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-info/user-info.component */ 1234);
// ????????????





const _c0 = function (a0) { return [a0]; };
class AppComponent {
    constructor(CookieService) {
        this.CookieService = CookieService;
        this.title = 'app';
        this.path = _environments_path_map__WEBPACK_IMPORTED_MODULE_0__.path;
        this.CookieValue = '';
        this.CookieValue = this.CookieService.get('userKey');
    }
    ngOnInit() {
        // console.warn(`%c???!!\n????????????!!\n??????????????????Console.log???????????????!!\n????????????Angular\n??????????????????????????????????????????!!\n?????????!!??????...`,"color: #f00; font-size: 48px");
    }
}
AppComponent.??fac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__.CookieService)); };
AppComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 40, vars: 15, consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "bg-light", "mb-4"], [1, "container-fluid"], [1, "navbar-brand", "fw-bolder", "p-0", 3, "routerLink"], ["src", "https://i.imgur.com/DthuV9a.png", 1, "img-fluid", 2, "height", "35px", "width", "35px"], [1, "px-3", "text-secondary"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "me-auto", "mb-2", "mb-lg-0"], [1, "nav-item"], [1, "nav-link", 3, "routerLink"], [1, "d-flex"], [1, "container", "container-fluid", "h-75", "viewContainer"], [1, "bg-secondary", "text-center", "text-light", "text-lg-start"], [1, "container", "p-4", "mt-5"], [1, "row"], [1, "col-md-12", "mb-4", "mb-md-0"], [1, "text-center", "p-3", "bg-dark", "text-white"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](5, "YuehFeng's Blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](9, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](10, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](11, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](12, "\u6700\u65B0\u6D88\u606F");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](13, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](14, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](15, "\u8A0E\u8AD6\u5BA4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](16, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](17, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](18, "\u6280\u8853\u6587\u7AE0");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](19, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](20, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](21, "\u6703\u54E1\u767B\u5165");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](22, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](23, "app-user-info");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](24, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](25, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](26, "footer", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](27, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](28, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](29, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](30, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](31, "Web Description & Construct");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](32, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](33, " \u60A8\u597D! \u672C\u7DB2\u7AD9\u5EFA\u7F6E\u5728Github\u4E0A\uFF0C\u4E26\u4F7F\u7528Google\u7684Firebase\u505A\u8CC7\u6599\u5B58\u53D6\u3002 \u4E26\u4E14\u4F7F\u7528Cookie\u6280\u8853\uFF0C\u5B58\u53D6\u6703\u54E1\u8CC7\u6599\u65B9\u4FBF\u767B\u5165\u3002 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](34, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](35, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](36, "Copyright \u00A9 2021 Yueh-Feng, Lee. All rights reserved.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](37, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](38, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](39, "\u7248\u6B0A\u6240\u6709\u00A9 2021 Yueh-Feng, Lee");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pureFunction1"](5, _c0, ctx.path.home));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pureFunction1"](7, _c0, ctx.path.home));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pureFunction1"](9, _c0, ctx.path.rooms));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pureFunction1"](11, _c0, ctx.path.article));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pureFunction1"](13, _c0, ctx.path.login));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, _user_info_user_info_component__WEBPACK_IMPORTED_MODULE_1__.UserInfoComponent, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet], styles: ["ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    margin: 10px;\r\n}\r\nul[_ngcontent-%COMP%]\r\n{\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n.wrapped[_ngcontent-%COMP%]\r\n{\r\n    width: 80%;\r\n    margin: 0 auto;\r\n}\r\n.viewContainer[_ngcontent-%COMP%]\r\n{\r\n    min-height: 65vh;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kscUJBQXFCO0lBQ3JCLFlBQVk7QUFDaEI7QUFDQTs7SUFFSSxTQUFTO0lBQ1QsVUFBVTtBQUNkO0FBQ0E7O0lBRUksVUFBVTtJQUNWLGNBQWM7QUFDbEI7QUFFQTs7SUFFSSxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ1bCBsaSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbn1cclxudWxcclxue1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG4ud3JhcHBlZFxyXG57XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbi52aWV3Q29udGFpbmVyXHJcbntcclxuICAgIG1pbi1oZWlnaHQ6IDY1dmg7XHJcbn0iXX0= */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/fire */ 57);
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/fire/database */ 4134);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _component_news_news_details_news_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component-news/news-details/news-details.component */ 9048);
/* harmony import */ var _component_news_news_view_news_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component-news/news-view/news-view.component */ 3762);
/* harmony import */ var _component_news_news_add_news_add_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component-news/news-add/news-add.component */ 3304);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ 5067);
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./not-found/not-found.component */ 1142);
/* harmony import */ var _user_info_user_info_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user-info/user-info.component */ 1234);
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-markdown */ 6715);
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-cookie-service */ 1584);
/* harmony import */ var _services_cookie_catcher_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/cookie-catcher.service */ 1140);
/* harmony import */ var _logs_logs_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./logs/logs.component */ 5134);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 7716);














// Cookie ??????






class AppModule {
}
AppModule.??fac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["????defineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent] });
AppModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["????defineInjector"]({ providers: [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_12__.CookieService, _services_cookie_catcher_service__WEBPACK_IMPORTED_MODULE_9__.CookieCatcherService], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule,
            _angular_fire__WEBPACK_IMPORTED_MODULE_15__.AngularFireModule.initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.firebaseConfig),
            _angular_fire_database__WEBPACK_IMPORTED_MODULE_16__.AngularFireDatabaseModule,
            ngx_markdown__WEBPACK_IMPORTED_MODULE_17__.MarkdownModule.forRoot()
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["????setNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent,
        _component_news_news_details_news_details_component__WEBPACK_IMPORTED_MODULE_3__.NewsDetailsComponent,
        _component_news_news_view_news_view_component__WEBPACK_IMPORTED_MODULE_4__.NewsViewComponent,
        _component_news_news_add_news_add_component__WEBPACK_IMPORTED_MODULE_5__.NewsAddComponent,
        _home_home_component__WEBPACK_IMPORTED_MODULE_6__.HomeComponent,
        _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_7__.NotFoundComponent,
        _user_info_user_info_component__WEBPACK_IMPORTED_MODULE_8__.UserInfoComponent,
        _logs_logs_component__WEBPACK_IMPORTED_MODULE_10__.LogsComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule, _angular_fire__WEBPACK_IMPORTED_MODULE_15__.AngularFireModule, _angular_fire_database__WEBPACK_IMPORTED_MODULE_16__.AngularFireDatabaseModule, ngx_markdown__WEBPACK_IMPORTED_MODULE_17__.MarkdownModule] }); })();


/***/ }),

/***/ 3870:
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/user.service */ 3071);
/* harmony import */ var _services_cookie_catcher_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/cookie-catcher.service */ 1140);



class AuthGuard {
    constructor(UserService, CookieCatcherService) {
        this.UserService = UserService;
        this.CookieCatcherService = CookieCatcherService;
        this.token = false;
        this.token = this.CookieCatcherService.checkUserRoot();
    }
    canActivate(route, state) {
        if (!this.token) {
            window.alert('???????????????...');
        }
        return this.CookieCatcherService.checkUserRoot();
    }
}
AuthGuard.??fac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????inject"](_services_user_service__WEBPACK_IMPORTED_MODULE_0__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????inject"](_services_cookie_catcher_service__WEBPACK_IMPORTED_MODULE_1__.CookieCatcherService)); };
AuthGuard.??prov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineInjectable"]({ token: AuthGuard, factory: AuthGuard.??fac, providedIn: 'root' });


/***/ }),

/***/ 5657:
/*!************************************************************!*\
  !*** ./src/app/component-login/logout/logout.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogoutComponent": () => (/* binding */ LogoutComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 8002);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ 1584);
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/user.service */ 3071);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);







function LogoutComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2, "\u60A8\u5DF2\u767B\u51FA");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](5, "\u524D\u5F80\u767B\u5165");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function LogoutComponent_div_6_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", ctx_r2.deleteMessage, " ");
} }
function LogoutComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](4, "\u60A8\u7684\u4F7F\u7528\u8005\u8CC7\u6599");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](5, LogoutComponent_div_6_div_5_Template, 2, 1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](8, "\u60A8\u7684\u91D1\u9470");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](9, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](12, "\u60A8\u7684\u66B1\u7A31");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](13, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](14, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](16, "\u60A8\u7684\u6B0A\u9650");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](17, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](18, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](19, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](20, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function LogoutComponent_div_6_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r3.userLogout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](21, "\u767B\u51FA");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx_r1.deleteMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????propertyInterpolate"]("ngModel", ctx_r1.public.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????propertyInterpolate"]("ngModel", ctx_r1.public.nickname);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????propertyInterpolate"]("ngModel", ctx_r1.public.root ? "\u7BA1\u7406\u8005" : "\u4E00\u822C\u4F7F\u7528\u8005");
} }
class LogoutComponent {
    constructor(CookieService, UserService) {
        this.CookieService = CookieService;
        this.UserService = UserService;
        this.public = {
            nickname: '',
            key: '',
            root: false
        };
        this.deleteMessage = '';
        this.userKey = this.CookieService.get('userKey');
        this.getUser(this.userKey);
    }
    ngOnInit() {
        this.deleteMessage = '';
    }
    getUser(key) {
        this.UserService.getAll().snapshotChanges()
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(changes => changes.map(c => (Object.assign({ key: c.payload.key }, c.payload.val())))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(data => data.filter(c => c.key === key)))
            .subscribe(res => {
            this.userData = res;
            this.public.nickname = String(this.userData[0].nickname);
            this.public.key = String(this.userData[0].key);
            this.public.root = Boolean(this.userData[0].root);
        });
    }
    userLogout() {
        this.CookieService.delete('userKey');
        this.deleteMessage = '???????????????????????????????????????';
    }
}
LogoutComponent.??fac = function LogoutComponent_Factory(t) { return new (t || LogoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__.CookieService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_0__.UserService)); };
LogoutComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: LogoutComponent, selectors: [["app-logout"]], decls: 7, vars: 2, consts: [[1, "d-flex", "justify-content-center", 2, "width", "100%", "height", "50vh"], [1, "d-flex", "align-items-center"], [1, "flex-row"], ["class", "alert alert-warning text-center", 4, "ngIf"], [4, "ngIf"], [1, "alert", "alert-warning", "text-center"], ["routerLink", "../login"], [1, "row", "text-center"], [1, "col-12"], ["class", "alert alert-danger text-center", 4, "ngIf"], [1, "form-group", "text-center", 2, "min-width", "250px"], ["for", ""], ["type", "text", "disabled", "", 1, "form-control", 3, "ngModel"], [1, "btn", "btn-danger", 3, "click"], [1, "alert", "alert-danger", "text-center"]], template: function LogoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "\u767B\u51FA\u9801\u9762");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](5, LogoutComponent_div_5_Template, 6, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](6, LogoutComponent_div_6_Template, 22, 4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", !ctx.userKey);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.userKey);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dvdXQuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 3304:
/*!***************************************************************!*\
  !*** ./src/app/component-news/news-add/news-add.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewsAddComponent": () => (/* binding */ NewsAddComponent)
/* harmony export */ });
/* harmony import */ var src_app_models_news_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/news.model */ 9057);
/* harmony import */ var _typeData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../typeData */ 7463);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var src_app_services_news_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/news.service */ 1857);
/* harmony import */ var src_app_services_cookie_catcher_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/cookie-catcher.service */ 1140);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);







function NewsAddComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate1"](" Submitted Status: ", ctx_r0.submitted, " ");
} }
function NewsAddComponent_option_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????classMap"](item_r2.classStyle);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate1"](" ", item_r2.name, " ");
} }
class NewsAddComponent {
    constructor(NewsService, CookieCatcherService) {
        this.NewsService = NewsService;
        this.CookieCatcherService = CookieCatcherService;
        this.news = new src_app_models_news_model__WEBPACK_IMPORTED_MODULE_0__.News();
        this.submitted = false;
        this.typeData = _typeData__WEBPACK_IMPORTED_MODULE_1__.typeData;
    }
    ngOnInit() {
    }
    saveNews() {
        this.news.created_date = String(new Date());
        this.news.updated_date = String(new Date());
        this.NewsService.create(this.news)
            .then(() => {
            this.submitted = true;
        });
    }
}
NewsAddComponent.??fac = function NewsAddComponent_Factory(t) { return new (t || NewsAddComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](src_app_services_news_service__WEBPACK_IMPORTED_MODULE_2__.NewsService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](src_app_services_cookie_catcher_service__WEBPACK_IMPORTED_MODULE_3__.CookieCatcherService)); };
NewsAddComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineComponent"]({ type: NewsAddComponent, selectors: [["app-news-add"]], decls: 24, vars: 6, consts: [[1, "submit-form"], ["class", "p-3 mb-2 border border-3 rounded-2 border-success bg-light text-success", 4, "ngIf"], [1, "form-group"], ["for", "Title"], ["type", "text", "id", "title", "required", "", "name", "title", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "Content"], ["id", "content", "required", "", "name", "content", "rows", "5", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "type", "id", "type", 1, "form-select", 3, "ngModel", "ngModelChange"], [3, "class", 4, "ngFor", "ngForOf"], [1, "form-group", "row"], ["type", "text", "id", "tags", "required", "", "disabled", "", "name", "created_date", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "btn", "btn-success", 3, "click"], [1, "p-3", "mb-2", "border", "border-3", "rounded-2", "border-success", "bg-light", "text-success"]], template: function NewsAddComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1, "\u5EFA\u7ACB\u65B0\u6D88\u606F");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](3, NewsAddComponent_div_3_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](5, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](6, "\u6A19\u984C");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](7, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("ngModelChange", function NewsAddComponent_Template_input_ngModelChange_7_listener($event) { return ctx.news.title = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](9, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](10, "\u5167\u5BB9");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](11, "textarea", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("ngModelChange", function NewsAddComponent_Template_textarea_ngModelChange_11_listener($event) { return ctx.news.content = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](12, "        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](13, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](14, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](15, "\u6D88\u606F\u985E\u578B");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](16, "select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("ngModelChange", function NewsAddComponent_Template_select_ngModelChange_16_listener($event) { return ctx.news.type = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](17, NewsAddComponent_option_17_Template, 2, 4, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](19, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](20, "\u5EFA\u7ACB\u65E5\u671F");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](21, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("ngModelChange", function NewsAddComponent_Template_input_ngModelChange_21_listener($event) { return ctx.news.created_date = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](22, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function NewsAddComponent_Template_button_click_22_listener() { return ctx.saveNews(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](23, "\u9001\u51FA");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngModel", ctx.news.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngModel", ctx.news.content);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngModel", ctx.news.type);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngForOf", ctx.typeData);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngModel", ctx.news.created_date);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.SelectControlValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["??NgSelectMultipleOption"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuZXdzLWFkZC5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 9048:
/*!***********************************************************************!*\
  !*** ./src/app/component-news/news-details/news-details.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewsDetailsComponent": () => (/* binding */ NewsDetailsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _typeData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../typeData */ 7463);
/* harmony import */ var src_app_services_news_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/news.service */ 1857);
/* harmony import */ var src_app_services_cookie_catcher_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/cookie-catcher.service */ 1140);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 9895);








function NewsDetailsComponent_div_0_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate1"](" ", ctx_r1.updateMessage, " ");
} }
function NewsDetailsComponent_div_0_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate1"](" ", ctx_r2.deleteMessage, " ");
} }
function NewsDetailsComponent_div_0_option_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????classMap"](item_r6.classStyle);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate1"](" ", item_r6.name, " ");
} }
function NewsDetailsComponent_div_0_div_22_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](2, "\u4FEE\u6539\u6642\u9593");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](3, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("ngModelChange", function NewsDetailsComponent_div_0_div_22_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["????restoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"](2); return ctx_r7.currentNews.updated_date = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngModel", ctx_r4.currentNews.updated_date);
} }
function NewsDetailsComponent_div_0_div_23_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function NewsDetailsComponent_div_0_div_23_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["????restoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"](2); return ctx_r9.updateNews(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](2, " \u66F4\u65B0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](3, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function NewsDetailsComponent_div_0_div_23_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["????restoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"](2); return ctx_r11.deleteNews(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](4, " \u522A\u9664 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](5, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](6, " \u65B0\u5EFA ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function NewsDetailsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](3, "\u8A73\u7D30\u8CC7\u6599");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](4, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](5, NewsDetailsComponent_div_0_div_5_Template, 2, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](6, NewsDetailsComponent_div_0_div_6_Template, 2, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](7, "form");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](8, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](9, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](10, "\u6A19\u984C");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](11, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("ngModelChange", function NewsDetailsComponent_div_0_Template_input_ngModelChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["????restoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"](); return ctx_r12.currentNews.title = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](12, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](13, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](14, "\u5167\u6587");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](15, "textarea", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("ngModelChange", function NewsDetailsComponent_div_0_Template_textarea_ngModelChange_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["????restoreView"](_r13); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"](); return ctx_r14.currentNews.content = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](16, "                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](17, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](18, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](19, "\u6D88\u606F\u985E\u578B");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](20, "select", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("ngModelChange", function NewsDetailsComponent_div_0_Template_select_ngModelChange_20_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["????restoreView"](_r13); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"](); return ctx_r15.currentNews.type = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](21, NewsDetailsComponent_div_0_option_21_Template, 2, 4, "option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](22, NewsDetailsComponent_div_0_div_22_Template, 4, 1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](23, NewsDetailsComponent_div_0_div_23_Template, 7, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx_r0.updateMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx_r0.deleteMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngModel", ctx_r0.currentNews.title)("disabled", !ctx_r0.root());
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngModel", ctx_r0.currentNews.content)("disabled", !ctx_r0.root());
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngModel", ctx_r0.currentNews.type)("disabled", !ctx_r0.root());
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngForOf", ctx_r0.typeData);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx_r0.root());
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx_r0.root());
} }
class NewsDetailsComponent {
    constructor(NewsService, CookieCatcherService) {
        this.NewsService = NewsService;
        this.CookieCatcherService = CookieCatcherService;
        this.refreshList = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter;
        this.typeData = _typeData__WEBPACK_IMPORTED_MODULE_0__.typeData;
        this.currentNews = {
            title: '',
            content: '',
            type: '',
            updated_date: String(new Date())
        };
        this.updateMessage = '';
        this.deleteMessage = '';
    }
    ngOnInit() {
        this.updateMessage = '';
        this.deleteMessage = '';
    }
    ngOnChanges() {
        this.updateMessage = '';
        this.deleteMessage = '';
        this.currentNews = Object.assign({}, this.news);
    }
    root() {
        return this.CookieCatcherService.checkUserRoot();
    }
    updateNews() {
        const data = {
            title: this.currentNews.title,
            content: this.currentNews.content,
            type: this.currentNews.type,
            updated_date: String(new Date())
        };
        if (this.currentNews.key) {
            this.NewsService.update(this.currentNews.key, data)
                .then(() => {
                // console.warn('data was updated!');
                this.updateMessage = 'updated Successfully!';
            })
                .catch(err => console.exception(err));
        }
    }
    deleteNews() {
        if (this.currentNews.key) {
            this.NewsService.delete(this.currentNews.key)
                .then(() => {
                this.refreshList.emit();
                this.deleteMessage = 'deleted Successfully!';
                // console.warn('data was deleted!');
            })
                .catch(err => console.exception(err));
        }
    }
}
NewsDetailsComponent.??fac = function NewsDetailsComponent_Factory(t) { return new (t || NewsDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](src_app_services_news_service__WEBPACK_IMPORTED_MODULE_1__.NewsService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](src_app_services_cookie_catcher_service__WEBPACK_IMPORTED_MODULE_2__.CookieCatcherService)); };
NewsDetailsComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineComponent"]({ type: NewsDetailsComponent, selectors: [["app-news-details"]], inputs: { news: "news" }, outputs: { refreshList: "refreshList" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["????NgOnChangesFeature"]], decls: 1, vars: 1, consts: [["class", "card edit-form p-1", 4, "ngIf"], [1, "card", "edit-form", "p-1"], [1, "card-header", "text-center"], [1, "card-body"], ["class", "p-3 mb-2 border border-3 rounded-2 border-success bg-light text-success", 4, "ngIf"], ["class", "p-3 mb-2 border border-3 rounded-2 border-danger bg-light text-danger", 4, "ngIf"], [1, "form-group"], ["type", "text", "id", "title", "name", "title", 1, "form-control", 3, "ngModel", "disabled", "ngModelChange"], ["for", "Content"], ["id", "content", "required", "", "name", "content", "rows", "8", 1, "form-control", 3, "ngModel", "disabled", "ngModelChange"], ["name", "type", "id", "type", 1, "form-select", 3, "ngModel", "disabled", "ngModelChange"], [3, "class", 4, "ngFor", "ngForOf"], ["class", "form-group", 4, "ngIf"], ["class", "card-footer text-center", 4, "ngIf"], [1, "p-3", "mb-2", "border", "border-3", "rounded-2", "border-success", "bg-light", "text-success"], [1, "p-3", "mb-2", "border", "border-3", "rounded-2", "border-danger", "bg-light", "text-danger"], ["type", "text", "id", "updated_date", "name", "updated_date", "disabled", "", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "card-footer", "text-center"], ["type", "submit", 1, "btn", "btn-success", "m-1", 3, "click"], ["type", "submit", 1, "btn", "btn-danger", "m-1", 3, "click"], ["routerLink", "/add", 1, "btn", "btn-info", "text-light", "m-1"]], template: function NewsDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](0, NewsDetailsComponent_div_0_Template, 24, 11, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx.currentNews);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.SelectControlValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["??NgSelectMultipleOption"], _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuZXdzLWRldGFpbHMuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 3762:
/*!*****************************************************************!*\
  !*** ./src/app/component-news/news-view/news-view.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewsViewComponent": () => (/* binding */ NewsViewComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 8002);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var src_app_services_news_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/news.service */ 1857);
/* harmony import */ var src_app_services_cookie_catcher_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/cookie-catcher.service */ 1140);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _news_details_news_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../news-details/news-details.component */ 9048);






function NewsViewComponent_tr_17_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const singleNews_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](singleNews_r2.type);
} }
function NewsViewComponent_tr_17_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const singleNews_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](singleNews_r2.type);
} }
function NewsViewComponent_tr_17_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const singleNews_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](singleNews_r2.type);
} }
function NewsViewComponent_tr_17_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const singleNews_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](singleNews_r2.type);
} }
function NewsViewComponent_tr_17_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const singleNews_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](singleNews_r2.type);
} }
function NewsViewComponent_tr_17_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const singleNews_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](singleNews_r2.type);
} }
function NewsViewComponent_tr_17_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "tr", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function NewsViewComponent_tr_17_Template_tr_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????restoreView"](_r17); const singleNews_r2 = restoredCtx.$implicit; const i_r3 = restoredCtx.index; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"](); return ctx_r16.setActiveNews(singleNews_r2, i_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](3, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](5, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](6, NewsViewComponent_tr_17_span_6_Template, 2, 1, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](7, NewsViewComponent_tr_17_span_7_Template, 2, 1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](8, NewsViewComponent_tr_17_span_8_Template, 2, 1, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](9, NewsViewComponent_tr_17_span_9_Template, 2, 1, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](10, NewsViewComponent_tr_17_span_10_Template, 2, 1, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](11, NewsViewComponent_tr_17_span_11_Template, 2, 1, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](14, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const singleNews_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????classProp"]("active", i_r3 == ctx_r0.currentIndex);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](i_r3 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](singleNews_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngSwitch", singleNews_r2.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngSwitchCase", "notice");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngSwitchCase", "debug");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngSwitchCase", "update");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngSwitchCase", "info");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngSwitchCase", "nofinication");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind3"](14, 11, singleNews_r2.updated_date, "YYYY-MM-dd HH:mm:ss", "Asia/Taipei"), " ");
} }
function NewsViewComponent_div_29_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "app-news-details", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("refreshList", function NewsViewComponent_div_29_div_1_Template_app_news_details_refreshList_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["????restoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"](2); return ctx_r19.refreshList(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("news", ctx_r18.currentNews);
} }
function NewsViewComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](1, NewsViewComponent_div_29_div_1_Template, 2, 1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx_r1.currentNews);
} }
class NewsViewComponent {
    constructor(newsService, CookieCatcherService) {
        this.newsService = newsService;
        this.CookieCatcherService = CookieCatcherService;
        this.currentIndex = -1;
        this.title = '';
        this.pageLength = 0;
        this.pageIndex = 0;
        this.pageMax = 0;
        // console.log(this.CookieCatcherService.userStatus);
    }
    ngOnInit() {
        this.retrieveNews();
    }
    refreshList() {
        this.currentNews = undefined;
        this.currentIndex = -1;
        this.retrieveNews();
    }
    retrieveNews() {
        this.newsService.getAll()
            .snapshotChanges()
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(changes => changes.map(c => (Object.assign({ key: c.payload.key }, c.payload.val()))))).subscribe(data => {
            this.newsData = data;
            this.newsData.reverse();
            this.pageLength = this.newsData.length;
            this.newsData = this.newsData.slice(this.pageIndex * 10, (this.pageIndex + 1) * 10);
            this.pageMax = Math.floor((this.pageLength - 1) / 10) + 1;
            this.currentNews = this.newsData[0];
            this.currentIndex = 0;
        });
    }
    setActiveNews(news, index) {
        this.currentNews = news;
        this.currentIndex = index;
    }
    removeAllNews() {
        this.newsService.deleteAll()
            .then(() => this.refreshList())
            .catch(err => console.log(err));
    }
    classTables(type) {
        if (type === 'main') {
            return (this.currentNews === null) ? 'col-7' : 'col-7';
        }
        if (type === 'child') {
            return (this.currentNews === null) ? 'col-5' : 'col-5';
        }
    }
    changePages(page) {
        if (page) {
            if ((this.pageIndex + 1) * 10 < this.pageLength) {
                this.pageIndex += 1;
            }
        }
        if (!page) {
            if ((this.pageIndex - 1) * 10 >= 0) {
                this.pageIndex -= 1;
            }
        }
        this.retrieveNews();
    }
}
NewsViewComponent.??fac = function NewsViewComponent_Factory(t) { return new (t || NewsViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](src_app_services_news_service__WEBPACK_IMPORTED_MODULE_0__.NewsService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](src_app_services_cookie_catcher_service__WEBPACK_IMPORTED_MODULE_1__.CookieCatcherService)); };
NewsViewComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineComponent"]({ type: NewsViewComponent, selectors: [["app-news-view"]], decls: 30, vars: 4, consts: [[1, "my-3"], [1, "badge", "badge-secondary", "mx-3"], [1, "row"], [1, "col-7"], [1, "table", "table-hover", "text-center"], [3, "active", "click", 4, "ngFor", "ngForOf"], ["aria-label", "Page navigation mx-auto"], [1, "pagination", "justify-content-center"], [1, "page-item"], [1, "page-link", 3, "click"], [1, "page-link"], ["class", "col-5", 4, "ngIf"], [3, "click"], [1, "text-left"], [3, "ngSwitch"], ["class", "badge badge-primary", 4, "ngSwitchCase"], ["class", "badge badge-danger", 4, "ngSwitchCase"], ["class", "badge badge-success", 4, "ngSwitchCase"], ["class", "badge badge-info", 4, "ngSwitchCase"], ["class", "badge badge-warning", 4, "ngSwitchCase"], ["class", "badge badge-secondary", 4, "ngSwitchDefault"], [1, "badge", "badge-primary"], [1, "badge", "badge-danger"], [1, "badge", "badge-success"], [1, "badge", "badge-info"], [1, "badge", "badge-warning"], [1, "badge", "badge-secondary"], [1, "col-5"], [4, "ngIf"], [3, "news", "refreshList"]], template: function NewsViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](2, "News");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](3, "\u6700\u65B0\u6D88\u606F\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](6, "table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](7, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](8, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](9, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](10, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](11, "\u6A19\u984C");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](12, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](13, "\u6D88\u606F\u985E\u578B");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](14, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](15, "\u767C\u5E03\u65E5\u671F");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](16, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](17, NewsViewComponent_tr_17_Template, 15, 15, "tr", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](18, "nav", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](19, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](20, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](21, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function NewsViewComponent_Template_span_click_21_listener() { return ctx.changePages(false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](22, "\u00AB");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](23, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](24, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](26, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](27, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function NewsViewComponent_Template_span_click_27_listener() { return ctx.changePages(true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](28, "\u00BB");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](29, NewsViewComponent_div_29_Template, 2, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngForOf", ctx.newsData);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate2"]("", ctx.pageIndex + 1, " / ", ctx.pageMax, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx.currentNews);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgSwitchDefault, _news_details_news_details_component__WEBPACK_IMPORTED_MODULE_2__.NewsDetailsComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuZXdzLXZpZXcuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 7463:
/*!********************************************!*\
  !*** ./src/app/component-news/typeData.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "typeData": () => (/* binding */ typeData)
/* harmony export */ });
const typeData = [
    { name: 'nofinication', classStyle: 'text-warning font-weight-bold' },
    { name: 'update', classStyle: 'text-success font-weight-bold' },
    { name: 'debug', classStyle: 'text-danger font-weight-bold' },
    { name: 'info', classStyle: 'text-info font-weight-bold' },
    { name: 'notice', classStyle: 'text-primary font-weight-bold' }
];


/***/ }),

/***/ 5067:
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _component_news_news_view_news_view_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../component-news/news-view/news-view.component */ 3762);


class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.??fac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 1, vars: 0, template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](0, "app-news-view");
    } }, directives: [_component_news_news_view_news_view_component__WEBPACK_IMPORTED_MODULE_0__.NewsViewComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 5134:
/*!****************************************!*\
  !*** ./src/app/logs/logs.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogsComponent": () => (/* binding */ LogsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);

class LogsComponent {
    constructor() { }
    ngOnInit() {
    }
}
LogsComponent.??fac = function LogsComponent_Factory(t) { return new (t || LogsComponent)(); };
LogsComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: LogsComponent, selectors: [["app-logs"]], decls: 2, vars: 0, template: function LogsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "logs works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dzLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 9057:
/*!**************************************!*\
  !*** ./src/app/models/news.model.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "News": () => (/* binding */ News)
/* harmony export */ });
class News {
}


/***/ }),

/***/ 1142:
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotFoundComponent": () => (/* binding */ NotFoundComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);

class NotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
}
NotFoundComponent.??fac = function NotFoundComponent_Factory(t) { return new (t || NotFoundComponent)(); };
NotFoundComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: NotFoundComponent, selectors: [["app-not-found"]], decls: 6, vars: 0, template: function NotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "\u60A8\u7684\u7DB2\u5740\u8F38\u5165\u683C\u5F0F\u932F\u8AA4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, " \u8ACB\u5617\u8A66\u91CD\u65B0\u8F38\u5165...\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, " \u60A8\u6C92\u8FA6\u6CD5\u900F\u904E\u7DB2\u5740\u524D\u5F80\u672A\u77E5\u7684\u5340\u57DF\uFF0C\u56E0\u70BA\u672C\u7DB2\u7AD9\u5DF2\u8A2D\u6709Route\u63A7\u5236\u5668\u3002\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3QtZm91bmQuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 1140:
/*!****************************************************!*\
  !*** ./src/app/services/cookie-catcher.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CookieCatcherService": () => (/* binding */ CookieCatcherService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 8002);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ 1584);
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.service */ 3071);




class CookieCatcherService {
    constructor(CookieService, UserService) {
        this.CookieService = CookieService;
        this.UserService = UserService;
        this.userStatus = {
            status: false,
            root: 0,
            nickname: '',
            key: '',
        };
        const key = this.CookieService.get('userKey');
        if (this.CookieService.get('userKey')) {
            this.getUserInfo(this.CookieService.get('userKey'));
        }
    }
    ngOnChanges() {
        this.getUserInfo(this.CookieService.get('userKey'));
    }
    checkUserLogin() {
        return this.userStatus.status;
    }
    checkUserRoot() {
        return this.userStatus.root === 1 ? true : false;
    }
    getUserNickname() {
        return this.userStatus.nickname;
    }
    getUserKey() {
        return this.userStatus.key;
    }
    getUserInfo(key) {
        this.UserService.getAll().snapshotChanges()
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(changes => changes.map(c => (Object.assign({ key: c.payload.key }, c.payload.val())))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(data => data.filter(c => c.key === key)))
            .subscribe(res => {
            this.userData = res;
            if (this.userData[0].key !== '')
                this.userStatus.status = true;
            if (this.userStatus.status) {
                this.userStatus.key = String(this.userData[0].key);
                this.userStatus.nickname = String(this.userData[0].nickname);
                this.userStatus.root = Number(this.userData[0].root);
            }
        });
    }
}
CookieCatcherService.??fac = function CookieCatcherService_Factory(t) { return new (t || CookieCatcherService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????inject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__.CookieService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????inject"](_user_service__WEBPACK_IMPORTED_MODULE_0__.UserService)); };
CookieCatcherService.??prov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineInjectable"]({ token: CookieCatcherService, factory: CookieCatcherService.??fac, providedIn: 'root' });


/***/ }),

/***/ 1857:
/*!******************************************!*\
  !*** ./src/app/services/news.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewsService": () => (/* binding */ NewsService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/database */ 4134);


class NewsService {
    constructor(db) {
        this.db = db;
        this.db_childPath = '/news';
        this.newsRef = db.list(this.db_childPath);
    }
    // ???????????????????????????
    getAll() {
        return this.newsRef;
    }
    // ??????????????????
    create(news) {
        return this.newsRef.push(news);
    }
    // ????????????
    /*
     * @params key->id
     * @params value->update data
     * Promise = ???????????????
     */
    update(key, value) {
        return this.newsRef.update(key, value);
    }
    // ??????????????????
    delete(key) {
        return this.newsRef.remove(key);
    }
    // ??????????????????(????????????????????????)
    deleteAll() {
        return this.newsRef.remove();
    }
}
NewsService.??fac = function NewsService_Factory(t) { return new (t || NewsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_fire_database__WEBPACK_IMPORTED_MODULE_1__.AngularFireDatabase)); };
NewsService.??prov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: NewsService, factory: NewsService.??fac, providedIn: 'root' });


/***/ }),

/***/ 3071:
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserService": () => (/* binding */ UserService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/database */ 4134);


class UserService {
    constructor(db) {
        this.db = db;
        this.db_childPath = '/user';
        this.userRef = db.list(this.db_childPath);
    }
    // ???????????????????????????
    getAll() {
        return this.userRef;
    }
    getSingleUser(key) {
        return this.db.list(this.db_childPath + "/" + key);
    }
    // ??????????????????
    create(news) {
        return this.userRef.push(news);
    }
    // ????????????
    /*
     * @params key->id
     * @params value->update data
     * Promise = ???????????????
     */
    update(key, value) {
        return this.userRef.update(key, value);
    }
    // ??????????????????
    delete(key) {
        return this.userRef.remove(key);
    }
    // ??????????????????(????????????????????????)
    deleteAll() {
        return this.userRef.remove();
    }
}
UserService.??fac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_fire_database__WEBPACK_IMPORTED_MODULE_1__.AngularFireDatabase)); };
UserService.??prov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: UserService, factory: UserService.??fac, providedIn: 'root' });


/***/ }),

/***/ 1234:
/*!**************************************************!*\
  !*** ./src/app/user-info/user-info.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserInfoComponent": () => (/* binding */ UserInfoComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 8002);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ 1584);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/user.service */ 3071);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9895);






function UserInfoComponent_div_1_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "\u3010\u7BA1\u7406\u8005\u3011");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function UserInfoComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](3, UserInfoComponent_div_1_span_3_Template, 2, 0, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](5, "\u767B\u51FA");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????propertyInterpolate1"]("routerLink", "/user/", ctx_r0.userLogin.key, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx_r0.userLogin.nickname);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx_r0.userLogin.admin);
} }
function UserInfoComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " \u60A8\u5C1A\u672A\u767B\u5165 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](3, "\u73FE\u5728\u767B\u5165");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
class UserInfoComponent {
    constructor(CookieService, UserService) {
        this.CookieService = CookieService;
        this.UserService = UserService;
        this.userLogin = {
            status: false,
            key: '',
            nickname: '',
            admin: false,
        };
        if (this.CookieService.get('userKey')) {
            this.getUserInfo(this.CookieService.get('userKey'));
        }
    }
    getUserInfo(key) {
        this.UserService.getAll().snapshotChanges()
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(changes => changes.map(c => (Object.assign({ key: c.payload.key }, c.payload.val())))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(data => data.filter(c => c.key === key)))
            .subscribe(res => {
            this.userData = res;
            if (this.userData.length > 0) {
                this.userLogin.status = true;
                this.userLogin.nickname = String(this.userData[0].nickname);
                this.userLogin.admin = Boolean(this.userData[0].root);
                this.userLogin.key = String(this.userData[0].key);
                this.CookieService.set('userKey', this.userLogin.key);
            }
            else {
                this.userLogin.status = false;
                this.userLogin.nickname = '';
                this.userLogin.admin = false;
                this.userLogin.key = '';
            }
        });
    }
    // ????????????
    ngOnChanges() {
        // X
        // console.warn('ngOnChanges');
    }
    ngOnInit() {
        // console.warn('ngOnInit');
    }
    ngDoCheck() {
        // OK
        // ????????????????????? Angular ?????????????????????????????????????????????????????????
        // console.log('ngDoCheck');
    }
    ngAfterContentInit() {
        // X
        // ??? Angular ???????????????????????????????????????????????????????????????????????????
        // console.warn('ngAfterContentInit');
    }
    ngAfterContentChecked() {
        // OK
        // ?????? Angular ???????????????????????????????????????????????????????????????
        // console.log('ngAfterContentChecked');
    }
    ngAfterViewChecked() {
        // console.log('ngAfterViewChecked');
        // this.getUserInfo(this.CookieService.get('userKey'))
    }
}
UserInfoComponent.??fac = function UserInfoComponent_Factory(t) { return new (t || UserInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__.CookieService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_0__.UserService)); };
UserInfoComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: UserInfoComponent, selectors: [["app-user-info"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["????NgOnChangesFeature"]], decls: 3, vars: 2, consts: [["title", "\u4F7F\u7528\u8005\u8CC7\u8A0A\uFF0C\u5982\u679C\u6709\u8AA4\u53EF\u4EE5\u5617\u8A66\u91CD\u65B0\u8F09\u5165", 1, "m-0", "p-2"], ["class", "alert alert-success", 4, "ngIf"], ["class", "alert alert-warning", 4, "ngIf"], [1, "alert", "alert-success"], [3, "routerLink"], [4, "ngIf"], ["routerLink", "logout"], [1, "alert", "alert-warning"], ["routerLink", "login"]], template: function UserInfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](1, UserInfoComponent_div_1_Template, 6, 3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](2, UserInfoComponent_div_2_Template, 4, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.userLogin.status);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", !ctx.userLogin.status);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLWluZm8uY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyAEOiDKSOhQVyZ276lm-dzS6UsVla6hXVs",
        authDomain: "angular-ab1f0.firebaseapp.com",
        databaseURL: "https://angular-ab1f0-default-rtdb.firebaseio.com",
        projectId: "angular-ab1f0",
        storageBucket: "angular-ab1f0.appspot.com",
        messagingSenderId: "302142800591",
        appId: "1:302142800591:web:93d85bbf830530e2b26dba",
        measurementId: "G-FC6YJYZ7S8"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 6957:
/*!**************************************!*\
  !*** ./src/environments/path.map.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "path": () => (/* binding */ path)
/* harmony export */ });
const path = {
    home: '',
    users: 'user',
    users_add: './add',
    users_detail: './add/:key',
    rooms: 'room',
    chats: 'chat',
    article: 'article',
    login: 'login',
    logout: 'logout',
};


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map