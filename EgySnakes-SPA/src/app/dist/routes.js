"use strict";
exports.__esModule = true;
exports.appRoutes = void 0;
var CityTown_component_1 = require("./CityTown/CityTown.component");
var Home_component_1 = require("./Home/Home.component");
var ManagerDetails_component_1 = require("./Managers/ManagerDetails/ManagerDetails.component");
var ManagerEdit_component_1 = require("./managers/ManagerEdit/ManagerEdit.component");
var ManagerList_component_1 = require("./managers/ManagerList/ManagerList.component");
var Notifications_component_1 = require("./Notifications/Notifications.component");
var Training_and_Employment_component_1 = require("./Training-and-Employment/Training-and-Employment.component");
var auth_guard_1 = require("./_guards/auth.guard");
var prevent_unsaved_changes_guard_1 = require("./_guards/prevent-unsaved-changes.guard");
var city_resolver_1 = require("./_resolvers/city.resolver");
var managerDetail_resolver_1 = require("./_resolvers/managerDetail.resolver");
var managerEdit_resolver_1 = require("./_resolvers/managerEdit.resolver");
var managerList_resolver_1 = require("./_resolvers/managerList.resolver");
var town_resolver_1 = require("./_resolvers/town.resolver");
exports.appRoutes = [
    { path: '', component: Home_component_1.HomeComponent },
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [auth_guard_1.AuthGuard],
        children: [
            { path: 'ManagerList', component: ManagerList_component_1.ManagerListComponent, resolve: { managers: managerList_resolver_1.ManagerListResolver } },
            { path: 'ManagerList/:id', component: ManagerDetails_component_1.ManagerDetailsComponent, resolve: { manager: managerDetail_resolver_1.ManagerDetailsResolver } },
            { path: 'ManagerEdit', component: ManagerEdit_component_1.ManagerEditComponent,
                canDeactivate: [prevent_unsaved_changes_guard_1.PreventUnsavedChanges],
                resolve: { user: managerEdit_resolver_1.ManagerEditResolver, cities: city_resolver_1.CityResolver, towns: town_resolver_1.TownResolver } },
            { path: 'Cities', component: CityTown_component_1.CityTownComponent, resolve: { cities: city_resolver_1.CityResolver } },
            { path: 'trainingAndEmployment', component: Training_and_Employment_component_1.TrainingAndEmploymentComponent },
            { path: 'notifications', component: Notifications_component_1.NotificationsComponent }
        ]
    },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
