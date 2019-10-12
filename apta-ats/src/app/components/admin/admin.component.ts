import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  feedback = true;
  dateMonth;
  constructor(
  ) {
   const months    = ['JAN', 'FEB', 'MAR', 'APR',
   'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
   const now = new Date();
   const thisMonth = months[now.getMonth()];
   this.dateMonth = {date: now.getDate(), month: thisMonth};
  }

  ngOnInit() {
  }

}
