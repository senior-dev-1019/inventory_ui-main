import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

export interface IMenuItem {
  id?: string;
  title?: string;
  description?: string;
  type: string; // Possible values: link/dropDown/extLink
  name?: string; // Used as display text for item and title for separator type
  state?: string; // Router state
  icon?: string; // Material icon name
  tooltip?: string; // Tooltip text
  disabled?: boolean; // If true, item will not be appeared in sidenav.
  sub?: IChildItem[]; // Dropdown items
  badges?: IBadge[];
  active?: boolean;
}
export interface IChildItem {
  id?: string;
  parentId?: string;
  type?: string;
  name: string; // Display text
  state?: string; // Router state
  icon?: string;
  sub?: IChildItem[];
  active?: boolean;
}

interface IBadge {
  color: string; // primary/accent/warn/hex color codes(#fff000)
  value: string; // Display text
}

interface ISidebarState {
  sidenavOpen?: boolean;
  childnavOpen?: boolean;
}

@Injectable({
  providedIn: "root",
})
export class NavigationService {
  public sidebarState: ISidebarState = {
    sidenavOpen: true,
    childnavOpen: false,
  };
  selectedItem: IMenuItem;

  constructor() {}

  defaultMenu: IMenuItem[] = [
    {
      name: "Dashboard",
      description: "Dashboard",
      type: "link",
      icon: "i-Bar-Chart",
      state: "/dashboard/v1",
      
    },
    {
      name: "Products",
      description: "Products",
      type: "dropDown",
      icon: "i-Library",
      sub: [
        {
          icon: "i-Add-File",
          name: "Create Product",
          state: "/product/add",
          type: "link",
        },
        {
          icon: "i-Files",
          name: "Product List",
          state: "/product/view",
          type: "link",
        },
        {
          icon: "i-Bar-Code",
          name: "Print Barcode",
          state: "/product/print",
          type: "link",
        },
      ],
    },
    {
      name: "Adjustment",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      type: "dropDown",
      icon: "i-Edit-Map",
      sub: [
        {
          icon: "i-Add-File",
          name: "Create Adjustment",
          state: "/adjustment/add",
          type: "link",
        },
        {
          icon: "i-Files",
          name: "Adjustment List",
          state: "/adjustment/view",
          type: "link",
        },
      ],
    },

    {
      name: "Transfer",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      type: "dropDown",
      icon: "i-Left",
      sub: [
        {
          icon: "i-Add-File",
          name: "Create Transfer",
          state: "/transfer/add",
          type: "link",
        },
        {
          icon: "i-Files",
          name: "Transfer List",
          state: "/transfer/view",
          type: "link",
        },
      ],
    },
    {
      name: "Expenses",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      type: "dropDown",
      icon: "i-Wallet",
      sub: [
        {
          icon: "i-Add-File",
          name: "Create Expenses",
          state: "/expenses/add",
          type: "link",
        },
        {
          icon: "i-Files",
          name: "Expenses List",
          state: "/expenses/view",
          type: "link",
        },
        {
          icon: "i-Add-File",
          name: "Expenses Category",
          state: "/expenses/category",
          type: "link",
        },
      ],
    },

    {
        name: "Quotation",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        type: "dropDown",
        icon: "i-Checkout-Basket",
        sub: [
          {
            icon: "i-Add-File",
            name: "Create Quotation",
            state: "/quotation/add",
            type: "link",
          },
          {
            icon: "i-Files",
            name: "Quotation List",
            state: "/quotation/view",
            type: "link",
          },
          
        ],
      },
  
      {
        name: "Purchases",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        type: "dropDown",
        icon: "i-Receipt",
        sub: [
          {
            icon: "i-Add-File",
            name: "Create Purchases",
            state: "/purchases/add",
            type: "link",
          },
          {
            icon: "i-Files",
            name: "Purchases List",
            state: "/purchases/view",
            type: "link",
          },
          {
            icon: "i-Add-File",
            name: "Create Purchase Return",
            state: "/purchase-return/add",
            type: "link",
          },
          {
            icon: "i-Files",
            name: "Purchase Return List",
            state: "/purchase-return/view",
            type: "link",
          },
          
        ],
      },
  
      {
        name: "Sales",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        type: "dropDown",
        icon: "i-Full-Cart",
        sub: [
          {
            icon: "i-Add-File",
            name: "Create sales",
            state: "/sales/add",
            type: "link",
          },
          {
            icon: "i-Files",
            name: "sales List",
            state: "/sales/view",
            type: "link",
          },
          {
            icon: "i-Add-File",
            name: "Create Sales Return",
            state: "/sales-return/add",
            type: "link",
          },
          {
            icon: "i-Files",
            name: "Sales Return List",
            state: "/sales-return/view",
            type: "link",
          },
          
        ],
      },        
      {
        name: "People",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        type: "dropDown",
        icon: "i-Business-Mens",
        sub: [
          {
            icon: "i-Administrator",
            name: "Customer List",
            state: "/people/customer",
            type: "link",
          },
          {
            icon: "i-Administrator",
            name: "Supplier List",
            state: "/people/supplier",
            type: "link",
          },
          {
            icon: "i-Administrator",
            name: "User List",
            state: "/people/user",
            type: "link",
          },
          
        ],
      },
      {
        name: "Settings",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        type: "dropDown",
        icon: "i-Data-Settings",
        sub: [
          {
            icon: "i-Data-Settings",
            name: "System Settings",
            state: "/setting/system",
            type: "link",
          },
          {
            icon: "i-Key",
            name: "Group Permissions",
            state: "/setting/permissions",
            type: "link",
          },
          {
            icon: "i-Clothing-Store",
            name: "Warehouse",
            state: "/setting/warehouse",
            type: "link",
          },
          {
            icon: "i-Bookmark",
            name: "Brand",
            state: "/setting/brand",
            type: "link",
          },
          {
            icon: "i-Dollar",
            name: "Currency",
            state: "/setting/currency",
            type: "link",
          },
          {
            icon: "i-Quotes",
            name: "Unit",
            state: "/setting/unit",
            type: "link",
          },
          
          {
            icon: "i-Data-Backup",
            name: "Unit",
            state: "/setting/backup",
            type: "link",
          },
          
        ],
      },
      {
        name: "Report",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        type: "dropDown",
        icon: "i-Line-Chart",
        sub: [
          {
            icon: "i-Pie-Chart",
            name: "Profit and Loss",
            state: "/report/profit-loss",
            type: "link",
          },
          {
            icon: "i-Credit-Card",
            name: "Payments",
            state: "/report",
            type: "dropDown",
            sub: [
              {
                icon: "i-ID-Card",
                name: "Purchases",
                state: "/report/payment-return",
                type: "link",
              },
              {
                icon: "i-ID-Card",
                name: "Sales",
                state: "/report/payment-sales",
                type: "link",
              },
              {
                icon: "i-ID-Card",
                name: "Sales Return",
                state: "/report/payment-sales-add",
                type: "link",
              },
              {
                icon: "i-ID-Card",
                name: "Purchase Return",
                state: "/report/payment-purchase-add",
                type: "link",
              },
              
            ],
          },
          {
            icon: "i-Dollar",
            name: "Product Quantity Alerts",
            state: "/report/quantity-alert",
            type: "link",
          },
          {
            icon: "i-Pie-Chart",
            name: "Warehouse Report",
            state: "/report/warehouse-report",
            type: "link",
          },
          {
            icon: "i-Line-Chart",
            name: "Sale Report",
            state: "/report/sale-report",
            type: "link",
          },
          {
            icon: "i-Bar-Chart",
            name: "Purchase Report",
            state: "/report/purchase-report",
            type: "link",
          },
          {
            icon: "i-Bar-Chart",
            name: "Customer Report",
            state: "/report/customer-report",
            type: "link",
          },
          {
            icon: "i-Bar-Chart",
            name: "Supplier Report",
            state: "/report/supplier-report",
            type: "link",
          },
          
        ],
      },
    // {
    //   name: "UI kits",
    //   description: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
    //   type: "dropDown",
    //   icon: "i-Library",
    //   sub: [
    //     {
    //       icon: "i-Bell",
    //       name: "Alerts",
    //       state: "/uikits/alerts",
    //       type: "link",
    //     },
    //     {
    //       icon: "i-Split-Horizontal-2-Window",
    //       name: "Accordions",
    //       state: "/uikits/accordions",
    //       type: "link",
    //     },
    //     {
    //       icon: "i-Medal-2",
    //       name: "Badges",
    //       state: "/uikits/badges",
    //       type: "link",
    //     },
    //     {
    //       icon: "i-Arrow-Right-in-Circle",
    //       name: "Buttons",
    //       type: "dropDown",
    //       sub: [
    //         {
    //           name: "Bootstrap Buttons",
    //           state: "/uikits/buttons",
    //           type: "link",
    //         },
    //         {
    //           name: "Loding Buttons",
    //           state: "/uikits/buttons-loading",
    //           type: "link",
    //         },
    //       ],
    //     },
    //     {
    //       icon: "i-ID-Card",
    //       name: "Cards",
    //       state: "/uikits/cards",
    //       type: "link",
    //     },
    //     {
    //       icon: "i-Line-Chart-2",
    //       name: "Cards metrics",
    //       state: "/uikits/cards-metrics",
    //       type: "link",
    //     },
    //     {
    //       icon: "i-Credit-Card",
    //       name: "Cards widget",
    //       state: "/uikits/cards-widget",
    //       type: "link",
    //     },
    //     {
    //       icon: "i-Full-Cart",
    //       name: "Cards ecommerce",
    //       state: "/uikits/cards-ecommerce",
    //       type: "link",
    //     },
    //     {
    //       icon: "i-Duplicate-Window",
    //       name: "Modals",
    //       state: "/uikits/modals",
    //       type: "link",
    //     },
    //     {
    //       icon: "i-Speach-Bubble-3",
    //       name: "Popover",
    //       state: "/uikits/popover",
    //       type: "link",
    //     },
    //     {
    //       icon: "i-Like",
    //       name: "Rating",
    //       state: "/uikits/rating",
    //       type: "link",
    //     },
    //     {
    //       icon: "i-Loading-3",
    //       name: "Loaders",
    //       state: "/uikits/loaders",
    //       type: "link",
    //     },
    //   ],
    // },
    // {
    //   name: "Apps",
    //   description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    //   type: "dropDown",
    //   icon: "i-Computer-Secure",
    //   sub: [
    //     {
    //       icon: "i-Add-File",
    //       name: "Invoice Builder",
    //       state: "/invoice",
    //       type: "link",
    //     },
    //     { icon: "i-Email", name: "Inbox", state: "/inbox", type: "link" },
    //     {
    //       icon: "i-Speach-Bubble-3",
    //       name: "Chat",
    //       state: "/chat",
    //       type: "link",
    //     },
    //     {
    //       icon: "i-Calendar",
    //       name: "Calendar",
    //       state: "/calendar",
    //       type: "link",
    //     },
    //   ],
    // },
    // {
    //   name: "Forms",
    //   description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    //   type: "dropDown",
    //   icon: "i-File-Clipboard-File--Text",
    //   sub: [
    //     {
    //       icon: "i-File-Clipboard-Text--Image",
    //       name: "Basic components",
    //       state: "/forms/basic",
    //       type: "link",
    //     },
    //     {
    //       icon: "i-Split-Vertical",
    //       name: "Form layouts",
    //       state: "/forms/layouts",
    //       type: "link",
    //     },
    //     {
    //       icon: "i-Receipt-4",
    //       name: "Input Group",
    //       state: "/forms/input-group",
    //       type: "link",
    //     },
    //     {
    //       icon: "i-File-Edit",
    //       name: "Input Mask",
    //       state: "/forms/input-mask",
    //       type: "link",
    //     },
    //     {
    //       icon: "i-Tag-2",
    //       name: "Tag Input",
    //       state: "/forms/tag-input",
    //       type: "link",
    //     },
    //     {
    //       icon: "i-Width-Window",
    //       name: "Wizard",
    //       state: "/forms/wizard",
    //       type: "link",
    //     },
    //     {
    //       icon: "i-Crop-2",
    //       name: "Image Cropper",
    //       state: "/forms/img-cropper",
    //       type: "link",
    //     },
    //   ],
    // },
    // {
    //   name: "Data Tables",
    //   description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    //   type: "dropDown",
    //   icon: "i-File-Horizontal-Text",
    //   sub: [
    //     {
    //       icon: "i-File-Horizontal-Text",
    //       name: "List",
    //       state: "/tables/list",
    //       type: "link",
    //     },
    //     {
    //       icon: "i-Full-View-Window",
    //       name: "Fullscreen",
    //       state: "/tables/full",
    //       type: "link",
    //     },
    //     {
    //       icon: "i-Code-Window",
    //       name: "Paging",
    //       state: "/tables/paging",
    //       type: "link",
    //     },
    //     {
    //       icon: "i-Filter-2",
    //       name: "Filter",
    //       state: "/tables/filter",
    //       type: "link",
    //     },
    //   ],
    // },
    // {
    //   name: "Sessions",
    //   description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    //   type: "dropDown",
    //   icon: "i-Administrator",
    //   sub: [
    //     {
    //       icon: "i-Add-User",
    //       name: "Sign up",
    //       state: "/sessions/signup",
    //       type: "link",
    //     },
    //     {
    //       icon: "i-Checked-User",
    //       name: "Sign in",
    //       state: "/sessions/signin",
    //       type: "link",
    //     },
    //     {
    //       icon: "i-Find-User",
    //       name: "Forgot",
    //       state: "/sessions/forgot",
    //       type: "link",
    //     },
    //   ],
    // },
    // {
    //   name: "Pages",
    //   description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    //   type: "dropDown",
    //   icon: "i-Windows-2",
    //   sub: [
    //     {
    //       icon: "i-Male",
    //       name: "User Profile",
    //       state: "/pages/profile",
    //       type: "link",
    //     },
    //   ],
    // },
    // {
    //   name: "Icons",
    //   description: "600+ premium icons",
    //   type: "link",
    //   icon: "i-Cloud-Sun",
    //   state: "/icons/iconsmind",
    // },
    // {
    //   name: "Others",
    //   description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    //   type: "dropDown",
    //   icon: "i-Double-Tap",
    //   sub: [
    //     {
    //       icon: "i-Error-404-Window",
    //       name: "Not found",
    //       state: "/others/404",
    //       type: "link",
    //     },
    //   ],
    // },
    // {
    //   name: "Doc",
    //   type: "extLink",
    //   tooltip: "Documentation",
    //   icon: "i-Safe-Box1",
    //   state: "http://demos.ui-lib.com/gull-doc",
    // },
  ];

  // sets iconMenu as default;
  menuItems = new BehaviorSubject<IMenuItem[]>(this.defaultMenu);
  // navigation component has subscribed to this Observable
  menuItems$ = this.menuItems.asObservable();

  // You can customize this method to supply different menu for
  // different user type.
  // publishNavigationChange(menuType: string) {
  //   switch (userType) {
  //     case 'admin':
  //       this.menuItems.next(this.adminMenu);
  //       break;
  //     case 'user':
  //       this.menuItems.next(this.userMenu);
  //       break;
  //     default:
  //       this.menuItems.next(this.defaultMenu);
  //   }
  // }
}
