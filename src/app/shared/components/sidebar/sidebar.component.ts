import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../../services/login.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(private auth: LoginService) { }

  ngOnInit() {
    this.auth.loadToken();
  }
  isAdmin() {
    return this.auth.isAdmin();
  }
  isUser() {
    return this.auth.isUser();
  }

}
