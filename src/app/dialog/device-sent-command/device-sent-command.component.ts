import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { SentCommand } from 'src/app/model/SentCommand';
import { MatTableDataSource, MatPaginator, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { SentCommandServiceService } from 'src/app/services/sent-command-service.service';

@Component({
  selector: 'app-device-sent-command',
  templateUrl: './device-sent-command.component.html',
  styleUrls: ['./device-sent-command.component.scss']
})
export class DeviceSentCommandComponent implements OnInit {

  ELEMENT_DATA: SentCommand[];

  displayedColumns: string[] = ['id', 'command', 'value', 'device','identity','time'];
  dataSource = new MatTableDataSource<SentCommand>(this.ELEMENT_DATA);
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  index: number;
  id: number;

  constructor(public dialogRef: MatDialogRef<DeviceSentCommandComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public sentCommandServiceService: SentCommandServiceService) { }

    ngOnInit() {
      this.getAllCommandList(this.data.id);
      this.dataSource.paginator = this.paginator;
    }

    getAllCommandList(id: number){
      this.sentCommandServiceService.getDeviceAllSentCommand(id).subscribe(resp=>this.dataSource.data=resp as SentCommand[]);
    }

    applyFliter(filterValue: string){
      this.dataSource.filter=filterValue.trim().toLowerCase();
    }

}
