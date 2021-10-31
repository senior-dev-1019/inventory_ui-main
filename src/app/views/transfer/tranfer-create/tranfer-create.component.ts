import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tranfer-create',
  templateUrl: './tranfer-create.component.html',
  styleUrls: ['./tranfer-create.component.scss']
})
export class TranferCreateComponent implements OnInit {
  options: string[] = ['Pending', 'Completed'];
  constructor() { }

  ngOnInit(): void {
  }

}
