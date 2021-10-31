import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SalsCreateComponent } from "./sals-create/sals-create.component";
import { SalsListComponent } from "./sals-list/sals-list.component";

const routes: Routes = [
  {
    path: "add",
    component: SalsCreateComponent,
  },
  {
    path: "view",
    component: SalsListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SalesRoutingModule {}
