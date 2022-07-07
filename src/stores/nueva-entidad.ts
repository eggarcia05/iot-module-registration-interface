import { writable } from 'svelte/store';

const entidadEnBlanco = {
	id: null,
	dis: null,
	tags: {}
};

const store = writable(JSON.parse(JSON.stringify(entidadEnBlanco)));

export const NUEVA_ENTIDAD = {
	...store,

	clear() {
		store.update(() => JSON.parse(JSON.stringify(entidadEnBlanco)));
	}
};
