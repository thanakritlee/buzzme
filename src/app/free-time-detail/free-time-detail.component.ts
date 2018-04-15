import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-free-time-detail',
  templateUrl: './free-time-detail.component.html',
  styleUrls: ['./free-time-detail.component.scss']
})
export class FreeTimeDetailComponent implements OnInit {

  invitedUser: string;
  userInvited: boolean = false;
  interestInput: string = '';
  showSwimmingInterest: boolean = false;
  showStudyInterest: boolean = false;

  swimmingAr: {name: string, location: string}[] = [
    {
      name: 'Jim',
      location: 'Caulfield'
    },
    {
      name: 'Oli',
      location: 'Clayton'
    },
    {
      name: 'Amy',
      location: 'City'
    }
  ];
  
  studyAr: {name: string, location: string}[] = [
    {
      name: 'Frank',
      location: 'Berwick'
    },
    {
      name: 'Rose',
      location: 'City'
    },
    {
      name: 'Pam',
      location: 'Armadale'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  onClickLookForEvent() {
    // Show interests that match, at the same time as the day of 
    // available event.
    
    if (this.interestInput == 'swimming') {
      this.showSwimmingInterest = true;
      this.showStudyInterest = false;
    }
    else if (this.interestInput == 'study') {
      this.showStudyInterest = true;
      this.showSwimmingInterest = false;
    }

  }

  onClickUser(userInterest) {
    this.userInvited = true;
    this.invitedUser = userInterest.name;
  }

}
