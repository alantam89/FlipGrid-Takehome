import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { RegisterService } from '../../services/register.service';
import { Router } from '@angular/router';
import { controlNames } from '../../constants/register.constants';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  controlNames = controlNames;
  showError = {
    [controlNames.FIRSTNAME]: false,
    [controlNames.EMAIL]: false,
    [controlNames.PASSWORD]: false,
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
        },
      ],
      password: [
        '',
        {
          validators: [Validators.required, Validators.minLength(8)],
        },
      ],
    });
  }

  setShowError(controlName: string, val: boolean) {
    this.showError[controlName] = val;
  }

  onSubmit() {
    Object.keys(this.showError).forEach((controlName) => {
      this.showError[controlName] = true;
    });
    if (this.form.invalid) {
      const firstErrorElement = document.getElementsByClassName(
        'has-error'
      )[0] as HTMLElement;
      firstErrorElement &&
        firstErrorElement.getElementsByTagName('input')[0].focus();
    } else {
      this.registerService.saveForm(this.form.value);
      // normally you'd wait for a successful API response before navigating
      this.router.navigateByUrl('welcome');
    }
  }
}
