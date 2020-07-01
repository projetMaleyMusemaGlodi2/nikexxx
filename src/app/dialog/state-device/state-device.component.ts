import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import * as L from 'leaflet';

@Component({
  selector: 'app-state-device',
  templateUrl: './state-device.component.html',
  styleUrls: ['./state-device.component.scss']
})
export class StateDeviceComponent implements OnInit {
  prefs:any;

  constructor(public dialogRef: MatDialogRef<StateDeviceComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.prefs=JSON.parse(localStorage.getItem('prefs'));
    this.initMap();
  }

  dataSourceChart = {
    "chart": {
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
              value: this.data.measure.tension
          }]
    }
  }

  initMap(){
    // Déclaration de la carte avec les coordonnées du centre et le niveau de zoom.
    const myfrugalmap = L.map('frugalmap').setView([ this.data.measure.locationLatitude, this.data.measure.locationLongitude], 8);

    let sat_text=L.tileLayer('https://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}', {
      maxZoom: 20,
      subdomains:['mt0','mt1','mt2','mt3']
    }).addTo(myfrugalmap);

    let osmLayer=L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png',{
      attribution: 'OpenStreetMap'
    }).addTo(myfrugalmap);

    L.control.layers({
      'Satelite' : sat_text,
      'Default' :osmLayer
    }).addTo(myfrugalmap);

    let myCustomColour = ''

    if(this.data.measure.tension>=0 && this.data.measure.tension<=20 ){
       myCustomColour=this.prefs['rangeone'];
    }
    if(this.data.measure.tension>20 && this.data.measure.tension<=40 ){
      myCustomColour=this.prefs['rangetwo'];
    }
    if(this.data.measure.tension>40 &&this.data.measure.tension<=60 ){
      myCustomColour=this.prefs['rangethree'];
    }
    if(this.data.measure.tension>60 && this.data.measure.tension<=80 ){
      myCustomColour=this.prefs['rangefour'];
    }
    if(this.data.measure.tension>80 ){
      myCustomColour=this.prefs['rangefive'];
    }

    const markerHtmlStyles = `
      background-color: ${myCustomColour};
      width: 1.5rem;
      height: 1.5rem;
      display: block;
      left: -1.5rem;
      top: -1.5rem;
      position: relative;
      border-radius: 2rem 2rem 0;
      transform: rotate(45deg);
      border: 1px solid #FFFFFF`

    const icon = L.divIcon({
      className: 'my-custom-pin',
      iconAnchor: [0, 24],
      popupAnchor: [0, -36],
      html: `<span style="${markerHtmlStyles}" />`
    });

    const m1 = L.latLng([this.data.measure.locationLatitude,  this.data.measure.locationLongitude]);
    let my_marker = L.marker(m1 ,{icon: icon }).bindPopup('actual location');

    myfrugalmap.addLayer(my_marker);

  }

}
