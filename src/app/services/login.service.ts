import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {JwtHelperService} from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { Constants } from './constant/constants';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseUrl = Constants.baseLink;
  jwt: string;
  username: string;
  user: Usern;
  roles: Array<string>;
  constructor(private http: HttpClient,private router: Router) { }
   headers = { 'content-type' : 'application/json' };


  login(data) {
    return this.http.post(this.baseUrl + '/login', data, { observe: 'response'});
  }

  loadPreferences() {
    return this.http.post(this.baseUrl + '/test/preference', JSON.stringify(this.user), { headers: this.headers , observe: 'response'});
  }
  saveToken(jwt: string) {
    // console.log(jwt);
    localStorage.setItem('token', jwt);
    this.jwt = jwt;
    this.parseJwt();
  }
  parseJwt() {
    let jwtHelper = new JwtHelperService();
    let objJWT = jwtHelper.decodeToken(this.jwt);
    this.username = objJWT.sub;
    this.user = objJWT.sub;
    //console.log(objJWT.exp.toDate());
    localStorage.setItem('username', objJWT.sub);
    this.roles = objJWT.roles;
    this.loadPreferences().subscribe(r => {
      localStorage.setItem('prefs', JSON.stringify(r.body) )
    });
  }
  isAdmin() {
    return this.roles.indexOf('ADMIN') >= 0;
  }
  isUser() {
    return this.roles.indexOf('USER') >= 0;
  }
  isAuthenticated() {
    return this.roles && (this.isUser() || this.isAdmin());
  }
  loadToken() {
    if (localStorage.getItem("token") === null) {
        this.router.navigateByUrl('/login');
    }
    this.jwt = localStorage.getItem('token');
    this.parseJwt();
  }
  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.removeItem('user');
    localStorage.removeItem('prefs');
    this.initParams();
  }
  initParams(){
    this.jwt=undefined;
    this.username=undefined;
    this.roles=undefined;
  }

}
interface Usern {
  username: string;
}
