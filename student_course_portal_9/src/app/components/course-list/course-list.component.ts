import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Course } from '../../models/course.model';
import { CourseCardComponent } from '../course-card/course-card.component';
import { loadCourses } from '../../store/course/course.actions';
import {
  selectAllCourses,
  selectCoursesError,
  selectCoursesLoading
} from '../../store/course/course.selectors';
import { selectEnrolledIds } from '../../store/enrollment/enrollment.selectors';

// Step 96 & 98: no service subscription here anymore - the component
// only dispatches loadCourses() and reads back derived state via
// memoised selectors. The full round trip is:
// dispatch(loadCourses()) -> CourseEffects fires HTTP -> loadCoursesSuccess
// -> reducer updates state -> selector emits -> template re-renders.
@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, CourseCardComponent],
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  courses$: Observable<Course[]> = this.store.select(selectAllCourses);
  loading$: Observable<boolean> = this.store.select(selectCoursesLoading);
  error$: Observable<string | null> = this.store.select(selectCoursesError);
  enrolledIds$: Observable<number[]> = this.store.select(selectEnrolledIds);

  constructor(private store: Store) {}

  ngOnInit(): void {
    // Step 96: dispatch instead of calling a service - Redux DevTools
    // will show this action fire immediately on page load.
    this.store.dispatch(loadCourses());
  }
}
