import { gql } from '@urql/core';

export const site = gql`
	query sites {
		site {
			id
			dis
		}
	}
`;
