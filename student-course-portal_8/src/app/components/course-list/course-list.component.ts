import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subject } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Course } from '../../models/course.model';
import { Student } from '../../models/student.model';
import { CourseService } from '../../services/course.service';
import { EnrollmentService } from '../../services/enrollment.service';
import { LoadingService } from '../../services/loading.service';
import { CourseFormComponent } from '../course-form/course-form.component';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, CourseFormComponent],
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  courses: Course[] = [];
  errorMessage = '';
  isLoading = true;

  selectedCourseId: number | null = null;
  students: Student[] = [];
  studentsError = '';

  // Step 87: emits the newly-selected courseId; switchMap below cancels
  // any in-flight getStudentsByCourse call whenever a new id arrives,
  // so a fast double-click never lets an older response overwrite a
  // newer one (no out-of-order UI updates).
  private courseSelected$ = new Subject<number>();

  constructor(
    private courseService: CourseService,
    private enrollmentService: EnrollmentService,
    public loadingService: LoadingService
  ) {}

  ngOnInit(): void {
    // Step 80: subscribe with next/error/complete handlers.
    this.courseService.getCourses().subscribe({
      next: courses => (this.courses = courses),
      error: err => {
        this.errorMessage = err.message;
        this.isLoading = false;
      },
      complete: () => (this.isLoading = false)
    });

    this.courseSelected$
      .pipe(
        switchMap(courseId => this.enrollmentService.getStudentsByCourse(courseId))
      )
      .subscribe({
        next: students => {
          this.students = students;
          this.studentsError = '';
        },
        error: err => (this.studentsError = err.message)
      });
  }

  selectCourse(course: Course): void {
    if (!course.id) {
      return;
    }
    this.selectedCourseId = course.id;
    this.courseSelected$.next(course.id);
  }

  onCourseCreated(course: Course): void {
    this.courses = [...this.courses, course];
  }

  deleteCourse(course: Course): void {
    if (!course.id) {
      return;
    }
    this.courseService.deleteCourse(course.id).subscribe({
      next: () => {
        this.courses = this.courses.filter(c => c.id !== course.id);
        if (this.selectedCourseId === course.id) {
          this.selectedCourseId = null;
          this.students = [];
        }
      },
      error: err => (this.errorMessage = err.message)
    });
  }
}
