export const buildRequest = (query: string, variables: any = {}): RequestInit => {
	return {
		method: 'POST',
		body: JSON.stringify({
			query,
			variables
		})
	};
};

export const deleteNullProperties = (nuevaEntidad: any) => {
	const keys = Object.keys(nuevaEntidad);

	for (let key of keys) {
		if (!!nuevaEntidad[key] === false) {
			delete nuevaEntidad[key];
		}
	}

	return nuevaEntidad;
};
