import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './shared/components';

import { HomeRoutingModule } from './home/home-routing.module';
import { DetailRoutingModule } from './detail/detail-routing.module';
import { CustomersComponent } from './customers/customers.component';
import { PoductTypeComponent } from './poduct-type/poduct-type.component';
import { PoductsComponent } from './poducts/poducts.component';
import { SaleEmployeeComponent } from './sale-employee/sale-employee.component';
import { EmployeeTypeComponent } from './employee-type/employee-type.component';

const routes: Routes = [
  {path: "customer", component: CustomersComponent},
  {path:"product-type", component:PoductTypeComponent},
  {path:"product", component:PoductsComponent},
  {path:"salesemployee", component:SaleEmployeeComponent},
  {path:"employeetype", component:EmployeeTypeComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    HomeRoutingModule,
    DetailRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
