import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-recruiters',
  templateUrl: './all-recruiters.component.html',
  styleUrls: ['./all-recruiters.component.scss']
})
export class AllRecruitersComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }
  addRecruiters() {
    this.router.navigate(['./hiring-manager/recruiters/add']);
  }
}
