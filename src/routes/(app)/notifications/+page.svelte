<script>
  import notifications from '$lib/stores/notification';

  const notify = () => {
    notifications.notifySuccess('');
  };
  const notifyError = () => {
    notifications.notifyFailure('Error');
  };
  const notifyWarning = () => {
    notifications.notifyWarning('Warning');
  };
</script>

<div class="p-10 bg-white">
  <button class="text-black" on:click={notify}> click </button>
  <button class="text-black" on:click={notifyError}> error </button>
  <button class="text-black" on:click={notifyWarning}> Warning </button>
</div>
