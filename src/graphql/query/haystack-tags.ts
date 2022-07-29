import { gql } from '@urql/core';

export const haystack_tags = gql`
	query tagsHaystack {
		haystack_tags {
			tag
			descripcion
		}
	}
`;
