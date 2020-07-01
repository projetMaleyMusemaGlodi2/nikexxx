import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatTableDataSource, MatPaginator } from '@angular/material';
import { AddUserDialogComponentComponent } from '../add-user-dialog-component/add-user-dialog-component.component';
import { Measure } from 'src/app/modules/map/map.component';
import { MeasuredServiceService } from 'src/app/services/measured-service.service';
import { ActualMeasureServiceService } from 'src/app/services/actual-measure-service.service';
import { AcutalMeasure } from 'src/app/modules/dashboard/dashboard.component';

@Component({
  selector: 'app-measure-device-component',
  templateUrl: './measure-device-component.component.html',
  styleUrls: ['./measure-device-component.component.scss']
})
export class MeasureDeviceComponentComponent implements OnInit {
  ELEMENT_DATA: Measure[];
  actualMeasures: any;

  displayedColumns: string[] = ['id', 'locationLatitude', 'locationLongitude', 'tension','time','source','status','mode','freqwakeup'];
  dataSource = new MatTableDataSource<Measure>(this.ELEMENT_DATA);
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  index: number;
  id: number;

  constructor(public dialogRef: MatDialogRef<MeasureDeviceComponentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public measuredService: MeasuredServiceService,public actualMeasuredService: ActualMeasureServiceService) { }

  ngOnInit() {
    this.getMeasuresDeviceList(this.data.id);
    this.dataSource.paginator = this.paginator;
  }

  getMeasuresDeviceList(id: number){
    this.measuredService.getMeasuresDeviceList(id).subscribe(resp=>this.dataSource.data=resp as Measure[]);
  }

  applyFliter(filterValue: string){
    this.dataSource.filter=filterValue.trim().toLowerCase();
  }

}
