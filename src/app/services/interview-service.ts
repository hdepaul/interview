import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { add, set } from 'date-fns'
import { utcToZonedTime, format } from 'date-fns-tz'

@Injectable()
export class InterviewService {

    constructor(private http: HttpClient) { }

    url = 'http://localhost:5000/'; //TODO use nginx to configure url to point to differente ports

    getTimeSlots(selectedDate: string, duration: number): Observable<Date[]> {
        
        return this.http.get<Date[]>(`${this.url}api/Interview?selectedDate=${selectedDate}&duration=${duration}`);
    }

}