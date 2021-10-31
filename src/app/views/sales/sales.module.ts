import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalsCreateComponent } from './sals-create/sals-create.component';
import { SalsListComponent } from './sals-list/sals-list.component';
import { SalesRoutingModule } from './sales-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    SalsCreateComponent,
    SalsListComponent
  ],
  imports: [
    CommonModule,
    SalesRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatAutocompleteModule,
    NgbModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class SalesModule { }
