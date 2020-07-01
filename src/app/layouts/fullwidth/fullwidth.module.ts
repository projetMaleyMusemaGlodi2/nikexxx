import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FullwidthComponent} from './fullwidth.component';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../../shared/shared.module';
import {
  MatButtonModule,
  MatCardModule,
  MatDividerModule,
  MatFormFieldModule, MatIconModule,
  MatInputModule,
  MatPaginatorModule,
  MatSidenavModule,
  MatTableModule, MatToolbarModule, MatSnackBarModule
} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {LoginComponent} from '../../modules/login/login.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    FullwidthComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    FormsModule,
    MatSidenavModule,
    MatDividerModule,
    FlexLayoutModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSnackBarModule
  ]
})
export class FullwidthModule { }
