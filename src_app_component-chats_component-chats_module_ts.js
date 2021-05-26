(self["webpackChunkwww"] = self["webpackChunkwww"] || []).push([["src_app_component-chats_component-chats_module_ts"],{

/***/ 6413:
/*!**************************************************************************!*\
  !*** ./src/app/component-chats/chats-details/chats-details.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatsDetailsComponent": () => (/* binding */ ChatsDetailsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);

class ChatsDetailsComponent {
    constructor() { }
    ngOnInit() {
    }
}
ChatsDetailsComponent.ɵfac = function ChatsDetailsComponent_Factory(t) { return new (t || ChatsDetailsComponent)(); };
ChatsDetailsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChatsDetailsComponent, selectors: [["app-chats-details"]], decls: 2, vars: 0, template: function ChatsDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "chats-details works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGF0cy1kZXRhaWxzLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 8208:
/*!********************************************************************!*\
  !*** ./src/app/component-chats/chats-view/chats-view.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatsViewComponent": () => (/* binding */ ChatsViewComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);

class ChatsViewComponent {
    constructor() { }
    ngOnInit() {
    }
}
ChatsViewComponent.ɵfac = function ChatsViewComponent_Factory(t) { return new (t || ChatsViewComponent)(); };
ChatsViewComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChatsViewComponent, selectors: [["app-chats-view"]], decls: 2, vars: 0, template: function ChatsViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "chats-view works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGF0cy12aWV3LmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 1861:
/*!*******************************************************************!*\
  !*** ./src/app/component-chats/component-chats-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentChatsRoutingModule": () => (/* binding */ ComponentChatsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _component_rooms_chats_add_chats_add_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../component-rooms/chats-add/chats-add.component */ 4835);
/* harmony import */ var _chats_view_chats_view_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chats-view/chats-view.component */ 8208);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);





const routes = [
    {
        path: '',
        component: _chats_view_chats_view_component__WEBPACK_IMPORTED_MODULE_1__.ChatsViewComponent
    },
    {
        path: 'add',
        component: _component_rooms_chats_add_chats_add_component__WEBPACK_IMPORTED_MODULE_0__.ChatsAddComponent
    }
];
class ComponentChatsRoutingModule {
}
ComponentChatsRoutingModule.ɵfac = function ComponentChatsRoutingModule_Factory(t) { return new (t || ComponentChatsRoutingModule)(); };
ComponentChatsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ComponentChatsRoutingModule });
ComponentChatsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ComponentChatsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 7506:
/*!***********************************************************!*\
  !*** ./src/app/component-chats/component-chats.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentChatsModule": () => (/* binding */ ComponentChatsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _component_chats_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component-chats-routing.module */ 1861);
/* harmony import */ var _chats_details_chats_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chats-details/chats-details.component */ 6413);
/* harmony import */ var _chats_view_chats_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chats-view/chats-view.component */ 8208);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);





class ComponentChatsModule {
}
ComponentChatsModule.ɵfac = function ComponentChatsModule_Factory(t) { return new (t || ComponentChatsModule)(); };
ComponentChatsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: ComponentChatsModule });
ComponentChatsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _component_chats_routing_module__WEBPACK_IMPORTED_MODULE_0__.ComponentChatsRoutingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ComponentChatsModule, { declarations: [_chats_details_chats_details_component__WEBPACK_IMPORTED_MODULE_1__.ChatsDetailsComponent,
        _chats_view_chats_view_component__WEBPACK_IMPORTED_MODULE_2__.ChatsViewComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _component_chats_routing_module__WEBPACK_IMPORTED_MODULE_0__.ComponentChatsRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_component-chats_component-chats_module_ts.js.map