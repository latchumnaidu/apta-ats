import { Component, OnInit } from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
export interface Skills {
  name: string;
}
@Component({
  selector: 'app-jobs-list',
  templateUrl: './jobs-list.component.html',
  styleUrls: ['./jobs-list.component.scss']
})
export class JobsListComponent implements OnInit {
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  addnewAllotment = '';
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  skills: Skills[] = [
    {name: 'Python'},
  ];
  updateJob = false;
  reviews = false;
  postJob: FormGroup;
  notifications = ['Rajveeer', 'Mohammad', 'John Doe', 'Albert' ];
  templates = ['Perk Template', 'Job Introduction', 'Make Mandatory', 'Make Mandatory', 'Make Mandatory'];
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.postJob = this.fb.group({
      title: ['Java Developer', Validators.required],
      client: ['', Validators.required],
      location: ['Hyderabad', Validators.required],
      code: ['22211', Validators.required],
      eligibility: ['Fresher', Validators.required],
      job_type: ['Intern', Validators.required],
      job_validation: ['', Validators.required],
      req_c2c: ['1L/A', Validators.required],
      qualification: ['option', Validators.required],
      skills: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  // for skills adding and removing methods start here
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
  // end
}
