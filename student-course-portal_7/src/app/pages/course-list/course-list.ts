import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CourseCard } from '../../components/course-card/course-card';
import { Highlight } from '../../directives/highlight';
import { Course } from '../../models/course.model';
import { CourseService } from '../../services/course';

@Component({
  selector: 'app-course-list',
  imports: [CommonModule, FormsModule, CourseCard, Highlight],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css',
})
export class CourseList implements OnInit {
  isLoading = true;
  courses: Course[] = [];
  selectedCourseId: number | null = null;
  searchTerm = '';

  constructor(
    private courseService: CourseService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.courses = this.courseService.getCourses();

    // Read back the query param (e.g. after a page refresh on /courses?search=angular)
    this.searchTerm = this.route.snapshot.queryParamMap.get('search') ?? '';

    setTimeout(() => {
      this.isLoading = false;
    }, 1500);
  }

  onSearchChange() {
    this.router.navigate(['courses'], {
      queryParams: { search: this.searchTerm || null },
    });
  }

  goToDetail(courseId: number) {
    this.router.navigate(['courses', courseId]);
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
