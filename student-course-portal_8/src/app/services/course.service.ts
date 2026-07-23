import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry, tap } from 'rxjs/operators';
import { Course } from '../models/course.model';

const API_URL = 'http://localhost:3000/courses';

@Injectable({ providedIn: 'root' })
export class CourseService {
  constructor(private http: HttpClient) {}

  // Step 79: GET all courses. HttpClient GET returns a cold Observable -
  // nothing happens over the wire until something subscribes to it.
  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(API_URL).pipe(
      // Step 83: map transforms the emitted value. Filtering out courses
      // with 0 credits is a pure transformation, so it belongs in map.
      map(courses => courses.filter(c => c.credits > 0)),

      // Step 85: tap is for side effects only (logging, analytics).
      // We use tap here instead of doing console.log inside map because
      // map's job is to return a new value the stream depends on - mixing
      // side effects into it makes the transformation harder to reason
      // about and easy to break if the mapping logic ever changes.
      tap(courses => console.log('Courses loaded:', courses.length)),

      // Step 86: retry(2) resubscribes up to 2 times on failure before
      // the error is allowed to propagate to catchError below.
      retry(2),

      // Step 84: catchError intercepts the error notification, logs it,
      // and re-throws a friendlier error for the component to display.
      catchError(err => {
        console.error('getCourses failed:', err);
        return throwError(() => new Error('Failed to load courses. Please try again.'));
      })
    );
  }

  // Step 79: GET a single course by id.
  getCourseById(id: number): Observable<Course> {
    return this.http.get<Course>(`${API_URL}/${id}`).pipe(
      catchError(err => {
        console.error(`getCourseById(${id}) failed:`, err);
        return throwError(() => new Error('Failed to load the course. Please try again.'));
      })
    );
  }

  // Step 81: POST a new course.
  createCourse(course: Omit<Course, 'id'>): Observable<Course> {
    return this.http.post<Course>(API_URL, course).pipe(
      catchError(err => {
        console.error('createCourse failed:', err);
        return throwError(() => new Error('Failed to create the course. Please try again.'));
      })
    );
  }

  // Step 82: PUT to update an existing course.
  updateCourse(id: number, course: Partial<Course>): Observable<Course> {
    return this.http.put<Course>(`${API_URL}/${id}`, course).pipe(
      catchError(err => {
        console.error(`updateCourse(${id}) failed:`, err);
        return throwError(() => new Error('Failed to update the course. Please try again.'));
      })
    );
  }

  // Step 82: DELETE a course.
  deleteCourse(id: number): Observable<void> {
    return this.http.delete<void>(`${API_URL}/${id}`).pipe(
      catchError(err => {
        console.error(`deleteCourse(${id}) failed:`, err);
        return throwError(() => new Error('Failed to delete the course. Please try again.'));
      })
    );
  }
}
