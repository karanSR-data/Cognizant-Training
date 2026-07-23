import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [FormsModule, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit, OnDestroy {
  portalName = 'Student Course Portal';
  isPortalActive = true;
  message = '';
  searchTerm = '';

  onEnrollClick() {
    this.message = 'Enrollment opened!';
  }

  // [property] = one-way binding: data flows component -> DOM only (e.g. [disabled]).
  // [(ngModel)] = two-way binding: data flows DOM -> component AND component -> DOM,
  // so typing in the input updates searchTerm, and changing searchTerm in code
  // would update the input's displayed value too.

  ngOnInit(): void {
    // Simulate fetching course count from a service/API
    const coursesAvailable = 12;
    console.log('HomeComponent initialised — courses loaded', coursesAvailable);
  }

  ngOnDestroy(): void {
    console.log('HomeComponent destroyed');
  }
}
