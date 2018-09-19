import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HelloComponent} from './components/hello/hello.component';
import {AuthPanelComponent} from './components/auth/auth-panel/auth-panel.component';

const routes: Routes = [
  { path: 'hello', component: HelloComponent },
  { path: 'auth', component: AuthPanelComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
