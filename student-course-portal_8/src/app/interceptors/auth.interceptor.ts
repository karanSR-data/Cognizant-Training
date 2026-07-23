import { HttpInterceptorFn } from '@angular/common/http';

// Step 88: Functional interceptor (Angular's modern style, used with
// provideHttpClient(withInterceptors([...]))). Clones the outgoing
// request and adds an Authorization header - the original request is
// immutable, so clone() is required to modify it.
export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authReq = req.clone({
    setHeaders: {
      Authorization: 'Bearer mock-token-12345'
    }
  });

  return next(authReq);
};
