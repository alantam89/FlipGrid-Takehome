import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  private registerForm: { [key: string]: string };
  constructor() {}

  public saveForm(form: { [key: string]: string }) {
    this.registerForm = form;
  }
  public getForm() {
    return this.registerForm;
  }
}
