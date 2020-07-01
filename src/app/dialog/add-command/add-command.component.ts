import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Command } from 'src/app/modules/command/command.component';
import { CommandServiceService } from 'src/app/services/command-service.service';

@Component({
  selector: 'app-add-command',
  templateUrl: './add-command.component.html',
  styleUrls: ['./add-command.component.scss']
})
export class AddCommandComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddCommandComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Command,
    public commandService: CommandServiceService) { }

  ngOnInit() {
  }
  submit() {
    // emppty stuff
    }
    onNoClick(): void {
      this.dialogRef.close();
    }

    public confirmAdd(): void {
      this.commandService.createCommand(this.data).subscribe(resp=>{
        console.log(resp);
      });
    }

}
