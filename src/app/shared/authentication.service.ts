import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Student } from './student';
//import { User } from '@/_models';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<Student>;
    public currentUser: Observable<Student>;
    
    endpoint: string = 'http://localhost:8000/api';

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<Student>(JSON.parse(sessionStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): Student {
        return this.currentUserSubject.value;
    }

    login(student_email, password) { 
        let API_URL = `${this.endpoint}/login`;
        return this.http.post<any>(API_URL, { "user":{"student_email":student_email, "password":password }})
            .pipe(map(user => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                sessionStorage.setItem('currentUser', JSON.stringify(user));
                this.currentUserSubject.next(user);
                return user;
            }));
    }

    logout() {
        // remove user from local storage and set current user to null
        sessionStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
}