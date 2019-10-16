import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-visitors',
  templateUrl: './admin-visitors.component.html',
  styleUrls: ['./admin-visitors.component.scss']
})
export class AdminVisitorsComponent implements OnInit {
  users = ['NVidia Groups Hyderabad', 'KP Capital Groups Hyderabad', 'ADANI Hydearabad', 'Adidas', 'AACT Hyderabad', 'TCS Hyderabad'];
  constructor() { }

  ngOnInit() {
  }

}
