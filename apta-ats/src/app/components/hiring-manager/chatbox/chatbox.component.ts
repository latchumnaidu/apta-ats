import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.scss']
})
export class ChatboxComponent implements OnInit {
  messages = [{
    Name: 'Ben Marcus',
    Message: 'Hi  : )'
  }, {
    Name: 'Michelle Pepe',
    Message: 'What\'s up?'
  }, {
    Name: 'Ben Marcus',
    Message: 'Nothing much, You?'
  }];
  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }
  backToApp() {
    this.router.navigate(['./hiring-manager/applications']);
  }
}
