import { Component, OnInit } from '@angular/core';
import {ToastService} from '../../../services/toast/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private toastService: ToastService) { }

  ngOnInit() {
  }
}
