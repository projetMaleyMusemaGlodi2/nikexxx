import { Component, OnInit } from '@angular/core';
import { ProgressWebsocketService } from './services/progress.websocket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'monitor-engine';
  public progress: any = {};

  constructor(private progressWebsocketService: ProgressWebsocketService) {}

  ngOnInit(): void {
     setTimeout(this.logout, 1000000);
  }

  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.removeItem('user');
    localStorage.removeItem('prefs');
  }
}
