import { Routes } from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {EmployeeComponent} from "./page/employee/employee.component";
import {PatientComponent} from "./page/patient/patient.component";
import {CalendarComponent} from "./page/calendar/calendar.component";
import {FinancialComponent} from "./page/financial/financial.component";

export const routes: Routes = [
    {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'employee', component: EmployeeComponent},
    {path: 'patient', component: PatientComponent},
    {path: 'calendar', component: CalendarComponent},
    {path: 'financial', component: FinancialComponent},
];
