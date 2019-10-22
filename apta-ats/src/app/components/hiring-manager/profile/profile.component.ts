import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  adminDashboardForm: FormGroup;
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.inItForm();
  }
  inItForm() {
    this.adminDashboardForm = this.fb.group({
      name: ['Hiring manager_1', [Validators.required]],
      dob: ['09-05-1995', [Validators.required]],
      language: ['1', [Validators.required]],
      phone: ['8998745100', [Validators.required]],
      location: ['Hyderabad', [Validators.required]],
      gender: ['1', [Validators.required]],
      company: ['Aptagrim', [Validators.required]],
      role: ['Hr Manager', [Validators.required]],
      zip: ['500038', [Validators.required]],
      address: ['Aptagrim Consulting LLP MCR AYODHYA, Plot# 200, Level 6 Madinaguda, Mythri Nagar HYDERABAD', [Validators.required]],
    });
  }
  get form() {
    return this.adminDashboardForm.controls;
  }
}
