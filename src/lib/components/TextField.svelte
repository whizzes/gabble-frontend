<script lang="ts">
  import classNames from 'classnames';

  export let type: 'text' | 'number' | 'email' | 'password' | 'date' = 'text';
  export let name: string;
  export let id = '';
  export let error: string | null = null;
  export let value: string | number | Date | null = null;
  export let label: string | null = null;
  export let placeholder: string | undefined = undefined;
  export let required = false;
  export let autocomplete: 'true' | 'false' | undefined = undefined;
  let customClassNames = '';
  export { customClassNames as class };
  let className = classNames(
    customClassNames,
    'flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal'
  );
  const handleInput = (event: Event): void => {
    const target = event.target as HTMLInputElement;
    value = type.match(/^(number|range)$/) ? +target.value : target.value;
  };
</script>

{#if label}
  <label for={name} class="block font-medium text-gray-700 pb-1">{label}</label>
{/if}

<input
  {name}
  {id}
  {placeholder}
  {required}
  {autocomplete}
  {type}
  {value}
  class:border-red-600={!!error}
  class={className}
  on:change
  on:blur
  on:input={handleInput}
/>
<p class:opacity-0={!error} class="text-sm pt-1 text-red-600">{error}</p>
