import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../services/login.service';
import {Router} from '@angular/router';
import { ProgressWebsocketService } from 'src/app/services/progress.websocket.service';
import { MatSnackBar } from '@angular/material';
import { ActualMeasureServiceService } from 'src/app/services/actual-measure-service.service';
import { AcutalMeasure } from 'src/app/modules/dashboard/dashboard.component';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  public progress: any = {};
  data: AcutalMeasure[];
  bigChartData: any;
  formattedBigChartData: any= [];

  sideBarOpen = true;

  constructor(private auth: LoginService, private router: Router,private progressWebsocketService: ProgressWebsocketService,private snackBar: MatSnackBar,private actualMeasureService: ActualMeasureServiceService) {
    console.log('construct');
   }

  ngOnInit() {
    this.auth.loadToken();
    if (!this.isAuthenticated()) {
      this.router.navigateByUrl('/login');
    }
    // Init Progress WebSocket.
    //this.initProgressWebSocket();
   // setInterval(()=>{this.refreshData(); },3000);
   // this.refreshData();
  }

  /**
   * Subscribe to the client broker.
   * Return the current status of the batch.
   */
  /*private initProgressWebSocket = () => {
    const obs = this.progressWebsocketService.getObservable();

    obs.subscribe({
      next: this.onNewProgressMsg,
      error: err => {
        console.log(err);
      }
    });
  } */

  /**
   * Apply result of the java server notification to the view.
   */
  /*private onNewProgressMsg = receivedMsg => {
    if (receivedMsg.type === 'SUCCESS') {
      this.progress = receivedMsg.message;

       //this.bigChartData=JSON.parse(JSON.stringify(receivedMsg.message));

       this.formattedBigChartData=[];
       for(let i=0;i<this.bigChartData.length;i++){
          let oneData:any = {};
          oneData.name=this.bigChartData[i]['device']['designation'];
          oneData.y=this.bigChartData[i]['tension'];
          this.formattedBigChartData.push(oneData);

          if(this.bigChartData[i]['tension'] < 20 && this.bigChartData[i]['tension'] > 5 ){
              this.snackBar.open('Battery of the device'+this.bigChartData[i]['device']['designation']+' is Low ! Under 20%', 'dismiss', {
                verticalPosition: 'top'
              });
          }

          if(this.bigChartData[i]['tension'] < 5 ){
            this.snackBar.open('Battery of the device'+this.bigChartData[i]['device']['designation']+' is Low ! Under 5%', 'dismiss', {
              verticalPosition: 'top'
            });
        }

       }
       localStorage.removeItem('stat1');
       localStorage.setItem('stat1',JSON.stringify(this.formattedBigChartData));
       console.log(this.formattedBigChartData);


    }
  }*/

  refreshData(){
    localStorage.removeItem('toto');
    this.actualMeasureService.getActualMeasuresList().subscribe(resp => this.bigChartData = resp);
    //console.log(this.bigChartData);
    this.proccessData();
  }

  proccessData(){

      for(let i=0;i<this.bigChartData.length;i++){
        let oneData:any = {};
        oneData.name=this.bigChartData[i]['device']['designation'];
        oneData.y=this.bigChartData[i]['tension'];
       // console.log(oneData);
        this.formattedBigChartData.push(oneData);

        if(this.bigChartData[i]['tension'] < 20 && this.bigChartData[i]['tension'] > 5 ){
            this.snackBar.open('Battery of the '+this.bigChartData[i]['device']['designation']+' is Low ! Under 20%', 'close', {
              verticalPosition: 'top'
            });
        }

        if(this.bigChartData[i]['tension'] < 5 ){
          this.snackBar.open('Battery of the '+this.bigChartData[i]['device']['designation']+' is Low ! Under 5%', 'close', {
            verticalPosition: 'top'
          });
      }

      }

      localStorage.removeItem('stat1');
      localStorage.setItem('stat1',JSON.stringify(this.formattedBigChartData));

  }

  sideBarToggler($event) {
    this.sideBarOpen = !this.sideBarOpen;
  }
  isAdmin() {
    return this.auth.isAdmin();
  }
  isUser() {
    return this.auth.isUser();
  }
  isAuthenticated() {
    return this.auth.isAuthenticated();
  }

}
