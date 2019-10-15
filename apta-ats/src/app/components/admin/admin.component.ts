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
    this.subscription = this.dataShare.dataSubject.subscribe(res => {
      if (res) {
        this.router.navigate(['./admin/feedback']);
      }
    });
  }
  home() {
    this.router.navigate(['./admin/home']);
  }
  settings() {
    this.router.navigate(['./admin/settings']);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
