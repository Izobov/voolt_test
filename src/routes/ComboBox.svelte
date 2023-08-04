<script>
	// @ts-nocheck

	import search_icon from '$lib/icons/search.png';
	import arrow_down from '$lib/icons/nav-arrow-down.png';
	import search_err from '$lib/icons/search-fast-itemm-1.png';

	export let placeholder = 'Search';
	export let data = [];
	let value = '';
	let active = false;
	let node;

	$: filtered = data.filter((i) =>
		value ? i.value.toLowerCase().includes(value.toLowerCase()) : i
	);

	function outsideHandle(e) {
		if (node && !node.contains(e.target)) {
			active = false;
		}
	}
</script>

<svelte:body on:click={outsideHandle} />
<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="wrapper" bind:this={node}>
	<div class="select" class:active on:click={() => (active = true)}>
		<img src={search_icon} alt="search" class="icon" />
		<input type="text" {placeholder} class="input" bind:value />
		<img src={arrow_down} alt="arrow down" class="icon" />
	</div>
	{#if active}
		<div class="popup">
			{#each filtered as { id, value: v } (id)}
				<div class="option" on:click={() => (value = v)}>
					{v}
				</div>
			{:else}
				<div class="empty">
					<div class="empty-content">
						<div class="empty-icon">
							<img src={search_err} alt="search icon" class="search-error-icon" />
						</div>
						<p class="empty-text">
							Oops... We can’t find similar service in our list. Try another keyword to search
						</p>
					</div>
				</div>
			{/each}
		</div>
	{/if}
</div>

<style>
	.wrapper {
		position: relative;
		width: 100%;
		overflow: visible;
	}
	.select {
		width: 100%;
		display: flex;
		padding: 10px 16px;
		align-items: center;
		gap: 12px;
		height: 44px;

		border-radius: var(--border-radius);
		border: 1px solid var(--base-grey-40);
		background: var(--background);
	}

	.active {
		border: 1px solid var(--blue-primary);
		box-shadow: var(--box-shadow);
	}

	.icon {
		width: 20px;
		height: 20px;
		cursor: pointer;
	}

	.input {
		border: none;
		flex-grow: 1;
		outline: none;
	}

	.popup {
		display: flex;
		flex-direction: column;
		width: 100%;
		gap: 2px;
		border-radius: var(--border-radius);
		border: 1px solid var(--base-grey-30);
		background: var(--background);
		box-shadow: -10px 4px 24px 0px rgba(0, 0, 0, 0.08);
		position: absolute;
		flex-shrink: 0;
		left: 0;
		z-index: 2;
		max-height: 258px;
		height: fit-content;
		overflow-y: auto;
	}
	.option {
		padding: 10px 12px;
		cursor: pointer;
		text-transform: capitalize;
	}

	.option:hover {
		background-color: var(--base-grey-10);
	}

	.empty {
		width: 100%;
		height: 100%;
		height: 200px;
		padding: 40px 0px;
	}
	.empty-content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 20px;
	}

	.empty-icon {
		width: 48px;
		height: 48px;
		border-radius: 50%;
		display: flex;
		flex-shrink: 0;
		justify-content: center;
		align-items: center;
		background: var(--base-grey-10);
	}
	.search-error-icon {
		width: 28px;
		height: 28px;
		border-radius: 50%;
		color: var(--base-grey-20);
	}

	.empty-text {
		font-size: 16px;
		line-height: 24px;
		letter-spacing: -0.16px;
		text-align: center;
		color: var(--base-grey-90);
		max-width: 360px;
		margin: 0;
	}
</style>
