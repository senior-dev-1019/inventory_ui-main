import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdjustmentCreateComponent } from './adjustment-create/adjustment-create.component';
import { AdjustmentListComponent } from './adjustment-list/adjustment-list.component';
import { AdjustmentRoutingModule } from './adjustment-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgxPaginationModule } from 'ngx-pagination';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [
    AdjustmentCreateComponent,
    AdjustmentListComponent
  ],
  imports: [
    CommonModule,
    AdjustmentRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    NgxDatatableModule,
    TranslateModule
  ]
})
export class AdjustmentModule { }
