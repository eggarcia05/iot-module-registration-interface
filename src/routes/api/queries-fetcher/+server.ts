import { queries } from '../../graphql/queries';
import { getClient } from '../../clientes/hasura';

export async function post({ request }: any) {
	const { query, variables }: any = await request.json();

	try {
		const newClient = getClient(variables?.url);
		delete variables.url;
		const { data, error } = await newClient.query(queries[query], variables).toPromise();

		if (error)
			return {
				status: 400,
				body: error
			};

		return { status: 200, body: data };
		// return result;
	} catch (error) {
		return {
			status: 400,
			body: error
		};
	}
}
