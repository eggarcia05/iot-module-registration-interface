import { gql } from '@urql/core';

export const site = gql`
	query sites {
		site {
			id
			dis
		}
	}
`;

export const equip = gql`
	query equips {
		equip {
			id
			dis
		}
	}
`;

export const point = gql`
	query points {
		point {
			id
			dis
		}
	}
`;
