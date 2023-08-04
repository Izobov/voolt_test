/** @type {import('@sveltejs/kit').HandleServerError} */
export function handleError() {
	return {
		message: 'Whoops!'
	};
}
