import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Device } from 'src/app/modules/device/device.component';
import { DeviceService } from 'src/app/services/device.service';

@Component({
  selector: 'app-edit-device-dialog',
  templateUrl: './edit-device-dialog.component.html',
  styleUrls: ['./edit-device-dialog.component.scss']
})
export class EditDeviceDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EditDeviceDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Device,
    public deviceService: DeviceService) { }

  ngOnInit() {
  }
  submit() {
    // emppty stuff
    }

    onNoClick(): void {
      this.dialogRef.close();
    }

    public stopEdit(): void {
      this.deviceService.updateDevice(this.data).subscribe(resp=>{
        console.log(resp);
      });
    }

}
