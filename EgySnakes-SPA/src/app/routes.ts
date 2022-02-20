import { Routes } from '@angular/router';
import { CityTownComponent } from './CityTown/CityTown.component';
import { HomeComponent } from './Home/Home.component';
import { ManagerDetailsComponent } from './Managers/ManagerDetails/ManagerDetails.component';
import { ManagerEditComponent } from './managers/ManagerEdit/ManagerEdit.component';
import { ManagerListComponent } from './managers/ManagerList/ManagerList.component';
import { NotificationsComponent } from './Notifications/Notifications.component';
import { TrainingAndEmploymentComponent } from './Training-and-Employment/Training-and-Employment.component';
import { AuthGuard } from './_guards/auth.guard';
import { PreventUnsavedChanges } from './_guards/prevent-unsaved-changes.guard';
import { CityResolver } from './_resolvers/city.resolver';
import { ManagerDetailsResolver } from './_resolvers/managerDetail.resolver';
import { ManagerEditResolver } from './_resolvers/managerEdit.resolver';
import { ManagerListResolver } from './_resolvers/managerList.resolver';
import { TownResolver } from './_resolvers/town.resolver';

export const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            {path: 'ManagerList', component: ManagerListComponent, resolve: {managers: ManagerListResolver}},
            {path: 'ManagerList/:id', component: ManagerDetailsComponent, resolve: {manager: ManagerDetailsResolver}},
            {path: 'ManagerEdit', component: ManagerEditComponent,
                canDeactivate: [PreventUnsavedChanges],
                 resolve: {user: ManagerEditResolver, cities: CityResolver, towns: TownResolver}},
            {path: 'Cities', component: CityTownComponent, resolve: {cities: CityResolver}},
            {path: 'trainingAndEmployment', component: TrainingAndEmploymentComponent},
            {path: 'notifications', component: NotificationsComponent}
        ]
    },
    {path: '**', redirectTo: '', pathMatch: 'full'}
];
