import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { BancoRoutingModule } from './banco-routing.module';
import { HomeComponent } from './home/home.component';
import { NewclientComponent } from './newclient/newclient.component';
import { AccountComponent } from './account/account.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule }from '@angular/material/toolbar';
import { MatIconModule }from '@angular/material/icon';
import { MatCardModule }from '@angular/material/card';
import { MatButtonModule }from '@angular/material/button';
import { MatProgressSpinnerModule }from '@angular/material/progress-spinner';
import { HomeService } from './home/home.service';
import { NewClientService } from './newclient/newclient.service';
import { AccountService } from './account/account.service';


import {MatTableModule} from '@angular/material/table'; 


@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    CommonModule,
    BancoRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: []
})
export class BancoModule { }
 