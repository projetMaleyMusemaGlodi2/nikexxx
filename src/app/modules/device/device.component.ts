import {Component, OnInit, ViewChild, Inject} from '@angular/core';
import {MatPaginator, MatTableDataSource, MatDialog} from '@angular/material';
import { AddDeviceDialogComponent } from 'src/app/dialog/add-device-dialog/add-device-dialog.component';
import { EditDeviceDialogComponent } from 'src/app/dialog/edit-device-dialog/edit-device-dialog.component';
import { DeleteDeviceDialogComponent } from 'src/app/dialog/delete-device-dialog/delete-device-dialog.component';
import { DeviceService } from 'src/app/services/device.service';
import { DOCUMENT } from '@angular/common';
import { SendCommandComponent } from 'src/app/dialog/send-command/send-command.component';
import { MeasureDeviceComponentComponent } from 'src/app/dialog/measure-device-component/measure-device-component.component';
import { ActualMeasureServiceService } from 'src/app/services/actual-measure-service.service';
import { StateDeviceComponent } from 'src/app/dialog/state-device/state-device.component';
import { DeviceSentCommandComponent } from 'src/app/dialog/device-sent-command/device-sent-command.component';
import { GraphDeviceComponent } from 'src/app/dialog/graph-device/graph-device.component';

export interface Device {
  id: number;
  externalId: string;
  identity: string;
  designation: string;
  command:number;
  value: string;
}

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss']
})
export class DeviceComponent implements OnInit {
  ELEMENT_DATA: Device[];

  displayedColumns: string[] = ['id', 'externalId', 'identity', 'designation', 'actions'];
  dataSource = new MatTableDataSource<Device>(this.ELEMENT_DATA);
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  index: number;
  id: number;
  actualMeasures: any;


  constructor(public dialog: MatDialog,public deviceService: DeviceService,public actualMeasuredService: ActualMeasureServiceService,@Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {
    this.getAllDevices();
    this.dataSource.paginator = this.paginator;
  }

  getAllDevices(){
    this.deviceService.getDevicesList().subscribe(resp=>this.dataSource.data=resp as Device[]);
  }

  getActualMeasures(id: number){
    this.actualMeasuredService.getActualMeasuresDevice(id).subscribe(resp=>localStorage.setItem('actm',JSON.stringify(resp)));
  }

  applyFliter(filterValue: string){
    this.dataSource.filter=filterValue.trim().toLowerCase();
  }

  addNew(){
    const dialogRef = this.dialog.open(AddDeviceDialogComponent, {
      data: {issue: {} }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        // After dialog is closed we're doing frontend updates
        this.document.location.reload();
      }
    });
  }
  startEdit(i: number, id: number, identity: string, externalId: string, designation: string){
    this.id = id;
    // index row is used just for debugging proposes and can be removed
    this.index = i;
    console.log(this.index);
    const dialogRef = this.dialog.open(EditDeviceDialogComponent, {
      data: {id: id, identity: identity, externalId: externalId, designation: designation}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        this.document.location.reload();
      }
    });
  }
  deleteItem(i: number, id: number, identity: string, externalId: string, designation: string){
    this.index = i;
    this.id = id;
    const dialogRef = this.dialog.open(DeleteDeviceDialogComponent, {
      data: {id: id, identity: identity, externalId: externalId, designation: designation}
    });

     dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
       // this.document.location.reload();
      }
    });
  }
  sendCommand(i: number, id: number, identity: string, externalId: string, designation: string){
    this.index = i;
    this.id = id;
    const dialogRef = this.dialog.open(SendCommandComponent, {
      data: {id: id, identity: identity, externalId: externalId, designation: designation}
    });

     dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
       // this.document.location.reload();
      }
    });
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

  getCommand(i: number){
    this.index = i;
    this.id = i;
    const dialogRef = this.dialog.open(DeviceSentCommandComponent, {
      data: {id: i}
    });

     dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
       // this.document.location.reload();
      }
    });
  }

  getGraph(i: number){
    this.index = i;
    this.id = i;
    const dialogRef = this.dialog.open(GraphDeviceComponent, {
      data: {id: i}
    });

     dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
       // this.document.location.reload();
      }
    });
  }

}
