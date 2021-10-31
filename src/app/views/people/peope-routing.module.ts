import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CustomerListComponent } from "./customer-list/customer-list.component";
import { SupplierListComponent } from "./supplier-list/supplier-list.component";
import { UserListComponent } from "./user-list/user-list.component";

const routes: Routes = [
  {
    path: "customer",
    component: CustomerListComponent,
  },
  {
    path: "supplier",
    component: SupplierListComponent,
  },
  {
    path: "user",
    component: UserListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PeopleRoutingModule {}
