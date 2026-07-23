import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { CourseList } from './pages/course-list/course-list';
import { CourseDetail } from './pages/course-detail/course-detail';
import { StudentProfile } from './pages/student-profile/student-profile';
import { CoursesLayout } from './components/courses-layout/courses-layout';
import { NotFound } from './pages/not-found/not-found';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
  { path: '', component: Home },

  // Nested routes: CoursesLayout renders a <router-outlet> for its children.
  {
    path: 'courses',
    component: CoursesLayout,
    children: [
      { path: '', component: CourseList },
      { path: ':id', component: CourseDetail },
    ],
  },

  { path: 'profile', component: StudentProfile, canActivate: [authGuard] },

  // Lazy loaded: EnrollmentForm and ReactiveEnrollmentForm are only
  // downloaded (as a separate chunk) the first time the user visits /enroll.
  {
    path: 'enroll',
    canActivate: [authGuard],
    loadChildren: () =>
      import('./features/enrollment/enrollment.routes').then((m) => m.ENROLLMENT_ROUTES),
  },

  // Wildcard MUST be last — Angular matches routes in order.
  { path: '**', component: NotFound },
];
