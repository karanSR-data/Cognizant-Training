# Hands-On 9 — NgRx Store, Actions, Reducers, Effects & Selectors

A complete Angular v20 (standalone) solution for the "State Management —
NgRx Store, Actions, Reducers, Effects & Selectors" hands-on. Builds on
the Hands-On 8 HttpClient project, migrating course/enrollment state
into an NgRx store.

## Setup

```bash
npm install
npm install -g json-server   # if not already installed globally

# Terminal 1: mock backend
npm run mock-api

# Terminal 2: Angular app
npm start
```

Open http://localhost:4200 and open the **Redux DevTools** panel in
Chrome DevTools to watch actions flow through the store.

## Where each task lives

**Task 1 — Set Up NgRx Store and Define Course State**
- `src/app/app.config.ts` — `provideStore({...})` and
  `provideStoreDevtools({ maxAge: 25 })` (step 92)
- `src/app/store/course/course.actions.ts` — `loadCourses`,
  `loadCoursesSuccess`, `loadCoursesFailure` (step 93)
- `src/app/store/course/course.reducer.ts` — `CourseState` interface +
  `createReducer` with `on()` handlers for all three actions (step 94)
- `src/app/store/course/course.selectors.ts` — `selectCourseState`,
  `selectAllCourses`, `selectCoursesLoading`, `selectCoursesError`,
  registered via `provideStore({ course: courseReducer, ... })` (step 95)
- `src/app/components/course-list/course-list.component.ts` — dispatches
  `loadCourses()` in `ngOnInit`, reads `courses$` via `store.select(...)`,
  rendered with the async pipe in the template (step 96)

**Task 2 — NgRx Effects for HTTP and Enrollment State**
- `src/app/store/course/course.effects.ts` — `loadCourses$` effect:
  `ofType(loadCourses)` → `switchMap` → `CourseService.getCourses()` →
  `map`/`catchError` into success/failure actions, registered via
  `provideEffects([CourseEffects])` in `app.config.ts` (step 97)
- Full flow (step 98): `dispatch(loadCourses())` → `CourseEffects` fires
  the HTTP call → `loadCoursesSuccess` dispatched → `courseReducer`
  updates state → `selectAllCourses` emits → `CourseListComponent`
  re-renders. Watch each of these as separate entries in Redux DevTools.
- `src/app/store/enrollment/` — `enrollment.actions.ts` (`enrollInCourse`,
  `unenrollFromCourse`, `setEnrolledCourses`), `enrollment.reducer.ts`
  (`enrolledCourseIds: number[]`), `enrollment.selectors.ts`
  (`selectEnrolledIds` + the cross-slice `selectEnrolledCourses`, which
  combines `selectAllCourses` from the course feature with
  `selectEnrolledIds` from the enrollment feature) (step 99)
- `src/app/components/course-card/course-card.component.ts` — dispatches
  `enrollInCourse` / `unenrollFromCourse` directly on click; the
  Enroll/Unenroll label is driven by whether `enrolledIds$` includes the
  course's id (step 100)

## Verifying the expected outcomes

- Reload the page — Redux DevTools should show `[Course] Load Courses`
  fire immediately, followed shortly by `[Course] Load Courses Success`
  with the fetched array in its payload.
- Inspect the **State** tab — you'll see two top-level keys, `course`
  (`courses`, `loading`, `error`) and `enrollment` (`enrolledCourseIds`).
- Click "Enroll" on a card — `[Enrollment] Enroll In Course` fires, the
  button flips to "Unenroll", and the id appears in
  `enrollment.enrolledCourseIds` in the DevTools state tree.
- Stop `json-server` and reload — `[Course] Load Courses Failure` fires
  and the error message renders above the list.

## Notes

- `CourseService` is only injected into `CourseEffects` now — components
  never call it directly, keeping all side effects in one place.
- Enrollment here is pure client-side store state (no backend endpoint),
  which is a good illustration of NgRx managing UI state that never
  needs to touch an Effect at all.
