import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BackupComponent } from "./backup/backup.component";
import { BrandComponent } from "./brand/brand.component";
import { CatergoryComponent } from "./catergory/catergory.component";
import { CurrencyComponent } from "./currency/currency.component";
import { GroupPermissionsComponent } from "./group-permissions/group-permissions.component";
import { SystemSettingComponent } from "./system-setting/system-setting.component";
import { UnitComponent } from "./unit/unit.component";
import { WareshouseComponent } from "./wareshouse/wareshouse.component";

const routes: Routes = [
  {
    path: "currency",
    component: CurrencyComponent,
  },
  {
    path: "system",
    component: SystemSettingComponent,
  },
  {
    path: "permissions",
    component: GroupPermissionsComponent,
  },
  {
    path: "warehouse",
    component: WareshouseComponent,
  },
  {
    path: "category",
    component: CatergoryComponent,
  },
  {
    path: "brand",
    component: BrandComponent,
  },
  {
    path: "unit",
    component: UnitComponent,
  },
  {
    path: "backup",
    component: BackupComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingRoutingModule {}
