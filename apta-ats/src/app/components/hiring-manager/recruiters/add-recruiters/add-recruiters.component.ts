import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-recruiters',
  templateUrl: './add-recruiters.component.html',
  styleUrls: ['./add-recruiters.component.scss']
})
export class AddRecruitersComponent implements OnInit {
  paymentForm: FormGroup;
  constructor(
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.paymentForm = this.fb.group({
      card_name: '',
      card_number: '',
      validity: '',
      cvv: '',
      plan: ''
    });
  }
  viewRecruiters() {
    this.router.navigate(['./hiring-manager/recruiters/view']);
  }
}
