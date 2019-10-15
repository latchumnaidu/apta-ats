import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.scss']
})
export class AdminUsersComponent implements OnInit {
users = ['NVidia Groups Hyderabad', 'KP Capital Groups Hyderabad', 'ADANI Hydearabad', 'Adidas', 'AACT Hyderabad','TCS Hyderabad'];
  constructor() { }

  ngOnInit() {
  }

}
