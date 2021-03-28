import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  teste = "";
  constructor(private apiService: ApiService){}
  ngOnInit() {
    this.apiService.getClient().subscribe((data: any)=>
       {
        console.log(data);
        this.teste = data[0].account + ' back + front';
      })
  }
  
}
