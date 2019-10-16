import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-hiring-manager',
  templateUrl: './hiring-manager.component.html',
  styleUrls: ['./hiring-manager.component.scss']
})
export class HiringManagerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.toggle();
  }
  home() {}
  toggle() {
    $('#menu-toggle').click((e) => {
      e.preventDefault();
      $('#wrapper').toggleClass('toggled');
    });
  }
}
