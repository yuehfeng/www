(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["component-rooms-component-rooms-module"],{

/***/ "BGzo":
/*!**************************************!*\
  !*** ./src/app/models/room.model.ts ***!
  \**************************************/
/*! exports provided: Room */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Room", function() { return Room; });
class Room {
}


/***/ }),

/***/ "DQio":
/*!********************************************************************!*\
  !*** ./src/app/component-rooms/rooms-view/rooms-view.component.ts ***!
  \********************************************************************/
/*! exports provided: RoomsViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomsViewComponent", function() { return RoomsViewComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_room_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/room.service */ "yWY+");
/* harmony import */ var src_app_services_cookie_catcher_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/cookie-catcher.service */ "ExM7");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _rooms_details_rooms_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../rooms-details/rooms-details.component */ "l8oS");







function RoomsViewComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " \u65B0\u589E\u8A0E\u8AD6\u5BA4 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RoomsViewComponent_div_4_button_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " \u8F38\u5165\u91D1\u9470 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RoomsViewComponent_div_4_div_19_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "app-rooms-details", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("refreshList", function RoomsViewComponent_div_4_div_19_div_1_Template_app_rooms_details_refreshList_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r7.refreshList(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("room", ctx_r6.currentRoom);
} }
function RoomsViewComponent_div_4_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RoomsViewComponent_div_4_div_19_div_1_Template, 2, 1, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RoomsViewComponent_div_4_div_19_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); const item_r2 = ctx_r10.$implicit; const i_r3 = ctx_r10.index; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r9.setActiveRoom(item_r2, i_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " \u4FEE\u6539 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", i_r3 == ctx_r5.currentIndex);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", i_r3 == ctx_r5.currentIndex);
} }
function RoomsViewComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "|");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "\u52A0\u5165\u804A\u5929");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, RoomsViewComponent_div_4_button_18_Template, 2, 0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, RoomsViewComponent_div_4_div_19_Template, 5, 3, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r2.description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" \u53C3\u52A0\u4EBA\u6578: ", item_r2.people == null ? 0 : item_r2.people, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" \u7E3D\u8A0A\u606F\u6578: ", item_r2.messages == null ? 0 : item_r2.people, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/room/", item_r2.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", item_r2.privating);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r2.privating);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.root());
} }
class RoomsViewComponent {
    constructor(RoomService, CookieCatcherService) {
        this.RoomService = RoomService;
        this.CookieCatcherService = CookieCatcherService;
        this.currentIndex = -1;
    }
    ngOnInit() {
        this.retrieveRoom();
    }
    refreshList() {
        this.retrieveRoom();
    }
    retrieveRoom() {
        this.RoomService.getAll()
            .snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(changes => changes.map(c => (Object.assign({ key: c.payload.key }, c.payload.val()))))).subscribe(data => {
            // splice the Array
            this.roomData = data;
        });
    }
    setActiveRoom(room, index) {
        if (index == this.currentIndex) {
            this.currentRoom = undefined;
            this.currentIndex = -1;
        }
        else {
            this.currentRoom = room;
            this.currentIndex = index;
        }
    }
    removeAllNews() {
        this.RoomService.deleteAll()
            .then(() => this.refreshList())
            .catch(err => console.log(err));
    }
    root() {
        return this.CookieCatcherService.checkUserRoot();
    }
}
RoomsViewComponent.ɵfac = function RoomsViewComponent_Factory(t) { return new (t || RoomsViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_room_service__WEBPACK_IMPORTED_MODULE_2__["RoomService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_cookie_catcher_service__WEBPACK_IMPORTED_MODULE_3__["CookieCatcherService"])); };
RoomsViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RoomsViewComponent, selectors: [["app-rooms-view"]], decls: 7, vars: 2, consts: [[4, "ngIf"], [1, "mx-auto"], ["class", "container", 4, "ngFor", "ngForOf"], [1, "clearfix"], ["routerLink", "add", 1, "btn", "btn-success"], [1, "container"], [1, "card", "d-block", "float-start", "text-center", "m-3", 2, "width", "30%", "min-height", "250px"], [1, "card-header"], [1, "card-body"], [1, "m-2", "text-muted"], [1, "px-2"], [1, "m-3"], [1, "btn", "btn-primary", "m-1", 3, "routerLink", "disabled"], ["class", "btn btn-warning m-1", 4, "ngIf"], [1, "btn", "btn-warning", "m-1"], [1, "text-right"], [1, "btn", "btn-light", "fw-bold", "border-secondary", 3, "click"], [3, "room", "refreshList"]], template: function RoomsViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u8A0E\u8AD6\u5BA4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, RoomsViewComponent_div_2_Template, 3, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, RoomsViewComponent_div_4_Template, 20, 8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "div", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.root());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.roomData);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"], _rooms_details_rooms_details_component__WEBPACK_IMPORTED_MODULE_6__["RoomsDetailsComponent"]], styles: [".roomDiv[_ngcontent-%COMP%]\r\n{\r\n    width: 200px;\r\n    height: 200px;\r\n}\r\np[_ngcontent-%COMP%]\r\n{\r\n    margin: 0;\r\n    padding: 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvb21zLXZpZXcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxZQUFZO0lBQ1osYUFBYTtBQUNqQjtBQUNBOztJQUVJLFNBQVM7SUFDVCxVQUFVO0FBQ2QiLCJmaWxlIjoicm9vbXMtdmlldy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvb21EaXZcclxue1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxufVxyXG5wXHJcbntcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "K4V+":
/*!***********************************************************!*\
  !*** ./src/app/component-rooms/component-rooms.module.ts ***!
  \***********************************************************/
/*! exports provided: ComponentRoomsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentRoomsModule", function() { return ComponentRoomsModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _component_rooms_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component-rooms-routing.module */ "q69w");
/* harmony import */ var _rooms_view_rooms_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rooms-view/rooms-view.component */ "DQio");
/* harmony import */ var _rooms_add_rooms_add_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rooms-add/rooms-add.component */ "eT7J");
/* harmony import */ var _rooms_details_rooms_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rooms-details/rooms-details.component */ "l8oS");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _rooms_use_rooms_use_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./rooms-use/rooms-use.component */ "QfMn");
/* harmony import */ var _chats_board_chats_board_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./chats-board/chats-board.component */ "w80y");
/* harmony import */ var _chats_add_chats_add_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./chats-add/chats-add.component */ "5Oeh");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "fXoL");










