import { queries } from '../../graphql/mutations';
import { getClient } from '../../clientes/hasura';

export async function post({ request }: any) {
	const { query, variables }: any = await request.json();

	try {
		const newClient = getClient(variables?.url);
		delete variables.url;
		
		const { data, error } = await newClient.mutation(queries[query], variables).toPromise();

		console.log('🚀 ~ file: mutations-fetcher.ts ~ line 14 ~ post ~ error', JSON.stringify(error));
		if (error) {
			return {
				status: 400,
				error
			};
			
		}

		return { status: 200, body:data };
		// return result;
	} catch (error) {
		console.log(error);
		return {
			status: 400,
			error
		};

	}
}
