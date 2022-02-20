import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { JwtModule } from '@auth0/angular-jwt';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import {TabsModule } from 'ngx-bootstrap/tabs';
import { appRoutes } from './routes';

import { AppComponent } from './app.component';
import { NavComponent } from './Nav/Nav.component';
import {AuthService} from './_services/auth.service';
import { HomeComponent } from './Home/Home.component';
import { RegisterComponent } from './Register/Register.component';
import { ErrorInterceptorProvider } from './_services/error.interceptor';
import { AlertifyService } from './_services/alertify.service';
import { ManagerListComponent } from './managers/ManagerList/ManagerList.component';
import { ManagerEditComponent } from './managers/ManagerEdit/ManagerEdit.component';
import { TrainingAndEmploymentComponent } from './Training-and-Employment/Training-and-Employment.component';
import { NotificationsComponent } from './Notifications/Notifications.component';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './_guards/auth.guard';
import { UserService } from './_services/user.service';
import { ManagerService } from './_services/manager.service';
import { MangerCardComponent } from './Managers/MangerCard/MangerCard.component';
import { ManagerDetailsComponent } from './Managers/ManagerDetails/ManagerDetails.component';
import { ManagerDetailsResolver } from './_resolvers/managerDetail.resolver';
import { ManagerListResolver } from './_resolvers/managerList.resolver';
import { NgxGalleryModule } from 'ngx-gallery';
import { ManagerEditResolver } from './_resolvers/managerEdit.resolver';
import { CityTownService } from './_services/cityTown.service';
import { CityTownComponent } from './CityTown/CityTown.component';
import { CityResolver } from './_resolvers/city.resolver';
import { TownResolver } from './_resolvers/town.resolver';
import { PreventUnsavedChanges } from './_guards/prevent-unsaved-changes.guard';



export function tokenGetter(){
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [	
    AppComponent,
      NavComponent,
      HomeComponent,
      RegisterComponent,
      ManagerListComponent,
      TrainingAndEmploymentComponent,
      NotificationsComponent,
      MangerCardComponent,
      ManagerDetailsComponent,
      ManagerEditComponent,
      CityTownComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    NgxGalleryModule,
    RouterModule.forRoot(appRoutes),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:5000'],
        blacklistedRoutes: ['localhost:5000/api/auth/']
      }
    })
  ],
  providers: [AuthService,
    ErrorInterceptorProvider,
    AlertifyService,
    AuthGuard,
    PreventUnsavedChanges,
    UserService,
    ManagerService,
    CityTownService,
    ManagerDetailsResolver,
    ManagerListResolver,
    ManagerEditResolver,
    CityResolver,
    TownResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