class ComponentRoomsModule {
}
ComponentRoomsModule.ɵfac = function ComponentRoomsModule_Factory(t) { return new (t || ComponentRoomsModule)(); };
ComponentRoomsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: ComponentRoomsModule });
ComponentRoomsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _component_rooms_routing_module__WEBPACK_IMPORTED_MODULE_1__["ComponentRoomsRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](ComponentRoomsModule, { declarations: [_rooms_view_rooms_view_component__WEBPACK_IMPORTED_MODULE_2__["RoomsViewComponent"],
        _rooms_add_rooms_add_component__WEBPACK_IMPORTED_MODULE_3__["RoomsAddComponent"],
        _rooms_details_rooms_details_component__WEBPACK_IMPORTED_MODULE_4__["RoomsDetailsComponent"],
        _rooms_use_rooms_use_component__WEBPACK_IMPORTED_MODULE_6__["RoomsUseComponent"],
        _chats_add_chats_add_component__WEBPACK_IMPORTED_MODULE_8__["ChatsAddComponent"],
        _chats_board_chats_board_component__WEBPACK_IMPORTED_MODULE_7__["ChatsBoardComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _component_rooms_routing_module__WEBPACK_IMPORTED_MODULE_1__["ComponentRoomsRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]] }); })();


/***/ }),

/***/ "QfMn":
/*!******************************************************************!*\
  !*** ./src/app/component-rooms/rooms-use/rooms-use.component.ts ***!
  \******************************************************************/
/*! exports provided: RoomsUseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomsUseComponent", function() { return RoomsUseComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_room_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/room.service */ "yWY+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "b6Qw");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var src_app_services_cookie_catcher_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/cookie-catcher.service */ "ExM7");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _chats_board_chats_board_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../chats-board/chats-board.component */ "w80y");
/* harmony import */ var _chats_add_chats_add_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../chats-add/chats-add.component */ "5Oeh");










