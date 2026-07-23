import { Component } from '@angular/core';
import { CourseService } from '../../services/course';

@Component({
  selector: 'app-course-summary-widget',
  imports: [],
  templateUrl: './course-summary-widget.html',
  styleUrl: './course-summary-widget.css',
})
export class CourseSummaryWidget {
  // Injects the SAME singleton CourseService instance as CourseListComponent
  // and HomeComponent (providedIn: 'root' means one instance app-wide).
  constructor(private courseService: CourseService) {}

  get totalCourses(): number {
    return this.courseService.getCourses().length;
  }

  addSampleCourse() {
    this.courseService.addCourse({
      id: Date.now(),
      name: 'Bonus Elective',
      code: 'EL999',
      credits: 2,
      gradeStatus: 'pending',
    });
  }
}
