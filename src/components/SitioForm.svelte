<script lang="ts">
	import CheckboxComponet from './checkbox-componet.svelte';
	import CheckboxList from './checkbox-List.svelte';
	import { NUEVA_ENTIDAD } from '../stores/nueva-entidad';
	import { filtrarLista } from '../utils/helper-functions';
	import AutocompleteIdentificador from './Autocomplete-identificadores.svelte';

	export let etiquetas: Etiqueta[];
	export let haystackTags: Haystack[];
	let hayStackFiltrado: any[];

	$: cont = 0;
	$: hayStackFiltrado = [];
	$: texto = '';

	const construirNuevaEntidad = async (event: any): Promise<void> => {
		let tag = event.target.id;
		let valor = event.target.value;

		if (Object.keys($NUEVA_ENTIDAD).includes(tag)) $NUEVA_ENTIDAD[tag] = valor;

		$NUEVA_ENTIDAD['tags'][tag] = valor;
	};

	const filtrar = async () => {
		hayStackFiltrado = filtrarLista(texto, haystackTags);
	};

	const handleContador = (event: any) => (cont += event.detail);
</script>

<div class="w-full max-w-lg">
	<div class="flex flex-wrap -mx-3 mb-6">
		<div class="w-full px-3 mb-6 md:mb-0">
			{#if etiquetas}
				<div class="grid grid-cols-2 gap-4">
					{#each etiquetas as etiqueta}
						{#if etiqueta.nombre && etiqueta.requerido !== false}
							<div class="noRef">
								<label
									class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
									for="grid-last-name"
								>
									{etiqueta.nombre}
									{etiqueta.requerido ? ' *' : ''}
								</label>
								{#if etiqueta.tag.includes('id')}
									<AutocompleteIdentificador tipoEntidad={'site'} />
								{:else}
									<input
										class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
										id={etiqueta.tag}
										type="text"
										on:keyup={construirNuevaEntidad}
										placeholder={etiqueta.haystack_tag?.descripcion ?? ''}
									/>
								{/if}
							</div>
						{/if}
					{/each}
				</div>
			{/if}
		</div>
	</div>

	<div class="flex flex-wrap -mx-3 mb-6">
		<div class="w-full px-3 ">
			<label
				class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
				for="grid-password"
			>
				Etiquetas Frecuentes:
			</label>
			{#if !cont}
				<p class="text-red-500 text-xs italic">No existen etiquetas frecuentes</p>
			{/if}
			{#if etiquetas}
				<div class="grid grid-cols-3 gap-4 mt-5 ml-4">
					{#each etiquetas as etiqueta}
						{#if !etiqueta?.nombre}
							<CheckboxComponet data={etiqueta} on:contador={handleContador} />
						{/if}
					{/each}
				</div>
			{:else}
				<p class="text-red-500 text-xs italic">Seleccione un tipo de entidad</p>
			{/if}
		</div>
	</div>
	<input
		class="appearance-none block w-full mb-5 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
		id={'filter'}
		type="text"
		bind:value={texto}
		on:keyup={filtrar}
		placeholder={'Buscar etiqueta...'}
	/>
	<CheckboxList
		data={hayStackFiltrado && texto ? hayStackFiltrado : haystackTags}
		
	/>
</div>

<style>
	.noRef {
		@apply w-full;
	}
</style>
