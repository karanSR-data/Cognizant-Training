# Hands-On 10 — Unit Testing Angular Applications (Jasmine, Karma & TestBed)

A complete Angular v20 (standalone) solution for the "Unit Testing Angular
Applications — Jasmine, Karma & TestBed" hands-on. Contains a component
under test, a service under test, and an NgRx-store-connected component
under test, each with a full spec file.

## Setup & running the tests

```bash
npm install
npm test                    # ng test - watch mode via Karma, Ctrl+C to stop
npm run test:coverage       # ng test --code-coverage --watch=false
```

Coverage report is written to `coverage/hands-on-10-testing/index.html`.

This project uses `ChromeHeadless` via `puppeteer` so `ng test` runs
without needing a system Chrome install — see `karma.conf.js`.

## Where each task lives

**Task 1 — Testing a Component: `CourseCardComponent`**
- `src/app/components/course-card/course-card.component.ts` — the
  component under test: an `@Input() course`, an
  `@Output() enrollRequested`, and an `ngOnChanges` that logs the change
- `src/app/components/course-card/course-card.component.spec.ts`:
  - `TestBed.configureTestingModule({ imports: [CourseCardComponent] })`
    — standalone components go in `imports`, not `declarations` (step 101)
  - `should create` — `expect(component).toBeTruthy()` (step 102)
  - `should display the course name from the @Input` — sets
    `component.course`, calls `fixture.detectChanges()`, queries
    `By.css('h3')` (step 103)
  - a bonus test asserting the code/credits also render
  - `should emit enrollRequested with the course id...` — `spyOn(component
    .enrollRequested, 'emit')`, clicks the button via
    `fixture.debugElement.query(By.css('button'))`, asserts
    `toHaveBeenCalledWith(1)` (step 104)
  - `should log via ngOnChanges...` — calls `component.ngOnChanges(...)`
    directly with a `SimpleChanges`-shaped object built from
    `SimpleChange`, spies on `console.log` (step 105)
  - **5 tests total**, matching the hands-on's expected outcome

**Task 2 — Testing a Service and an NgRx-Connected Component**
- `src/app/services/course.service.ts` — `getCourses()` with a
  `catchError` that maps failures to a friendly message
- `src/app/services/course.service.spec.ts`:
  - `provideHttpClient()` + `provideHttpClientTesting()` is the
    standalone-app equivalent of importing `HttpClientTestingModule`
    (step 106)
  - `should fetch courses via GET...` — `httpMock.expectOne(...)`,
    `.flush(mockCourses)`, asserts the subscribed array (step 107)
  - `should surface a friendly error message...` — flushes a 500
    response, asserts the mapped error message (step 108)
  - `afterEach(() => httpMock.verify())` — fails the test if any request
    went unflushed/unexpected (hint from step 107)
- `src/app/store/course/` — a small NgRx slice (`course.actions.ts`,
  `course.reducer.ts`, `course.selectors.ts`) so there's a real feature
  for the mock store to stand in for
- `src/app/components/course-list/course-list.component.ts` — dispatches
  `loadCourses()` and renders `courses$` / `loading$` via the async pipe
- `src/app/components/course-list/course-list.component.spec.ts`:
  - `provideMockStore({ initialState: { course: { courses: mockCourses,
    loading: false, error: null } } })` replaces the real store — no
    reducers or effects actually run (step 109)
  - asserts one `<app-course-card>` renders per seeded course
  - `store.setState({ course: { courses: [], loading: true, error: null
    } })` simulates a loading state; asserts `.loading-indicator`
    appears in the DOM after `fixture.detectChanges()` (step 110)

## Notes

- `tsconfig.app.json` excludes `**/*.spec.ts` so spec files never leak
  into the production build; `tsconfig.spec.json` is scoped to them
  instead and includes the Jasmine types.
- The real `app.config.ts` still wires up `provideStore(...)` for actual
  app usage — the tests bypass it entirely via `provideMockStore(...)`,
  which is exactly the point: components can be tested against store
  state without a working reducer/effect pipeline behind them.
