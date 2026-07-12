import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CourseCard } from '../../components/course-card/course-card';

@Component({
  selector: 'app-course-list',
  imports: [CommonModule, CourseCard],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList {

  courses = [
    { id: 1, name: 'Java', code: 'CS101', credits: 4 },
    { id: 2, name: 'Angular', code: 'CS102', credits: 3 },
    { id: 3, name: 'SQL', code: 'CS103', credits: 3 },
    { id: 4, name: 'Spring Boot', code: 'CS104', credits: 4 },
    { id: 5, name: 'Data Structures', code: 'CS105', credits: 5 }
  ];

  selectedCourseId = 0;

  onEnroll(courseId: number) {
    console.log("Enrolling in course:", courseId);
    this.selectedCourseId = courseId;
  }

}