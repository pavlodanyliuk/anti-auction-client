import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RegistrationComponent} from '../../components/auth/registration/registration.component';
import {LoginComponent} from '../../components/auth/login/login.component';
import {AuthPanelComponent} from '../../components/auth/auth-panel/auth-panel.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    RegistrationComponent,
    LoginComponent,
    AuthPanelComponent
  ],
  exports: [
    AuthPanelComponent
  ]
})
export class AuthModule { }
