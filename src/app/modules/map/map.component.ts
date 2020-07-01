import {Component, OnInit, ViewChild, Inject} from '@angular/core';
import * as L from 'leaflet';
import 'leaflet.markercluster';
import { MapService }  from 'src/app/services/map.service';
import { Device } from '../device/device.component';
import { MatDialog } from '@angular/material';
import { DetailDeviceComponent } from 'src/app/dialog/detail-device/detail-device.component';

export class Measure {
  id: number;
  locationLatitude: number;
  locationLongitude: number;
  tension: number;
  source: string;
  device: Device;
  time: String;
  mode: number;
  status: number;
  freqwakeup: number;

  constructor (){
  }
}

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  measures: Array<Measure> = [];
  prefs:any;

  constructor(public mapService: MapService,public dialog: MatDialog) { }

  ngOnInit() {
     this.initMap();
     this.prefs=JSON.parse(localStorage.getItem('prefs'));
  }

  initMap(){
    // Déclaration de la carte avec les coordonnées du centre et le niveau de zoom.
    const myfrugalmap = L.map('frugalmap').setView([50.6311634, 3.0599573], 2);

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

     this.mapService.getActualMeasuresList1().subscribe((data)=>{
       let test=JSON.stringify(data);
       let test1=JSON.parse(test);
       for(let i=0;i<test1.length;i++){
         let measure: Measure = new Measure();
         measure.id=test1[i]['id'];
         measure.locationLatitude=test1[i]['locationLatitude'];
         measure.locationLongitude=test1[i]['locationLongitude'];
         measure.tension=test1[i]['tension'];
         measure.source=test1[i]['source'];
         measure.device=test1[i]['device'];
         measure.time=test1[i]['time'];
         this.measures.push(measure);
       }



    let markersCluster = new L.MarkerClusterGroup();

    for(let i=0;i<this.measures.length;i++){

    let myCustomColour = ''

    if(this.measures[i]['tension']>=0 && this.measures[i]['tension']<=20 ){
       myCustomColour=this.prefs['rangeone'];
    }
    if(this.measures[i]['tension']>20 && this.measures[i]['tension']<=40 ){
      myCustomColour=this.prefs['rangetwo'];
    }
    if(this.measures[i]['tension']>40 && this.measures[i]['tension']<=60 ){
      myCustomColour=this.prefs['rangethree'];
    }
    if(this.measures[i]['tension']>60 && this.measures[i]['tension']<=80 ){
      myCustomColour=this.prefs['rangefour'];
    }
    if(this.measures[i]['tension']>80 ){
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

      const m1 = L.latLng([this.measures[i]['locationLatitude'], this.measures[i]['locationLongitude']]);
      let my_marker = L.marker(m1 ,{ data: this.measures[i],icon: icon }).on('click',this.onClick,this);
      markersCluster.addLayer(my_marker);
    }
    myfrugalmap.addLayer(markersCluster);


     }); }


   onClick(e) {
     const dialogRef = this.dialog.open(DetailDeviceComponent, {
      data: {id: e.sourceTarget.options.data['id'],
             device: e.sourceTarget.options.data['device'],
             locationLatitude: e.sourceTarget.options.data['locationLatitude'],
             locationLongitude: e.sourceTarget.options.data['locationLongitude'],
             tension: e.sourceTarget.options.data['tension'],
             source:  e.sourceTarget.options.data['source']
            }
    });
    }
}
