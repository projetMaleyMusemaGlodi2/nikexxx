import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Device } from 'src/app/modules/device/device.component';
import { DeviceService } from 'src/app/services/device.service';

@Component({
  selector: 'app-add-device-dialog',
  templateUrl: './add-device-dialog.component.html',
  styleUrls: ['./add-device-dialog.component.scss']
})
export class AddDeviceDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddDeviceDialogComponent>,
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

    public confirmAdd(): void {
      this.deviceService.createDevice(this.data).subscribe(resp=>{
        console.log(resp);
      });
    }

}
