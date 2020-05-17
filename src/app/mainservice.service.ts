import { Injectable } from '@angular/core';
import { Observable, from} from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { customers } from './customers/customers.component';
import { product } from './poducts/poducts.component';
import { employeeType } from './employee-type/employee-type.component';
import { productType } from './poduct-type/poduct-type.component';
import { salesEmployee } from './sale-employee/sale-employee.component';
import { Customers } from './Model/customers';
import { Products } from './Model/poducts';
import { ProductType } from './Model/poduct-type';
import { EmployeeType } from './Model/employee-type';
import { SaleEmployee } from './Model/sale-employee';


@Injectable({

  providedIn: 'root'
})
export class MainserviceService {

    private customerGetURL = 'https://localhost:44301/help/customers';
    private customerPutURL = 'https://localhost:44301/api/customers/';
    private customerPostURL = 'https://localhost:44301/api/customers/';
    private customerDeleteURL = 'https://localhost:44301/api/customers/';

    private productGetURL = 'https://localhost:44301/Help/Api/GET-api-ProductTypes';
    private productPutURL = 'https://localhost:44301/api/products/';
    private productPostURL = 'https://localhost:44301/api/products/';
    private productDeleteURL = 'https://localhost:44301/api/products/';

    private salesemployeeGetURL = 'https://localhost:44301/api/salesEmployee';
    private salesemployeePutURL = 'https://localhost:44301/api/salesEmployee/';
    private salesemployeePostURL = 'https://localhost:44301/api/salesEmployee/';
    private salesemployeeDeleteURL = 'https://localhost:44301/api/salesEmployee/';

    private producttypeGetURL = 'https://localhost:44301/api/ProductType';
    private producttypePutURL = 'https://localhost:44301/api/ProductType/';
    private producttypePostURL = 'https://localhost:44301/api/ProductType/';
    private producttypeDeleteURL = 'https://localhost:44301/api/ProductType/';

    private employeetypesGetURL = 'https://localhost:44301/api/employeetypes';
    private employeetypesPutURL = 'https://localhost:44301/api/employeetypes/';
    private employeetypesPostURL = 'https://localhost:44301/api/employeetypes/';
    private employeetypesDeleteURL = 'https://localhost:44301/api/employeetypes/';

    constructor(private http:HttpClient){}

    public getCustomers():Observable<customers[]>{
      return this.http.get<customers[]>(this.customerGetURL);
    }

    public getproducts():Observable<product[]>{
      return this.http.get<product[]>(this.productGetURL);
    }

    public getProductTypes():Observable<productType[]>{
      return this.http.get<productType[]>(this.producttypeGetURL);
    }

    public getsalesEmployee():Observable<salesEmployee[]>{
      return this.http.get<salesEmployee[]>(this.salesemployeeGetURL);
    }
    public getemployeetypes():Observable<employeeType[]>{
      return this.http.get<employeeType[]>(this.employeetypesGetURL);
    }

    public postCustomers(customers:Customers){
      this.http.post<Customers>(this.customerPostURL, customers).subscribe()
    }

    public putCustomer(ID:number, customers:Customers){
      var rope1 =this.customerPutURL;
      var rope2 =rope1.concat(ID.toString());
      this.http.put<Customers>(rope2,customers).subscribe()
    }

    public deleteCustomer(ID:number){
      var rope1=this.customerDeleteURL;
      var rope2=rope1.concat(ID.toString());
      this.http.delete<Customers[]>(rope2).subscribe()
    }

    public postproducts(product:Products){
      this.http.post<Products>(this.productPostURL, product).subscribe()
    }

    public putproducts(ID:number, product:Products){
      var string1=this.productPutURL;
      var string2=string1.concat(ID.toString());
      this.http.put<Products>(string2, product).subscribe()
    }

    public deleteproducts(ID:number){
      var string1=this.productDeleteURL;
      var string2=string1.concat(ID.toString());
      this.http.delete<Products[]>(string2).subscribe()
    }

    public postproducttype(productType:ProductType){
      this.http.post<ProductType>(this.producttypePostURL, productType).subscribe()
    }

    public putproducttype(ID:number, productType:ProductType){
      var test1=this.producttypePutURL;
      var test2=test1.concat(ID.toString());
      this.http.put<ProductType>(test2, productType).subscribe()
    }

    public deleteproducttype(ID:number){
      var test1=this.producttypeDeleteURL;
      var test2=test1.concat(ID.toString());
      this.http.delete<ProductType[]>(test2).subscribe()
    }

    public postsalesemployee(salesEmployee:SaleEmployee){
      this.http.post<SaleEmployee>(this.salesemployeePostURL, salesEmployee).subscribe()
    }

    public putsalesemployee(ID:number, salesEmployee:SaleEmployee){
      var change1=this.salesemployeePutURL;
      var change2=change1.concat(ID.toString());
      this.http.put<SaleEmployee>(change2, salesEmployee).subscribe()
    }

    public deletesalesemployee(ID:number){
      var change1=this.salesemployeeDeleteURL;
      var change2=change1.concat(ID.toString());
      this.http.delete<SaleEmployee[]>(change2).subscribe()
    }

    public postemployeetype(employeeType:EmployeeType){
      this.http.post<employeeType>(this.employeetypesPostURL, employeeType)
    }

    public putemployeetype(ID:number, employeeType:EmployeeType){
      var type1=this.employeetypesPutURL;
      var type2=type1.concat(ID.toString());
      this.http.put<employeeType>(type2, employeeType).subscribe()
    }

    public deleteemployeetype(ID:number){
      var type1=this.employeetypesDeleteURL;
      var type2=type1.concat(ID.toString());
      this.http.delete<employeeType[]>(type2).subscribe()
    }
}

