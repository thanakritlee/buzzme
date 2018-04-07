import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import "rxjs/add/observable/of";

@Injectable()
export class LoginService {

  isLogin = false;

  constructor() { }

  getLogin(): Observable<boolean> {
    return Observable.of(this.isLogin);
  }

  setLogin(): Observable<boolean> {
    this.isLogin = true;
    return Observable.of(true);
  }

}
