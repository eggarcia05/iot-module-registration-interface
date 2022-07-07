import { writable } from 'svelte/store';

export const NUEVA_ENTIDAD: any = writable({
    id: null,
    dis: null,
    tags: {
    }
});
