import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../../models/user';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private base_url = '/user';

  constructor( private http: HttpClient ) { }

  getById(id: number) {
    return this.http.get(this.base_url + '/' + id);
  }

  register(user: User) {
    console.log('in user.service');
    console.log(user);
    return this.http.post('/user/', user);
  }

  update(user: User) {
    return this.http.put(this.base_url + '/' + user.id, user);
  }

  delete(id: number) {
    return this.http.delete(this.base_url + '/' + id);
  }

}
