import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    
    
    constructor(private homeService: HomeService, private activatedRoute: ActivatedRoute, private router: Router){}

    
    
    clients: any;
    columnsToDisplay = ['Name', 'Cpf', 'Conta'];
    dataSource!: MatTableDataSource<ClientData>;

    @ViewChild(MatPaginator) paginator!: MatPaginator;

    ngOnInit() {
      
      this.homeService.getClients().subscribe((data: any)=>
      {          
          this.clients = data;
          this.dataSource = new MatTableDataSource(this.clients);    
          this.dataSource.paginator = this.paginator;    
        })

    }

    
    
    ngAfterViewInit() {

      
      
      
    }


    AddClient(){
      this.router.navigate(['/client/addclient'])
    }

    

}

export interface ClientData {
  
  name: string;
  cpf: string;
  account: string;
}
