import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CourseState } from './course.reducer';

// Step 95: 'course' must match the key used when registering this
// feature (provideState('course', courseReducer) in app.config.ts).
export const selectCourseState = createFeatureSelector<CourseState>('course');

// Selectors are memoised: they only recompute when their inputs change,
// so selectAllCourses won't re-run just because selectCoursesLoading's
// underlying state changed elsewhere in the tree.
export const selectAllCourses = createSelector(
  selectCourseState,
  (state: CourseState) => state.courses
);

export const selectCoursesLoading = createSelector(
  selectCourseState,
  (state: CourseState) => state.loading
);

export const selectCoursesError = createSelector(
  selectCourseState,
  (state: CourseState) => state.error
);
