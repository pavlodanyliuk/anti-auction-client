import { Injectable } from '@angular/core';
import {User} from '../../models/user';
import {UserService} from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private userService: UserService
  ) { }



}
