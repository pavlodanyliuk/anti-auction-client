import { BrowserModule } from '@angular/platform-browser';
import {Injectable, NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UiModule } from './modules/ui/ui.module';
import { HelloComponent } from './components/hello/hello.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './modules/auth/auth.module';
import {ToastrModule} from 'ngx-toastr';
import {AuthService} from './services/auth/auth.service';
import {ToastService} from './services/toast/toast.service';
import {environment} from '../environments/environment';
import {UserService} from './services/user/user.service';


@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    req = req.clone({
      setHeaders: {
        Authorization: sessionStorage.getItem('authToken')
      }
    });
    return next.handle(req);
  }
}

@Injectable()
export class AddressInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    req = req.clone({
      url: environment.base_url + req.url
    });
    return next.handle(req);
  }
}

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent
  ],
  imports: [
    BrowserModule,
    UiModule,
    AppRoutingModule,
    AuthModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot()
  ],
  providers: [
    ToastService,
    AuthService,
    UserService,
    { provide: HTTP_INTERCEPTORS,
      useClass: AddressInterceptor,
      multi: true},
    { provide: HTTP_INTERCEPTORS,
      useClass: AuthenticationInterceptor,
      multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
