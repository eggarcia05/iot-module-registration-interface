import { createClient, dedupExchange, cacheExchange, fetchExchange } from '@urql/core';
const urlT = import.meta.env.VITE_HASURA_ENDPOINT;
const secret = import.meta.env.VITE_HASURA_SECRET;


export const getClient = (url:string = urlT) => {
	const gqlClient = createClient({
		url,
		exchanges: [dedupExchange, cacheExchange, fetchExchange],
		fetchOptions: () => {
			return {
				headers: { 'x-hasura-admin-secret': secret }
				// headers: { Authorization: authorization }
			};
		}
	});

	return gqlClient;
};
