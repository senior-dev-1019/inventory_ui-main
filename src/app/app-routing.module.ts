import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthLayoutComponent } from "./shared/components/layouts/auth-layout/auth-layout.component";
import { AuthGaurd } from "./shared/services/auth.gaurd";
import { BlankLayoutComponent } from "./shared/components/layouts/blank-layout/blank-layout.component";
import { AdminLayoutSidebarLargeComponent } from "./shared/components/layouts/admin-layout-sidebar-large/admin-layout-sidebar-large.component";

const adminRoutes: Routes = [
  {
    path: "dashboard",
    loadChildren: () =>
      import("./views/dashboard/dashboard.module").then(
        (m) => m.DashboardModule
      ),
  },
  {
    path: "product",
    loadChildren: () =>
      import("./views/product/product.module").then((m) => m.ProductModule),
  },
  {
    path: "app",
    loadChildren: () =>
      import("./views/pos/pos.module").then((m) => m.PosModule),
  },
  {
    path: "transfer",
    loadChildren: () =>
      import("./views/transfer/transfer.module").then((m) => m.TransferModule),
  },
  {
    path: "adjustment",
    loadChildren: () =>
      import("./views/adjustment/adjustment.module").then(
        (m) => m.AdjustmentModule
      ),
  },
  {
    path:'auth',
    loadChildren: () =>
      import("./views/auth/auth.module").then(
        (m) => m.AuthModule
      ),
  },
  {
    path: "expenses",
    loadChildren: () =>
      import("./views/expenses/expenses.module").then((m) => m.ExpensesModule),
  },
  {
    path: "quotation",
    loadChildren: () =>
      import("./views/quotation/quotation.module").then(
        (m) => m.QuotationModule
      ),
  },
  {
    path: "purchases",
    loadChildren: () =>
      import("./views/purchases/purchases.module").then(
        (m) => m.PurchasesModule
      ),
  },
  {
    path: "sales",
    loadChildren: () =>
      import("./views/sales/sales.module").then((m) => m.SalesModule),
  },
  {
    path: "sales-return",
    loadChildren: () =>
      import("./views/sales-return/sales-return.module").then(
        (m) => m.SalesReturnModule
      ),
  },

  {
    path: "purchase-return",
    loadChildren: () =>
      import("./views/purchase-return/purchase-return.module").then(
        (m) => m.PurchaseReturnModule
      ),
  },

  {
    path: "people",
    loadChildren: () =>
      import("./views/people/people.module").then(
        (m) => m.PeopleModule
      ),
  },

  {
    path: "setting",
    loadChildren: () =>
      import("./views/setting/setting.module").then(
        (m) => m.SettingModule
      ),
  },

  {
    path: "report",
    loadChildren: () =>
      import("./views/report/report.module").then(
        (m) => m.ReportModule
      ),
  },

  {
    path: "uikits",
    loadChildren: () =>
      import("./views/ui-kits/ui-kits.module").then((m) => m.UiKitsModule),
  },
  {
    path: "forms",
    loadChildren: () =>
      import("./views/forms/forms.module").then((m) => m.AppFormsModule),
  },
  {
    path: "invoice",
    loadChildren: () =>
      import("./views/invoice/invoice.module").then((m) => m.InvoiceModule),
  },
  {
    path: "inbox",
    loadChildren: () =>
      import("./views/inbox/inbox.module").then((m) => m.InboxModule),
  },
  {
    path: "calendar",
    loadChildren: () =>
      import("./views/calendar/calendar.module").then(
        (m) => m.CalendarAppModule
      ),
  },
  {
    path: "chat",
    loadChildren: () =>
      import("./views/chat/chat.module").then((m) => m.ChatModule),
  },
  {
    path: "contacts",
    loadChildren: () =>
      import("./views/contacts/contacts.module").then((m) => m.ContactsModule),
  },
  {
    path: "tables",
    loadChildren: () =>
      import("./views/data-tables/data-tables.module").then(
        (m) => m.DataTablesModule
      ),
  },
  {
    path: "pages",
    loadChildren: () =>
      import("./views/pages/pages.module").then((m) => m.PagesModule),
  },
  {
    path: "icons",
    loadChildren: () =>
      import("./views/icons/icons.module").then((m) => m.IconsModule),
  },
];

const routes: Routes = [
  {
    path: "",
    redirectTo: "dashboard/v1",
    pathMatch: "full",
  },
  {
    path: "",
    component: AuthLayoutComponent,
    children: [
      {
        path: "sessions",
        loadChildren: () =>
          import("./views/sessions/sessions.module").then(
            (m) => m.SessionsModule
          ),
      },
    ],
  },
  {
    path: "",
    component: BlankLayoutComponent,
    children: [
      {
        path: "others",
        loadChildren: () =>
          import("./views/others/others.module").then((m) => m.OthersModule),
      },
    ],
  },
  {
    path: "",
    component: AdminLayoutSidebarLargeComponent,
    canActivate: [AuthGaurd],
    children: adminRoutes,
  },
  {
    path: "**",
    redirectTo: "others/404",
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      relativeLinkResolution: "legacy",
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
