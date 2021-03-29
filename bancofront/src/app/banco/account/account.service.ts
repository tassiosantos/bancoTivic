import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table'; 


@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private API_URL = 'http://localhost:8080';
  params: any;
  snapshot: any;    

  constructor(private httpClient: HttpClient) {}
    

      public get(){
      return this.httpClient.get(this.API_URL);
      }

      
      public getByCpf(cpf: string){
        return this.httpClient.get(`${this.API_URL}/client/getbycpf/` + cpf);
      }


      public getAccountByNumber(number: string){
        return this.httpClient.get(`${this.API_URL}/account/getbynumber/` + number);
    }

    

  
}
