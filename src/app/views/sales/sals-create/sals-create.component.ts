import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sals-create',
  templateUrl: './sals-create.component.html',
  styleUrls: ['./sals-create.component.scss']
})
export class SalsCreateComponent implements OnInit {
  options: string[] = ['completed', 'pending','ordered'];
  options1: string[] = ['Paid', 'partial','pending'];
  constructor() { }

  ngOnInit(): void {
  }

}
