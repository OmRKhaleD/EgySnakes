import { Routes } from '@angular/router';
import { HomeComponent } from './Home/Home.component';
import { LicensesComponent } from './Licenses/Licenses.component';
import { NotificationsComponent } from './Notifications/Notifications.component';
import { TrainingAndEmploymentComponent } from './Training-and-Employment/Training-and-Employment.component';
import { AuthGuard } from './_guards/auth.guard';

export const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            {path: 'licenses', component: LicensesComponent},
            {path: 'trainingAndEmployment', component: TrainingAndEmploymentComponent},
            {path: 'notifications', component: NotificationsComponent}
        ]
    },
    {path: '**', redirectTo: '', pathMatch: 'full'}
];
