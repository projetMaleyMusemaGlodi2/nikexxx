import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DeleteDeviceDialogComponent } from '../delete-device-dialog/delete-device-dialog.component';
import { Command } from 'src/app/modules/command/command.component';
import { CommandServiceService } from 'src/app/services/command-service.service';

@Component({
  selector: 'app-delete-command',
  templateUrl: './delete-command.component.html',
  styleUrls: ['./delete-command.component.scss']
})
export class DeleteCommandComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeleteDeviceDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Command,
    public commandService: CommandServiceService) { }

  ngOnInit() {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  confirmDelete(): void {
    console.log(this.data);
    //this.deviceService.deleteDevice(this.data).subscribe(resp=>{
     // console.log(resp);
    //});
  }

}
