import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Course } from '../../models/course.model';
import { enrollInCourse, unenrollFromCourse } from '../../store/enrollment/enrollment.actions';

// Step 100: this component dispatches enrollment actions directly by
// injecting the Store - it doesn't need a service or an @Output,
// since the store itself is the shared source of truth.
@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent {
  @Input({ required: true }) course!: Course;
  @Input() enrolled = false;

  constructor(private store: Store) {}

  toggleEnrollment(): void {
    if (this.enrolled) {
      this.store.dispatch(unenrollFromCourse({ courseId: this.course.id }));
    } else {
      this.store.dispatch(enrollInCourse({ courseId: this.course.id }));
    }
  }
}
