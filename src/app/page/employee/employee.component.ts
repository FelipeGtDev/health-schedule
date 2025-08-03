import {Component, OnInit} from '@angular/core';

import {CommonModule, NgClass, NgForOf} from "@angular/common";
import {FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {employeeDataMock} from "./employee-data-mock";
import {calendarDataMock} from "../calendar/caledar-data";

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgClass,
    NgForOf
  ],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.scss'
})
export class EmployeeComponent implements OnInit {

  employeeSearchForm: FormGroup;



  employeeData = employeeDataMock
  employeeDataMock: any[] = [];

  funcoes = [
    {id: 5, role: 'Administrador'},
    {id: 2, role: 'Enfermeiro'},
    {id: 1, role: 'Médico'},
    {id: 4, role: 'Psicólogo'},
    {id: 3, role: 'Recepcionista'},
  ]
  exibirListaFuncionarios = false;

  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.employeeSearchForm = this.formBuilder.group({
      employeeName: ['',],
      employeeRole: ['',],
    });
  }

  ngOnInit(): void {

  }

  findEmployees() {

  }



  buscar() {
    this.exibirListaFuncionarios = true;
    this.employeeDataMock = this.employeeData;
    console.log('teste')
  }

  protected readonly calendarData = calendarDataMock;
}
