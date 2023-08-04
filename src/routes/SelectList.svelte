<script>
	import SelectButton from './SelectButton.svelte';

	export let data = [];
	export let value = '';

	function click(ev) {
		value = ev.detail.value;
	}
</script>

<div class="select">
	<slot name="label" class="label">Or select from the most popular:</slot>
	<div class="options-list">
		{#each data as { value: v, id } (id)}
			<SelectButton on:click={click} {id} value={v} active={v === value} />
			<!-- content here -->
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
		font-weight: 500;
	}
	.options-list {
		display: flex;
		gap: 20px;
		flex-wrap: wrap;
	}
</style>
