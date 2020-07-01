import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Constants } from './constant/constants';

@Injectable({
  providedIn: 'root'
})
export class PreferenceServiceService {
  private baseUrl = Constants.baseUrl;

  constructor(private http: HttpClient) {  }

  updateDevice(preference: Object): Observable<Object> {
    return this.http.put(`${this.baseUrl}/preferences`, preference);
  }

}
