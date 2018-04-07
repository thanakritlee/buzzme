import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Calendar } from '../models/calendar';

import 'rxjs/add/operator/map';

@Injectable()
export class CalendarService {

  constructor(private http: Http) { }

  private serverApi = 'http://localhost:3000/api/calendar';

  public getCalendar(id: number): Observable<Calendar> {
    // Construct URI to api with the user id.
    let URI = this.serverApi + '/' + id;
    return this.http.get(URI)
      // json-ify each element of the array.
      .map(res => res.json())
      // type-cast each element to be a Calendar object.
      .map(res => <Calendar>res);
  }

}
