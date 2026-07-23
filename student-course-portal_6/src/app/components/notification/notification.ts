import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationService } from '../../services/notification';

@Component({
  selector: 'app-notification',
  imports: [CommonModule],
  templateUrl: './notification.html',
  styleUrl: './notification.css',
  // Component-level provider: this creates a NEW instance of
  // NotificationService scoped to this component (and any of its children),
  // separate from any other NotificationComponent instance elsewhere in the
  // app. This is different from providedIn: 'root', which shares a single
  // instance across the whole app. Useful when each usage needs its own
  // isolated state — e.g. multiple independent notification panels.
  providers: [NotificationService],
})
export class Notification {
  constructor(private notificationService: NotificationService) {}

  get messages(): string[] {
    return this.notificationService.getMessages();
  }

  get instanceId(): string {
    return this.notificationService.getInstanceId();
  }

  addSample() {
    this.notificationService.addMessage('New notification at ' + new Date().toLocaleTimeString());
  }
}
