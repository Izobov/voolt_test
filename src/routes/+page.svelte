<script>
	// @ts-nocheck

	/** @type {import('./$types').PageData} */
	import img from '$lib/images/left-side.png';
	import left_arrow from '$lib/icons/nav-arrow-left.png';
	import logo from '$lib/images/voolt-logo.png';
	import ComboBox from '$lib/components/ComboBox.svelte';
	import FormButton from '$lib/components/FormButton.svelte';
	import SelectList from '$lib/components/SelectList.svelte';
	export let data;
	$: ({ industries = [] } = data || {});
	$: popular = industries.filter(({ isPopular }) => !!isPopular);
	let selected;
</script>

<div class="wrapper theme">
	<div class="img-wrapper" style="background-image: url({img})" />
	<div class="content-wrapper">
		<img src={logo} alt="logo" class="logo" />

		<div class="form-wrapper">
			<h1 class="title">What type of business is the website for?</h1>
			<form class="form">
				<ComboBox data={industries} bind:selected />
				<SelectList data={popular} bind:value={selected} />
				<div class="buttons">
					<FormButton type="secondary" width="fit-content" style="padding-left: 8px !important">
						<img src={left_arrow} alt="left arrow" class="icon-left" />
						Back
					</FormButton>
					<FormButton>Continue</FormButton>
				</div>
			</form>
		</div>
	</div>
</div>

<style>
	:global(.wrapper *::-webkit-scrollbar) {
		width: 4px;
	}

	:global(.wrapper *::-webkit-scrollbar-track) {
		background: transparent;
	}

	:global(.wrapper *::-webkit-scrollbar-thumb) {
		background-color: #bdc1c7;
		border-radius: 100px;
	}
	:global(body) {
		margin: 0;
		width: 100vw;
		height: 100vh;
		overflow: hidden;
	}
	:global(*) {
		box-sizing: border-box;
	}

	:global(.theme) {
		--gradient-mesh: radial-gradient(
				108.2% 133.05% at 10.18% -60.65%,
				rgba(245, 91, 20, 0.16) 0%,
				rgba(245, 91, 20, 0) 100%
			),
			radial-gradient(
				135.94% 86.02% at -21.43% 2.07%,
				rgba(251, 188, 4, 0.12) 0%,
				rgba(255, 210, 10, 0) 100%
			),
			radial-gradient(
				107.19% 126.26% at 100% 117.34%,
				rgba(128, 0, 255, 0.08) 0%,
				rgba(128, 0, 255, 0) 100%
			),
			#f9fafa;
		--blue-primary: #4253ff;
		--blue-blue-200: #3c4ad7;
		--blue-blue-10: #ebf1ff;
		--base-grey-100: #202123;
		--base-grey-90: #2e2f38;
		--base-grey-40: #d8dbde;
		--base-grey-30: #ecedef;
		--base-grey-20: #f4f4f5;
		--base-grey-10: #f9fafa;

		--text-color: var(--base-grey-100);

		--background: #fff;
		--box-shadow: 0px 0px 0px 2px #e2ebfd;
		--border-radius: 4px;
	}
	.wrapper {
		display: flex;
		width: 100%;
		height: 100%;
		max-width: 100%;
		color: var(--text-color);
		font-family: Basier Circle;
	}
	.img-wrapper {
		flex-grow: 1;
		width: 50%;
		background-repeat: no-repeat !important;
		background-size: cover !important;
		background: var(--gradient-mesh);
	}
	.content-wrapper {
		width: 50%;
		flex-grow: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: 35px 100px;
		background-color: var(--background);
	}
	.form-wrapper {
		display: flex;
		flex-direction: column;
		flex-grow: 1;
		justify-content: center;
	}
	.logo {
		height: 32px;
		width: 110px;
	}
	.title {
		font-weight: 600;
		font-size: 32px;
		max-width: 420px;
		display: flex;
		flex-grow: 1;
		align-items: end;
	}

	.form {
		display: flex;
		flex-direction: column;
		gap: 40px;
		flex-grow: 1;
	}
	.buttons {
		display: flex;
		justify-content: space-between;
		width: 100%;
		flex-grow: 1;
		align-items: end;
	}
	.icon-left {
		margin-right: 8px;
	}
</style>
