import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SimpleChange } from '@angular/core';

import { CourseCardComponent } from './course-card.component';
import { Course } from '../../models/course.model';

describe('CourseCardComponent', () => {
  let component: CourseCardComponent;
  let fixture: ComponentFixture<CourseCardComponent>;

  const mockCourse: Course = {
    id: 1,
    name: 'Data Structures',
    code: 'CS101',
    credits: 4,
    gradeStatus: 'passed'
  };

  // Step 101: standalone components go in `imports`, not `declarations`.
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseCardComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CourseCardComponent);
    component = fixture.componentInstance;
  });

  // Step 102
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Step 103: @Input rendering, queried via By.css to stay within the
  // component's own rendered DOM.
  it('should display the course name from the @Input', () => {
    component.course = mockCourse;
    fixture.detectChanges();

    const heading = fixture.debugElement.query(By.css('h3')).nativeElement;
    expect(heading.textContent).toContain('Data Structures');
  });

  // Extra test: confirms the rest of the @Input data (code/credits) also
  // makes it into the template, not just the name.
  it('should display the course code and credit count', () => {
    component.course = mockCourse;
    fixture.detectChanges();

    const meta = fixture.debugElement.query(By.css('.meta')).nativeElement;
    expect(meta.textContent).toContain('CS101');
    expect(meta.textContent).toContain('4 credits');
  });

  // Step 104: @Output test - spy on emit, trigger the click, assert the
  // emitted payload is the course id.
  it('should emit enrollRequested with the course id when Enroll is clicked', () => {
    component.course = mockCourse;
    fixture.detectChanges();
    spyOn(component.enrollRequested, 'emit');

    fixture.debugElement.query(By.css('button')).nativeElement.click();
    fixture.detectChanges();

    expect(component.enrollRequested.emit).toHaveBeenCalledWith(1);
  });

  // Step 105: ngOnChanges - call it directly with a SimpleChanges object
  // and verify the expected console.log call.
  it('should log via ngOnChanges when the course input changes', () => {
    spyOn(console, 'log');
    component.course = mockCourse;

    const changes = {
      course: new SimpleChange(undefined, mockCourse, true)
    };
    component.ngOnChanges(changes);

    expect(console.log).toHaveBeenCalledWith('CourseCardComponent inputs changed', changes);
  });
});
