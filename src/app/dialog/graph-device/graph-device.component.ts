import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MeasuredServiceService } from 'src/app/services/measured-service.service';

@Component({
  selector: 'app-graph-device',
  templateUrl: './graph-device.component.html',
  styleUrls: ['./graph-device.component.scss']
})
export class GraphDeviceComponent implements OnInit {
  dataSource: any;
  private things: any[][];

  constructor(public dialogRef: MatDialogRef<GraphDeviceComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public measuredServiceService: MeasuredServiceService) { }

  ngOnInit() {
    this.things= new Array();
    this.getDeviceMap(this.data.id);
   }

  getDeviceMap(id: number){
    this.measuredServiceService.getMeasuresDeviceStat(id).subscribe(resp=> this.toto(resp));
  }

  toto(id: any){
    this.dataSource=id;
     console.log(this.dataSource);
    //this.things[0].push([1,1]);

    for(let i=0;i < this.dataSource.length;i++){
          this.things.push( [this.dataSource[i]['time'], this.dataSource[i]['tension']] );
    }

    console.log(this.things);
  }



}
