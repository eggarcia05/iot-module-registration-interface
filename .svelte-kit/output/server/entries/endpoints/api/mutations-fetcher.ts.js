import { gql } from "@urql/core";
import { g as getClient } from "../../../chunks/hasura-dffc9e7b.js";
const site = gql`
	mutation nuevaEntidad($object: [site_insert_input!] = {}) {
		insert_site(
			objects: $object
			on_conflict: { constraint: site_pk, update_columns: [dis, tags, updated_at] }
		) {
			affected_rows
			returning{
				id
			}
		}
	}
`;
const equip = gql`
	mutation nuevaEntidad($object: [equip_insert_input!] = {}) {
		insert_equip(
			objects: $object
			on_conflict: { constraint: equip_pk, update_columns: [dis, tags, siteRef, updated_at] }
		) {
			affected_rows
			returning {
				id
			}
		}
	}
`;
const point = gql`
	mutation nuevaEntidad($object: [point_insert_input!] = {}) {
		insert_point(
			objects: $object
			on_conflict: {
				constraint: point_pk
				update_columns: [dis, tags, siteRef, equipRef, updated_at]
			}
		) {
			returning{
				id
			}
		}
	}
`;
const queries = {
  site,
  equip,
  point
};
async function post({ request }) {
  const { query, variables } = await request.json();
  try {
    const newClient = getClient(variables == null ? void 0 : variables.url);
    delete variables.url;
    const { data, error } = await newClient.mutation(queries[query], variables).toPromise();
    console.log("\u{1F680} ~ file: mutations-fetcher.ts ~ line 12 ~ post ~ data", data);
    console.log("\u{1F680} ~ file: mutations-fetcher.ts ~ line 12 ~ post ~ error", error);
    if (error) {
      return {
        status: 400,
        error
      };
    }
    return { status: 200, body: data };
  } catch (error) {
    return {
      status: 400,
      error
    };
  }
}
export { post };
