<script lang="ts">
  import classNames from 'classnames';

  let className: string = '';
  export { className as class };
</script>

<div
  class={classNames(
    'bg-white shadow-md p-4 rounded-md overflow-hidden',
    className
  )}
>
  <slot />
</div>
