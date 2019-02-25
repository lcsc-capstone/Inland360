import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LoginForgotPasswordPage } from './login-forgot-password.page';

const routes: Routes = [
  {
    path: '',
    component: LoginForgotPasswordPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LoginForgotPasswordPage]
})
export class LoginForgotPasswordPageModule {}
