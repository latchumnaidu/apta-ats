import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-recruiters',
  templateUrl: './all-recruiters.component.html',
  styleUrls: ['./all-recruiters.component.scss']
})
export class AllRecruitersComponent implements OnInit {
  allRecruiters = [
    {name: 'Recruiter_1', role: 'Recruiter', img: '../../../../../assets/Scenery/one.jpg'},
    {name: 'Recruiter_2', role: 'Recruiter', img: '../../../../../assets/Scenery/two.jpg'},
    {name: 'Recruiter_3', role: 'Recruiter', img: '../../../../../assets/Scenery/three.jpg'},
    {name: 'Recruiter_4', role: 'Recruiter', img: '../../../../../assets/Scenery/four.jpg'},
    {name: 'Recruiter_5', role: 'Recruiter', img: '../../../../../assets/Scenery/five.jpg'},
    {name: 'Recruiter_6', role: 'Recruiter', img: '../../../../../assets/Scenery/six.jpg'},
    {name: 'Recruiter_7', role: 'Recruiter', img: '../../../../../assets/Scenery/seven.jpg'},
    {name: 'Recruiter_8', role: 'Recruiter', img: '../../../../../assets/Scenery/eight.jpg'},
  ];

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }
  addRecruiters() {
    this.router.navigate(['./hiring-manager/recruiters/add']);
  }
}
