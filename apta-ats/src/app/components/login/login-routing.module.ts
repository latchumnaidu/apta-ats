import { SignUpComponent } from './sign-up/sign-up.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { LoginComponent } from './login.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SignInComponent } from './sign-in/sign-in.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    children: [
      {path: '', redirectTo: 'landing-page', pathMatch: 'full'},
      {path: '***', redirectTo: 'landing-page', pathMatch: 'full'},
      {path: 'landing-page', component: LandingPageComponent},
      {path: 'signIn', component: SignInComponent},
      {path: 'signUp', component: SignUpComponent},
      {path: 'feedback', component: FeedbackComponent},
      {path: 'forgot-psw', component: ForgotPasswordComponent},
    ]
   },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginRoutingModule {}
