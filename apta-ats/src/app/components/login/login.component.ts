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
  }

  feedbackPage() {
    this.router.navigate(['./login/feedback']);
  }
  ngOnDestroy() {
  }
}
