import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-warehose-report",
  templateUrl: "./warehose-report.component.html",
  styleUrls: ["./warehose-report.component.scss"],
})
export class WarehoseReportComponent implements OnInit {
  items = [
    {
      name: "Quotation",
    },
    {
      name: "Sales",
    },
    {
      name: "Sales Return",
    },
    {
      name: "Purchase Return",
    },
    {
      name: "Expenses",
    },
  ];
  currentName = "Quotation";
  constructor() {}

  ngOnInit(): void {}
  changeTab(name) {
    console.log(name)
    this.currentName = name.name;
  }
}
