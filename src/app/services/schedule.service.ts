import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  constructor(private http: HttpClient) { }

  urlBaseApi = 'http://localhost:8081/healfin-back';

    findSchedules(params: any) {
          return this.http.get(this.urlBaseApi + '/schedule', {params})
        }
}
