import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreditLabelPipe } from '../../pipes/credit-label-pipe';

export interface Course {
  id: number;
  name: string;
  code: string;
  credits: number;
  gradeStatus?: 'passed' | 'failed' | 'pending';
}

@Component({
  selector: 'app-course-card',
  imports: [CommonModule, CreditLabelPipe],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css',
})
export class CourseCard implements OnChanges {
  @Input() course!: Course;
  @Output() enrollRequested = new EventEmitter<number>();

  isEnrolled = false;
  isExpanded = false;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['course']) {
      console.log(
        'CourseCard course changed. Previous:',
        changes['course'].previousValue,
        'Current:',
        changes['course'].currentValue
      );
    }
  }

  onEnrollClick() {
    this.isEnrolled = true;
    this.enrollRequested.emit(this.course.id);
  }

  toggleExpanded() {
    this.isExpanded = !this.isExpanded;
  }

  get borderStyle() {
    const colors: Record<string, string> = {
      passed: 'green',
      failed: 'red',
      pending: 'grey',
    };
    const color = this.course.gradeStatus ? colors[this.course.gradeStatus] : 'grey';
    return { 'border-left': `4px solid ${color}` };
  }

  // Using a getter keeps the template free of inline logic/expressions —
  // the template just binds [ngClass]="cardClasses" and reads as declarative
  // markup, while all the conditional logic lives in the component class
  // where it's easier to read, test, and reuse.
  get cardClasses() {
    return {
      'card--enrolled': this.isEnrolled,
      'card--full': this.course.credits >= 4,
      expanded: this.isExpanded,
    };
  }
}
