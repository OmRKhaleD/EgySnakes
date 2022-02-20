import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { City } from '../_models/City';
import { AlertifyService } from '../_services/alertify.service';
import { CityTownService } from '../_services/cityTown.service';

@Injectable()
export class CityResolver implements Resolve<City[]> {
    constructor(private cityServices: CityTownService, private router: Router, private alertify: AlertifyService) {}

    resolve (route: ActivatedRouteSnapshot): Observable<City[]> {
        return this.cityServices.getCities().pipe(
            catchError(error => {
                this.alertify.error('Problem Retriving Data');
                this.router.navigate(['/ManagerList']);
                return of(null);
            })
        );
    }
}
