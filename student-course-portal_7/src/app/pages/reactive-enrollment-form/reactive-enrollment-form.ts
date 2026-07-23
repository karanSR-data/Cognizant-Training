import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  FormArray,
  FormControl,
  AbstractControl,
  ValidationErrors,
  Validators,
} from '@angular/forms';

// Custom synchronous validator: disallows course codes starting with 'XX'
function noCourseCode(control: AbstractControl): ValidationErrors | null {
  const value = control.value;
  if (value && typeof value === 'string' && value.startsWith('XX')) {
    return { noCourseCode: true };
  }
  return null;
}

// Custom async validator: simulates a server check on the email address.
// Fires only after sync validators pass, to avoid wasting calls on invalid input.
function simulateEmailCheck(control: AbstractControl): Promise<ValidationErrors | null> {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (typeof control.value === 'string' && control.value.includes('test@')) {
        resolve({ emailTaken: true });
      } else {
        resolve(null);
      }
    }, 800);
  });
}

@Component({
  selector: 'app-reactive-enrollment-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reactive-enrollment-form.html',
  styleUrl: './reactive-enrollment-form.css',
})
export class ReactiveEnrollmentForm implements OnInit {
  enrollForm!: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.enrollForm = this.fb.group({
      studentName: ['', [Validators.required, Validators.minLength(3)]],
      studentEmail: this.fb.control(
        '',
        [Validators.required, Validators.email],
        [simulateEmailCheck]
      ),
      courseId: ['', [Validators.required, noCourseCode]],
      preferredSemester: ['Odd', Validators.required],
      agreeToTerms: [false, Validators.requiredTrue],
      additionalCourses: this.fb.array([]),
    });
  }

  // Typed getter for the FormArray. Casting `enrollForm.get('additionalCourses')
  // as FormArray` directly in the template would need to be repeated everywhere
  // it's used, is easy to get wrong, and templates can't hold TypeScript types
  // cleanly. A getter centralises the cast in one typed, reusable place.
  get additionalCourses(): FormArray {
    return this.enrollForm.get('additionalCourses') as FormArray;
  }

  addCourse() {
    this.additionalCourses.push(new FormControl('', Validators.required));
  }

  removeCourse(index: number) {
    this.additionalCourses.removeAt(index);
  }

  onSubmit() {
    console.log('enrollForm.value:', this.enrollForm.value);
    console.log('enrollForm.getRawValue():', this.enrollForm.getRawValue());
    // .value excludes any controls that are disabled;
    // .getRawValue() includes every control regardless of disabled state.

    if (this.enrollForm.valid) {
      this.submitted = true;
      this.enrollForm.markAsPristine();
    }
  }

  hasUnsavedChanges(): boolean {
    return this.enrollForm.dirty && !this.submitted;
  }
}
