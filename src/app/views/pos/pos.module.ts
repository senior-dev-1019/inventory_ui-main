import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PosComponent } from './pos/pos.component';
import { PosRoutingModule } from './pos-routing.module';
import {MatSidenavModule} from '@angular/material/sidenav'
import { MatMenuModule } from '@angular/material/menu';


@NgModule({
  declarations: [
    PosComponent
  ],
  imports: [
    CommonModule,
    PosRoutingModule,
    MatSidenavModule,
    MatMenuModule
  ]
})
export class PosModule { }
