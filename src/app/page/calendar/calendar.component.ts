import {Component, OnInit} from '@angular/core';
import {calendarDataMock} from "./caledar-data";
import {NgClass, NgForOf} from "@angular/common";
import {FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {ScheduleService} from "../../services/schedule.service";


@Component({
    selector: 'app-calendar',
    standalone: true,
    imports: [
        NgForOf,
        NgClass,
        ReactiveFormsModule
    ],
    templateUrl: './calendar.component.html',
    styleUrl: './calendar.component.scss'
})
export class CalendarComponent implements OnInit {

    calendarForm: FormGroup;
    calendarData = calendarDataMock

    constructor(
        // private service: ScheduleService,
        private formBuilder: FormBuilder,
    ) {
        this.calendarForm = this.formBuilder.group({});
    }

    ngOnInit(): void {
        this.calendarForm = this.formBuilder.group({
            patientName: ['',],
            professionalName: ['',],
            starDate: ['',],
            endDate: ['',],
        })
    }

    findSchedules() {
        // this.service.findSchedules(this.calendarForm.value).subscribe(
        //     (response) => {
        //         // this.calendarData = response
        //         // this.calendarForm.reset()
        //
        //     }
        // )
    }


}

