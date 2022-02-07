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
import { TrainingAndEmploymentComponent } from './Training-and-Employment/Training-and-Employment.component';
import { NotificationsComponent } from './Notifications/Notifications.component';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './_guards/auth.guard';
import { UserService } from './_services/user.service';
import { ManagerService } from './_services/manager.service';
import { MangerCardComponent } from './Managers/MangerCard/MangerCard.component';
import { ManagerDetailsComponent } from './Managers/ManagerDetails/ManagerDetails.component';



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
      ManagerDetailsComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    TabsModule.forRoot(),
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
    UserService,
    ManagerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
