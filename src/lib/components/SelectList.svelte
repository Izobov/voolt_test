<script>
	import SelectButton from '$lib/components/SelectButton.svelte';

	// @ts-ignore
	/**
	 * @type {any[]}
	 */
	export let data = [];
	export let value = '';

	/**
	 * @param {{ detail: { value: string; }; }} ev
	 */
	function click(ev) {
		value = ev.detail.value;
	}
</script>

<div class="select">
	<span class="label">
		<slot name="label">Or select from the most popular:</slot>
	</span>
	<div class="options-list">
		{#each data as { name, id } (id)}
			<SelectButton on:click={click} {id} value={name} active={name === value} />
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
	}
</style>
