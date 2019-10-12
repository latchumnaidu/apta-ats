import { DataShareService } from './data-share.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  subMenu = false;
  constructor(private router: Router,
    private dataShare: DataShareService) {}
  title = 'apta -ats';
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
}
