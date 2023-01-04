import { queries } from '../../graphql/mutations';
import { getClient } from '../../clientes/hasura';

export async function post({ request }: any) {
	const { query, variables }: any = await request.json();

	try {
		const newClient = getClient(variables?.url);
		delete variables.url;
		
		const { data, error } = await newClient.mutation(queries[query], variables).toPromise();
		console.log("🚀 ~ file: mutations-fetcher.ts ~ line 12 ~ post ~ data", data)
		console.log("🚀 ~ file: mutations-fetcher.ts ~ line 12 ~ post ~ error", error)

		if (error) {
			return {
				status: 400,
				error
			};
			
		}

		return { status: 200, body:data };
		// return result;
	} catch (error) {
		return {
			status: 400,
			error
		};

	}
}
