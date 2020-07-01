import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { User } from 'src/app/modules/users/users.component';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-user-dialog-component',
  templateUrl: './edit-user-dialog-component.component.html',
  styleUrls: ['./edit-user-dialog-component.component.scss']
})
export class EditUserDialogComponentComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EditUserDialogComponentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User,
    public userService: UserService) { }

  ngOnInit() {
  }

  submit() {
    // emppty stuff
    }

    onNoClick(): void {
      this.dialogRef.close();
    }

    public confirmAdd(): void {
      console.log(this.data);
      this.userService.updateUser(this.data).subscribe(resp=>{
        console.log(resp);
      });
    }

}
