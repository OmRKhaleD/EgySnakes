import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { City } from '../_models/City';
import { Manager } from '../_models/Manager';
import { Town } from '../_models/Town';
import { AlertifyService } from '../_services/alertify.service';
import { CityTownService } from '../_services/cityTown.service';

@Injectable()
export class TownResolver implements Resolve<Town[]> {
    constructor(private townServices: CityTownService, private router: Router, private alertify: AlertifyService) {}

    resolve (route: ActivatedRouteSnapshot): Observable<Town[]> {
        return this.townServices.getTowns(1).pipe(
            catchError(error => {
                this.alertify.error('Problem Retriving Data');
                this.router.navigate(['/ManagerList']);
                return of(null);
            })
        );
    }
}
