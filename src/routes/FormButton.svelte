<script>
	import { createEventDispatcher } from 'svelte';

	export let type = 'primary';
	export let width = '200px';
	export let style = '';
	const dispatch = createEventDispatcher();
</script>

<button class="button {type}" on:click={() => dispatch('click')} style:width {style}>
	<slot />
</button>

<style>
	.button {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 12px;
		border-radius: var(--border-radius);
		border: none;
		cursor: pointer;
	}

	.primary {
		color: var(--background);
		background-color: var(--blue-primary);
	}
	.primary:hover {
		background-color: var(--blue-blue-200);
	}

	.secondary {
		border: 1px solid var(--base-grey-30);
		background: var(--background);
	}

	.secondary:hover {
		background: var(--base-grey-40);
	}
</style>
