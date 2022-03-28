import { Component, OnInit } from '@angular/core';
import { Cofee } from '../Model/cofee';
import { AppConfiguration } from "read-appsettings-json";
import { CofeeServiceService } from '../services/cofee-service.service';

@Component({
  selector: 'cofee-list',
  templateUrl: './cofee-list.component.html',
  styleUrls: ['./cofee-list.component.css']
})
export class CofeeListComponent implements OnInit {

  public cofeeList : any;
  page: number = 1;
  count: number = AppConfiguration.Setting().totalCount;
  pageSize: number = AppConfiguration.Setting().pageSize;
  tableSizes: any = [3, 6, 9, 12];

  constructor(private service: CofeeServiceService) { 
  }

  ngOnInit(): void {
     this.getCofeeList();
  }

  getCofeeList() {
    this.service.fetchList().subscribe({
      next: list =>{
        this.cofeeList = list
      }
    })
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.getCofeeList();
  }
  onTableSizeChange(event: any): void {
    this.pageSize = event.target.value;
    this.page = 1;
    this.getCofeeList();
  }

}
