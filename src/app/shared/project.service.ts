import { Injectable } from '@angular/core';
import { Project } from './project';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Student } from '../model/user';
import { AuthenticationService } from './authentication.service';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ProjectService {

  currentUser: Student;

  endpoint: string = 'http://localhost:8000/api/projects';
  //endpoint: string = 'api';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient, private authenticationService: AuthenticationService) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  // Add student
  AddProject(data: Project): Observable<any> {
  let API_URL = `${this.endpoint}/add-project`;
    return this.http.post(API_URL, data)
      .pipe(
        catchError(this.errorMgmt)
      )
  }

  // Get all students
  GetProjects() {
    return this.http.get(`${this.endpoint}`);
  }

  // Get all current project list
  GetCurrentProjectsList(id) {
    let API_URL = `${this.endpoint}/current-user-project-list/${id}`;
    return this.http.get(API_URL, { headers: this.headers })
    .pipe(
      map((res: Response) => {
        return res || {}
      }),
      catchError(this.errorMgmt)
    )
  }

  // Get student
  GetProject(id): Observable<any> {
    let API_URL = `${this.endpoint}/read-project/${id}`;
    return this.http.get(API_URL, { headers: this.headers })
      .pipe(
        map((res: Response) => {
          return res || {}
        }),
        catchError(this.errorMgmt)
      )
  }

  // Update student
  UpdateProject(id, data): Observable<any> {
    let API_URL = `${this.endpoint}/update-project/${id}`;
    return this.http.put(API_URL, data, { headers: this.headers })
      .pipe(
        catchError(this.errorMgmt)
      )
  }

  // Delete student
  DeleteProject(id): Observable<any> {
    var API_URL = `${this.endpoint}/delete-project/${id}`;
    return this.http.delete(API_URL)
      .pipe(
        catchError(this.errorMgmt)
      )
  }

  // Error handling
  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}
