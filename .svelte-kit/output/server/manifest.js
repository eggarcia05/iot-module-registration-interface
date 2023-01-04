export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		entry: {"file":"_app/immutable/start-5c132fbb.js","imports":["_app/immutable/start-5c132fbb.js","_app/immutable/chunks/index-e617e44f.js","_app/immutable/chunks/singletons-e12e11b3.js","_app/immutable/chunks/index-0bf367c3.js","_app/immutable/chunks/preload-helper-41c905a7.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/6.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/api/mutations-fetcher",
				pattern: /^\/api\/mutations-fetcher\/?$/,
				params: [],
				page: null,
				endpoint: () => import('./entries/endpoints/api/mutations-fetcher/_server.ts.js')
			},
			{
				id: "/api/queries-fetcher",
				pattern: /^\/api\/queries-fetcher\/?$/,
				params: [],
				page: null,
				endpoint: () => import('./entries/endpoints/api/queries-fetcher/_server.ts.js')
			},
			{
				id: "/dashboard",
				pattern: /^\/dashboard\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "/lecturas",
				pattern: /^\/lecturas\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			},
			{
				id: "/registrar-modulo",
				pattern: /^\/registrar-modulo\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 5 },
				endpoint: null
			},
			{
				id: "/tabla",
				pattern: /^\/tabla\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 6 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
