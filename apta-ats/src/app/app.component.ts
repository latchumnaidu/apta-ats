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
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
