import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MapService } from 'src/app/services/map.service';
import { DashboardService } from 'src/app/modules/dashboard.service';

@Component({
  selector: 'app-detail-device',
  templateUrl: './detail-device.component.html',
  styleUrls: ['./detail-device.component.scss']
})
export class DetailDeviceComponent implements OnInit {
    constructor(public dialogRef: MatDialogRef<DetailDeviceComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any,
      public mapService: MapService,private dashboardService: DashboardService) { }
      ngOnInit() {
      }

    dataSource= {
      "chart": {
          "caption": "Battery Level",
          "lowerLimit": "0",
          "upperLimit": "100",
          "showValue": "1",
          "numberSuffix": " %",
          "theme": "fusion",
          "showToolTip": "0"
      },
      "colorRange": {
          "color": [{
              "minValue": "0",
              "maxValue": "50",
              "code": "#F2726F"
          }, {
              "minValue": "50",
              "maxValue": "75",
              "code": "#FFC533"
          }, {
              "minValue": "75",
              "maxValue": "100",
              "code": "#62B58F"
          }]
      },
      "dials": {

            "dial": [{
                value: this.data.tension
            }]
      }
    }

}
