import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PurchasesAddComponent } from "./purchases-add/purchases-add.component";
import { PurchasesListComponent } from "./purchases-list/purchases-list.component";

const routes: Routes = [
  {
    path: "add",
    component: PurchasesAddComponent,
  },
  {
    path: "view",
    component: PurchasesListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PurchasesRoutingModule {}
