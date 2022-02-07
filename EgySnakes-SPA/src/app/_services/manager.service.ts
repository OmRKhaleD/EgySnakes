import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Manager } from '../_models/Manager';


@Injectable({
  providedIn: 'root'
})
export class ManagerService {
  baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }
  getManagers(): Observable<Manager[]> {
    return this.http.get<Manager[]>(this.baseUrl + 'manager');
  }
  getManager(id): Observable<Manager> {
    return this.http.get<Manager>(this.baseUrl + 'manager/' + id);
  }
  
}
