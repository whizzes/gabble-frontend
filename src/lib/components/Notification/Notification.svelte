<script lang="ts">
    import classNames from 'classnames';

      // import Icons here
  
    import notificationStore, { NotificationKind } from '$lib/stores/notification';
  
    import type { Notification } from '$lib/stores/notification';
  
    export let notification: Notification;
  
    let notificationClass: string;
    let figureClass: string;
  
    $: {
      notificationClass = classNames(
        'flex gap-4 bg-white text-gray-600 shadow border p-2 rounded-md min-w-[200px] max-w-[350px] z-10',
        notification.kind === NotificationKind.Success && 'border-green-400',
        notification.kind === NotificationKind.Warning && 'border-amber-400',
        notification.kind === NotificationKind.Failure && 'border-rose-400'
      );
  
      figureClass = classNames(
        'flex justify-center items-center h-12 w-12 rounded-md',
        notification.kind === NotificationKind.Success &&
          'text-green-600 bg-green-200 border-green-400',
        notification.kind === NotificationKind.Warning &&
          'text-amber-600 bg-amber-200 border-amber-400',
        notification.kind === NotificationKind.Failure && 'text-rose-600 bg-rose-200 border-rose-400'
      );
    }
  </script>
  
  <li class={notificationClass}>
    <div class="flex space-x-4">
        {#if notification.kind === NotificationKind.Success}
          <h2>Success</h2>
        {:else if notification.kind === NotificationKind.Warning}
          <h2>Warning</h2>
        {:else}
          <h2>Error</h2>
        {/if}
    </div>
    <div class="flex flex-col">
      <span class="font-semibold">{notification.title}</span>
      <p>{notification.message}</p>
    </div>
    <button
      on:click={() => notificationStore.close(notification.id)}
      class="flex justify-center items-center h-[24px] w-[24px] p-1 rounded-full hover:text-gray-200 cursor-pointer"
    >
        close
    </button>
  </li>
  