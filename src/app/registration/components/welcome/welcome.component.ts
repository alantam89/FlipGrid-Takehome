import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/registration/services/register.service';
import { controlNames } from '../../constants/register.constants';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {
  controlNames = controlNames;
  registerForm: { [key: string]: String };

  constructor(private registerService: RegisterService) {}

  ngOnInit(): void {
    this.registerForm = this.registerService.getForm();
  }
}
