import { Router } from '@angular/router';
import { DataShareService } from 'src/app/data-share.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import * as $ from 'jquery';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-hiring-manager',
  templateUrl: './hiring-manager.component.html',
  styleUrls: ['./hiring-manager.component.scss']
})
export class HiringManagerComponent implements OnInit, OnDestroy {
  updateProfile = false;
  notifications = ['02:19 PM', '03:19 PM', '04:19 PM', '05:19 PM', '06:19 PM', '07:19 PM', ];
  constructor(
    private dataShare: DataShareService,
    private router: Router
    ) { }
subscription: Subscription;
  ngOnInit() {
    this.toggle();
    this.subscription = this.dataShare.dataSubject.subscribe(res => {
      this.updateProfile = res;
    });
  }
  home() {
    this.router.navigate(['./hiring-manager/dashboard']);
    this.dataShare.setData(true);
  }
  contact() {
    this.router.navigate(['./hiring-manager/contact']);
  }
  settings() {
    this.router.navigate(['./hiring-manager/settings']);
  }
  profile() {
    this.router.navigate(['./hiring-manager/profile']);
  }
  postJobs() {
    this.router.navigate(['./hiring-manager/jobs']);
  }
  inbox() {
    this.router.navigate(['./hiring-manager/inbox']);
  }
  internalSearch() {
    this.router.navigate(['./hiring-manager/internalSearch']);
  }
  template() {
    this.router.navigate(['./hiring-manager/template']);
  }
  giveFeedBack() {
    this.router.navigate(['./hiring-manager/give-feedback']);
  }
  signOut() {
    this.router.navigate(['./login']);
  }
  toggle() {
    $('#menu-toggle').click((e) => {
      e.preventDefault();
      $('#wrapper').toggleClass('toggled');
    });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
