import { get, writable } from 'svelte/store';

import type { Readable } from 'svelte/store';

export type NotificationStoreMethods = {
  sorted(): Notification[];
  close(id: string): void;
  notifySuccess(message: string, title?: string): void;
  notifyFailure(message: string, title?: string): void;
  notifyWarning(message: string, title?: string): void;
};

export type NotificationStore = {
  notifications: Record<string, Notification>;
};

export enum NotificationKind {
  Failure = 0,
  Success = 1,
  Warning = 2,
}

export type Notification = {
  id: string;
  time: number;
  kind: NotificationKind;
  title?: string;
  message: string;
};

const DEFAULT_TIMEOUT_SECONDS = 5;

export function createNotificationStore() {
  const timeouts: Record<string, NodeJS.Timeout> = {};
  const notificationStore = writable<NotificationStore>({
    notifications: {},
  });
  const { subscribe, update } = notificationStore;

  const newId = () => Math.random().toString(16).slice(2);

  const newNotification = (
    kind: NotificationKind,
    message: string,
    title?: string,
  ): Notification => ({
    id: newId(),
    time: Math.floor(Date.now() / 1000),
    kind,
    title,
    message,
  });

  const close = (id: string): void => {
    update((current) => {
      const notifications = { ...current.notifications };

      delete notifications[id];
      return {
        ...current,
        notifications,
      };
    });
  };

  const closeWithTimeout = (id: string): void => {
    clearTimeout(timeouts[id]);
    close(id);
  };

  const append = (notification: Notification): void => {
    update((current) => {
      const notifications = { ...current.notifications };

      notifications[notification.id] = notification;
      return {
        ...current,
        notifications,
      };
    });
  };

  const appendWithTimeout = (notification: Notification): void => {
    append(notification);

    const timeout = setTimeout(() => {
      closeWithTimeout(notification.id);
    }, DEFAULT_TIMEOUT_SECONDS * 1000);

    timeouts[notification.id] = timeout;
  };

  const notifySuccess = (message: string, title?: string) =>
    appendWithTimeout(
      newNotification(NotificationKind.Success, message, title || 'Success'),
    );

  const notifyFailure = (message: string, title?: string) =>
    appendWithTimeout(
      newNotification(NotificationKind.Failure, message, title || 'Error'),
    );

  const notifyWarning = (message: string, title?: string) =>
    appendWithTimeout(
      newNotification(NotificationKind.Warning, message, title || 'Warning'),
    );

  const sorted = () => {
    const { notifications } = get(notificationStore);
    const array = Object.values(notifications);

    return array.sort((a, b) => b.time - a.time);
  };

  return {
    sorted,
    close,
    subscribe,
    notifySuccess,
    notifyFailure,
    notifyWarning,
  };
}

const notificationStore =
  createNotificationStore() as unknown as Readable<NotificationStore> &
    NotificationStoreMethods;

export default notificationStore;
