import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Device } from 'src/app/modules/device/device.component';
import { DeviceService } from 'src/app/services/device.service';
import { CommandServiceService } from 'src/app/services/command-service.service';
import { SendCommandServiceService } from 'src/app/services/send-command-service.service';

export interface SendingCommand {
  command: string;
  value: string;
  identity: string;
}

@Component({
  selector: 'app-send-command',
  templateUrl: './send-command.component.html',
  styleUrls: ['./send-command.component.scss']
})
export class SendCommandComponent implements OnInit {
  commands: any;
  callback: any;
  constructor(public dialogRef: MatDialogRef<SendCommandComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Device,
    public deviceService: DeviceService,public commandService: CommandServiceService,public sendCommandService: SendCommandServiceService) {  }
  ngOnInit() {
    this.commandService.getCommandsList().subscribe(
      resp=>{
        this.commands=resp;
      }
    );
  }
  submit() {
    // emppty stuff
    }

    onNoClick(): void {
      this.dialogRef.close();
    }

    public confirmAdd(): void {
      this.sendCommandService.sendCommand(this.data).subscribe(resp=>{
          this.callback=resp;
          alert(this.callback.value);
      });
    }

}
