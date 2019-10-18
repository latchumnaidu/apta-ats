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
  choosePlan = false;
  plans = [
    {plan: 'Free Trial', cost: '0', valid: '1 Day' },
    {plan: 'Standard', cost: '750', valid: '3 Mon'},
    {plan: 'Business', cost: '1250', valid: '6 Mon'}
  ];
  selectedPlan;
  planDetails: any;
  constructor(
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.paymentForm = this.fb.group({
      name: '',
      recruiter: '',
      email: '',
      recruiter_type: '',
      plan: ''
    });
  }
  viewRecruiters() {
    this.router.navigate(['./hiring-manager/recruiters/view']);
  }
  planView(item) {
    this.selectedPlan = item;
  }
  selectedPlanDetails() {
    this.planDetails = this.selectedPlan;
    this.selectedPlan = null;
    this. choosePlan = false;
  }
  submitForm() {
    this.paymentForm.get('plan').setValue(this.planDetails.plan);
    const value = this.paymentForm.value;
    console.log(value, 'form value');
    this.paymentForm.reset();
    this.planDetails = null;
  }
}
