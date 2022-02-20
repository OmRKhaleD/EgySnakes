import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Manager } from '../_models/Manager';
import { AlertifyService } from '../_services/alertify.service';
import { ManagerService } from '../_services/manager.service';

@Injectable()
export class ManagerListResolver implements Resolve<Manager[]> {
    constructor(private managerService: ManagerService, private router: Router, private alertify: AlertifyService) {}

    resolve (route: ActivatedRouteSnapshot): Observable<Manager[]> {
        return this.managerService.getManagers().pipe(
            catchError(error => {
                this.alertify.error('Problem Retriving Data');
                this.router.navigate(['/home']);
                return of(null);
            })
        );
    }
}
