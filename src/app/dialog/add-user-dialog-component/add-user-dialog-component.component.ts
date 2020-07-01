import { Component, OnInit, Inject } from '@angular/core';
import { User } from 'src/app/modules/users/users.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-user-dialog-component',
  templateUrl: './add-user-dialog-component.component.html',
  styleUrls: ['./add-user-dialog-component.component.scss']
})
export class AddUserDialogComponentComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddUserDialogComponentComponent>,
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
      this.userService.createUser(this.data).subscribe(resp=>{
        console.log(resp);
      });
    }

}
