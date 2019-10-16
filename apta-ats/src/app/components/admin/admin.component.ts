import { DataShareService } from './../../data-share.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit, OnDestroy {
  feedback = true;
  dateMonth;
  subscription: Subscription;
  notifications = ['02:19 PM', '03:19 PM', '04:19 PM', '05:19 PM', '06:19 PM', '07:19 PM', ];
  constructor(
    private router: Router,
    private dataShare: DataShareService
  ) {
   const months    = ['JAN', 'FEB', 'MAR', 'APR',
   'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
   const now = new Date();
   const thisMonth = months[now.getMonth()];
   this.dateMonth = {date: now.getDate(), month: thisMonth};
  }

  ngOnInit() {
    this.dataShare.dataSubject.next('true');
    sessionStorage.setItem('user_type', 'admin');
  }
  home() {
    this.router.navigate(['./admin/home']);
  }
  settings() {
    this.router.navigate(['./admin/settings']);
  }
  mail() {
    this.router.navigate(['./admin/mail']);
  }
  template() {
    this.router.navigate(['./admin/template']);
  }
  users() {
    this.router.navigate(['./admin/users']);
  }
  signOut() {
    this.dataShare.dataSubject.next('');
    this.router.navigate(['./login']);
  }
  feedBack() {
    this.router.navigate(['./admin/feedback']);
  }
  profile() {
    this.router.navigate(['./admin/profile']);
  }
  subscriptionPage() {
    this.router.navigate(['./admin/subscription']);
  }
  visitors() {
    this.router.navigate(['./admin/visitors']);
  }
  ngOnDestroy() {
  }
}
