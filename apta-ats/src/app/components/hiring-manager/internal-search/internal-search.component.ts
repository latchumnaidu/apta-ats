import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-internal-search',
  templateUrl: './internal-search.component.html',
  styleUrls: ['./internal-search.component.scss']
})
export class InternalSearchComponent implements OnInit {
  names = ['Name_1', 'Name_1', 'Name_1', 'Name_1', 'Name_1'];
  constructor() { }

  ngOnInit() {
  }

}
