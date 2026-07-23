import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';

import { routes } from './app.routes';
import { courseReducer } from './store/course/course.reducer';
import { enrollmentReducer } from './store/enrollment/enrollment.reducer';
import { CourseEffects } from './store/course/course.effects';

// Step 92 & 95: standalone equivalent of
// StoreModule.forRoot({...}) + StoreModule.forFeature(...) combined -
// provideStore takes the full map of feature reducers up front.
// Step 97: provideEffects registers CourseEffects (equivalent to
// EffectsModule.forRoot([CourseEffects])).
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideStore({
      course: courseReducer,
      enrollment: enrollmentReducer
    }),
    provideEffects([CourseEffects]),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: !isDevMode(),
      autoPause: true,
      trace: false
    })
  ]
};
