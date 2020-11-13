import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  Validator,
  Validators,
  FormGroup,
  AbstractControl,
} from '@angular/forms';
import { RegisterService } from '../../services/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  controlNames = {
    firstName: 'firstName',
    email: 'email',
    password: 'password',
  };
  constructor(
    private formBuilder: FormBuilder,
    private registerService: RegisterService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      email: [
        '',
        {
          validators: [Validators.required, Validators.email],
          updateOn: 'blur',
        },
      ],
      password: [
        '',
        {
          validators: [Validators.required, Validators.minLength(8)],
          updateOn: 'blur',
        },
      ],
    });
  }

  onSubmit() {
    if (this.form.invalid) {
      console.log('invalid');
      const fnVal = this.form.controls[this.controlNames.firstName].value;
      const emailVal = this.form.controls[this.controlNames.email].value;
      const passVal = this.form.controls[this.controlNames.password].value;
      console.log('fn: ' + fnVal + 'email: ' + emailVal + 'pass: ' + passVal);
      const firstErrorElement = document.getElementsByClassName(
        'has-error'
      )[0] as HTMLElement;
      firstErrorElement.getElementsByTagName('input')[0].focus();
    } else {
      // save to service
      this.registerService.saveForm(this.form.value);
      this.router.navigateByUrl('welcome');
    }
  }
}
