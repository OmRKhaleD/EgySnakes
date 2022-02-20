"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ManagerDetailsComponent = void 0;
var core_1 = require("@angular/core");
var ManagerDetailsComponent = /** @class */ (function () {
    function ManagerDetailsComponent(managerService, alertify, route) {
        this.managerService = managerService;
        this.alertify = alertify;
        this.route = route;
    }
    ManagerDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (data) {
            _this.manager = data['manager'];
        });
        console.log(this.manager);
    };
    ManagerDetailsComponent = __decorate([
        core_1.Component({
            selector: 'app-ManagerDetails',
            templateUrl: './ManagerDetails.component.html',
            styleUrls: ['./ManagerDetails.component.css']
        })
    ], ManagerDetailsComponent);
    return ManagerDetailsComponent;
}());
exports.ManagerDetailsComponent = ManagerDetailsComponent;
