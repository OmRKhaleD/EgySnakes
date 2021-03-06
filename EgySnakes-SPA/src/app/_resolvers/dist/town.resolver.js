"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TownResolver = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var TownResolver = /** @class */ (function () {
    function TownResolver(townServices, router, alertify) {
        this.townServices = townServices;
        this.router = router;
        this.alertify = alertify;
    }
    TownResolver.prototype.resolve = function (route) {
        var _this = this;
        return this.townServices.getTowns(1).pipe(operators_1.catchError(function (error) {
            _this.alertify.error('Problem Retriving Data');
            _this.router.navigate(['/ManagerList']);
            return rxjs_1.of(null);
        }));
    };
    TownResolver = __decorate([
        core_1.Injectable()
    ], TownResolver);
    return TownResolver;
}());
exports.TownResolver = TownResolver;
