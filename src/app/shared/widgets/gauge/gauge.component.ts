import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import * as HighchartsMore from 'highcharts/highcharts-more';
import * as HighchartsSolidGauge from 'highcharts/modules/solid-gauge';

@Component({
  selector: 'app-widget-gauge',
  templateUrl: './gauge.component.html',
  styleUrls: ['./gauge.component.scss']
})
export class GaugeComponent implements OnInit {

  chartOptions: {};
  @Input() data: any = [];

  Highcharts = Highcharts;
  constructor() {
  }

  ngOnInit() {
    this.chartOptions={
          chart: {
            type: 'gauge',
            plotBorderWidth: 1,
            plotBackgroundColor: {
                linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                stops: [
                    [0, '#FFF4C6'],
                    [0.3, '#FFFFFF'],
                    [1, '#FFF4C6']
                ]
            },
            plotBackgroundImage: null,
            height: 200
        },

        title: {
            text: 'Battery'
        },
        pane: [{
          startAngle: -45,
          endAngle: 45,
          background: null,
          center: ['25%', '145%'],
          size: 300
      }, {
          startAngle: -45,
          endAngle: 45,
          background: null,
          center: ['75%', '145%'],
          size: 300
      }],
      exporting: {
        enabled: false
    },

    tooltip: {
        enabled: false
    },
    yAxis: [{
      min: -20,
      max: 6,
      minorTickPosition: 'outside',
      tickPosition: 'outside',
      labels: {
          rotation: 'auto',
          distance: 20
      },
      plotBands: [{
          from: 0,
          to: 6,
          color: '#C02316',
          innerRadius: '100%',
          outerRadius: '105%'
      }],
      pane: 0,
      title: {
          text: 'VU<br/><span style="font-size:8px">Channel A</span>',
          y: -40
      }
  }, {
      min: -20,
      max: 6,
      minorTickPosition: 'outside',
      tickPosition: 'outside',
      labels: {
          rotation: 'auto',
          distance: 20
      },
      plotBands: [{
          from: 0,
          to: 6,
          color: '#C02316',
          innerRadius: '100%',
          outerRadius: '105%'
      }],
      pane: 1,
      title: {
          text: 'VU<br/><span style="font-size:8px">Channel B</span>',
          y: -40
      }
  }],
  plotOptions: {
      gauge: {
          dataLabels: {
              enabled: false
          },
          dial: {
              radius: '100%'
          }
      }
  },
  series: this.data

    }
    }


}
