import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'event-form';

  submitted = false;
  signupForm: FormGroup;
  // signupForm: FormGroup = new FormGroup({
  //   name: new FormControl(['', Validators.required]),
  //   email: new FormControl(['', [Validators.required, Validators.email]]),
  //   phone: new FormControl(['', Validators.required])
  // })

  constructor(private fb: FormBuilder) { 
    this.signupForm = this.fb.group({
      name: this.fb.control('', [Validators.required]),
      email: this.fb.control('', [Validators.required, Validators.email]),
      phone: this.fb.control('')
    });
  }

  ngOnInit() {
    // this.initializeFormGroup();
  }

  // initializeFromGroup() {
  //   this.registerForm = this.formBuilder.group({
  //     username: ['', Validators.required],
  //     firstName: ['', Validators.required],
  //     lastName: ['', Validators.required],
  //     email: ['', [Validators.required, Validators.email]],
  //     phone: ['', Validators.required],
  //     birthDate: ['', Validators.required],
  //     password: ['', [Validators.required, Validators.minLength(6)]],
  //     confirmPassword: ['', Validators.required],
  //     acceptTerms: [false, Validators.requiredTrue]
  //   }, {
  //       validator: this.mustMatch('password', 'confirmPassword')
  //   });
  // }

  get f() { return this.signupForm.controls; }

  // mustMatch(controlName: string, matchingControlName: string) {
  //   return (formGroup: FormGroup) => {
  //       const control = formGroup.controls[controlName];
  //       const matchingControl = formGroup.controls[matchingControlName];
  //       if (matchingControl.errors && !matchingControl.errors.mustMatch) {
  //           // return if another validator has already found an error on the matchingControl
  //           return;
  //       }
  //       // set error on matchingControl if validation fails
  //       if (control.value !== matchingControl.value) {
  //           matchingControl.setErrors({ mustMatch: true });
  //       } else {
  //           matchingControl.setErrors(null);
  //       }
  //   }
  // }

  onSubmit() {
      this.submitted = true;
      if (this.signupForm.invalid) {
        return;
    }
  }

  onReset() {
    this.submitted = false;
    this.signupForm.reset();
  }
}
