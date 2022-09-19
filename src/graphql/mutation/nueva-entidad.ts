import { gql } from '@urql/core';

export const site = gql`
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

export const equip = gql`
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

export const point = gql`
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
