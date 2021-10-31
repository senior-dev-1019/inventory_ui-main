import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AddProductComponent } from "./add-product/add-product.component";
import { BarcodeComponent } from "./barcode/barcode.component";
import { ViewProductComponent } from "./view-product/view-product.component";

const routes: Routes = [
  {
    path: "add",
    component: AddProductComponent,
  },
  {
    path: "view",
    component: ViewProductComponent,
  },
  {
    path: "print",
    component: BarcodeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
