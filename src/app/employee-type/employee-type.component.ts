import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/table';
import { MainserviceService } from '../mainservice.service';
import { Observable } from 'rxjs';
import { EmployeeType } from '../Model/employee-type';

@Component({
  selector: 'app-employee-type',
  templateUrl: './employee-type.component.html',
  styleUrls: ['./employee-type.component.scss']
})
export class EmployeeTypeComponent implements OnInit {
  displayedColumns:string[]=['ID','Descripton'];
  dataSource= new employeeType(this.mainservice);
  ID:number;
  
  ngOnInit(): void {
  }
   newEmployeeType= new EmployeeType();
   editEmployeeType = new EmployeeType();
  constructor(private mainservice: MainserviceService) { }

  addEmployeeType(){
    this.mainservice.postemployeetype(this.newEmployeeType);
  }

  updateEmployeeType(){
    this.mainservice.putemployeetype(this.editEmployeeType.empType_ID,this.editEmployeeType);
  }

  deleteEmployeeType(){
    this.mainservice.deleteemployeetype(this.ID);
  }
  

  

}

export class employeeType extends DataSource<any>{

  constructor(private mainservice: MainserviceService){
    super();
  }
  connect(): Observable<employeeType[]>{
    return this.mainservice.getemployeetypes();
  }
  disconnect(){

  }
}

