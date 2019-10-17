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

  constructor(private dataShare: DataShareService) { }
subscription: Subscription;
  ngOnInit() {
    this.toggle();
    this.subscription = this.dataShare.dataSubject.subscribe(res => {
      this.updateProfile = res;
    });
  }
  home() {}
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
