import { Injectable } from '@angular/core';
import { Constants } from './constant/constants';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ActualMeasureServiceService {
  private baseUrl = Constants.baseUrl;
  constructor(private http: HttpClient) { }

  getActualMeasuresList() {
    return this.http.get(`${this.baseUrl}/actualmeasure`);
  }

  getActualMeasuresDevice(id: number) {
    return this.http.get(`${this.baseUrl}/actualmeasure/`+id);
  }
}
