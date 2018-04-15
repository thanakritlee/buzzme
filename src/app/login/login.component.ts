import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  usernameInput = "";
  passwordInput = "";

  constructor(
    private loginService: LoginService
  ) { }

  ngOnInit() {
  }

  login() {
    this.loginService.setLogin().subscribe();
  }

}
