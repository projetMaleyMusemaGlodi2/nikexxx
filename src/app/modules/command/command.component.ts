import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatDialog } from '@angular/material';
import { CommandServiceService } from 'src/app/services/command-service.service';
import { DOCUMENT } from '@angular/common';
import { Measure } from '../map/map.component';
import { AddCommandComponent } from 'src/app/dialog/add-command/add-command.component';
import { EditCommandComponent } from 'src/app/dialog/edit-command/edit-command.component';
import { DeleteCommandComponent } from 'src/app/dialog/delete-command/delete-command.component';
import { SentCommandComponentComponent } from 'src/app/dialog/sent-command-component/sent-command-component.component';


export interface Command {
  id: number;
  command: string;
  description: string;
}

@Component({
  selector: 'app-command',
  templateUrl: './command.component.html',
  styleUrls: ['./command.component.scss']
})
export class CommandComponent implements OnInit {
  ELEMENT_DATA: Command[];

  displayedColumns: string[] = ['id', 'command', 'description','actions'];
  dataSource = new MatTableDataSource<Command>(this.ELEMENT_DATA);
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  index: number;
  id: number;

  constructor(public dialog: MatDialog,public commandService: CommandServiceService,@Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {
    this.getAllCommands();
    this.dataSource.paginator = this.paginator;
  }
  getAllCommands(){
    this.commandService.getCommandsList().subscribe(resp=>this.dataSource.data=resp as Command[]);
  }

  applyFliter(filterValue: string){
    this.dataSource.filter=filterValue.trim().toLowerCase();
  }

  addNew(){
    const dialogRef = this.dialog.open(AddCommandComponent, {
      data: {issue: {} }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        // After dialog is closed we're doing frontend updates
       this.getAllCommands();
      }
    });
  }
  startEdit(i: number, id: number, command: string, description: string){
    this.id = id;
    // index row is used just for debugging proposes and can be removed
    this.index = i;
    const dialogRef = this.dialog.open(EditCommandComponent, {
      data: {id: id, command: command, description: description}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        this.getAllCommands();
      }
    });
  }
  deleteItem(i: number, id: number, command: string, description: string){
    this.index = i;
    this.id = id;
    const dialogRef = this.dialog.open(DeleteCommandComponent, {
      data: {id: id, command: command, description: description}
    });

     dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
       // this.getAllCommands();
      }
    });
  }

  list(){
    const dialogRef = this.dialog.open(SentCommandComponentComponent);
     dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
      }
    });

  }

}
