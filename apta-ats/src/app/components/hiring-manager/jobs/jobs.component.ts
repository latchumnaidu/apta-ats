import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';
export interface Skills {
  name: string;
}
@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  skills: Skills[] = [
    {name: 'Python'},
    {name: 'Java'},
    {name: 'Angular'},
  ];
  postJob: FormGroup;
  secondFormGroup: FormGroup;
  templates = ['Perk Template', 'Job Introduction', 'Make Mandatory', 'Make Mandatory', 'Make Mandatory'];
  constructor(private fb: FormBuilder) {}
  applicationDetails = [
    'Allow applicants to visible Client details',
    'Hide C2C Required from applicants',
    'Make Resume Mandatory',
    'Allow applicants to visible Client details',
    'Hide C2C Required from applicants',
    'Hide C2C Required from applicants',
    'Make Resume Mandatory',
    'Certificate Mandatory',
  ];
  allotment = [
    {sr_no: '1', content: 'MCQ Test'},
    {sr_no: '2', content: 'Phone Interview'},
    {sr_no: '3', content: 'Technical Round'},
    {sr_no: '4', content: 'HR Round'},
    {sr_no: '5', content: 'Optional'},
  ];
  ngOnInit() {

    this.postJob = this.fb.group({
      title: ['', Validators.required],
      client: ['', Validators.required],
      location: ['', Validators.required],
      code: ['', Validators.required],
      eligibility: ['', Validators.required],
      job_type: ['', Validators.required],
      job_validation: ['', Validators.required],
      req_c2c: ['', Validators.required],
      qualification: ['', Validators.required],
      skills: ['', Validators.required],
      description: ['', Validators.required],
    });
    this.secondFormGroup = this.fb.group({
      secondCtrl: ['', Validators.required]
    });
  }
  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.skills.push({name: value.trim()});
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(fruit: Skills): void {
    const index = this.skills.indexOf(fruit);

    if (index >= 0) {
      this.skills.splice(index, 1);
    }
  }
}
