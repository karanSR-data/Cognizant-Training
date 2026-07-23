import { Routes } from '@angular/router';
import { CourseListComponent } from './components/course-list/course-list.component';

export const routes: Routes = [
  { path: '', component: CourseListComponent },
  // Placeholder target for the error interceptor's 401 redirect (Step 90).
  { path: 'login', component: CourseListComponent }
];
