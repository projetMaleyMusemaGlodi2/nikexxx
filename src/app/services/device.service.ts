import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Constants } from './constant/constants';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  private baseUrl = Constants.baseUrl;
  constructor(private http: HttpClient) {  }

  getDevice(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createDevice(device: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/devices`, device);
  }

  updateDevice(device: Object): Observable<Object> {
    return this.http.put(`${this.baseUrl}/devices`, device);
  }

  deleteDevice(device: Object): Observable<any> {
      return this.http.delete(`${this.baseUrl}/devices`,);
  }

  getDevicesList() {
     return this.http.get(`${this.baseUrl}/devices`);
  }
}
