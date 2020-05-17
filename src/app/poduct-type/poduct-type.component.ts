import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/table';
import { MainserviceService } from '../mainservice.service';
import { Observable } from 'rxjs';
import { ProductType } from '../Model/poduct-type';

@Component({
  selector: 'app-poduct-type',
  templateUrl: './poduct-type.component.html',
  styleUrls: ['./poduct-type.component.scss']
})
export class PoductTypeComponent implements OnInit {
 
  displayedColumns:string[]=['ID','Description'];
  
  dataSource= new productType(this.mainservice);
  ID:number;
  
  ngOnInit(): void {
  }
  newProductType = new ProductType();
  editProductType = new ProductType();
  constructor(private mainservice: MainserviceService) { }

  addProductType(){
    this.mainservice.postproducttype(this.newProductType);
  }

  updateProductType(){
    this.mainservice.putproducttype(this.editProductType.prodType_ID,this.editProductType);
  }

  deleteProductType(){
    this.mainservice.deleteproducttype(this.ID);
  }

}

export class productType extends DataSource<any>{

  constructor(private mainservice: MainserviceService){
    super();
  }
  connect(): Observable<productType[]>{
    return this.mainservice.getProductTypes();
  }
  disconnect(){

  }
}
