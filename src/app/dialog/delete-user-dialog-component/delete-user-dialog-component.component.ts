import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { User } from 'src/app/modules/users/users.component';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-delete-user-dialog-component',
  templateUrl: './delete-user-dialog-component.component.html',
  styleUrls: ['./delete-user-dialog-component.component.scss']
})
export class DeleteUserDialogComponentComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeleteUserDialogComponentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User,
    public userService: UserService) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  confirmDelete(): void {
    console.log(this.data);
    this.userService.deleteUser(this.data).subscribe(resp=>{
      console.log(resp);
    });
  }

}
