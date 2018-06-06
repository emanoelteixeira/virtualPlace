webpackJsonp([0],{

/***/ 494:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetarsenhaPageModule", function() { return ResetarsenhaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__resetarsenha__ = __webpack_require__(497);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ResetarsenhaPageModule = /** @class */ (function () {
    function ResetarsenhaPageModule() {
    }
    ResetarsenhaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__resetarsenha__["a" /* ResetarsenhaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__resetarsenha__["a" /* ResetarsenhaPage */]),
            ],
        })
    ], ResetarsenhaPageModule);
    return ResetarsenhaPageModule;
}());

//# sourceMappingURL=resetarsenha.module.js.map

/***/ }),

/***/ 497:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetarsenhaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth_service__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ResetarsenhaPage = /** @class */ (function () {
    function ResetarsenhaPage(navCtrl, navParams, formBuilder, toastCtrl, authService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.toastCtrl = toastCtrl;
        this.authService = authService;
        this.user = {};
        this.createForm();
    }
    ResetarsenhaPage.prototype.createForm = function () {
        this.form = this.formBuilder.group({
            key: [this.user.key],
            email: [this.user.email, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]
        });
    };
    ResetarsenhaPage.prototype.resetaSenha = function () {
        var _this = this;
        if (this.form.valid) {
            this.authService.resetarSenha(this.form.value.email)
                .then(function () {
                _this.toastCtrl.create({ message: 'Solicitação enviada para o email!', duration: 3000 }).present();
                _this.navCtrl.pop();
            })
                .catch(function (error) {
                if (error.code == 'auth/invalid-email') {
                    _this.toastCtrl.create({ message: 'Email não é valido!', duration: 3000 }).present();
                }
                else if (error.code == 'auth/user-not-found') {
                    _this.toastCtrl.create({ message: 'Email não encontrado!', duration: 3000 }).present();
                }
            });
        }
    };
    ResetarsenhaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-resetarsenha',template:/*ion-inline-start:"/home/lucasemanoel/projetos/virtualPlace/src/pages/resetarsenha/resetarsenha.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Resetar Senha</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <form [formGroup]="form">\n    <ion-item>\n      <ion-label stacked>Email</ion-label>\n      <ion-input type="text" formControlName="email"></ion-input>\n    </ion-item>\n    <ion-item *ngIf="!form.controls.email.valid && (form.controls.email.dirty || form.controls.email.touched)" color="danger">\n      <div [hidden]="!form.controls.email.errors.required">\n        O Campo é obrigatório\n      </div>\n    </ion-item>\n    <div padding>\n      <button ion-button block type="submit" [disabled]="!form.valid" (click)="resetaSenha()">Enviar Email</button>\n    </div>\n  </form>\n\n</ion-content>'/*ion-inline-end:"/home/lucasemanoel/projetos/virtualPlace/src/pages/resetarsenha/resetarsenha.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth_service__["a" /* AuthService */]])
    ], ResetarsenhaPage);
    return ResetarsenhaPage;
}());

//# sourceMappingURL=resetarsenha.js.map

/***/ })

});
//# sourceMappingURL=0.js.map