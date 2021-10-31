import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { QuotationCreateComponent } from "./quotation-create/quotation-create.component";
import { QuotationListComponent } from "./quotation-list/quotation-list.component";
import { QuotationRoutingModule } from "./quotation-routing.module";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatInputModule } from "@angular/material/input";
@NgModule({
  declarations: [QuotationCreateComponent, QuotationListComponent],
  imports: [
    CommonModule,
    QuotationRoutingModule,
    NgbModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatInputModule,
  ],
})
export class QuotationModule {}
