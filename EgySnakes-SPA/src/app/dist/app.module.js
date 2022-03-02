"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = exports.tokenGetter = void 0;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var forms_1 = require("@angular/forms");
var angular_jwt_1 = require("@auth0/angular-jwt");
var dropdown_1 = require("ngx-bootstrap/dropdown");
var tabs_1 = require("ngx-bootstrap/tabs");
var routes_1 = require("./routes");
var app_component_1 = require("./app.component");
var Nav_component_1 = require("./Nav/Nav.component");
var auth_service_1 = require("./_services/auth.service");
var Home_component_1 = require("./Home/Home.component");
var Register_component_1 = require("./Register/Register.component");
var error_interceptor_1 = require("./_services/error.interceptor");
var alertify_service_1 = require("./_services/alertify.service");
var ManagerList_component_1 = require("./managers/ManagerList/ManagerList.component");
var ManagerEdit_component_1 = require("./managers/ManagerEdit/ManagerEdit.component");
var Training_and_Employment_component_1 = require("./Training-and-Employment/Training-and-Employment.component");
var Notifications_component_1 = require("./Notifications/Notifications.component");
var router_1 = require("@angular/router");
var auth_guard_1 = require("./_guards/auth.guard");
var user_service_1 = require("./_services/user.service");
var manager_service_1 = require("./_services/manager.service");
var MangerCard_component_1 = require("./Managers/MangerCard/MangerCard.component");
var ManagerDetails_component_1 = require("./Managers/ManagerDetails/ManagerDetails.component");
var managerDetail_resolver_1 = require("./_resolvers/managerDetail.resolver");
var managerList_resolver_1 = require("./_resolvers/managerList.resolver");
var ngx_gallery_1 = require("ngx-gallery");
var managerEdit_resolver_1 = require("./_resolvers/managerEdit.resolver");
var cityTown_service_1 = require("./_services/cityTown.service");
var CityTown_component_1 = require("./CityTown/CityTown.component");
var city_resolver_1 = require("./_resolvers/city.resolver");
var town_resolver_1 = require("./_resolvers/town.resolver");
var prevent_unsaved_changes_guard_1 = require("./_guards/prevent-unsaved-changes.guard");
var UserPhotoEditor_component_1 = require("./Managers/UserPhotoEditor/UserPhotoEditor.component");
var ng2_file_upload_1 = require("ng2-file-upload");
function tokenGetter() {
    return localStorage.getItem('token');
}
exports.tokenGetter = tokenGetter;
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                Nav_component_1.NavComponent,
                Home_component_1.HomeComponent,
                Register_component_1.RegisterComponent,
                ManagerList_component_1.ManagerListComponent,
                Training_and_Employment_component_1.TrainingAndEmploymentComponent,
                Notifications_component_1.NotificationsComponent,
                MangerCard_component_1.MangerCardComponent,
                ManagerDetails_component_1.ManagerDetailsComponent,
                ManagerEdit_component_1.ManagerEditComponent,
                CityTown_component_1.CityTownComponent,
                UserPhotoEditor_component_1.UserPhotoEditorComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpClientModule,
                forms_1.FormsModule,
                ng2_file_upload_1.FileUploadModule,
                dropdown_1.BsDropdownModule.forRoot(),
                tabs_1.TabsModule.forRoot(),
                ngx_gallery_1.NgxGalleryModule,
                router_1.RouterModule.forRoot(routes_1.appRoutes),
                angular_jwt_1.JwtModule.forRoot({
                    config: {
                        tokenGetter: tokenGetter,
                        whitelistedDomains: ['localhost:5000'],
                        blacklistedRoutes: ['localhost:5000/api/auth/']
                    }
                })
            ],
            providers: [auth_service_1.AuthService,
                error_interceptor_1.ErrorInterceptorProvider,
                alertify_service_1.AlertifyService,
                auth_guard_1.AuthGuard,
                prevent_unsaved_changes_guard_1.PreventUnsavedChanges,
                user_service_1.UserService,
                manager_service_1.ManagerService,
                cityTown_service_1.CityTownService,
                managerDetail_resolver_1.ManagerDetailsResolver,
                managerList_resolver_1.ManagerListResolver,
                managerEdit_resolver_1.ManagerEditResolver,
                city_resolver_1.CityResolver,
                town_resolver_1.TownResolver
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
