import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpensesCreateComponent } from './expenses-create/expenses-create.component';
import { ExpensesListComponent } from './expenses-list/expenses-list.component';
import { ExpensesCategoryComponent } from './expenses-category/expenses-category.component';
import { ExpensesRoutingModule } from './expenses-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [
    ExpensesCreateComponent,
    ExpensesListComponent,
    ExpensesCategoryComponent
  ],
  imports: [
    CommonModule,
    ExpensesRoutingModule,
    TranslateModule,
    NgbModule
  ]
})
export class ExpensesModule { }
