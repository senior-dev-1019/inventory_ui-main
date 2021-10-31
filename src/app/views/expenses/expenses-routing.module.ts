import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ExpensesCategoryComponent } from "./expenses-category/expenses-category.component";
import { ExpensesCreateComponent } from "./expenses-create/expenses-create.component";
import { ExpensesListComponent } from "./expenses-list/expenses-list.component";

const routes: Routes = [
  {
    path: "add",
    component: ExpensesCreateComponent,
  },
  {
    path: "view",
    component: ExpensesListComponent,
  },
  {
    path: "category",
    component: ExpensesCategoryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExpensesRoutingModule {}
