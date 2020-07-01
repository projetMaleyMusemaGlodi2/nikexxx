import { Component, OnInit } from '@angular/core';
import { PreferenceServiceService } from 'src/app/services/preference-service.service';

@Component({
  selector: 'app-preference',
  templateUrl: './preference.component.html',
  styleUrls: ['./preference.component.scss']
})
export class PreferenceComponent implements OnInit {

  prefs:any;

  color1: any;
  colorPicker1: any;
  color2: any;
  colorPicker2: any;
  color3: any;
  colorPicker3: any;
  color4: any;
  colorPicker4: any;
  color5: any;
  colorPicker5: any;
  constructor(private preferenceService:PreferenceServiceService) { }

  ngOnInit() {
    this.initPrefs();
  }
  submit(){

  }
  public confirmAdd(data: any): void {
    data.id=this.prefs['id'];
    data.rangeone=this.color1;
    data.rangetwo=this.color2;
    data.rangethree=this.color3;
    data.rangefour=this.color4;
    data.rangefive=this.color5;
    this.preferenceService.updateDevice(data).subscribe(resp=>{
      console.log(resp);
      localStorage.removeItem('prefs');
      localStorage.setItem('prefs',JSON.stringify(data));
      this.initPrefs();
    });
  }

  initPrefs(){
    this.prefs=JSON.parse(localStorage.getItem('prefs'));
    this.color1=this.prefs['rangeone'];
    this.color2=this.prefs['rangetwo'];
    this.color3=this.prefs['rangethree'];
    this.color4=this.prefs['rangefour'];
    this.color5=this.prefs['rangefive'];
  }

}
