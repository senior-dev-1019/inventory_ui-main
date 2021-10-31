import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quotation-create',
  templateUrl: './quotation-create.component.html',
  styleUrls: ['./quotation-create.component.scss']
})
export class QuotationCreateComponent implements OnInit {
  options: string[] = ['Pending', 'Completed'];
  constructor() { }

  ngOnInit(): void {
  }

}
