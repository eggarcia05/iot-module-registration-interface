import { gql } from '@urql/core';

export const tags = gql`
	query tags($entidad_id: uuid) {
		etiquetas(where: { entidad_id: { _eq: $entidad_id } }) {
			id
			tag
			descripcion
		}
	}
`;
