import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { QuotationCreateComponent } from "./quotation-create/quotation-create.component";
import { QuotationListComponent } from "./quotation-list/quotation-list.component";

const routes: Routes = [
  {
    path: "add",
    component: QuotationCreateComponent,
  },
  {
    path: "view",
    component: QuotationListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuotationRoutingModule {}
