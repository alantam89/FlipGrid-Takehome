import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationRoutingModule } from './registration-routing.module';
import { RegisterComponent } from './components/register/register.component';
import { WelcomeComponent } from './components/welcome/welcome/welcome.component';

@NgModule({
  declarations: [RegisterComponent, WelcomeComponent],
  imports: [CommonModule, RegistrationRoutingModule],
})
export class RegistrationModule {}
