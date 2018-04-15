import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  isLogin: boolean;

  constructor(
    private loginService: LoginService
  ) { }

  ngOnInit() {
    this.getLoginStatus();
  }

  ngAfterViewChecked() {
    this.getLoginStatus();
  }



  public getLoginStatus() {
    this.loginService.getLogin().subscribe(
      response => this.isLogin = response,
    )
  }

}
