import { Component } from '@angular/core';
import {calendarDataMock} from "./caledar-data";
import {NgForOf} from "@angular/common";


@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [
    NgForOf

  ],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss'
})
export class CalendarComponent {

  calendarData = calendarDataMock

}
