import { gql } from '@urql/core';

export const entidades = gql`
	query entidades {
		entidades {
            id
			nombre
			tipo
		}
	}
`;
