import { Component, OnInit, ViewChild } from '@angular/core';
import { AcutalMeasure } from '../dashboard/dashboard.component';
import { MatTableDataSource, MatPaginator, MatDialog } from '@angular/material';
import { MapService } from 'src/app/services/map.service';
import { ActualMeasureServiceService } from 'src/app/services/actual-measure-service.service';
import { StateDeviceComponent } from 'src/app/dialog/state-device/state-device.component';
import { MeasureDeviceComponentComponent } from 'src/app/dialog/measure-device-component/measure-device-component.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  ELEMENT_DATA: AcutalMeasure[]

  displayedColumns: string[] = ['designation', 'locationLatitude', 'locationLongitude', 'source', 'time', 'mode', 'status', 'tension','freqwakup', 'actions'];
  dataSource = new MatTableDataSource<AcutalMeasure>(this.ELEMENT_DATA);
  index: number;
  id: number;
  actualMeasures: any;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(public dialog: MatDialog,private mapService: MapService,public actualMeasuredService: ActualMeasureServiceService) { }

  ngOnInit() {
    this.getAllMeasures();
    this.dataSource.paginator = this.paginator;
  }

  applyFliter(filterValue: string){
    this.dataSource.filter=filterValue.trim().toLowerCase();
  }

  getAllMeasures(){
    this.mapService.getActualMeasuresList1().subscribe(resp=>this.dataSource.data=resp as AcutalMeasure[]);
  }

  getActualMeasures(id: number){
    this.actualMeasuredService.getActualMeasuresDevice(id).subscribe(resp=>localStorage.setItem('actm',JSON.stringify(resp)));
  }

  getMeasureds(i: number){
    this.index = i;
    this.id = i;
    this.getActualMeasures(this.id);
    console.log(this.actualMeasures);
    const dialogRef = this.dialog.open(MeasureDeviceComponentComponent, {
      data: {id: i}
    });

     dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
       // this.document.location.reload();
      }
    });
  }

  getState(i: number){
    this.index = i;
    this.id = i;
    this.getActualMeasures(this.id);
    console.log(this.actualMeasures);
    const dialogRef = this.dialog.open(StateDeviceComponent, {
      data: {id: i,measure: JSON.parse(localStorage.getItem('actm'))}
    });

     dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
       // this.document.location.reload();
      }
    });
  }

}
