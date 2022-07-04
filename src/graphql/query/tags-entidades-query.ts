import { gql } from '@urql/core';

export const tags = gql`
	query tags($entidad_id: uuid) {
		etiquetas(where: { entidad_id: { _eq: $entidad_id } }, order_by: { orden: asc_nulls_last }) {
			id
			tag
			descripcion
			nombre
			requerido
		}
	}
`;
