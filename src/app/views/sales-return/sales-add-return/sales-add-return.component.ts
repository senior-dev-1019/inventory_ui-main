import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sales-add-return',
  templateUrl: './sales-add-return.component.html',
  styleUrls: ['./sales-add-return.component.scss']
})
export class SalesAddReturnComponent implements OnInit {
  options: string[] = ['recieved', 'pending'];
  constructor() { }

  ngOnInit(): void {
  }

}
