import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/table';
import { MainserviceService } from '../mainservice.service';
import { Observable } from 'rxjs';
import { Customers } from '../Model/customers';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
  displayedColumns:string[]=['ID','Name','Surname','Number'];
  dataSource= new customers(this.mainservice);
  ID:number;

  newCustomer = new Customers();
  editCustomer = new Customers()

  constructor(private mainservice: MainserviceService) { }

  ngOnInit(): void {
  }

  addCustomer(){
    this.mainservice.postCustomers(this.newCustomer);
  }

  updateCustomer(){
    this.mainservice.putCustomer(this.editCustomer.cust_ID,this.editCustomer);
  }

  deleteCustomers(){
    this.mainservice.deleteCustomer(this.ID);
  }

}


export class customers extends DataSource<any>{

  constructor(private mainservice: MainserviceService){
    super();
  }
  connect(): Observable<customers[]>{
    return this.mainservice.getCustomers();
  }
  disconnect(){

  }
}




