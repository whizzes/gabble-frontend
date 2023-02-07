<figure class="pulse">
  <div class="pulse-effect" />
  <div class="pulse-inner" />
</figure>

<style>
  .pulse {
    @apply flex items-center justify-center relative h-6 w-6;
  }

  .pulse-inner {
    @apply bg-green-400 rounded-full absolute top-0 left-0 h-2 w-2 m-2;
  }

  .pulse-effect {
    @apply border-4 border-green-400 rounded-full absolute top-0 left-0 h-6 w-6 opacity-0;
    animation: pulse-anim 1s ease-out;
    animation-iteration-count: infinite;
  }

  @keyframes pulse-anim {
    0% {
      transform: scale(0.1, 0.1);
      opacity: 0;
    }

    50% {
      opacity: 1;
    }

    100% {
      opacity: 0;
      transform: scale(1.2, 1.2);
    }
  }
</style>
