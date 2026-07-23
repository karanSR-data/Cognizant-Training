import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCard, Course } from '../../components/course-card/course-card';
import { Highlight } from '../../directives/highlight';

@Component({
  selector: 'app-course-list',
  imports: [CommonModule, CourseCard, Highlight],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css',
})
export class CourseList implements OnInit {
  isLoading = true;

  courses: Course[] = [
    { id: 1, name: 'Intro to Programming', code: 'CS101', credits: 4, gradeStatus: 'passed' },
    { id: 2, name: 'Data Structures', code: 'CS201', credits: 4, gradeStatus: 'failed' },
    { id: 3, name: 'Linear Algebra', code: 'MA210', credits: 3, gradeStatus: 'pending' },
    { id: 4, name: 'Web Development', code: 'CS310', credits: 3, gradeStatus: 'passed' },
    { id: 5, name: 'Database Systems', code: 'CS320', credits: 4, gradeStatus: 'pending' },
  ];

  selectedCourseId: number | null = null;

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 1500);
  }

  // trackBy tells Angular how to identify each item in the *ngFor list by a
  // stable id (course.id) instead of by array position/reference. Without it,
  // any change to the array (e.g. adding one course) forces Angular to
  // destroy and re-create every DOM node for every card. With trackBy,
  // Angular only touches the cards that actually changed.
  trackByCourseId(index: number, course: Course): number {
    return course.id;
  }

  onEnroll(courseId: number) {
    console.log('Enrolling in course: ' + courseId);
    this.selectedCourseId = courseId;
  }
}
