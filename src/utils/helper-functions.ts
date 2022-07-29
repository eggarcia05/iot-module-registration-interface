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

export const filtrarLista = (searchText: string, listToFilter: Haystack[]) => {
	const searchWordList = searchText.split(' ');
	const filterList = [];

	for (let row of listToFilter) {
		let matched = true;
		const { tag, descripcion } = row;
		for (let searchWord of searchWordList) {
			if (
				!(
					tag.toLowerCase().includes(searchWord.toLowerCase()) ||
					descripcion.toLowerCase().includes(searchWord.toLowerCase())
				)
			)
				matched = false;
		}

		if (matched) filterList.push(row);
	}
	return filterList;
};