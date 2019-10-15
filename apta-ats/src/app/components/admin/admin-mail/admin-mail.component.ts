import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-mail',
  templateUrl: './admin-mail.component.html',
  styleUrls: ['./admin-mail.component.scss']
})
export class AdminMailComponent implements OnInit {
  names = ['Name_1', 'Name_1', 'Name_1', 'Name_1', 'Name_1']
  constructor() { }

  ngOnInit() {
  }

}
