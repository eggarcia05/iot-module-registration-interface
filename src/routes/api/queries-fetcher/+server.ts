import { json as json$1 } from '@sveltejs/kit';
import { queries } from '../../../graphql/queries';
import { getClient } from '../../../clientes/hasura';

export async function POST({ request }: any) {
	const { query, variables }: any = await request.json();

	try {
		const newClient = getClient(variables?.url);
		delete variables.url;
		const { data, error } = await newClient.query(queries[query], variables).toPromise();

		if (error)
			throw new Error("@migration task: Migrate this return statement (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292701)");
			// Suggestion (check for correctness before using):
			// return json$1(error, {
			// 	status: 400
			// });
			return {
				status: 400,
				body: error
			};

		throw new Error("@migration task: Migrate this return statement (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292701)");
		// Suggestion (check for correctness before using):
		// return json$1(data);
		return { status: 200, body: data };
		// return result;
	} catch (error) {
		throw new Error("@migration task: Migrate this return statement (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292701)");
		// Suggestion (check for correctness before using):
		// return json$1(error, {
		// 	status: 400
		// });
		return {
			status: 400,
			body: error
		};
	}
}
