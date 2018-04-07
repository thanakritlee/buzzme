import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from '../about/about.component';
import { HomeComponent } from '../home/home.component';
import { MyTimetableComponent } from '../my-timetable/my-timetable.component';
import { UsersComponent } from '../users/users.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'users', component: UsersComponent },
  { path: 'mytimetable', component: MyTimetableComponent },
  { path: 'about', component: AboutComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }