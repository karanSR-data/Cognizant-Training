import { createReducer, on } from '@ngrx/store';
import { Course } from '../../models/course.model';
import { loadCourses, loadCoursesFailure, loadCoursesSuccess } from './course.actions';

// Step 94: the shape of this feature's slice of the store.
export interface CourseState {
  courses: Course[];
  loading: boolean;
  error: string | null;
}

export const initialCourseState: CourseState = {
  courses: [],
  loading: false,
  error: null
};

// Reducers are pure functions: given the same state + action, they must
// always return the same new state, and must never mutate the input
// state object - hence the spreads below instead of in-place edits.
export const courseReducer = createReducer(
  initialCourseState,

  on(loadCourses, state => ({
    ...state,
    loading: true,
    error: null
  })),

  on(loadCoursesSuccess, (state, { courses }) => ({
    ...state,
    courses,
    loading: false,
    error: null
  })),

  on(loadCoursesFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  }))
);
