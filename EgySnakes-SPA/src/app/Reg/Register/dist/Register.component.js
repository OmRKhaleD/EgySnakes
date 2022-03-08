"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.RegisterComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(authService, alertify) {
        this.authService = authService;
        this.alertify = alertify;
        this.cancelRegister = new core_1.EventEmitter();
        this.model = {};
        this.username = {};
        this.xxx = false;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.registerForm = new forms_1.FormGroup({
            username: new forms_1.FormControl('', forms_1.Validators.required),
            password: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.minLength(8), forms_1.Validators.maxLength(8)]),
            confirmPassword: new forms_1.FormControl('', forms_1.Validators.required)
        }, this.paswwordMatchValidator);
    };
    RegisterComponent.prototype.paswwordMatchValidator = function (g) {
        return g.get('password').value === g.get('confirmPassword').value ? null : { 'mismatch': true };
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        /* this.authService.register(this.model).subscribe(() => {
           this.alertify.success('registration successful');
         }, error => {
           this.alertify.error(error);
         });*/
        this.username.username = this.registerForm.get('username').value;
        this.authService.userExists(this.username).subscribe(function (next) {
            _this.xxx = _this.authService.userExistsBool;
        });
    };
    RegisterComponent.prototype.cancel = function () {
        this.cancelRegister.emit(false);
    };
    __decorate([
        core_1.Output()
    ], RegisterComponent.prototype, "cancelRegister");
    RegisterComponent = __decorate([
        core_1.Component({
            selector: 'app-Register',
            templateUrl: './Register.component.html',
            styleUrls: ['./Register.component.css']
        })
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