function RoomsUseComponent_div_4_tr_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r4.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r4.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r4.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r4.tags);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r4.people);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r4.messages);
} }
function RoomsUseComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u804A\u5929\u5BA4\u6240\u6709\u8CC7\u6599\u5217");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "table", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "KEY");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "NAME");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "DESCRIPTION");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "TYPE");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "TAGS");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "PEOPLE");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "MESSAGES");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, RoomsUseComponent_div_4_tr_22_Template, 17, 8, "tr", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.roomData);
} }
function RoomsUseComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-chats-add", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("userKey", ctx_r1.userKey)("userNickname", ctx_r1.userNickname)("roomKey", ctx_r1.roomKey);
} }
function RoomsUseComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " \u767B\u5165\u5F8C\u53EF\u4EE5\u767C\u8868\u8A0A\u606F ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class RoomsUseComponent {
    constructor(RoomService, route, CookieService, UserService, CookieCatcherService) {
        this.RoomService = RoomService;
        this.route = route;
        this.CookieService = CookieService;
        this.UserService = UserService;
        this.CookieCatcherService = CookieCatcherService;
        this.paramsID = -1;
        this.admin = true;
        this.userKey = '';
        this.userNickname = '';
        this.roomKey = '';
        this.public = {
            id: 0,
            name: '',
            description: '',
            tags: '',
            people: 0,
            messages: 0,
        };
        this.userKey = this.CookieService.get('userKey');
        // console.warn(this.userKey);
    }
    ngOnInit() {
        this.getSingleRoom();
        this.getUser(this.userKey);
    }
    getUser(key) {
        this.UserService.getAll().snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(changes => changes.map(c => (Object.assign({ key: c.payload.key }, c.payload.val())))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(data => data.filter(c => c.key === key)))
            .subscribe(res => {
            this.userData = res;
            this.userNickname = String(this.userData[0].nickname);
            this.userKey = String(this.userData[0].key);
        });
    }
    getSingleRoom() {
        this.paramsID = Number(this.route.snapshot.paramMap.get('id'));
        this.RoomService.getAll().snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(changes => changes.map(c => (Object.assign({ key: c.payload.key }, c.payload.val())))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(data => data.filter(c => c.id === this.paramsID)))
            .subscribe(res => {
            this.roomData = res;
            this.roomKey = String(this.roomData[0].key);
            // 手動(之後再找方法)
            this.public.id = Number(this.roomData[0]['id']);
            this.public.name = String(this.roomData[0]['name']);
            this.public.description = String(this.roomData[0]['description']);
            this.public.people = Number(this.roomData[0]['people']);
            this.public.messages = Number(this.roomData[0]['messages']);
        });
    }
    checkLogin() {
        return this.CookieCatcherService.checkUserLogin();
    }
}
RoomsUseComponent.ɵfac = function RoomsUseComponent_Factory(t) { return new (t || RoomsUseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_room_service__WEBPACK_IMPORTED_MODULE_2__["RoomService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_cookie_catcher_service__WEBPACK_IMPORTED_MODULE_6__["CookieCatcherService"])); };
RoomsUseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RoomsUseComponent, selectors: [["app-rooms-use"]], decls: 11, vars: 7, consts: [[1, "alert", "alert-secondary", "border-2", "border-light", "bordered-2"], [4, "ngIf"], [1, "row", 2, "max-height", "500px", "overflow-y", "scroll"], [3, "roomKey", "userKey"], [1, "row", "h-50"], ["class", "display-6 text-center text-muted p-3", 4, "ngIf"], [1, "clearfix"], [1, "table", "table-dark", "text-center"], [4, "ngFor", "ngForOf"], [3, "userKey", "userNickname", "roomKey"], [1, "display-6", "text-center", "text-muted", "p-3"]], template: function RoomsUseComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, RoomsUseComponent_div_4_Template, 23, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "app-chats-board", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, RoomsUseComponent_div_8_Template, 2, 3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, RoomsUseComponent_div_9_Template, 2, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "div", 6);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.public.name, " \u804A\u5929\u5BA4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.public.description, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.admin);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("roomKey", ctx.roomKey)("userKey", ctx.userKey);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.checkLogin());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.checkLogin());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _chats_board_chats_board_component__WEBPACK_IMPORTED_MODULE_8__["ChatsBoardComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _chats_add_chats_add_component__WEBPACK_IMPORTED_MODULE_9__["ChatsAddComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyb29tcy11c2UuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "eT7J":
/*!******************************************************************!*\
  !*** ./src/app/component-rooms/rooms-add/rooms-add.component.ts ***!
  \******************************************************************/
/*! exports provided: RoomsAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomsAddComponent", function() { return RoomsAddComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_models_room_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/room.model */ "BGzo");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_room_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/room.service */ "yWY+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");






function RoomsAddComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" \u9001\u51FA\u72C0\u614B ", ctx_r0.submitted, "\n");
} }
class RoomsAddComponent {
    constructor(RoomService) {
        this.RoomService = RoomService;
        this.room = new src_app_models_room_model__WEBPACK_IMPORTED_MODULE_1__["Room"]();
        this.submitted = false;
    }
    ngOnInit() {
    }
    saveRoom() {
        this.room.id = this.getRoomLength() + 1;
        this.RoomService.create(this.room)
            .then(() => {
            console.exception('Created new item successfully!');
            this.submitted = true;
        });
    }
    getRoomLength() {
        this.RoomService.getAll()
            .snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(changes => changes.map(c => (Object.assign({ key: c.payload.key }, c.payload.val()))))).subscribe(data => {
            this.RoomRegister = data;
            this.RoomLength = this.RoomRegister.length;
        });
        return Number(this.RoomLength);
    }
}
RoomsAddComponent.ɵfac = function RoomsAddComponent_Factory(t) { return new (t || RoomsAddComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_room_service__WEBPACK_IMPORTED_MODULE_3__["RoomService"])); };
RoomsAddComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: RoomsAddComponent, selectors: [["app-rooms-add"]], decls: 25, vars: 5, consts: [["class", "p-3 mb-2 border border-3 rounded-2 border-success bg-light text-success", 4, "ngIf"], [1, "submit-form"], [1, "form-group"], ["for", "name"], ["type", "text", "id", "name", "required", "", "name", "name", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "Content"], ["id", "content", "required", "", "name", "content", "rows", "5", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "Tags"], ["type", "text", "id", "tags", "required", "", "name", "tags", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "type"], ["type", "text", "id", "type", "required", "", "name", "type", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "row", "text-center"], [1, "col-12"], [1, "btn", "btn-success", 3, "click"], [1, "p-3", "mb-2", "border", "border-3", "rounded-2", "border-success", "bg-light", "text-success"]], template: function RoomsAddComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u65B0\u589E\u804A\u5929\u5BA4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, RoomsAddComponent_div_2_Template, 2, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "\u6A19\u984C");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function RoomsAddComponent_Template_input_ngModelChange_7_listener($event) { return ctx.room.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "\u804A\u5929\u5BA4\u5167\u5BB9");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "textarea", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function RoomsAddComponent_Template_textarea_ngModelChange_11_listener($event) { return ctx.room.description = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "\u6A19\u8A18");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function RoomsAddComponent_Template_input_ngModelChange_16_listener($event) { return ctx.room.tags = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "\u985E\u578B");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function RoomsAddComponent_Template_input_ngModelChange_20_listener($event) { return ctx.room.type = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RoomsAddComponent_Template_button_click_23_listener() { return ctx.saveRoom(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, " \u9001\u51FA ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.room.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.room.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.room.tags);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.room.type);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyb29tcy1hZGQuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "l8oS":
/*!**************************************************************************!*\
  !*** ./src/app/component-rooms/rooms-details/rooms-details.component.ts ***!
  \**************************************************************************/
/*! exports provided: RoomsDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomsDetailsComponent", function() { return RoomsDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_room_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/room.service */ "yWY+");
/* harmony import */ var src_app_services_cookie_catcher_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/cookie-catcher.service */ "ExM7");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");






function RoomsDetailsComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.deleteMessage, "\n");
} }
function RoomsDetailsComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.setIDMessage, "\n");
} }
function RoomsDetailsComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.updateMessage, "\n");
} }
class RoomsDetailsComponent {
    constructor(RoomService, CookieCatcherService) {
        this.RoomService = RoomService;
        this.CookieCatcherService = CookieCatcherService;
        this.refreshList = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];
        this.currentRoom = {
            id: 0,
            name: '',
            description: '',
            type: '',
            tags: ''
        };
        this.updateMessage = '';
        this.setIDMessage = '';
        this.deleteMessage = '';
    }
    ngOnInit() {
        this.updateMessage = '';
        this.setIDMessage = '';
        this.deleteMessage = '';
    }
    ngOnChanges() {
        this.updateMessage = '';
        this.setIDMessage = '';
        this.deleteMessage = '';
        this.currentRoom = Object.assign({}, this.room);
    }
    updateRoomforID() {
        const changeID = this.currentRoom.id;
        if (this.currentRoom.key) {
            this.RoomService.update(this.currentRoom.key, { id: changeID })
                .then(() => {
                this.currentRoom.id = changeID;
                this.setIDMessage = '您的ID欄位已更新成功，重新點選item按鈕可以確認。';
            })
                .catch(err => console.log(err));
        }
    }
    updateRoom() {
        const data = {
            id: Number(this.currentRoom.id),
            description: this.currentRoom.description,
            name: this.currentRoom.name,
            type: this.currentRoom.type,
            tags: this.currentRoom.tags,
        };
        if (this.currentRoom.key) {
            this.RoomService.update(this.currentRoom.key, data)
                .then(() => {
                this.updateMessage = '您的房間資訊已更新，重新點選item按鈕可以確認。';
            })
                .catch(err => console.exception(err));
        }
    }
    deleteRoom() {
        if (this.currentRoom.key) {
            this.RoomService.delete(this.currentRoom.key)
                .then(() => {
                this.refreshList.emit();
                this.deleteMessage = '成功刪除房間。';
                console.warn('data was deleted!');
            })
                .catch(err => console.exception(err));
        }
    }
}
RoomsDetailsComponent.ɵfac = function RoomsDetailsComponent_Factory(t) { return new (t || RoomsDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_room_service__WEBPACK_IMPORTED_MODULE_1__["RoomService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_cookie_catcher_service__WEBPACK_IMPORTED_MODULE_2__["CookieCatcherService"])); };
RoomsDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RoomsDetailsComponent, selectors: [["app-rooms-details"]], inputs: { room: "room" }, outputs: { refreshList: "refreshList" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 37, vars: 8, consts: [["class", "alert alert-danger", 4, "ngIf"], ["class", "alert alert-warning", 4, "ngIf"], ["class", "alert alert-success", 4, "ngIf"], [1, "form-group", "row"], ["for", "name", 1, "col-sm-3", "col-form-label"], [1, "col-sm-6"], ["type", "number", "id", "id", "required", "", "name", "id", "placeholder", "\u8ACB\u4E00\u5B9A\u8981\u8CE6\u4E88 \u4F46\u5C0F\u5FC3\u670D\u7528", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "col-sm-3", "btn", "text-warning", "fw-bold", "rounded-2", "border-2", "border-warning", 3, "click"], [1, "col-sm-9"], ["type", "text", "id", "name", "required", "", "name", "name", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "id", "description", "required", "", "rows", "5", "name", "description", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "type", 1, "col-sm-3", "col-form-label"], ["type", "text", "id", "type", "required", "", "name", "type", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "tags", 1, "col-sm-3", "col-form-label"], ["type", "text", "id", "tags", "required", "", "name", "tags", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "btn", "text-success", "fw-bold", "rounded-2", "border-2", "border-success", "m-2", 3, "click"], [1, "btn", "text-danger", "fw-bold", "rounded-2", "border-2", "border-danger", "m-2", 3, "click"], [1, "alert", "alert-danger"], [1, "alert", "alert-warning"], [1, "alert", "alert-success"]], template: function RoomsDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u4FEE\u6539\u8A73\u7D30\u8CC7\u6599");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RoomsDetailsComponent_div_2_Template, 2, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RoomsDetailsComponent_div_3_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, RoomsDetailsComponent_div_4_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RoomsDetailsComponent_Template_input_ngModelChange_9_listener($event) { return ctx.currentRoom.id = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RoomsDetailsComponent_Template_button_click_10_listener() { return ctx.updateRoomforID(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Set ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u540D\u7A31");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RoomsDetailsComponent_Template_input_ngModelChange_16_listener($event) { return ctx.currentRoom.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u8AAA\u660E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "textarea", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RoomsDetailsComponent_Template_textarea_ngModelChange_21_listener($event) { return ctx.currentRoom.description = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\u985E\u578B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RoomsDetailsComponent_Template_input_ngModelChange_27_listener($event) { return ctx.currentRoom.type = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\u6A19\u8A18");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RoomsDetailsComponent_Template_input_ngModelChange_32_listener($event) { return ctx.currentRoom.tags = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RoomsDetailsComponent_Template_button_click_33_listener() { return ctx.updateRoom(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " \u66F4\u65B0\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RoomsDetailsComponent_Template_button_click_35_listener() { return ctx.deleteRoom(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " \u522A\u9664\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.deleteMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.setIDMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.updateMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.currentRoom.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.currentRoom.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.currentRoom.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.currentRoom.type);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.currentRoom.tags);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyb29tcy1kZXRhaWxzLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "q69w":
/*!*******************************************************************!*\
  !*** ./src/app/component-rooms/component-rooms-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: ComponentRoomsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentRoomsRoutingModule", function() { return ComponentRoomsRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth/auth.guard */ "P+IX");
/* harmony import */ var _rooms_add_rooms_add_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rooms-add/rooms-add.component */ "eT7J");
/* harmony import */ var _rooms_use_rooms_use_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rooms-use/rooms-use.component */ "QfMn");
/* harmony import */ var _rooms_view_rooms_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rooms-view/rooms-view.component */ "DQio");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");







const routes = [
    {
        path: '',
        component: _rooms_view_rooms_view_component__WEBPACK_IMPORTED_MODULE_4__["RoomsViewComponent"]
    },
    {
        path: 'add',
        component: _rooms_add_rooms_add_component__WEBPACK_IMPORTED_MODULE_2__["RoomsAddComponent"],
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]]
    },
    {
        path: ':id',
        component: _rooms_use_rooms_use_component__WEBPACK_IMPORTED_MODULE_3__["RoomsUseComponent"]
    }
];
class ComponentRoomsRoutingModule {
}
ComponentRoomsRoutingModule.ɵfac = function ComponentRoomsRoutingModule_Factory(t) { return new (t || ComponentRoomsRoutingModule)(); };
ComponentRoomsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: ComponentRoomsRoutingModule });
ComponentRoomsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](ComponentRoomsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "w80y":
/*!**********************************************************************!*\
  !*** ./src/app/component-rooms/chats-board/chats-board.component.ts ***!
  \**********************************************************************/
/*! exports provided: ChatsBoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatsBoardComponent", function() { return ChatsBoardComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/chat.service */ "sjK5");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




function ChatsBoardComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r1.userName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](5, 3, item_r1.updated_date, "yyyy-MM-dd HH:mm:ss"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r1.content == null ? "\u7121\u6CD5\u8B80\u53D6\u8A0A\u606F" : item_r1.content, " ");
} }
function ChatsBoardComponent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", "\u6211\u81EA\u5DF1", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](5, 3, item_r1.updated_date, "yyyy-MM-dd HH:mm:ss"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r1.content == null ? "\u7121\u6CD5\u8B80\u53D6\u8A0A\u606F" : item_r1.content, " ");
} }
function ChatsBoardComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ChatsBoardComponent_div_0_div_1_Template, 8, 6, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ChatsBoardComponent_div_0_div_2_Template, 8, 6, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r1.userKEY !== ctx_r0.userKey);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r1.userKEY === ctx_r0.userKey);
} }
class ChatsBoardComponent {
    constructor(ChatService) {
        this.ChatService = ChatService;
        this.roomKey = '';
        this.userKey = '';
    }
    ngOnInit() {
    }
    ngOnChanges() {
        if (this.roomKey) {
            this.getChat(this.roomKey);
        }
    }
    getChat(key) {
        this.ChatService.getAll()
            .snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(changes => changes.map(c => (Object.assign({ key: c.payload.key }, c.payload.val())))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => res.filter(r => r.roomKEY === key))).subscribe(data => {
            this.chatData = data;
        });
    }
}
ChatsBoardComponent.ɵfac = function ChatsBoardComponent_Factory(t) { return new (t || ChatsBoardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"])); };
ChatsBoardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ChatsBoardComponent, selectors: [["app-chats-board"]], inputs: { roomKey: "roomKey", userKey: "userKey" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 1, vars: 1, consts: [["class", "roomDIV", 4, "ngFor", "ngForOf"], [1, "roomDIV"], ["class", "msgBOX float-left alert alert-secondary text-left w-auto m-1 p-2", "role", "alert", 4, "ngIf"], ["class", "msgBOX float-right alert alert-primary w-auto m-1 p-2", "role", "alert", 4, "ngIf"], [1, "clearfix"], ["role", "alert", 1, "msgBOX", "float-left", "alert", "alert-secondary", "text-left", "w-auto", "m-1", "p-2"], [1, "font-weight-bold", "m-0", "p-0"], [1, "small"], [1, "m-0", "p-0"], ["role", "alert", 1, "msgBOX", "float-right", "alert", "alert-primary", "w-auto", "m-1", "p-2"]], template: function ChatsBoardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ChatsBoardComponent_div_0_Template, 4, 2, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.chatData);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]], styles: [".roomDIV[_ngcontent-%COMP%]\r\n{\r\n    width: 100%;\r\n    \r\n}\r\n.msgBOX[_ngcontent-%COMP%]\r\n{\r\n    min-width: 40%;\r\n    max-width: 65%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXRzLWJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksV0FBVztJQUNYLGlCQUFpQjtBQUNyQjtBQUNBOztJQUVJLGNBQWM7SUFDZCxjQUFjO0FBQ2xCIiwiZmlsZSI6ImNoYXRzLWJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm9vbURJVlxyXG57XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC8qIGZsb2F0OiBsZWZ0OyAqL1xyXG59XHJcbi5tc2dCT1hcclxue1xyXG4gICAgbWluLXdpZHRoOiA0MCU7XHJcbiAgICBtYXgtd2lkdGg6IDY1JTtcclxufSJdfQ== */"] });


