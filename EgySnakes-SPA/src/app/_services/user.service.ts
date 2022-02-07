import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../_models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
baseUrl = environment.apiUrl;
constructor(private http: HttpClient) { }
getUsers(): Observable<User[]> {
  return this.http.get<User[]>(this.baseUrl + 'user');
}
getUser(id): Observable<User> {
  return this.http.get<User>(this.baseUrl + 'user' + id);
}
}