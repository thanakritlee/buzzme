import {
  Component,
  OnInit,
  ViewChild
} from '@angular/core';
import {
  CalendarComponent
} from 'ng-fullcalendar';
import {
  Options
} from 'fullcalendar';
import { CalendarService } from '../services/calendar.service';
import { Calendar } from '../models/calendar';

@Component({
  selector: 'app-my-timetable',
  templateUrl: './my-timetable.component.html',
  styleUrls: ['./my-timetable.component.scss']
})
export class MyTimetableComponent implements OnInit {

  calendar: Calendar[][] = [];
  available_time: Calendar[] = [];

  calendarOptions: Options;
  @ViewChild(CalendarComponent) ucCalendar: CalendarComponent;

  constructor(private calendarService: CalendarService) {}

  ngOnInit() {
    this.getCalendar()
  }

  getCalendar() {
    this.calendarService.getAllCalendar().subscribe(
      response => {
        /**
         * Once the calendar data have been recieved from the server.
         */
        this.calendar = response;
        
        this.getAvailableTime();
        this.calculateAvailableTime();

        this.calendarOptions = {
          editable: true,
          eventLimit: false,
          header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay,listMonth'
          },
          events: this.available_time
        }
      },
    );
  }

  calculateAvailableTime() {
    for (let event of this.calendar[0]) {
      // events = [{event}, {event}, {event}];
      /* if (!('end' in event)) {
        // If 'end' event is all day.
        // remove whole day.
        
        // find matching date.
        // remove date.
        for (let av_event of this.available_time) {
          if (av_event)
        }
      }
      else {

      } */

      
      
      // Delete day from available_time where event shows up.
      // Get date from unavailable time, event.
      let date = event.start.slice(0, 10);
      // Find date in available_time.
      let matched_date_index = 0;
      for (let av_event of this.available_time) {
        if (av_event.start.slice(0, 10) == date) {
          // If date match, delete from list.
          break;
        }
        matched_date_index += 1;
      }
      this.available_time.splice(matched_date_index, 1);

    }
  }

  getAvailableTime() {
    // For year
    for (let i = 2018; i < 2019; i++) {
      // For month
      for (let j = 1; j <= 12; j++) {
        // For day
        for (let k = 1; k <= 31; k++) {

          var  month = j < 10 ? '0' + j : '' + j;
          var day = k < 10 ? '0' + k : '' + k;

          this.available_time.push({
            title: 'Available',
            start: '' + i + '-' + month + '-' + day + 'T00:00:00'
          });
        }
      }
    }
  }

}
