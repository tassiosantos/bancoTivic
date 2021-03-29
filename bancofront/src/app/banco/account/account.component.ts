import { Component, OnInit } from '@angular/core';
import { AccountService } from './account.service';
import { ActivatedRoute, Params } from '@angular/router';
import {Router} from '@angular/router';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  
  accountnumber = "";
  nome = "";
  saldo = 0;
  cpf = "";
  account: any;
  client: any;
  deposito = 0;
  saque = new FormControl(0);


  constructor(private accountService: AccountService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    
    this.activatedRoute.params.forEach(param =>
      this.accountnumber = param['accountnumber']
      
    );
    

    this.accountService.getAccountByNumber(this.accountnumber).subscribe((data: any)=> {
      this.account = data[0];
      console.log(this.account);
      this.saldo = this.account.balance;
      
    });

    this.accountService.getByAccount(this.accountnumber).subscribe((data: any)=> {
      this.client = data[0];
      
    });


        
   }

   home() {
     this.router.navigate(['/client/all'])
   }

   depositar(){
      
   }

   sacar(){

   }






  }


