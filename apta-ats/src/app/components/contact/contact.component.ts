import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  submitted = false;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.inItForm();
  }
inItForm() {
  this.contactForm = this.fb.group({
    name: [null, Validators.required],
    email: ['', [Validators.required,
              Validators.email,
              Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
    contact: [null, Validators.required],
    subject: [null, Validators.required],
    message: [null, Validators.required],
  });
}
/**
 *  convenience getter for easy access to form fields 8/8/2019 written by naidu
 */
get f() { return this.contactForm.controls; }
onSubmit() {
  this.submitted = true;

  // stop here if form is invalid
  if (this.contactForm.invalid) {
      return;
  }

}
}
