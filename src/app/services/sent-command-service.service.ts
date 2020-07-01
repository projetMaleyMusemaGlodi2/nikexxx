import { Injectable } from '@angular/core';
import { Constants } from './constant/constants';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SentCommandServiceService {
  private baseUrl = Constants.baseUrl;

  constructor(private http: HttpClient) { }

  getAllSentCommand() {
    return this.http.get(`${this.baseUrl}/sentCommands`);
  }

  getDeviceAllSentCommand(id: number) {
    return this.http.get(`${this.baseUrl}/sentCommands/`+id);
  }

}
