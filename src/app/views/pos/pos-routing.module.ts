
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PosComponent } from "./pos/pos.component";

const routes: Routes = [
  {
    path: "pos",
    component: PosComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PosRoutingModule {}
