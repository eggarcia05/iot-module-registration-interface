import adapter from '@sveltejs/adapter-node';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit/types').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({ postcss: true }),

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		// target: '#svelte',
		adapter: adapter(),
		vite: {
			ssr: {
				external: ['input-core']
			}
		}
	}
	// server: {
	// 	hmr: {
	// 		overlay: false
	// 	}
	// }
};

export default config;
