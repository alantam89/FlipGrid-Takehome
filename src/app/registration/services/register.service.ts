import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  private registerForm;
  constructor() {}

  public saveForm(form: FormGroup) {
    this.registerForm = form;
  }
  public getForm() {
    return this.registerForm;
  }
}
