import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './banco/account/account.component';
import { HomeComponent } from './banco/home/home.component';
import { NewclientComponent } from './banco/newclient/newclient.component';

const routes: Routes = [
  // {path: '', component: HomeComponent},
  {path: 'client/account/:accountnumber', component: AccountComponent},
  {path: 'client/all', component: HomeComponent},
  {path: 'client/addclient', component: NewclientComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
