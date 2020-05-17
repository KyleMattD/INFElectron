import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/table';
import { MainserviceService } from '../mainservice.service';
import { Observable } from 'rxjs';
import { SaleEmployee } from '../Model/sale-employee';

@Component({
  selector: 'app-sale-employee',
  templateUrl: './sale-employee.component.html',
  styleUrls: ['./sale-employee.component.scss']
})
export class SaleEmployeeComponent implements OnInit {
 
  displayedColumns:string[]=['ID','Name','Surname','Position'];
  dataSource= new salesEmployee(this.mainservice);
  ID:number;
  
  ngOnInit(): void {
  }
  newSaleEmployee = new SaleEmployee();
  editSaleEmployee = new SaleEmployee();
  constructor(private mainservice: MainserviceService) { }

  addSaleEmp(){
    this.mainservice.postsalesemployee(this.newSaleEmployee);
  }

  updateSaleEmp(){
    this.mainservice.putsalesemployee(this.editSaleEmployee.saleEmp_ID,this.editSaleEmployee);
  }

  deleteSaleEmp(){
    this.mainservice.deletesalesemployee(this.ID);
  }

}

export class salesEmployee extends DataSource<any>{

  constructor(private mainservice: MainserviceService){
    super();
  }
  connect(): Observable<salesEmployee[]>{
    return this.mainservice.getsalesEmployee();
  }
  disconnect(){

  }
}