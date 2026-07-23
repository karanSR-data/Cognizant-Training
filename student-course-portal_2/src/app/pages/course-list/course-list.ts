import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCard, Course } from '../../components/course-card/course-card';

@Component({
  selector: 'app-course-list',
  imports: [CommonModule, CourseCard],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css',
})
export class CourseList {
  courses: Course[] = [
    { id: 1, name: 'Intro to Programming', code: 'CS101', credits: 4 },
    { id: 2, name: 'Data Structures', code: 'CS201', credits: 4 },
    { id: 3, name: 'Linear Algebra', code: 'MA210', credits: 3 },
    { id: 4, name: 'Web Development', code: 'CS310', credits: 3 },
    { id: 5, name: 'Database Systems', code: 'CS320', credits: 4 },
  ];

  selectedCourseId: number | null = null;

  onEnroll(courseId: number) {
    console.log('Enrolling in course: ' + courseId);
    this.selectedCourseId = courseId;
  }
}
