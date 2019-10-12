import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
confirmMail = false;
submitted = false;
forgotPswForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.inItForm();
  }
  inItForm() {
   this.forgotPswForm = this.fb.group({
      email: ['', [
        Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')
      ]]
    });
  }
  get form() {
    return this.forgotPswForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (this.forgotPswForm.invalid) {
      return;
    } else {
      this.confirmMail = true;
    }
  }

}
