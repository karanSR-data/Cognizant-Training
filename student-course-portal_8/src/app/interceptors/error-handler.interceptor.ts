import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';

// Step 90: Global HTTP error handling. Runs for every request/response
// that passes through it, so components don't need to repeat this logic.
export const errorHandlerInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router);

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 401) {
        console.warn('Unauthorized - redirecting to login.');
        router.navigate(['/login']);
      } else if (error.status === 500) {
        // In a real app this would call a NotificationService / toast.
        console.error('Server error - showing global error notification:', error.message);
        alert('Something went wrong on the server. Please try again later.');
      }

      // Re-throw so the originating subscribe({ error }) callback still runs.
      return throwError(() => error);
    })
  );
};
