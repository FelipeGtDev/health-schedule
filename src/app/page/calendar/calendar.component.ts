import { Component } from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatLabel} from "@angular/material/form-field";

@Component({
  selector: 'app-calendar',
  standalone: true,
    imports: [
        MatButton,
        MatLabel
    ],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss'
})
export class CalendarComponent {

}
