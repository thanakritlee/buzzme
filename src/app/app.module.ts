import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { RouterModule, Routes } from '@angular/router';
import { FullCalendarModule } from 'ng-fullcalendar';
import { FormsModule } from '@angular/forms';

import { HttpModule } from '@angular/http';
import { UserService } from './services/user.service';
import { CalendarService } from './services/calendar.service';
import { LoginService } from './services/login.service';

import { AppRoutingModule } from './routing/app-routing.module';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { MyTimetableComponent } from './my-timetable/my-timetable.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { FreeTimeDetailComponent } from './free-time-detail/free-time-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    UsersComponent,
    MyTimetableComponent,
    AboutComponent,
    LoginComponent,
    FreeTimeDetailComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    AppRoutingModule,
    HttpModule,
    FullCalendarModule,
    FormsModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [
    UserService,
    CalendarService,
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }