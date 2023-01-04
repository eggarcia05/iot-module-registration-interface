const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		entry: {"file":"_app/immutable/start-5c132fbb.js","imports":["_app/immutable/start-5c132fbb.js","_app/immutable/chunks/index-e617e44f.js","_app/immutable/chunks/singletons-e12e11b3.js","_app/immutable/chunks/index-0bf367c3.js","_app/immutable/chunks/preload-helper-41c905a7.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./chunks/0-3d76cbed.js'),
			() => import('./chunks/1-f91dc3d5.js'),
			() => import('./chunks/2-803983c7.js'),
			() => import('./chunks/3-4dbe63e8.js'),
			() => import('./chunks/4-fe15e762.js'),
			() => import('./chunks/5-d5e71708.js'),
			() => import('./chunks/6-6f17d844.js')
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
				endpoint: () => import('./chunks/_server.ts-ece5a285.js')
			},
			{
				id: "/api/queries-fetcher",
				pattern: /^\/api\/queries-fetcher\/?$/,
				params: [],
				page: null,
				endpoint: () => import('./chunks/_server.ts-b7f2d902.js')
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

export { manifest };
//# sourceMappingURL=manifest.js.map
