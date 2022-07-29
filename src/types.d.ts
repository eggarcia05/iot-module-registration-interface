interface Entidad {
	id: string;
	nombre: string;
	tipo: string;
}

interface Haystack {
	tag: string
	descripcion: string
}
interface Etiqueta {
	id: string;
	nombre: string;
	tag: string;
	haystack_tag?: Haystack;
	requerido: boolean;
}
