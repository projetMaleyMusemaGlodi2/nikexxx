import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatDialog } from '@angular/material';
import { UserService } from 'src/app/services/user.service';
import { DOCUMENT } from '@angular/common';
import { AddUserDialogComponentComponent } from 'src/app/dialog/add-user-dialog-component/add-user-dialog-component.component';
import { EditUserDialogComponentComponent } from 'src/app/dialog/edit-user-dialog-component/edit-user-dialog-component.component';
import { DeleteUserDialogComponentComponent } from 'src/app/dialog/delete-user-dialog-component/delete-user-dialog-component.component';

export interface User {
  id: number;
  noms: string;
  username: string;
  password: string;
  repassword: string;
  rolename: string;
  roles: any;
  preference:any;
}
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  ELEMENT_DATA: User[];

  displayedColumns: string[] = ['id', 'noms', 'username', 'password','role','actions'];
  dataSource = new MatTableDataSource<User>(this.ELEMENT_DATA);
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  index: number;
  id: number;

  constructor(public dialog: MatDialog,public userService: UserService,@Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {
    this.getAllUsers();
    this.dataSource.paginator = this.paginator;
  }

  getAllUsers(){
    this.userService.getUserssList().subscribe(resp=>this.dataSource.data=resp as User[]);
  }

  applyFliter(filterValue: string){
    this.dataSource.filter=filterValue.trim().toLowerCase();
  }

  addNew(){
    const dialogRef = this.dialog.open(AddUserDialogComponentComponent, {
      data: {issue: {} }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        // After dialog is closed we're doing frontend updates
        this.document.location.reload();
      }
    });
  }
  startEdit(i: number, id: number, noms: string, username: string,preference: any,roles: any){
    this.id = id;
    // index row is used just for debugging proposes and can be removed
    this.index = i;
    console.log(this.index);
    const dialogRef = this.dialog.open(EditUserDialogComponentComponent, {
      data: {id: id, noms: noms, username: username,preference:preference,roles:roles}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        this.document.location.reload();
      }
    });
  }
  deleteItem(i: number, id: number, noms: string, username: string, rolename: string){
    this.index = i;
    this.id = id;
    const dialogRef = this.dialog.open(DeleteUserDialogComponentComponent, {
      data: {id: id, noms: noms, username: username, rolename: rolename}
    });

     dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
       // this.document.location.reload();
      }
    });
  }
}
