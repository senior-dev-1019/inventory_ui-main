import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { SupplierListComponent } from './supplier-list/supplier-list.component';
import { UserListComponent } from './user-list/user-list.component';
import { PeopleRoutingModule } from './peope-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    CustomerListComponent,
    SupplierListComponent,
    UserListComponent
  ],
  imports: [
    CommonModule,
    PeopleRoutingModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule
  ]
})
export class PeopleModule { }
