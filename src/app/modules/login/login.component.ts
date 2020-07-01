import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../services/login.service';
import {Router} from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private auth: LoginService, private router: Router,private snackBar: MatSnackBar) { }

  ngOnInit() {
  }
  onLogin(data) {
    console.log(data);
    this.auth.login(data).subscribe(
      resp => {
        // console.log(resp.headers.get('authorization'));
        const jwt = resp.headers.get('authorization');
        this.auth.saveToken(jwt.substr(7));
        this.router.navigateByUrl('/');
      },
      err => {
        this.openSnackBar();
        console.log(err);
      });
  }
  isAdmin() {
    return this.auth.isAdmin();
  }
  isUser() {
    return this.auth.isUser();
  }
  openSnackBar() {
    this.snackBar.open('login failed ! please retry', 'dismiss', {
      verticalPosition: 'top'
    });
  }

}
