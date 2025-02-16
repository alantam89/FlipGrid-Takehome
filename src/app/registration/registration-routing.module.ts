import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { RegistrationComponent } from './registration.component';
import { WelcomeGuard } from './guards/welcome.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'register',
    pathMatch: 'full',
  },
  {
    path: '',
    component: RegistrationComponent,
    children: [
      {
        path: 'register',
        component: RegisterComponent,
      },
      {
        path: 'welcome',
        canActivate: [WelcomeGuard],
        component: WelcomeComponent,
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'register',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrationRoutingModule {}
