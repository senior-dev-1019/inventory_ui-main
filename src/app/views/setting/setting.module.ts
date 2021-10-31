import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupPermissionsComponent } from './group-permissions/group-permissions.component';
import { WareshouseComponent } from './wareshouse/wareshouse.component';
import { CatergoryComponent } from './catergory/catergory.component';
import { BrandComponent } from './brand/brand.component';
import { CurrencyComponent } from './currency/currency.component';
import { UnitComponent } from './unit/unit.component';
import { BackupComponent } from './backup/backup.component';
import { SettingRoutingModule } from './setting-routing.module';
import { SystemSettingComponent } from './system-setting/system-setting.component';



@NgModule({
  declarations: [
    GroupPermissionsComponent,
    WareshouseComponent,
    CatergoryComponent,
    BrandComponent,
    CurrencyComponent,
    UnitComponent,
    BackupComponent,
    SystemSettingComponent
  ],
  imports: [
    CommonModule,
    SettingRoutingModule
  ]
})
export class SettingModule { }
