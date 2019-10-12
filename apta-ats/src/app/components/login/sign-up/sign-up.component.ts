import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  signInForm: FormGroup;
  submitted = false;
    constructor(private router: Router,
                private fb: FormBuilder) { }
    ngOnInit() {
      this.inItForm();
    }

    inItForm() {
      this.signInForm = this.fb.group({
        signIn_type: 'manager',
        email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        name: ['', [Validators.required]],
      });
    }
    get form() {
      return this.signInForm.controls;
    }
    onSubmit() {
      this.submitted = true;
      if (this.signInForm.invalid) {
          return;
      }
    }
}
