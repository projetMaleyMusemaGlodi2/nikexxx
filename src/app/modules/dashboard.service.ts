import { Injectable } from '@angular/core';
import { Constants } from '../services/constant/constants';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private baseUrl = Constants.baseUrl;

  bigChartData: any;

  constructor() {
  }

  bigChart() {
    return this.bigChart;
  }

  cards() {
    return [71, 78, 39, 66];
  }


  otherChart(){
    return [{
      data: [-20],
      yAxis: 0
  }];
  }
}
