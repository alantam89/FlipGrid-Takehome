import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationRoutingModule } from './registration-routing.module';
import { RegisterComponent } from './components/register/register.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegistrationComponent } from './registration.component';

@NgModule({
  declarations: [RegisterComponent, WelcomeComponent, RegistrationComponent],
  imports: [CommonModule, RegistrationRoutingModule, ReactiveFormsModule],
})
export class RegistrationModule {}
