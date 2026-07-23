import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { CourseListComponent } from './course-list.component';
import { Course } from '../../models/course.model';

describe('CourseListComponent (NgRx-connected)', () => {
  let component: CourseListComponent;
  let fixture: ComponentFixture<CourseListComponent>;
  let store: MockStore;

  const mockCourses: Course[] = [
    { id: 1, name: 'Data Structures', code: 'CS101', credits: 4, gradeStatus: 'passed' },
    { id: 2, name: 'RxJS Deep Dive', code: 'CS205', credits: 3, gradeStatus: 'enrolled' }
  ];

  // Step 109: provideMockStore replaces the real store/reducers/effects
  // with a controllable mock seeded from initialState - no HTTP call,
  // no real reducer logic runs.
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseListComponent],
      providers: [
        provideMockStore({
          initialState: {
            course: { courses: mockCourses, loading: false, error: null }
          }
        })
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CourseListComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Step 109: with the initial state's courses, one card per course
  // should render, matching the seeded titles.
  it('should render one course card per course in the initial state', () => {
    fixture.detectChanges();

    const cards = fixture.debugElement.queryAll(By.css('app-course-card'));
    expect(cards.length).toBe(2);

    const rendered = fixture.nativeElement.textContent;
    expect(rendered).toContain('Data Structures');
    expect(rendered).toContain('RxJS Deep Dive');
  });

  // Step 110: setState swaps in a new state without dispatching a real
  // action or running any reducer - a direct way to simulate "loading".
  it('should show the loading indicator when the store state is loading', () => {
    fixture.detectChanges();
    let loadingEl = fixture.debugElement.query(By.css('.loading-indicator'));
    expect(loadingEl).toBeNull();

    store.setState({
      course: { courses: [], loading: true, error: null }
    });
    fixture.detectChanges();

    loadingEl = fixture.debugElement.query(By.css('.loading-indicator'));
    expect(loadingEl).not.toBeNull();
    expect(loadingEl.nativeElement.textContent).toContain('Loading courses');
  });
});
