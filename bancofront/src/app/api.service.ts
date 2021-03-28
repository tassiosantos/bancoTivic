import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private API_URL = 'http://localhost:8080';

  constructor(private httpClient: HttpClient) {}
    

      public get(){
      return this.httpClient.get(this.API_URL);
      }

      public getClient(){
        return this.httpClient.get(`${this.API_URL}/client/account`) ;
      }
  
}
