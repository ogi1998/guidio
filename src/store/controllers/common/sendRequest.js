export default async function sendRequest(url, request, body) {
	const res = await fetch(url, {
		method: request,
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
		},
		body: body ? JSON.stringify(body) : null
	});
	if (request === 'DELETE') {
		if (!res.ok)
			throw res.statusText;

		if (res.status === 204)
			return true;
	}

	const data = await res.json();
	if (!res.ok) {
		throw data;
	}

	return data;
}