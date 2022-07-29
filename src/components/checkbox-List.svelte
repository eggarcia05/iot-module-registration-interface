<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte';
	import { NUEVA_ENTIDAD } from '../stores/nueva-entidad';

	export let data: any[];

	const dispatch = createEventDispatcher();

	const construirNuevaEntidad = async (event: any): Promise<void> => {
		const tag = event.target.value;
		$NUEVA_ENTIDAD['tags'][tag] = true;
		dispatch('new_tag', 1);
	};
</script>

<!-- <div class="m-7"> -->
<div class="overflow-y-scroll flex flex-wrap -mx-3 mb-6 h-52">
	<!-- <div class="flex flex-wrap -mx-3 mb-6"> -->
	<div class="w-full px-3 ">
		<div class="grid grid-cols-2 gap-4 mt-5 ml-4">
			{#each data as element}
				<div class="flex items-center mb-4">
					<input
						id={element.tag}
						type="checkbox"
						on:change={construirNuevaEntidad}
						value={element.tag}
						class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
					/>
					<label
						for={element.tag}
						class="ml-2 text-sm font-medium text-gray-900 dark:text-green-300"
						data-bs-toggle="tooltip"
						title={element.descripcion}>{element.tag}</label
					>
				</div>
			{/each}
		</div>

		<!-- </div> -->
	</div>
</div>
<!-- </div> -->
