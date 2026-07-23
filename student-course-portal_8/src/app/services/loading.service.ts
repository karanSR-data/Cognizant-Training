import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

// Step 91: LoadingService backing the global spinner.
// The loading interceptor flips this to true before a request goes out
// and back to false in `finalize`, regardless of success or failure.
@Injectable({ providedIn: 'root' })
export class LoadingService {
  private loadingSubject = new BehaviorSubject<boolean>(false);
  isLoading$ = this.loadingSubject.asObservable();

  private activeRequests = 0;

  show(): void {
    this.activeRequests++;
    this.loadingSubject.next(true);
  }

  hide(): void {
    this.activeRequests = Math.max(0, this.activeRequests - 1);
    if (this.activeRequests === 0) {
      this.loadingSubject.next(false);
    }
  }
}
