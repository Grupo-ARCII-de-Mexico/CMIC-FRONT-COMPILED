"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_registro_registro_module_ts"],{

/***/ 2628:
/*!***********************************************************!*\
  !*** ./src/app/pages/registro/registro-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RegistroPageRoutingModule: () => (/* binding */ RegistroPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _registro_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registro.page */ 1375);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;




const routes = [{
  path: '',
  component: _registro_page__WEBPACK_IMPORTED_MODULE_0__.RegistroPage
}];
class RegistroPageRoutingModule {}
_class = RegistroPageRoutingModule;
_class.ɵfac = function RegistroPageRoutingModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](RegistroPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 5095:
/*!***************************************************!*\
  !*** ./src/app/pages/registro/registro.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RegistroPageModule: () => (/* binding */ RegistroPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 4210);
/* harmony import */ var _registro_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registro-routing.module */ 2628);
/* harmony import */ var _registro_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registro.page */ 1375);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;






class RegistroPageModule {}
_class = RegistroPageModule;
_class.ɵfac = function RegistroPageModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _registro_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegistroPageRoutingModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](RegistroPageModule, {
    declarations: [_registro_page__WEBPACK_IMPORTED_MODULE_1__.RegistroPage],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _registro_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegistroPageRoutingModule]
  });
})();

/***/ }),

/***/ 1375:
/*!*************************************************!*\
  !*** ./src/app/pages/registro/registro.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RegistroPage: () => (/* binding */ RegistroPage)
/* harmony export */ });
/* harmony import */ var C_Users_darka_OneDrive_Documentos_PRIVADOS_generic_admin_system_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 2389);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 274);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 3738);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_shared_tools_loading_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/tools/loading.service */ 7153);
/* harmony import */ var src_app_shared_tools_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/tools/toast.service */ 5428);
/* harmony import */ var src_app_shared_services_generic_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/generic-service */ 930);
/* harmony import */ var src_app_shared_services_error_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/error.service */ 1328);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 8048);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 4210);

var _class;










class RegistroPage {
  constructor(fb, loading, toast, genericService, errorService, navController) {
    this.fb = fb;
    this.loading = loading;
    this.toast = toast;
    this.genericService = genericService;
    this.errorService = errorService;
    this.navController = navController;
  }
  ngOnInit() {
    this.registerForm = this.fb.group({
      names: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]
    });
    this.loading.setData({
      animated: true,
      backdropDismiss: false,
      message: 'Iniciando Sesión',
      spinner: 'crescent'
    });
  }
  register() {
    var _this = this;
    return (0,C_Users_darka_OneDrive_Documentos_PRIVADOS_generic_admin_system_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.loading.create();
      yield _this.loading.show();
      _this.genericService.post('user', _this.registerForm.value).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)( /*#__PURE__*/function () {
        var _ref = (0,C_Users_darka_OneDrive_Documentos_PRIVADOS_generic_admin_system_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (error) {
          yield _this.errorService.catchError(error);
          return {
            user: {
              names: ''
            },
            jwt: 'undefined'
          };
        });
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(_this.errorService.next), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.tap)( /*#__PURE__*/function () {
        var _ref2 = (0,C_Users_darka_OneDrive_Documentos_PRIVADOS_generic_admin_system_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* ({
          user,
          jwt
        }) {
          _this.toast.setData({
            message: 'Bienvenido: ' + user.names,
            duration: 3000,
            color: 'success'
          });
          yield _this.loading.show();
          localStorage.setItem(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.jwt, jwt);
          _this.navController.navigateForward("/dashboard", {
            animated: true
          });
        });
        return function (_x2) {
          return _ref2.apply(this, arguments);
        };
      }())).subscribe();
    })();
  }
}
_class = RegistroPage;
_class.ɵfac = function RegistroPage_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_shared_tools_loading_service__WEBPACK_IMPORTED_MODULE_2__.LoadingService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_shared_tools_toast_service__WEBPACK_IMPORTED_MODULE_3__.ToastService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_shared_services_generic_service__WEBPACK_IMPORTED_MODULE_4__.GenericService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_shared_services_error_service__WEBPACK_IMPORTED_MODULE_5__.ErrorService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_11__.NavController));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-registro"]],
  decls: 16,
  vars: 3,
  consts: [[3, "fullscreen"], [1, "h-100", "d-flex", "fondo"], ["mode", "ios", 1, "m-auto"], [1, "d-flex"], ["src", "https://neixtmedia.com/assets/img/Logotipo.png", 1, "img-fluid", "mx-auto"], [3, "formGroup", "ngSubmit"], ["label", "Nombre", "labelPlacement", "floating", "required", "", "formControlName", "names", "type", "text"], ["label", "Correo", "labelPlacement", "floating", "required", "", "formControlName", "email", "type", "text"], ["label", "Contrase\u00F1a", "labelPlacement", "floating", "required", "", "formControlName", "password", "type", "text"], [1, "d-flex", "my-3"], ["block", "", "color", "primary", "shape", "round", "type", "submit", 1, "mx-auto", 3, "disabled"]],
  template: function RegistroPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ion-content", 0)(1, "div", 1)(2, "ion-card", 2)(3, "ion-card-header", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "ion-img", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "ion-card-content")(6, "form", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngSubmit", function RegistroPage_Template_form_ngSubmit_6_listener() {
        return ctx.register();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "ion-item");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](8, "ion-input", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "ion-item");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](10, "ion-input", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "ion-item");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](12, "ion-input", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "div", 9)(14, "ion-button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](15, " Registrarse ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("fullscreen", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formGroup", ctx.registerForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", ctx.registerForm.invalid);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonCardContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonCardHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonImg, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.TextValueAccessor],
  styles: ["ion-img[_ngcontent-%COMP%] {\n  width: 200px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvcmVnaXN0cm8vcmVnaXN0cm8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWltZ3tcclxuICAgIHdpZHRoOiAyMDBweDtcclxufVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ })

}]);
//# sourceMappingURL=src_app_pages_registro_registro_module_ts.js.map