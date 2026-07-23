import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { LoadingService } from '../services/loading.service';

// Step 91: Shows the spinner before the request goes out and hides it
// once the request finishes - success or failure - using finalize.
// finalize is equivalent to a try/catch/finally's "finally" block: it
// always runs, regardless of how the Observable terminates.
export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  const loadingService = inject(LoadingService);

  loadingService.show();

  return next(req).pipe(
    finalize(() => loadingService.hide())
  );
};
