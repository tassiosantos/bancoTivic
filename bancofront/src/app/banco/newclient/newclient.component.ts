import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewClientService } from './newclient.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-newclient',
  templateUrl: './newclient.component.html',
  styleUrls: ['./newclient.component.css']
})
export class NewclientComponent implements OnInit {
  
  constructor(private newclientservice: NewClientService, private router: Router, matImput: MatInputModule) { }

  clientName: any;
  clientCpf: any; 
  clientAccount: any;
  clientBalance: any;
  
 
  ngOnInit(){
    
  }

  getErrorMessage(){
    return "Todos os campos devem ser preenchidos";
  }


  onSubmit(){
    alert("tudo ok");
    console.log(this.clientName);

  }

  home() {
    this.router.navigate(['/client/all'])
  }

}
