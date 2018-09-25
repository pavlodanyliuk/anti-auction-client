import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RegistrationComponent} from '../../components/auth/registration/registration.component';
import {LoginComponent} from '../../components/auth/login/login.component';
import {AuthPanelComponent} from '../../components/auth/auth-panel/auth-panel.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
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
