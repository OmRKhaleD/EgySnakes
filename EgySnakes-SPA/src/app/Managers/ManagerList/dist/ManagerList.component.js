"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ManagerListComponent = void 0;
var core_1 = require("@angular/core");
var ManagerListComponent = /** @class */ (function () {
    function ManagerListComponent(managerSerivce, alertify, route) {
        this.managerSerivce = managerSerivce;
        this.alertify = alertify;
        this.route = route;
    }
    ManagerListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (data) {
            _this.managers = data['managers'];
        });
        console.log(this.managers);
    };
    ManagerListComponent = __decorate([
        core_1.Component({
            selector: 'app-ManagerList',
            templateUrl: './ManagerList.component.html',
            styleUrls: ['./ManagerList.component.css']
        })
    ], ManagerListComponent);
    return ManagerListComponent;
}());
exports.ManagerListComponent = ManagerListComponent;
