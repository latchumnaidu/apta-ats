import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  lat = 51.678418;
  lng = 7.809007;
  constructor() { }

  ngOnInit() {
  }

}
