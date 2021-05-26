(self["webpackChunkwww"] = self["webpackChunkwww"] || []).push([["src_app_component-rooms_component-rooms_module_ts"],{

/***/ 4208:
/*!**********************************************************************!*\
  !*** ./src/app/component-rooms/chats-board/chats-board.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatsBoardComponent": () => (/* binding */ ChatsBoardComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 8002);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/chat.service */ 9014);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8583);




function ChatsBoardComponent_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
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
function ChatsBoardComponent_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
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
function ChatsBoardComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ChatsBoardComponent_div_1_div_1_Template, 8, 6, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ChatsBoardComponent_div_1_div_2_Template, 8, 6, "div", 3);
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
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(changes => changes.map(c => (Object.assign({ key: c.payload.key }, c.payload.val())))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(res => res.filter(r => r.roomKEY === key))).subscribe(data => {
            this.chatData = data;
        });
    }
}
ChatsBoardComponent.ɵfac = function ChatsBoardComponent_Factory(t) { return new (t || ChatsBoardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_0__.ChatService)); };
ChatsBoardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ChatsBoardComponent, selectors: [["app-chats-board"]], inputs: { roomKey: "roomKey", userKey: "userKey" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 2, vars: 1, consts: [["class", "roomDIV", 4, "ngFor", "ngForOf"], [1, "roomDIV"], ["class", "msgBOX float-left alert alert-secondary text-left w-auto m-1 p-2", "role", "alert", 4, "ngIf"], ["class", "msgBOX float-right alert alert-primary w-auto m-1 p-2", "role", "alert", 4, "ngIf"], [1, "clearfix"], ["role", "alert", 1, "msgBOX", "float-left", "alert", "alert-secondary", "text-left", "w-auto", "m-1", "p-2"], [1, "font-weight-bold", "m-0", "p-0"], [1, "small"], [1, "m-0", "p-0"], ["role", "alert", 1, "msgBOX", "float-right", "alert", "alert-primary", "w-auto", "m-1", "p-2"]], template: function ChatsBoardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ChatsBoardComponent_div_1_Template, 4, 2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.chatData);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe], styles: [".roomDIV[_ngcontent-%COMP%]\r\n{\r\n    width: 100%;\r\n    \r\n}\r\n.msgBOX[_ngcontent-%COMP%]\r\n{\r\n    min-width: 40%;\r\n    max-width: 65%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXRzLWJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksV0FBVztJQUNYLGlCQUFpQjtBQUNyQjtBQUNBOztJQUVJLGNBQWM7SUFDZCxjQUFjO0FBQ2xCIiwiZmlsZSI6ImNoYXRzLWJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm9vbURJVlxyXG57XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC8qIGZsb2F0OiBsZWZ0OyAqL1xyXG59XHJcbi5tc2dCT1hcclxue1xyXG4gICAgbWluLXdpZHRoOiA0MCU7XHJcbiAgICBtYXgtd2lkdGg6IDY1JTtcclxufSJdfQ== */"] });


/***/ }),

/***/ 5385:
/*!*******************************************************************!*\
  !*** ./src/app/component-rooms/component-rooms-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentRoomsRoutingModule": () => (/* binding */ ComponentRoomsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auth/auth.guard */ 3870);
/* harmony import */ var _rooms_add_rooms_add_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rooms-add/rooms-add.component */ 5994);
/* harmony import */ var _rooms_use_rooms_use_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rooms-use/rooms-use.component */ 6508);
/* harmony import */ var _rooms_view_rooms_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rooms-view/rooms-view.component */ 7899);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);







const routes = [
    {
        path: '',
        component: _rooms_view_rooms_view_component__WEBPACK_IMPORTED_MODULE_3__.RoomsViewComponent
    },
    {
        path: 'add',
        component: _rooms_add_rooms_add_component__WEBPACK_IMPORTED_MODULE_1__.RoomsAddComponent,
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
    },
    {
        path: ':id',
        component: _rooms_use_rooms_use_component__WEBPACK_IMPORTED_MODULE_2__.RoomsUseComponent
    }
];
class ComponentRoomsRoutingModule {
}
ComponentRoomsRoutingModule.ɵfac = function ComponentRoomsRoutingModule_Factory(t) { return new (t || ComponentRoomsRoutingModule)(); };
ComponentRoomsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: ComponentRoomsRoutingModule });
ComponentRoomsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](ComponentRoomsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] }); })();


