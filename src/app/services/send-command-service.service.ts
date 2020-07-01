import { Injectable } from '@angular/core';
import { Constants } from './constant/constants';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SendCommandServiceService {
  private baseUrl = Constants.baseUrl;
  constructor(private http: HttpClient) {  }

  sendCommand(sendingCommand: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/sendCommands`, sendingCommand);
  }

}
