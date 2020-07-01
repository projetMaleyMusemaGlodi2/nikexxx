import { Injectable } from '@angular/core';
import { Constants } from './constant/constants';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MeasuredServiceService {
  private baseUrl = Constants.baseUrl;
  constructor(private http: HttpClient) { }

  getMeasuresDeviceList(id: number) {
    return this.http.get(`${this.baseUrl}/measuredDevice/`+id);
  }

  getMeasuresDeviceStat(id: number) {
    return this.http.get(`${this.baseUrl}/measuredDeviceStat/`+id);
  }
}
