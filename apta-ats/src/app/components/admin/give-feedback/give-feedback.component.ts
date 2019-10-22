import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-give-feedback',
  templateUrl: './give-feedback.component.html',
  styleUrls: ['./give-feedback.component.scss']
})
export class GiveFeedbackComponent implements OnInit {
  feedbackType = 'Bug';
  constructor() { }

  ngOnInit() {
  }

}
