<script>
	import { createEventDispatcher } from 'svelte';

	export let active = false;
	export let id;
	export let value = '';
	const dispatch = createEventDispatcher();
</script>

<div class="button" on:click={() => dispatch('click', { value })} class:active>
	{value}
</div>

<style>
	.button {
		display: flex;
		padding: 4px 16px;
		align-items: flex-start;
		justify-content: center;
		align-items: center;
		gap: 10px;

		border-radius: var(--border-radius);
		border: 1px solid var(--base-grey-30);
		background: var(--base-white);
		cursor: pointer;
	}
	.active {
		border: 1px solid var(--blue-primary);
		background: var(--blue-blue-10, #ebf1ff);
		color: var(--blue-blue-200);
	}
</style>
