import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { City } from '../_models/City';
import { Town } from '../_models/Town';

@Injectable({
  providedIn: 'root'
})
export class CityTownService {

baseUrl = environment.apiUrl;
constructor(private http: HttpClient) { }
getCities(): Observable<City[]> {
  return this.http.get<City[]>(this.baseUrl + 'values');
}
getTowns(id): Observable<Town[]> {
  return this.http.get<Town[]>(this.baseUrl + 'values/' + id);
}
}
