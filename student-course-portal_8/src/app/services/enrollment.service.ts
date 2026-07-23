import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Student } from '../models/student.model';

const API_URL = 'http://localhost:3000/students';

@Injectable({ providedIn: 'root' })
export class EnrollmentService {
  constructor(private http: HttpClient) {}

  // Step 87: Students enrolled in a given course, used as the "inner"
  // Observable in the switchMap chain from CourseListComponent.
  getStudentsByCourse(courseId: number): Observable<Student[]> {
    return this.http.get<Student[]>(`${API_URL}?courseId=${courseId}`).pipe(
      catchError(err => {
        console.error(`getStudentsByCourse(${courseId}) failed:`, err);
        return throwError(() => new Error('Failed to load students for this course.'));
      })
    );
  }
}
