import { createAction, props } from '@ngrx/store';

// Step 99: enrollment is purely client-side state here (no backend
// enrollment endpoint yet) - a good example of NgRx managing UI state
// that doesn't need to round-trip through an Effect at all.
export const enrollInCourse = createAction(
  '[Enrollment] Enroll In Course',
  props<{ courseId: number }>()
);

export const unenrollFromCourse = createAction(
  '[Enrollment] Unenroll From Course',
  props<{ courseId: number }>()
);

export const setEnrolledCourses = createAction(
  '[Enrollment] Set Enrolled Courses',
  props<{ courseIds: number[] }>()
);
