import { DataShareService } from './../../../data-share.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
signInForm: FormGroup;
submitted = false;
  constructor(private router: Router,
              private dataShare: DataShareService,
              private fb: FormBuilder) { }

  ngOnInit() {
    this.inItForm();
    this.dataShare.dataSubject.next('true');
  }
  forgotPsw() {
    this.router.navigate(['./login/forgot-psw']);
  }
  signUpPage() {
    this.router.navigate(['./login/signUp']);
  }
  inItForm() {
    this.signInForm = this.fb.group({
      signIn_type: 'manager',
      email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  get form() {
    return this.signInForm.controls;
  }
  onSubmit() {
    this.submitted = true;

    this.dataShare.dataSubject.next('true');
    sessionStorage.setItem('user_type', 'admin');
    this.router.navigate(['./admin']);
    // stop here if form is invalid
    if (this.signInForm.invalid) {
        return;
    }
  }
}
