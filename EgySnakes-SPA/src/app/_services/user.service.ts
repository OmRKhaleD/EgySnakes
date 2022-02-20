import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Manager } from '../_models/Manager';
import { SocialLinks } from '../_models/SocialLinks';
import { User } from '../_models/User';
import { ManagerService } from './manager.service';

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
    return this.http.get<User>(this.baseUrl + 'user/' + id);
  }
  updateUser(id: number, user: User) {
    return this.http.put(this.baseUrl + 'user/' + id, user);
  }
  updateSocial(id, socail: SocialLinks) {
    return this.http.put(this.baseUrl + 'socail/' + id, socail);
  }
  updateManager(id, manager: Manager) {
    return this.http.put(this.baseUrl + 'manager/' + id, manager);
  }
}
