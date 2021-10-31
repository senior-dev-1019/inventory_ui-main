import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchasesAddComponent } from './purchases-add/purchases-add.component';
import { PurchasesListComponent } from './purchases-list/purchases-list.component';
import { PurchasesRoutingModule } from './purchases-routing.module';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    PurchasesAddComponent,
    PurchasesListComponent
  ],
  imports: [
    CommonModule,
    PurchasesRoutingModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    NgbModule
  ]
})
export class PurchasesModule { }
