import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranferCreateComponent } from './tranfer-create/tranfer-create.component';
import { TranferListComponent } from './tranfer-list/tranfer-list.component';
import { TransferListRoutingModule } from './transfer-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatIconModule} from '@angular/material/icon'
import {MatMenuModule} from '@angular/material/menu'
import {MatButtonModule} from '@angular/material/button'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { TranslateModule } from '@ngx-translate/core';
@NgModule({
  declarations: [
    TranferCreateComponent,
    TranferListComponent
  ],
  imports: [
    CommonModule,
    TransferListRoutingModule,
    NgbModule,
    MatIconModule,
    MatMenuModule,
    TranslateModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule
  ]
})
export class TransferModule { }
