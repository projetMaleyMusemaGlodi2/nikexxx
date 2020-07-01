import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { PostsComponent } from './modules/posts/posts.component';
import { MapComponent } from './modules/map/map.component';
import { DeviceComponent } from './modules/device/device.component';
import { SettingComponent } from './modules/setting/setting.component';
import {UsersComponent} from './modules/users/users.component';
import {FullwidthComponent} from './layouts/fullwidth/fullwidth.component';
import {LoginComponent} from './modules/login/login.component';
import { PreferenceComponent } from './modules/preference/preference.component';
import { CommandComponent } from './modules/command/command.component';
import { SearchComponent } from './modules/search/search.component';

const routes: Routes = [{
  path: '',
  component: DefaultComponent,
  children: [{
    path: '',
    component: DashboardComponent
  }, {
    path: 'posts',
    component: PostsComponent
  },{
    path: 'map',
    component: MapComponent
  },{
    path: 'device',
    component: DeviceComponent
  },{
    path: 'setting',
    component: SettingComponent
  },{
    path: 'users',
    component: UsersComponent
  },{
    path: 'preferences',
    component: PreferenceComponent
  },{
    path: 'command',
    component: CommandComponent
  },{
    path: 'search',
    component: SearchComponent
  }]
},{
  path: '',
  component: FullwidthComponent,
  children: [
    {
      path: 'login',
      component: LoginComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
