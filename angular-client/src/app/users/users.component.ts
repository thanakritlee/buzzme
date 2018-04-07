import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(
    private userService: UserService
  ) { }

  private user_list: User[] = [];

  ngOnInit() {
    console.log('init before');
    this.getUsers();
    console.log('init after');
  }

  public getUsers() {
    console.log('getUser() before');
    this.userService.getAllUsers().subscribe(
      response => {
      this.user_list = response
      console.log(this.user_list)
      },
    );
    console.log('getUser() after');
    
  }

  

}
