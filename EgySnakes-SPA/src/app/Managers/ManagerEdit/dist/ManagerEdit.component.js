"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ManagerEditComponent = void 0;
var core_1 = require("@angular/core");
var ManagerEditComponent = /** @class */ (function () {
    function ManagerEditComponent(route, cityTownService, alertify, userService, authService) {
        this.route = route;
        this.cityTownService = cityTownService;
        this.alertify = alertify;
        this.userService = userService;
        this.authService = authService;
    }
    ManagerEditComponent.prototype.unloadnotification = function ($event) {
        if (this.editForm1.dirty || this.edit2form.dirty || this.edit3form.dirty) {
            $event.returnValue = true;
        }
    };
    ManagerEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (data) {
            _this.user = data['user'];
            _this.cities = data['cities'];
            _this.towns = data['towns'];
        });
    };
    ManagerEditComponent.prototype.updateCity = function () {
        this.loadTowns(this.user.city.id);
    };
    ManagerEditComponent.prototype.updateCityM = function () {
        this.loadTowns(this.user.managers.city.id);
    };
    ManagerEditComponent.prototype.loadTowns = function (value) {
        var _this = this;
        this.cityTownService.getTowns(value).subscribe(function (town) {
            _this.towns = town;
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    ManagerEditComponent.prototype.updateUser = function () {
        var _this = this;
        this.user.cityId = this.user.city.id;
        this.user.townId = this.user.town.id;
        this.userService.updateUser(this.authService.decodedToken.nameid, this.user).subscribe(function (next) {
            console.log(_this.user);
            _this.alertify.success("Profile updated Successfuly");
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    ManagerEditComponent.prototype.updateSocial = function () {
        var _this = this;
        this.userService.updateSocial(this.authService.decodedToken.nameid, this.user.socialLinks).subscribe(function (next) {
            console.log(_this.user.socialLinks);
            _this.alertify.success("Profile updated Successfuly");
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    ManagerEditComponent.prototype.updateManager = function () {
        var _this = this;
        this.user.managers.cityId = this.user.managers.city.id;
        this.user.managers.townId = this.user.managers.town.id;
        this.userService.updateManager(this.authService.decodedToken.nameid, this.user.managers).subscribe(function (next) {
            console.log(_this.user.managers);
            _this.alertify.success("Profile updated Successfuly");
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    __decorate([
        core_1.ViewChild('editForm1')
    ], ManagerEditComponent.prototype, "editForm1");
    __decorate([
        core_1.ViewChild('edit2form')
    ], ManagerEditComponent.prototype, "edit2form");
    __decorate([
        core_1.ViewChild('edit3form')
    ], ManagerEditComponent.prototype, "edit3form");
    __decorate([
        core_1.HostListener('window:beforeunload', ['$event'])
    ], ManagerEditComponent.prototype, "unloadnotification");
    ManagerEditComponent = __decorate([
        core_1.Component({
            selector: 'app-ManagerEdit',
            templateUrl: './ManagerEdit.component.html',
            styleUrls: ['./ManagerEdit.component.css']
        })
    ], ManagerEditComponent);
    return ManagerEditComponent;
}());
exports.ManagerEditComponent = ManagerEditComponent;