/***/ }),

/***/ 5430:
/*!***********************************************************!*\
  !*** ./src/app/component-rooms/component-rooms.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentRoomsModule": () => (/* binding */ ComponentRoomsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _component_rooms_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component-rooms-routing.module */ 5385);
/* harmony import */ var _rooms_view_rooms_view_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rooms-view/rooms-view.component */ 7899);
/* harmony import */ var _rooms_add_rooms_add_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rooms-add/rooms-add.component */ 5994);
/* harmony import */ var _rooms_details_rooms_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rooms-details/rooms-details.component */ 2914);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _rooms_use_rooms_use_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rooms-use/rooms-use.component */ 6508);
/* harmony import */ var _chats_board_chats_board_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chats-board/chats-board.component */ 4208);
/* harmony import */ var _chats_add_chats_add_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chats-add/chats-add.component */ 4835);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);










class ComponentRoomsModule {
}
ComponentRoomsModule.ɵfac = function ComponentRoomsModule_Factory(t) { return new (t || ComponentRoomsModule)(); };
ComponentRoomsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: ComponentRoomsModule });
ComponentRoomsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _component_rooms_routing_module__WEBPACK_IMPORTED_MODULE_0__.ComponentRoomsRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](ComponentRoomsModule, { declarations: [_rooms_view_rooms_view_component__WEBPACK_IMPORTED_MODULE_1__.RoomsViewComponent,
        _rooms_add_rooms_add_component__WEBPACK_IMPORTED_MODULE_2__.RoomsAddComponent,
        _rooms_details_rooms_details_component__WEBPACK_IMPORTED_MODULE_3__.RoomsDetailsComponent,
        _rooms_use_rooms_use_component__WEBPACK_IMPORTED_MODULE_4__.RoomsUseComponent,
        _chats_add_chats_add_component__WEBPACK_IMPORTED_MODULE_6__.ChatsAddComponent,
        _chats_board_chats_board_component__WEBPACK_IMPORTED_MODULE_5__.ChatsBoardComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
        _component_rooms_routing_module__WEBPACK_IMPORTED_MODULE_0__.ComponentRoomsRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule] }); })();


/***/ }),

/***/ 5994:
/*!******************************************************************!*\
  !*** ./src/app/component-rooms/rooms-add/rooms-add.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoomsAddComponent": () => (/* binding */ RoomsAddComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 8002);
/* harmony import */ var src_app_models_room_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/room.model */ 5240);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var src_app_services_room_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/room.service */ 1037);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);






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
        this.room = new src_app_models_room_model__WEBPACK_IMPORTED_MODULE_0__.Room();
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
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(changes => changes.map(c => (Object.assign({ key: c.payload.key }, c.payload.val()))))).subscribe(data => {
            this.RoomRegister = data;
            this.RoomLength = this.RoomRegister.length;
        });
        return Number(this.RoomLength);
    }
}
RoomsAddComponent.ɵfac = function RoomsAddComponent_Factory(t) { return new (t || RoomsAddComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_room_service__WEBPACK_IMPORTED_MODULE_1__.RoomService)); };
RoomsAddComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: RoomsAddComponent, selectors: [["app-rooms-add"]], decls: 25, vars: 5, consts: [["class", "p-3 mb-2 border border-3 rounded-2 border-success bg-light text-success", 4, "ngIf"], [1, "submit-form"], [1, "form-group"], ["for", "name"], ["type", "text", "id", "name", "required", "", "name", "name", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "Content"], ["id", "content", "required", "", "name", "content", "rows", "5", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "Tags"], ["type", "text", "id", "tags", "required", "", "name", "tags", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "type"], ["type", "text", "id", "type", "required", "", "name", "type", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "row", "text-center"], [1, "col-12"], [1, "btn", "btn-success", 3, "click"], [1, "p-3", "mb-2", "border", "border-3", "rounded-2", "border-success", "bg-light", "text-success"]], template: function RoomsAddComponent_Template(rf, ctx) { if (rf & 1) {
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyb29tcy1hZGQuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 2914:
/*!**************************************************************************!*\
  !*** ./src/app/component-rooms/rooms-details/rooms-details.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoomsDetailsComponent": () => (/* binding */ RoomsDetailsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var src_app_services_room_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/room.service */ 1037);
/* harmony import */ var src_app_services_cookie_catcher_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/cookie-catcher.service */ 1140);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);






function RoomsDetailsComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.deleteMessage, "\n");
} }
function RoomsDetailsComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r1.setIDMessage, "\n");
} }
function RoomsDetailsComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r2.updateMessage, "\n");
} }
class RoomsDetailsComponent {
    constructor(RoomService, CookieCatcherService) {
        this.RoomService = RoomService;
        this.CookieCatcherService = CookieCatcherService;
        this.refreshList = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter;
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
RoomsDetailsComponent.ɵfac = function RoomsDetailsComponent_Factory(t) { return new (t || RoomsDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_room_service__WEBPACK_IMPORTED_MODULE_0__.RoomService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_cookie_catcher_service__WEBPACK_IMPORTED_MODULE_1__.CookieCatcherService)); };
RoomsDetailsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: RoomsDetailsComponent, selectors: [["app-rooms-details"]], inputs: { room: "room" }, outputs: { refreshList: "refreshList" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]], decls: 37, vars: 8, consts: [["class", "alert alert-danger", 4, "ngIf"], ["class", "alert alert-warning", 4, "ngIf"], ["class", "alert alert-success", 4, "ngIf"], [1, "form-group", "row"], ["for", "name", 1, "col-sm-3", "col-form-label"], [1, "col-sm-6"], ["type", "number", "id", "id", "required", "", "name", "id", "placeholder", "\u8ACB\u4E00\u5B9A\u8981\u8CE6\u4E88 \u4F46\u5C0F\u5FC3\u670D\u7528", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "col-sm-3", "btn", "text-warning", "fw-bold", "rounded-2", "border-2", "border-warning", 3, "click"], [1, "col-sm-9"], ["type", "text", "id", "name", "required", "", "name", "name", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "id", "description", "required", "", "rows", "5", "name", "description", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "type", 1, "col-sm-3", "col-form-label"], ["type", "text", "id", "type", "required", "", "name", "type", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "tags", 1, "col-sm-3", "col-form-label"], ["type", "text", "id", "tags", "required", "", "name", "tags", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "btn", "text-success", "fw-bold", "rounded-2", "border-2", "border-success", "m-2", 3, "click"], [1, "btn", "text-danger", "fw-bold", "rounded-2", "border-2", "border-danger", "m-2", 3, "click"], [1, "alert", "alert-danger"], [1, "alert", "alert-warning"], [1, "alert", "alert-success"]], template: function RoomsDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u4FEE\u6539\u8A73\u7D30\u8CC7\u6599");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, RoomsDetailsComponent_div_2_Template, 2, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, RoomsDetailsComponent_div_3_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, RoomsDetailsComponent_div_4_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function RoomsDetailsComponent_Template_input_ngModelChange_9_listener($event) { return ctx.currentRoom.id = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RoomsDetailsComponent_Template_button_click_10_listener() { return ctx.updateRoomforID(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, " Set ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "\u540D\u7A31");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function RoomsDetailsComponent_Template_input_ngModelChange_16_listener($event) { return ctx.currentRoom.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "\u8AAA\u660E");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "textarea", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function RoomsDetailsComponent_Template_textarea_ngModelChange_21_listener($event) { return ctx.currentRoom.description = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "\u985E\u578B");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function RoomsDetailsComponent_Template_input_ngModelChange_27_listener($event) { return ctx.currentRoom.type = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "\u6A19\u8A18");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function RoomsDetailsComponent_Template_input_ngModelChange_32_listener($event) { return ctx.currentRoom.tags = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RoomsDetailsComponent_Template_button_click_33_listener() { return ctx.updateRoom(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, " \u66F4\u65B0\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RoomsDetailsComponent_Template_button_click_35_listener() { return ctx.deleteRoom(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, " \u522A\u9664\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.deleteMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.setIDMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.updateMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.currentRoom.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.currentRoom.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.currentRoom.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.currentRoom.type);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.currentRoom.tags);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyb29tcy1kZXRhaWxzLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 6508:
/*!******************************************************************!*\
  !*** ./src/app/component-rooms/rooms-use/rooms-use.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoomsUseComponent": () => (/* binding */ RoomsUseComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 8002);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var src_app_services_room_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/room.service */ 1037);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-cookie-service */ 1584);
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/user.service */ 3071);
/* harmony import */ var src_app_services_cookie_catcher_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/cookie-catcher.service */ 1140);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _chats_board_chats_board_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../chats-board/chats-board.component */ 4208);
/* harmony import */ var _chats_add_chats_add_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../chats-add/chats-add.component */ 4835);










