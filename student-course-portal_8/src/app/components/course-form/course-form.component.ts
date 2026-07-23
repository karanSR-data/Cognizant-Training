import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { Course } from '../../models/course.model';
import { CourseService } from '../../services/course.service';

// Step 81: form submit handler wired to CourseService.createCourse (POST).
@Component({
  selector: 'app-course-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent {
  @Output() courseCreated = new EventEmitter<Course>();

  errorMessage = '';
  submitting = false;

  form = this.fb.group({
    title: ['', Validators.required],
    instructor: ['', Validators.required],
    credits: [1, [Validators.required, Validators.min(0)]]
  });

  constructor(private fb: FormBuilder, private courseService: CourseService) {}

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.submitting = true;
    const newCourse = this.form.getRawValue() as Omit<Course, 'id'>;

    this.courseService.createCourse(newCourse).subscribe({
      next: created => {
        this.courseCreated.emit(created);
        this.form.reset({ title: '', instructor: '', credits: 1 });
        this.submitting = false;
      },
      error: err => {
        this.errorMessage = err.message;
        this.submitting = false;
      }
    });
  }
}
