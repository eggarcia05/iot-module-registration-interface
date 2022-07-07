import { queries } from '../../graphql/mutations';
import { getClient } from '../../clientes/hasura';

export async function post({ request }: any) {
	const { query, variables }: any = await request.json();
		console.log(query, variables);

	try {
		const newClient = getClient(variables?.url);
		delete variables.url;
		
		const { data, error } = await newClient.mutation(queries[query], variables).toPromise();

		if (error)
			return {
				status: 400,
				body: error
			};

		return { body: data };
		// return result;
	} catch (error) {
		console.log(error);
	}
}
