import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-purchase-return-add',
  templateUrl: './purchase-return-add.component.html',
  styleUrls: ['./purchase-return-add.component.scss']
})
export class PurchaseReturnAddComponent implements OnInit {
  options: string[] = ['completed', 'pending'];

  constructor() { }

  ngOnInit(): void {
  }

}
