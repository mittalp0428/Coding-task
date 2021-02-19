import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Enrolee } from '../../interfaces/enrolee.interfaces';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class EnroleeService {
    public get empDetailSubject$() {
        return this._empDetailSubject$;
    }

    public get enroleeDetailSubject$() {
        return this._enroleeDetailSubject$;
    }
    private _empDetailSubject$ = new BehaviorSubject(null);
    private _enroleeDetailSubject$ = new BehaviorSubject(null);
    private apiURL: string;
    private denoUrl: string;

    constructor(private http: HttpClient) {
        this.apiURL = 'assets/data/';
        this.denoUrl = 'localhost:8081/'
    }

    public getEnroleeList() {
      return this.http.get<Enrolee[]>(this.denoUrl + 'enrolees')
    }

    public getEnroleeListHardCoded() {
      /* getting cross origin */
      return this.http.get<Enrolee[]>(this.apiURL + 'enrolees.json');
    }

    public getEnroleeDetailsHardCoded(id: string) {
      const data = this.http.get<Enrolee>(this.apiURL + 'enrolee.' + id + '.json');
      this._empDetailSubject$.next(data);
    }

    public getEnroleeDetails(id: string) {
        const data = this.http.get<Enrolee>(this.denoUrl + 'enrollees/' + id);
        this._enroleeDetailSubject$.next(data);
    }

    public saveEnroleeDetails(id: string, payload) {
      return this.http.put<Enrolee>(this.denoUrl + 'enrollees/' + id, payload);
    }
}
