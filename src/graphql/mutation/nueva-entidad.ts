import { gql } from '@urql/core';

export const site = gql`
	mutation nuevaEntidad($object: [site_insert_input!] = {}) {
		insert_site(
			objects: $object
			on_conflict: { constraint: site_pk, update_columns: [dis, tags, updated_at] }
		) {
			affected_rows
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
		}
	}
`;
