import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { PostsComponent } from 'src/app/modules/posts/posts.component';
import { SharedModule } from 'src/app/shared/shared.module';
import {MatSidenavModule, MatDividerModule, MatCardModule, MatPaginatorModule, MatTableModule, MatIconModule, MatFormField, MatFormFieldModule, MatInputModule, MatButtonModule, MatDialogModule, MatSelect, MatSelectModule} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DashboardService } from 'src/app/modules/dashboard.service';
import { MapComponent } from 'src/app/modules/map/map.component';
import { DeviceComponent } from 'src/app/modules/device/device.component';
import { SettingComponent } from 'src/app/modules/setting/setting.component';
import {UsersComponent} from '../../modules/users/users.component';
import { AddDeviceDialogComponent } from 'src/app/dialog/add-device-dialog/add-device-dialog.component';
import { EditDeviceDialogComponent } from 'src/app/dialog/edit-device-dialog/edit-device-dialog.component';
import { DeleteDeviceDialogComponent } from 'src/app/dialog/delete-device-dialog/delete-device-dialog.component';
import { FormsModule } from '@angular/forms';
import { AddUserDialogComponentComponent } from 'src/app/dialog/add-user-dialog-component/add-user-dialog-component.component';
import { EditUserDialogComponentComponent } from 'src/app/dialog/edit-user-dialog-component/edit-user-dialog-component.component';
import { DeleteUserDialogComponentComponent } from 'src/app/dialog/delete-user-dialog-component/delete-user-dialog-component.component';
import { DetailDeviceComponent } from 'src/app/dialog/detail-device/detail-device.component';
import { FusionChartsModule } from 'angular-fusioncharts';
import { PreferenceComponent } from 'src/app/modules/preference/preference.component';
import { ColorPickerModule } from 'ngx-color-picker';
import { RxStompService } from '@stomp/ng2-stompjs';
import { ProgressWebsocketService } from 'src/app/services/progress.websocket.service';
import { CommandComponent } from 'src/app/modules/command/command.component';
import { AddCommandComponent } from 'src/app/dialog/add-command/add-command.component';
import { EditCommandComponent } from 'src/app/dialog/edit-command/edit-command.component';
import { DeleteCommandComponent } from 'src/app/dialog/delete-command/delete-command.component';
import { SendCommandComponent } from 'src/app/dialog/send-command/send-command.component';
import { MeasureDeviceComponentComponent } from 'src/app/dialog/measure-device-component/measure-device-component.component';
import { SearchComponent } from 'src/app/modules/search/search.component';
import { StateDeviceComponent } from 'src/app/dialog/state-device/state-device.component';
import { SentCommandComponentComponent } from 'src/app/dialog/sent-command-component/sent-command-component.component';
import { DeviceSentCommandComponent } from 'src/app/dialog/device-sent-command/device-sent-command.component';
import { GraphDeviceComponent } from 'src/app/dialog/graph-device/graph-device.component';


@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    PostsComponent,
    MapComponent,
    DeviceComponent,
    CommandComponent,
    SettingComponent,
    UsersComponent,
    PreferenceComponent,
    SearchComponent,
    AddDeviceDialogComponent,
    EditDeviceDialogComponent,
    DeleteDeviceDialogComponent,
    AddUserDialogComponentComponent,
    EditUserDialogComponentComponent,
    DeleteUserDialogComponentComponent,
    DetailDeviceComponent,
    AddCommandComponent,
    EditCommandComponent,
    DeleteCommandComponent,
    SendCommandComponent,
    MeasureDeviceComponentComponent,
    StateDeviceComponent,
    SentCommandComponentComponent,
    DeviceSentCommandComponent,
    GraphDeviceComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    FlexLayoutModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatSelectModule,
    FormsModule,
    FusionChartsModule,
    ColorPickerModule
      ],
  entryComponents: [
    AddDeviceDialogComponent,
    AddUserDialogComponentComponent,
    EditDeviceDialogComponent,
    DeleteDeviceDialogComponent,
    AddUserDialogComponentComponent,
    EditUserDialogComponentComponent,
    DeleteUserDialogComponentComponent,
    DetailDeviceComponent,
    AddCommandComponent,
    EditCommandComponent,
    DeleteCommandComponent,
    SendCommandComponent,
    MeasureDeviceComponentComponent,
    StateDeviceComponent,
    SentCommandComponentComponent,
    DeviceSentCommandComponent,
    GraphDeviceComponent
  ],
  providers: [
    DashboardService,
    ProgressWebsocketService,
    RxStompService
  ]
})
export class DefaultModule { }
