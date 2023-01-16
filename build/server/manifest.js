export const manifest = {
	appDir: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		entry: {"file":"start-7a20c207.js","js":["start-7a20c207.js","chunks/index-e5139cc1.js","chunks/index-865412c6.js","chunks/preload-helper-60cab3ee.js"],"css":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/6.js')
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				id: "dashboard",
				pattern: /^\/dashboard\/?$/,
				names: [],
				types: [],
				path: "/dashboard",
				shadow: null,
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				id: "lecturas",
				pattern: /^\/lecturas\/?$/,
				names: [],
				types: [],
				path: "/lecturas",
				shadow: null,
				a: [0,4],
				b: [1]
			},
			{
				type: 'page',
				id: "registrar-modulo",
				pattern: /^\/registrar-modulo\/?$/,
				names: [],
				types: [],
				path: "/registrar-modulo",
				shadow: null,
				a: [0,5],
				b: [1]
			},
			{
				type: 'page',
				id: "tabla",
				pattern: /^\/tabla\/?$/,
				names: [],
				types: [],
				path: "/tabla",
				shadow: null,
				a: [0,6],
				b: [1]
			},
			{
				type: 'endpoint',
				id: "api/queries-fetcher",
				pattern: /^\/api\/queries-fetcher\/?$/,
				names: [],
				types: [],
				load: () => import('./entries/endpoints/api/queries-fetcher.ts.js')
			},
			{
				type: 'endpoint',
				id: "api/mutations-fetcher",
				pattern: /^\/api\/mutations-fetcher\/?$/,
				names: [],
				types: [],
				load: () => import('./entries/endpoints/api/mutations-fetcher.ts.js')
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
