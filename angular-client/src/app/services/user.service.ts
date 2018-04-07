import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/user';

import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  constructor(private http: Http) {}

  private serverApi = 'http://localhost:3000/api/users/';

  public getAllUsers(): Observable<User[]> {
    let URI = this.serverApi;
    return this.http.get(URI)
      // json-ify each element of the array.
      .map(res => res.json())
      // type-cast each element to be a User object.
      .map(res => <User[]>res);
  }

}
