import { entidades } from './query/tipo-entidades';
import { etiquetas } from './query/etiquetas';
import { haystack_tags } from './query/haystack-tags';
import { site, equip, point} from './query/entidades-registradas';

export const queries: any = {
	entidades,
	etiquetas,
	site,
	equip,
	point,
	haystack_tags
};
