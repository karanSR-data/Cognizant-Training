import { CanDeactivateFn } from '@angular/router';

// Any component using this guard must implement this interface.
export interface CanComponentDeactivate {
  hasUnsavedChanges(): boolean;
}

export const unsavedChangesGuard: CanDeactivateFn<CanComponentDeactivate> = (component) => {
  if (component.hasUnsavedChanges()) {
    return window.confirm('You have unsaved changes. Leave?');
  }
  return true;
};
