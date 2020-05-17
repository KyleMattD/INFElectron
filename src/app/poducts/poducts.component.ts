import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/table';
import { MainserviceService } from '../mainservice.service';
import { Observable } from 'rxjs';
import { Products } from '../Model/poducts';

@Component({
  selector: 'app-poducts',
  templateUrl: './poducts.component.html',
  styleUrls: ['./poducts.component.scss']
})
export class PoductsComponent implements OnInit {
  
  displayedColumns:string[]=['ID','Name','Number'];
  dataSource= new product(this.mainservice);
  ID:number;
  
  ngOnInit(): void {
  }
  newProduct = new Products();
  editProduct = new Products();
  constructor(private mainservice: MainserviceService) { }

  addProduct(){
    this.mainservice.postproducts(this.newProduct);
  }

  updateProduct(){
    this.mainservice.putproducts(this.editProduct.prod_ID,this.editProduct);
  }

  deleteProduct(){
    this.mainservice.deleteproducts(this.ID);
  }

}
export class product extends DataSource<any>{

  constructor(private mainservice: MainserviceService){
    super();
  }
  connect(): Observable<product[]>{
    return this.mainservice.getproducts();
  }
  disconnect(){

  }
}