function RoomsUseComponent_div_4_tr_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r4.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r4.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r4.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r4.tags);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r4.people);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r4.messages);
} }
function RoomsUseComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "\u804A\u5929\u5BA4\u6240\u6709\u8CC7\u6599\u5217");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "table", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "KEY");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "NAME");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "DESCRIPTION");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "TYPE");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "TAGS");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "PEOPLE");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "MESSAGES");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](22, RoomsUseComponent_div_4_tr_22_Template, 17, 8, "tr", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r0.roomData);
} }
function RoomsUseComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-chats-add", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("userKey", ctx_r1.userKey)("userNickname", ctx_r1.userNickname)("roomKey", ctx_r1.roomKey);
} }
function RoomsUseComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " \u767B\u5165\u5F8C\u53EF\u4EE5\u767C\u8868\u8A0A\u606F ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
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
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(changes => changes.map(c => (Object.assign({ key: c.payload.key }, c.payload.val())))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(data => data.filter(c => c.key === key)))
            .subscribe(res => {
            this.userData = res;
            this.userNickname = String(this.userData[0].nickname);
            this.userKey = String(this.userData[0].key);
        });
    }
    getSingleRoom() {
        this.paramsID = Number(this.route.snapshot.paramMap.get('id'));
        this.RoomService.getAll().snapshotChanges()
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(changes => changes.map(c => (Object.assign({ key: c.payload.key }, c.payload.val())))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(data => data.filter(c => c.id === this.paramsID)))
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
RoomsUseComponent.ɵfac = function RoomsUseComponent_Factory(t) { return new (t || RoomsUseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_room_service__WEBPACK_IMPORTED_MODULE_0__.RoomService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__.CookieService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_cookie_catcher_service__WEBPACK_IMPORTED_MODULE_2__.CookieCatcherService)); };
RoomsUseComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: RoomsUseComponent, selectors: [["app-rooms-use"]], decls: 11, vars: 7, consts: [[1, "alert", "alert-secondary", "border-2", "border-light", "bordered-2"], [4, "ngIf"], [1, "row", 2, "max-height", "500px", "overflow-y", "scroll"], [3, "roomKey", "userKey"], [1, "row", "h-50"], ["class", "display-6 text-center text-muted p-3", 4, "ngIf"], [1, "clearfix"], [1, "table", "table-dark", "text-center"], [4, "ngFor", "ngForOf"], [3, "userKey", "userNickname", "roomKey"], [1, "display-6", "text-center", "text-muted", "p-3"]], template: function RoomsUseComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, RoomsUseComponent_div_4_Template, 23, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "app-chats-board", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, RoomsUseComponent_div_8_Template, 2, 3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, RoomsUseComponent_div_9_Template, 2, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "div", 6);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx.public.name, " \u804A\u5929\u5BA4");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.public.description, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.admin);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("roomKey", ctx.roomKey)("userKey", ctx.userKey);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.checkLogin());
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.checkLogin());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _chats_board_chats_board_component__WEBPACK_IMPORTED_MODULE_3__.ChatsBoardComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _chats_add_chats_add_component__WEBPACK_IMPORTED_MODULE_4__.ChatsAddComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyb29tcy11c2UuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 7899:
/*!********************************************************************!*\
  !*** ./src/app/component-rooms/rooms-view/rooms-view.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoomsViewComponent": () => (/* binding */ RoomsViewComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 8002);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var src_app_services_room_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/room.service */ 1037);
/* harmony import */ var src_app_services_cookie_catcher_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/cookie-catcher.service */ 1140);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _rooms_details_rooms_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rooms-details/rooms-details.component */ 2914);







function RoomsViewComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " \u65B0\u589E\u8A0E\u8AD6\u5BA4 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function RoomsViewComponent_div_4_button_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " \u8F38\u5165\u91D1\u9470 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function RoomsViewComponent_div_4_div_19_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "app-rooms-details", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("refreshList", function RoomsViewComponent_div_4_div_19_div_1_Template_app_rooms_details_refreshList_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3); return ctx_r7.refreshList(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("room", ctx_r6.currentRoom);
} }
function RoomsViewComponent_div_4_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, RoomsViewComponent_div_4_div_19_div_1_Template, 2, 1, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RoomsViewComponent_div_4_div_19_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); const item_r2 = ctx_r10.$implicit; const i_r3 = ctx_r10.index; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r9.setActiveRoom(item_r2, i_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " \u4FEE\u6539 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", i_r3 == ctx_r5.currentIndex);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("active", i_r3 == ctx_r5.currentIndex);
} }
function RoomsViewComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "|");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "\u52A0\u5165\u804A\u5929");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, RoomsViewComponent_div_4_button_18_Template, 2, 0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, RoomsViewComponent_div_4_div_19_Template, 5, 3, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", item_r2.description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" \u53C3\u52A0\u4EBA\u6578: ", item_r2.people == null ? 0 : item_r2.people, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" \u7E3D\u8A0A\u606F\u6578: ", item_r2.messages == null ? 0 : item_r2.people, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("routerLink", "/room/", item_r2.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", item_r2.privating);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r2.privating);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.root());
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
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(changes => changes.map(c => (Object.assign({ key: c.payload.key }, c.payload.val()))))).subscribe(data => {
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
RoomsViewComponent.ɵfac = function RoomsViewComponent_Factory(t) { return new (t || RoomsViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_room_service__WEBPACK_IMPORTED_MODULE_0__.RoomService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_cookie_catcher_service__WEBPACK_IMPORTED_MODULE_1__.CookieCatcherService)); };
RoomsViewComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: RoomsViewComponent, selectors: [["app-rooms-view"]], decls: 7, vars: 2, consts: [[4, "ngIf"], [1, "mx-auto"], ["class", "container", 4, "ngFor", "ngForOf"], [1, "clearfix"], ["routerLink", "add", 1, "btn", "btn-success"], [1, "container"], [1, "card", "d-block", "float-start", "text-center", "m-3", 2, "width", "30%", "min-height", "250px"], [1, "card-header"], [1, "card-body"], [1, "m-2", "text-muted"], [1, "px-2"], [1, "m-3"], [1, "btn", "btn-primary", "m-1", 3, "routerLink", "disabled"], ["class", "btn btn-warning m-1", 4, "ngIf"], [1, "btn", "btn-warning", "m-1"], [1, "text-right"], [1, "btn", "btn-light", "fw-bold", "border-secondary", 3, "click"], [3, "room", "refreshList"]], template: function RoomsViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\u8A0E\u8AD6\u5BA4");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, RoomsViewComponent_div_2_Template, 3, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, RoomsViewComponent_div_4_Template, 20, 8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "div", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.root());
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.roomData);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _rooms_details_rooms_details_component__WEBPACK_IMPORTED_MODULE_2__.RoomsDetailsComponent], styles: [".roomDiv[_ngcontent-%COMP%]\r\n{\r\n    width: 200px;\r\n    height: 200px;\r\n}\r\np[_ngcontent-%COMP%]\r\n{\r\n    margin: 0;\r\n    padding: 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvb21zLXZpZXcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxZQUFZO0lBQ1osYUFBYTtBQUNqQjtBQUNBOztJQUVJLFNBQVM7SUFDVCxVQUFVO0FBQ2QiLCJmaWxlIjoicm9vbXMtdmlldy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvb21EaXZcclxue1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxufVxyXG5wXHJcbntcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn0iXX0= */"] });


/***/ }),

/***/ 5240:
/*!**************************************!*\
  !*** ./src/app/models/room.model.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Room": () => (/* binding */ Room)
/* harmony export */ });
class Room {
}


/***/ }),

/***/ 1037:
/*!******************************************!*\
  !*** ./src/app/services/room.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoomService": () => (/* binding */ RoomService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/database */ 4134);


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
RoomService.ɵfac = function RoomService_Factory(t) { return new (t || RoomService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_database__WEBPACK_IMPORTED_MODULE_1__.AngularFireDatabase)); };
RoomService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RoomService, factory: RoomService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=src_app_component-rooms_component-rooms_module_ts.js.map