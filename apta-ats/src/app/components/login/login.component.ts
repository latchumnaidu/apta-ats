import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataShareService } from 'src/app/data-share.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  feedback = '';
  subscription: Subscription;
 constructor(
    private dataShare: DataShareService,
    private router: Router) { }

  ngOnInit() {
    this.subscription = this.dataShare.dataSubject.subscribe(res => {
      //   this.feedback = res;
      if (res) {
        sessionStorage.setItem('feedback', 'true');
        this.router.navigate(['./login/feedback']);
      }
      this.feedback = sessionStorage.getItem('feedback');
    });
  }
  signInPage() {
    sessionStorage.setItem('feedback', 'true');
    this.feedback = sessionStorage.getItem('feedback');
    this.router.navigate(['./login/signIn']);
  }
  landingPage() {
    sessionStorage.setItem('feedback', '');
    this.feedback = sessionStorage.getItem('feedback');
    this.router.navigate(['./login/landing-page']);
    // this.dataShare.dataSubject.next(false);
  }
  signUpPage() {
    sessionStorage.setItem('feedback', 'true');
    this.feedback = sessionStorage.getItem('feedback');
    this.router.navigate(['./login/signUp']);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
