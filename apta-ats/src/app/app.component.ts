import { Subscription } from 'rxjs';
import { DataShareService } from './data-share.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  subMenu = false;
  title = 'apta -ats';
  feedback = false;
  subscription: Subscription;
  constructor(private router: Router,
              private dataShare: DataShareService) {}
  ngOnInit() {
    this.subscription = this.dataShare.dataSubject.subscribe(res => {
      const user = sessionStorage.getItem('user_type');
      if (res && (user === 'admin')) {
        this.feedback = true;
      }
    });
  }
  home() {
    this.router.navigate(['./home']);
    this.subMenu = false;
  }
  contact() {
    this.router.navigate(['./contact']);
    this.subMenu = false;
  }
  pricing() {
    this.router.navigate(['./pricing']);
    this.subMenu = false;
  }
  feedBack() {
    this.dataShare.dataSubject.next(true);
    sessionStorage.setItem('feedback', 'true');
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
