import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CourseService } from '../../services/course';
import { CourseSummaryWidget } from '../../components/course-summary-widget/course-summary-widget';

@Component({
  selector: 'app-home',
  imports: [FormsModule, CommonModule, CourseSummaryWidget],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit, OnDestroy {
  portalName = 'Student Course Portal';
  isPortalActive = true;
  message = '';
  searchTerm = '';
  coursesAvailable = 0;

  constructor(private courseService: CourseService) {}

  onEnrollClick() {
    this.message = 'Enrollment opened!';
  }

  // [property] = one-way binding: data flows component -> DOM only (e.g. [disabled]).
  // [(ngModel)] = two-way binding: data flows DOM -> component AND component -> DOM,
  // so typing in the input updates searchTerm, and changing searchTerm in code
  // would update the input's displayed value too.

  ngOnInit(): void {
    this.coursesAvailable = this.courseService.getCourses().length;
    console.log('HomeComponent initialised — courses loaded', this.coursesAvailable);
  }

  ngOnDestroy(): void {
    console.log('HomeComponent destroyed');
  }
}
