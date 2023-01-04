import { json as json$1 } from '@sveltejs/kit';
import { queries } from '../../../graphql/mutations';
import { getClient } from '../../../clientes/hasura';

export async function POST({ request }: any) {
	const { query, variables }: any = await request.json();

	try {
		const newClient = getClient(variables?.url);
		delete variables.url;
		
		const { data, error } = await newClient.mutation(queries[query], variables).toPromise();
		console.log("🚀 ~ file: mutations-fetcher.ts ~ line 12 ~ post ~ data", data)
		console.log("🚀 ~ file: mutations-fetcher.ts ~ line 12 ~ post ~ error", error)

		if (error) {
			return new Response(undefined, { status: 400 });
			
		}

		throw new Error("@migration task: Migrate this return statement (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292701)");
		// Suggestion (check for correctness before using):
		// return json$1(data);
		return { status: 200, body:data };
		// return result;
	} catch (error) {
		return new Response(undefined, { status: 400 });

	}
}
