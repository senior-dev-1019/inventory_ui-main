import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupplierReportComponent } from './supplier-report/supplier-report.component';
import { CustomerReportComponent } from './customer-report/customer-report.component';
import { PurchaseReportComponent } from './purchase-report/purchase-report.component';
import { SaleReportComponent } from './sale-report/sale-report.component';
import { ReportRoutingModule } from './report-routing.module';
import { QuantityAlertComponent } from './quantity-alert/quantity-alert.component';
import { WarehoseReportComponent } from './warehose-report/warehose-report.component';
import { ProfitLossReportComponent } from './profit-loss-report/profit-loss-report.component';
import { PurchasesComponent } from './payments/purchases/purchases.component';
import { SalesComponent } from './payments/sales/sales.component';
import { SalesReturnComponent } from './payments/sales-return/sales-return.component';
import { PurchaseReturnComponent } from './payments/purchase-return/purchase-return.component';



@NgModule({
  declarations: [
    SupplierReportComponent,
    CustomerReportComponent,
    PurchaseReportComponent,
    SaleReportComponent,
    QuantityAlertComponent,
    WarehoseReportComponent,
    ProfitLossReportComponent,
    PurchasesComponent,
    SalesComponent,
    SalesReturnComponent,
    PurchaseReturnComponent
  ],
  imports: [
    CommonModule,
    ReportRoutingModule
  ]
})
export class ReportModule { }
