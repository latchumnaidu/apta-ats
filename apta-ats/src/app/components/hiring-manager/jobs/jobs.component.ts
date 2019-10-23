import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
export interface Skills {
  name: string;
}
export interface AllotmentType {
  sr_no: number;
  content: string;
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
  addnewAllotment = '';
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  skills: Skills[] = [
    {name: 'Python'},
    {name: 'Java'},
    {name: 'Angular'},
  ];
  postJob: FormGroup;
  secondFormGroup: FormGroup;
  templates = ['Perk Template', 'Job Introduction', 'Make Mandatory', 'Make Mandatory', 'Make Mandatory'];
  mcqTest: boolean;
  constructor(
    private fb: FormBuilder,
    private modalService: NgbModal,
    ) {}
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
  allotment: AllotmentType[] = [
    {sr_no: 1, content: 'MCQ Test'},
    {sr_no: 2, content: 'Phone Interview'},
    {sr_no: 3, content: 'Technical Round'},
    {sr_no: 4, content: 'HR Round'},
  ];
  jobsites = [
    '../../../../assets/jobSites/1.png',
    '../../../../assets/jobSites/2.png',
    '../../../../assets/jobSites/3.png',
    '../../../../assets/jobSites/4.png',
    '../../../../assets/jobSites/5.png',
    '../../../../assets/jobSites/6.png',
    '../../../../assets/jobSites/7.png',
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
  openMcqTest(data) {
    if (data.content === 'MCQ Test') {
      this.mcqTest = true;
    } else {
      this.mcqTest = false;
    }
  }
  addNewInterview() {
   const length = this.allotment.length;
   this.allotment.push({sr_no: length + 1, content: this.addnewAllotment});
   this.addnewAllotment = '';
  }
  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }
  openSeccessMessage(success) {
    this.modalService.open(success, { centered: true });
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
