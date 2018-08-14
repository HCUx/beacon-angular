import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { User } from '../model/user';
import { Location } from '../model/location';
import { Userlocation } from '../model/userlocation';

@Injectable()
export class UserLocationService {

  constructor(private http: HttpClient) { }

  getUsersLocation(id: number) {
    return this.http.get<any>(`${environment.apiUrl}/findUserLocation`);
  }

  getLocationsUser(id: number) {
    return this.http.get<any>(`${environment.apiUrl}/locationsusers/` + id);
  }

  /*register(user: User) {
    return this.http.post<User>(`${environment.apiUrl}/users/register`, user);
  }

  update(user: User) {
    return this.http.put<User>(`${environment.apiUrl}/users/` + user._id, user);
  }

  delete(username: string) {
    return this.http.delete<any>(`${environment.apiUrl}/users/` + username);
  }*/
}
