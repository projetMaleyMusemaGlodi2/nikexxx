import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Device } from 'src/app/modules/device/device.component';
import { DeviceService } from 'src/app/services/device.service';

@Component({
  selector: 'app-delete-device-dialog',
  templateUrl: './delete-device-dialog.component.html',
  styleUrls: ['./delete-device-dialog.component.scss']
})
export class DeleteDeviceDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeleteDeviceDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Device,
    public deviceService: DeviceService) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  confirmDelete(): void {
    console.log(this.data);
    this.deviceService.deleteDevice(this.data).subscribe(resp=>{
      console.log(resp);
    });
  }
}
