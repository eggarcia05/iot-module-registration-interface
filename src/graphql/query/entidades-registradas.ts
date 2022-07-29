import { gql } from '@urql/core';

export const site = gql`
	query sites($where: site_bool_exp = {}) {
		site(where: $where) {
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
