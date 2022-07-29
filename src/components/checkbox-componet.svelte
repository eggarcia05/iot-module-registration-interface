<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte';
    import { NUEVA_ENTIDAD } from '../stores/nueva-entidad';
    
	const dispatch = createEventDispatcher();

    onMount(()  => dispatch('contador', 1))
	export let data: any;

    const construirNuevaEntidad = async (event: any): Promise<void> => {
		const tag = data.tag;
		$NUEVA_ENTIDAD['tags'][tag] = true;
	};
</script>
<!-- <div class="m-7"> -->

   <div class="flex items-center mb-4">
       <input id={data.id} type="checkbox" on:change={construirNuevaEntidad}  value={data.tag} class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
       <label for={data.id} class="ml-2 text-sm font-medium text-gray-900 dark:text-green-300" data-bs-toggle="tooltip" title={data.haystack_tag.descripcion}>{data.tag}</label>
   </div>
<!-- </div> -->
 
