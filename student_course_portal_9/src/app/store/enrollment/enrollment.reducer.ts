import { createReducer, on } from '@ngrx/store';
import {
  enrollInCourse,
  setEnrolledCourses,
  unenrollFromCourse
} from './enrollment.actions';

// Step 99: state shape - just the ids of enrolled courses, kept
// separate from course data so the two slices don't duplicate data.
export interface EnrollmentState {
  enrolledCourseIds: number[];
}

export const initialEnrollmentState: EnrollmentState = {
  enrolledCourseIds: []
};

export const enrollmentReducer = createReducer(
  initialEnrollmentState,

  on(enrollInCourse, (state, { courseId }) => ({
    ...state,
    enrolledCourseIds: state.enrolledCourseIds.includes(courseId)
      ? state.enrolledCourseIds
      : [...state.enrolledCourseIds, courseId]
  })),

  on(unenrollFromCourse, (state, { courseId }) => ({
    ...state,
    enrolledCourseIds: state.enrolledCourseIds.filter(id => id !== courseId)
  })),

  on(setEnrolledCourses, (state, { courseIds }) => ({
    ...state,
    enrolledCourseIds: courseIds
  }))
);
