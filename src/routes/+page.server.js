/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch }) {
	const res = await fetch('https://dev-api.voolt.com/api/cms/2');
	const data = await res.json();
	return { industries: data };
}
