import { Component, OnInit, ViewChild } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { MapService }  from 'src/app/services/map.service';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { Device } from '../device/device.component';


export interface AcutalMeasure {
  id: number;
  freqwakup: number;
  locationLatitude: number;
  locationLongitude: number;
  mode: number;
  source: string;
  status: number;
  tension: number;
  time: String;
  device: Device;
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  ELEMENT_DATA: AcutalMeasure[]

  bigChart: any;
  cards = [];
  pieChart = [];

  displayedColumns: string[] = ['designation', 'locationLatitude', 'locationLongitude', 'source', 'time', 'mode', 'status', 'tension','freqwakup'];
  dataSource = new MatTableDataSource<AcutalMeasure>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private dashboardService: DashboardService,private mapService: MapService) { }

  ngOnInit() {
    this.bigChart = JSON.parse(localStorage.getItem('stat1'));
    //this.cards = this.dashboardService.cards();
    this.getAllMeasures();
    this.dataSource.paginator = this.paginator;

    setTimeout(()=>{this.actualiser(); }, 3000);
  }

  actualiser(){
    setTimeout(()=>{ this.bigChart=JSON.parse(localStorage.getItem('stat1')); },1000);
    //this.cards = this.dashboardService.cards();
    this.getAllMeasures();
    this.dataSource.paginator = this.paginator;
  }

  getAllMeasures(){
    this.mapService.getActualMeasuresList1().subscribe(resp=>this.dataSource.data=resp as AcutalMeasure[]);
  }

}
