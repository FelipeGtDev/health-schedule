import {Component, OnInit} from '@angular/core';
import {HeaderComponent} from "../../shared/header/header.component";
import {NgForOf, NgIf} from "@angular/common";
import {FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {patientDataMock} from "./patient-data-mock";

@Component({
  selector: 'app-patient',
  standalone: true,
  imports: [
    HeaderComponent,
    NgForOf,
    NgIf,
    ReactiveFormsModule
  ],
  templateUrl: './patient.component.html',
  styleUrl: './patient.component.scss'
})
export class PatientComponent implements OnInit {

  patientSearchForm: FormGroup;

  patientData = patientDataMock;
  patientDataMock: any[] = [];
  showPatients = false;


  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.patientSearchForm = this.formBuilder.group({
      patientName: ['',],
      patientPhone: ['',],
    });
  }

  ngOnInit(): void {

  }

  findEmployees() {

  }


  buscar() {
    this.showPatients = !this.showPatients;
    this.patientDataMock = this.patientData;

  }


  openRegistrationModal() {
    console.log('Botão do cabeçalho clicado! (paciente)')
  }

  formatCpf(cpf: string): string {
    if (!cpf || cpf.length < 11) return '';
    const first = cpf.slice(3, 6);
    const second = cpf.slice(6, 9);
    return '***.' + first + '.' + second + '-**';
  }
}
