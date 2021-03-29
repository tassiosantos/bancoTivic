import { Component, OnInit } from '@angular/core';
import { AccountService } from './account.service';
import { ActivatedRoute, Params } from '@angular/router';
import {Router} from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  
  accountnumber = "";
  account = [];

  constructor(private accountService: AccountService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    
    this.activatedRoute.params.forEach(param =>
      this.accountnumber = param['accountnumber']
      
    );
    console.log(this.accountnumber);

    this.accountService.getAccountByNumber(this.accountnumber).subscribe((data: any)=> {
      this.account = data;
      console.log(this.account);
    });

   }

   home() {
     this.router.navigate(['/client/all'])
   }
  }


