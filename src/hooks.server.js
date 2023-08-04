/** @type {import('@sveltejs/kit').HandleServerError} */
export function handleError(error) {
	console.log(error);
	return {
		message: 'Whoops!'
	};
}
