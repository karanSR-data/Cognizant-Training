import { Routes } from '@angular/router';
import { EnrollmentForm } from '../../pages/enrollment-form/enrollment-form';
import { ReactiveEnrollmentForm } from '../../pages/reactive-enrollment-form/reactive-enrollment-form';
import { unsavedChangesGuard } from '../../guards/unsaved-changes-guard';

// This routes array is dynamically imported from app.routes.ts via
// loadChildren, so everything reachable only from here (both enrollment
// form components) is split into its own JS chunk and downloaded only
// when the user first navigates to /enroll.
export const ENROLLMENT_ROUTES: Routes = [
  { path: '', component: EnrollmentForm },
  { path: 'reactive', component: ReactiveEnrollmentForm, canDeactivate: [unsavedChangesGuard] },
];
