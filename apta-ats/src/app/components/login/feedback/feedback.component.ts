import { Router } from '@angular/router';
import { DataShareService } from './../../../data-share.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {
  feedbackType = 'Bug';
  constructor(
    private dataShare: DataShareService,
    private router: Router
  ) { }

  ngOnInit() {
  }
  landingPage() {
    this.router.navigate(['./login/landing-page']);
  }
  signInPage() {
    this.router.navigate(['./login/signIn']);
  }
  signUpPage() {
    this.router.navigate(['./login/signUp']);
  }
}
