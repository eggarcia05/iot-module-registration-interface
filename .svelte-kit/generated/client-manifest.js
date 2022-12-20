export { matchers } from './client-matchers.js';

export const components = [
	() => import("..\\..\\src\\routes\\__layout.svelte"),
	() => import("..\\runtime\\components\\error.svelte"),
	() => import("..\\..\\src\\routes\\dashboard.svelte"),
	() => import("..\\..\\src\\routes\\index.svelte"),
	() => import("..\\..\\src\\routes\\lecturas.svelte"),
	() => import("..\\..\\src\\routes\\registrar-modulo.svelte"),
	() => import("..\\..\\src\\routes\\tabla.svelte")
];

export const dictionary = {
	"": [[0, 3], [1]],
	"dashboard": [[0, 2], [1]],
	"lecturas": [[0, 4], [1]],
	"registrar-modulo": [[0, 5], [1]],
	"tabla": [[0, 6], [1]]
};