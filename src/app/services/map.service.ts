import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Constants } from './constant/constants';

@Injectable({
  providedIn: 'root'
})
export class MapService {
  private baseUrl = Constants.baseUrl;
  constructor(private http: HttpClient) { }

  getActualMeasuresList1() {
    return this.http.get(`${this.baseUrl}/actualmeasure`);
  }
}
