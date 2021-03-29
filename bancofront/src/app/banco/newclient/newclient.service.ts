import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewClientService { 

  private API_URL = 'http://localhost:8080';

  constructor(private httpClient: HttpClient) {}
    

      public get(){
      return this.httpClient.get(this.API_URL);
      }

      public getClients(){
        return this.httpClient.get(`${this.API_URL}/client/all`) ;
      }

      public getByCpf(cpf: string){
        return this.httpClient.get(`${this.API_URL}/client/getbycpf/` + cpf);
      }


      public getAccounts(){
          return this.httpClient.get(`${this.API_URL}/account/getallaccounts`);
      }

      public getAccountByNumber(number: string){
        return this.httpClient.get(`${this.API_URL}/account/getbynumber` + number);
    }

    

  
}
