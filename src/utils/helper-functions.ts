export const buildRequest = (query: string, variables: any = {}): RequestInit => {
	return {
		method: 'POST',
		body: JSON.stringify({
			query,
			variables
		})
	};
};
