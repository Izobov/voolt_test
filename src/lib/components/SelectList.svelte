<script>
	import SelectButton from '$lib/components/SelectButton.svelte';

	/**
	 * @type {any[]}
	 */
	export let data = [];
	/**
	 * @type {any}
	 */
	export let value;

	/**
	 * @param {any} option
	 */
	function click(option) {
		value = option;
	}
</script>

<div class="select">
	<span class="label">
		<slot name="label">Or select from the most popular:</slot>
	</span>
	<div class="options-list">
		{#each data as option (option.id)}
			<SelectButton
				on:click={() => click(option)}
				id={option.id}
				value={option.name}
				active={option === value}
			/>
		{/each}
	</div>
</div>

<style>
	.select {
		display: flex;
		flex-direction: column;
		gap: 20px;
	}
	.label {
		font-size: 14px;
		font-style: normal;
		font-weight: 700;
	}
	.options-list {
		display: flex;
		gap: 20px;
		flex-wrap: wrap;
		max-height: 350px;
		overflow: auto;
	}
</style>
