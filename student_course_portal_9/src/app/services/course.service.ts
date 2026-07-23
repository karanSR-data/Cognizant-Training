import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from '../models/course.model';

// Note: with NgRx in place, components no longer talk to this service
// directly (Hands-On 8 style). It is only injected into CourseEffects -
// the one place HTTP calls are allowed to happen.
@Injectable({ providedIn: 'root' })
export class CourseService {
  private readonly API_URL = 'http://localhost:3000/courses';

  constructor(private http: HttpClient) {}

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.API_URL);
  }
}
