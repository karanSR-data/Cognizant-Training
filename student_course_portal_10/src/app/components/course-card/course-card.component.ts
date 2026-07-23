import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnChanges {
  // Step 103: rendered in the template as an <h3>, exercised by the
  // @Input rendering test.
  @Input({ required: true }) course!: Course;

  // Step 104: emits the course id when "Enroll" is clicked, exercised
  // by the @Output test with spyOn(...).
  @Output() enrollRequested = new EventEmitter<number>();

  // Step 105: logged whenever an input changes, exercised by the
  // ngOnChanges test with spyOn(console, 'log').
  ngOnChanges(changes: SimpleChanges): void {
    console.log('CourseCardComponent inputs changed', changes);
  }

  onEnrollClick(): void {
    this.enrollRequested.emit(this.course.id);
  }
}
