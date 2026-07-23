import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';

import { CourseService } from './course.service';
import { Course } from '../models/course.model';

describe('CourseService', () => {
  let service: CourseService;
  let httpMock: HttpTestingController;

  const mockCourses: Course[] = [
    { id: 1, name: 'Data Structures', code: 'CS101', credits: 4, gradeStatus: 'passed' },
    { id: 2, name: 'RxJS Deep Dive', code: 'CS205', credits: 3, gradeStatus: 'enrolled' }
  ];

  // Step 106: provideHttpClient() + provideHttpClientTesting() is the
  // standalone-app equivalent of importing HttpClientTestingModule -
  // it swaps in a testing-only HttpBackend so no real requests fire.
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CourseService, provideHttpClient(), provideHttpClientTesting()]
    });

    service = TestBed.inject(CourseService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  // Step 107: verify() catches any request that was made but never
  // flushed/expected - it should run after every test.
  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch courses via GET and return the flushed payload', () => {
    service.getCourses().subscribe(courses => {
      expect(courses.length).toBe(2);
      expect(courses).toEqual(mockCourses);
    });

    const req = httpMock.expectOne('http://localhost:3000/courses');
    expect(req.request.method).toBe('GET');
    req.flush(mockCourses);
  });

  // Step 108: simulate a server error and assert the friendly message
  // that CourseService's catchError maps it to.
  it('should surface a friendly error message when the request fails', () => {
    service.getCourses().subscribe({
      next: () => fail('expected an error, but got a successful response'),
      error: err => {
        expect(err.message).toBe('Failed to load courses. Please try again.');
      }
    });

    const req = httpMock.expectOne('http://localhost:3000/courses');
    req.flush('Internal Server Error', { status: 500, statusText: 'Server Error' });
  });
});
