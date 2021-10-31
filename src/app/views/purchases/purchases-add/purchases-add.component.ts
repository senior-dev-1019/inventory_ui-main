import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-purchases-add',
  templateUrl: './purchases-add.component.html',
  styleUrls: ['./purchases-add.component.scss']
})
export class PurchasesAddComponent implements OnInit {
  options: string[] = ['recieved', 'pending','ordered'];
  constructor() { }

  ngOnInit(): void {
  }

}
