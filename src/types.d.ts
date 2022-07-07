interface Entidad {
	id: string;
	nombre: string;
	tipo: string;
}

interface Etiqueta {
	id: string;
	nombre: string;
	tag: string;
	descripcion?: string;
	requerido: boolean
}
