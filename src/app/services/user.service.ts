import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Constants } from './constant/constants';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = Constants.baseUrl;
  constructor(private http: HttpClient) {  }

  getUser(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createUser(user: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/users`, user);
  }

  updateUser(user: Object): Observable<Object> {
    return this.http.put(`${this.baseUrl}/users`, user);
  }

  deleteUser(user: Object): Observable<any> {
      return this.http.delete(`${this.baseUrl}/users`,user);
  }

  getUserssList() {
     return this.http.get(`${this.baseUrl}/users`);
  }
}
