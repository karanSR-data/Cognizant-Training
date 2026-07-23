import { Injectable } from '@angular/core';

// Deliberately NOT providedIn: 'root' — this service is provided at the
// component level instead (see NotificationComponent), so each component
// that provides it gets its own separate, isolated instance.
@Injectable()
export class NotificationService {
  private messages: string[] = [];

  private instanceId = Math.random().toString(36).slice(2, 8);

  addMessage(msg: string): void {
    this.messages.push(msg);
  }

  getMessages(): string[] {
    return this.messages;
  }

  getInstanceId(): string {
    return this.instanceId;
  }
}
