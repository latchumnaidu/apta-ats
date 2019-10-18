import { Router } from '@angular/router';
import { DataShareService } from './../../../data-share.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  JobList = ['Java', 'Python', 'PHP', 'Android', 'Mean Stack'];
  fromRecruiter = false;
  constructor(
    private dataShare: DataShareService,
    private router: Router) { }

  ngOnInit() {
    this.dataShare.dataSubject.next(false);
    const value = this.dataShare.getData();
    this.fromRecruiter = value ? true : false;
  }
  manageRecruiters() {
    this.router.navigate(['./hiring-manager/recruiters']);
  }
}
