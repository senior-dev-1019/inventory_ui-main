import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchaseReturnAddComponent } from './purchase-return-add/purchase-return-add.component';
import { PurchaseReturnListComponent } from './purchase-return-list/purchase-return-list.component';
import { PurchasesRoutingModule } from '../purchases/purchases-routing.module';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PurchaseReturnRoutingModule } from './purchase-return-routing.module';



@NgModule({
  declarations: [
    PurchaseReturnAddComponent,
    PurchaseReturnListComponent
  ],
  imports: [
    CommonModule,
    PurchaseReturnRoutingModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatMenuModule,
    NgbModule
  ]
})
export class PurchaseReturnModule { }
