import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProductComponent } from './add-product/add-product.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { BarcodeComponent } from './barcode/barcode.component';
import { ProductRoutingModule } from './product-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgxPaginationModule } from 'ngx-pagination';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select'
import { MatFormFieldModule } from '@angular/material/form-field';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    AddProductComponent,
    ViewProductComponent,
    BarcodeComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    SharedComponentsModule,
    NgbModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    NgxDatatableModule,
    MatSelectModule,
    MatFormFieldModule,
    TranslateModule
  ]
})
export class ProductModule { }
