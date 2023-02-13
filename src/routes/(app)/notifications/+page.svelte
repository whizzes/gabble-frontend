<script>
    import notifications from '$lib/stores/notification';
  
    const notify = () => {
      notifications.notifySuccess('HLOAADA');
    };
    const notifyError = () => {
      notifications.notifySuccess('Error');
    };
    const notifyWarning = () => {
      notifications.notifyWarning('Warning');
    };
  </script>
  
  <div class="p-10 bg-red-500">
    <button on:click={notify}> click </button>
    <button on:click={notifyError}> error </button>
    <button on:click={notifyWarning}> Warning </button>
    {#each $notifications.notifications as notif}
      <li>
        {notif.message}
      </li>
    {/each}
  </div>
  