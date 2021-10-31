import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CustomerReportComponent } from "./customer-report/customer-report.component";
import { PurchaseReturnComponent } from "./payments/purchase-return/purchase-return.component";
import { PurchasesComponent } from "./payments/purchases/purchases.component";
import { SalesReturnComponent } from "./payments/sales-return/sales-return.component";
import { SalesComponent } from "./payments/sales/sales.component";
import { ProfitLossReportComponent } from "./profit-loss-report/profit-loss-report.component";
import { PurchaseReportComponent } from "./purchase-report/purchase-report.component";
import { QuantityAlertComponent } from "./quantity-alert/quantity-alert.component";
import { SaleReportComponent } from "./sale-report/sale-report.component";
import { SupplierReportComponent } from "./supplier-report/supplier-report.component";
import { WarehoseReportComponent } from "./warehose-report/warehose-report.component";

const routes: Routes = [
  {
    path: "supplier-report",
    component: SupplierReportComponent,
  },
  {
    path: "sale-report",
    component: SaleReportComponent,
  },
  {
    
    path: "profit-loss",
    component: ProfitLossReportComponent,
  },
  {
    path:'payment-sales',
    component:SalesComponent
  },
  {
    path:'payment-return',
    component:PurchasesComponent
  },
  {
    path:'payment-sales-add',
    component:SalesReturnComponent
  },
  {
    path:'payment-purchase-add',
    component:PurchaseReturnComponent
  },
  {
    path: "warehouse-report",
    component: WarehoseReportComponent,
  },
  {
    path: "purchase-report",
    component: PurchaseReportComponent,
  },
  {
    path: "customer-report",
    component: CustomerReportComponent,
  },
  {
    path: "quantity-alert",
    component: QuantityAlertComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportRoutingModule {}
