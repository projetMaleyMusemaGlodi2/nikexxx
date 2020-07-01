import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';


@Component({
  selector: 'app-widget-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit {

  chartOptions: any;
  @Input() data: any = [];

  Highcharts = Highcharts;

  constructor() { }

  ngOnInit() {

    this.chartOptions = {

      chart: {
        type: 'column'
    },
    title: {
        text: "Actual Device's Situation"
    },
    subtitle: {
        text: 'This is realtime record'
    },
    accessibility: {
        announceNewData: {
            enabled: true
        }
    },
    xAxis: {
        type: 'Baterry Level'
    },
    yAxis: {
        title: {
            text: "Device"
        }

    },
    legend: {
        enabled: false
    },
    plotOptions: {
        series: {
            borderWidth: 0,
            dataLabels: {
                enabled: true,
                format: '{point.y:.1f}%'
            }
        }
    },

    tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
    },

    series: [
        {
            name: "Devices",
            colorByPoint: true,
            data: this.data
        }
    ]

    };

    setInterval(()=>{ this.refresh(); },1000);

  }

  refresh(){
    this.chartOptions.series[0].data=this.data;
  }



}
