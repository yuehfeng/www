(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["component-chats-component-chats-module"],{

/***/ "8gN2":
/*!**************************************************************************!*\
  !*** ./src/app/component-chats/chats-details/chats-details.component.ts ***!
  \**************************************************************************/
/*! exports provided: ChatsDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatsDetailsComponent", function() { return ChatsDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ChatsDetailsComponent {
    constructor() { }
    ngOnInit() {
    }
}
ChatsDetailsComponent.ɵfac = function ChatsDetailsComponent_Factory(t) { return new (t || ChatsDetailsComponent)(); };
ChatsDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChatsDetailsComponent, selectors: [["app-chats-details"]], decls: 2, vars: 0, template: function ChatsDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "chats-details works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGF0cy1kZXRhaWxzLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "MNyF":
/*!*******************************************************************!*\
  !*** ./src/app/component-chats/component-chats-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: ComponentChatsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentChatsRoutingModule", function() { return ComponentChatsRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _component_rooms_chats_add_chats_add_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../component-rooms/chats-add/chats-add.component */ "5Oeh");
/* harmony import */ var _chats_view_chats_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chats-view/chats-view.component */ "Z/3n");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





const routes = [
    {
        path: '',
        component: _chats_view_chats_view_component__WEBPACK_IMPORTED_MODULE_2__["ChatsViewComponent"]
    },
    {
        path: 'add',
        component: _component_rooms_chats_add_chats_add_component__WEBPACK_IMPORTED_MODULE_1__["ChatsAddComponent"]
    }
];
class ComponentChatsRoutingModule {
}
ComponentChatsRoutingModule.ɵfac = function ComponentChatsRoutingModule_Factory(t) { return new (t || ComponentChatsRoutingModule)(); };
ComponentChatsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: ComponentChatsRoutingModule });
ComponentChatsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ComponentChatsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "Z/3n":
/*!********************************************************************!*\
  !*** ./src/app/component-chats/chats-view/chats-view.component.ts ***!
  \********************************************************************/
/*! exports provided: ChatsViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatsViewComponent", function() { return ChatsViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ChatsViewComponent {
    constructor() { }
    ngOnInit() {
    }
}
ChatsViewComponent.ɵfac = function ChatsViewComponent_Factory(t) { return new (t || ChatsViewComponent)(); };
ChatsViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChatsViewComponent, selectors: [["app-chats-view"]], decls: 2, vars: 0, template: function ChatsViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "chats-view works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGF0cy12aWV3LmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "zhAD":
/*!***********************************************************!*\
  !*** ./src/app/component-chats/component-chats.module.ts ***!
  \***********************************************************/
/*! exports provided: ComponentChatsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentChatsModule", function() { return ComponentChatsModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _component_chats_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component-chats-routing.module */ "MNyF");
/* harmony import */ var _chats_details_chats_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chats-details/chats-details.component */ "8gN2");
/* harmony import */ var _chats_view_chats_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chats-view/chats-view.component */ "Z/3n");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





class ComponentChatsModule {
}
ComponentChatsModule.ɵfac = function ComponentChatsModule_Factory(t) { return new (t || ComponentChatsModule)(); };
ComponentChatsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: ComponentChatsModule });
ComponentChatsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _component_chats_routing_module__WEBPACK_IMPORTED_MODULE_1__["ComponentChatsRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](ComponentChatsModule, { declarations: [_chats_details_chats_details_component__WEBPACK_IMPORTED_MODULE_2__["ChatsDetailsComponent"],
        _chats_view_chats_view_component__WEBPACK_IMPORTED_MODULE_3__["ChatsViewComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _component_chats_routing_module__WEBPACK_IMPORTED_MODULE_1__["ComponentChatsRoutingModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=component-chats-component-chats-module.js.map