/***/ }),

/***/ "yWY+":
/*!******************************************!*\
  !*** ./src/app/services/room.service.ts ***!
  \******************************************/
/*! exports provided: RoomService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomService", function() { return RoomService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/database */ "sSZD");


class RoomService {
    constructor(db) {
        this.db = db;
        this.db_childPath = '/room';
        this.roomRef = db.list(this.db_childPath);
    }
    // 取得列表中所有資料
    getAll() {
        return this.roomRef;
    }
    // getSingleRoom(key: string): AngularFireList<Room>
    // {
    //     return this.db.list(this.db_childPath + "/" + key);
    // }
    // 新增一列資料
    create(room) {
        return this.roomRef.push(room);
    }
    // 更新資料
    /*
     * @params key->id
     * @params value->update data
     * Promise = 非同步操作
     */
    update(key, value) {
        return this.roomRef.update(key, value);
    }
    // 刪除一列資料
    delete(key) {
        return this.roomRef.remove(key);
    }
    // 刪除所有資料(刪除不帶任何參數)
    deleteAll() {
        return this.roomRef.remove();
    }
}
RoomService.ɵfac = function RoomService_Factory(t) { return new (t || RoomService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"])); };
RoomService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RoomService, factory: RoomService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=component-rooms-component-rooms-module.js.map