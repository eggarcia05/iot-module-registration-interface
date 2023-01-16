import { gql } from "@urql/core";
import { g as getClient } from "../../../chunks/hasura-9afb62e8.js";
const entidades = gql`
	query entidades {
		entidades {
            id
			nombre
			tipo
		}
	}
`;
const etiquetas = gql`
	query tags($entidad_id: uuid) {
		etiquetas(where: { entidad_id: { _eq: $entidad_id } }, order_by: { orden: asc_nulls_last }) {
			id
			tag
			haystack_tag {
				descripcion
			}
			nombre
			requerido
		}
	}
`;
const haystack_tags = gql`
	query tagsHaystack {
		haystack_tags {
			tag
			descripcion
		}
	}
`;
const site = gql`
	query sites($where: site_bool_exp = {}) {
		site(where: $where) {
			id
			dis
		}
	}
`;
const equip = gql`
	query equips {
		equip {
			id
			dis
		}
	}
`;
const point = gql`
	query points($where: point_bool_exp = {}) {
		point(where: $where) {
			id
			dis
			tags
			clave_esperada
			equipRef
		}
	}
`;
const queries = {
  entidades,
  etiquetas,
  site,
  equip,
  point,
  haystack_tags
};
async function post({ request }) {
  const { query, variables } = await request.json();
  try {
    const newClient = getClient(variables == null ? void 0 : variables.url);
    delete variables.url;
    const { data, error } = await newClient.query(queries[query], variables).toPromise();
    if (error)
      return {
        status: 400,
        body: error
      };
    return { status: 200, body: data };
  } catch (error) {
    return {
      status: 400,
      body: error
    };
  }
}
export { post };
