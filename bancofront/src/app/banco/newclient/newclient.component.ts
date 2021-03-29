import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewClientService } from './newclient.service';

@Component({
  selector: 'app-newclient',
  templateUrl: './newclient.component.html',
  styleUrls: ['./newclient.component.css']
})
export class NewclientComponent implements OnInit {
  
  constructor(private newclientservice: NewClientService, private router: Router) { }

  ngOnInit(){

  }


  addClient() {
    this.router.navigate(['/client/all'])
  }

}
