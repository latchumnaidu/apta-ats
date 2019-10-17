import { DataShareService } from './../../../data-share.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.scss']
})
export class UpdateProfileComponent implements OnInit {
  plans = [
    {plan: 'Free Trial', cost: '0', valid: '1 Day' },
    {plan: 'Standard', cost: '750', valid: '3 Mon'},
    {plan: 'Business', cost: '1250', valid: '6 Mon'}
  ];
  selectedPlan;
  adminDashboardForm: FormGroup;
  paymentForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private modalService: NgbModal,
    private dataShare: DataShareService,
  ) { }

  ngOnInit() {
    // this.fileUpload();
    this.inItForm();
    this.dataShare.dataSubject.next(true);
  }
  inItForm() {
    this.adminDashboardForm = this.fb.group({
      name: ['', [Validators.required]],
      dob: ['', [Validators.required]],
      language: ['1', [Validators.required]],
      phone: ['', [Validators.required]],
      location: ['', [Validators.required]],
      gender: ['', [Validators.required]],
    });
    this.paymentForm = this.fb.group({
      card_name: '',
      card_number: '',
      validity: '',
      cvv: '',
      plan: ''
    });
  }
  get form() {
    return this.adminDashboardForm.controls;
  }
  fileUpload() {
    const realFileBtn = document.getElementById('real-file');
    const customBtn = document.getElementById('custom-button');
    const customTxt = document.getElementById('custom-text');

    customBtn.addEventListener('click',  () => {
      realFileBtn.click();
    });

    realFileBtn.addEventListener('change',  () => {
      // if (realFileBtn.value) {
      //   customTxt.innerHTML = realFileBtn.value.match(
      //     /[\/\\]([\w\d\s\.\-\(\)]+)$/
      //   )[1];
      // } else {
      //   customTxt.innerHTML = 'No file chosen, yet.';
      // }
      console.log(realFileBtn, 'file value');
    });
  }
  home() {
    this.router.navigate(['./admin/home']);
  }
  planView(item) {
    this.selectedPlan = item;
  }
  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }
  dashBoard() {
    this.dataShare.dataSubject.next(false);
    this.router.navigate(['./hiring-manager/dashboard']);
  }
}
