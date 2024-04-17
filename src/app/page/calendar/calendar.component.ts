import { Component } from '@angular/core';
import {calendarDataMock} from "./caledar-data";


@Component({
  selector: 'app-calendar',
  standalone: true,
    imports: [

    ],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss'
})
export class CalendarComponent {

  calendarData = calendarDataMock

}
