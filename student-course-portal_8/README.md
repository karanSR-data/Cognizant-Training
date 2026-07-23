# Hands-On 8 — HTTP Client, Observables & Interceptors

A complete Angular v20 (standalone) solution for the "HTTP Client — API
Integration, Observables & Interceptors" hands-on.

## Setup

```bash
npm install
npm install -g json-server   # if not already installed globally

# Terminal 1: start the mock backend (serves db.json on :3000)
npm run mock-api

# Terminal 2: start the Angular app (serves on :4200)
npm start
```

Open http://localhost:4200.

## Where each task lives

**Task 1 — Replace Service Data with HttpClient Calls**
- `src/app/app.config.ts` — `provideHttpClient(...)` (step 78)
- `src/app/services/course.service.ts` — `getCourses`, `getCourseById`,
  `createCourse`, `updateCourse`, `deleteCourse` (steps 79, 81, 82)
- `src/app/components/course-list/course-list.component.ts` —
  `ngOnInit` subscribe with `next` / `error` / `complete` (step 80)
- `src/app/components/course-form/course-form.component.ts` — POST wiring
  for the "Add a Course" form (step 81)

**Task 2 — RxJS Operators and Error Handling**
- `course.service.ts` `getCourses()` pipes `map` → `tap` → `retry(2)` →
  `catchError` in that order (steps 83–86)
- `course-list.component.ts` uses a `Subject<number>` + `switchMap` to
  load the selected course's students via `EnrollmentService`, cancelling
  any in-flight request when a new course is clicked (step 87)

**Task 3 — HTTP Interceptors**
- `src/app/interceptors/auth.interceptor.ts` — adds the mock
  `Authorization: Bearer mock-token-12345` header (step 88)
- `src/app/interceptors/error-handler.interceptor.ts` — redirects to
  `/login` on 401, alerts on 500 (step 90)
- `src/app/interceptors/loading.interceptor.ts` +
  `src/app/services/loading.service.ts` — global spinner driven by
  `finalize` (step 91), bound in the template via `async` pipe
- All three are registered, in order, in `app.config.ts` (step 88's
  `withInterceptors([...])`)

## Verifying the expected outcomes

- **CRUD**: Add a course via the form (POST), click a course to view its
  students, click "Delete" to remove one (DELETE) — check `db.json` to
  confirm persistence.
- **Error handling**: stop `json-server` and reload — the error message
  from `catchError` appears instead of a blank list; `retry(2)` will
  make 3 total attempts first (watch the Network tab).
- **switchMap**: click between courses quickly — only the latest
  course's students ever render, because switchMap cancels the older
  in-flight request.
- **Interceptors**: open DevTools → Network → any `/courses` or
  `/students` call → Request Headers should show the `Authorization`
  header; the spinner text appears for the duration of each call.

## Notes

- `credits: 0` on "State Management with NgRx" in `db.json` is
  intentional — it demonstrates the `map` filter in step 83 excluding
  zero-credit courses from the list.
- The error-handler interceptor's 401 redirect targets `/login`, which
  is mapped to `CourseListComponent` as a placeholder — swap in a real
  login component in a full app.
