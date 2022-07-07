<script lang="ts">
	import CheckboxComponet from './checkbox-componet.svelte';
	import { NUEVA_ENTIDAD } from '../stores/nueva-entidad';

	export let etiquetas: Etiqueta[];
	let url = '';
	$: cont = 0;

	const construirNuevaEntidad = async (event: any): Promise<void> => {
		const tag = event.target.id;
		const valor = event.target.value;
		const entidadBorrador: any = {}

		if(Object.keys($NUEVA_ENTIDAD).includes(tag))
			$NUEVA_ENTIDAD[tag] = valor;
		
		$NUEVA_ENTIDAD['tags'][tag] = valor;
		console.log($NUEVA_ENTIDAD);
		
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
								<input
									class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
									id={etiqueta.tag}
									type="text"
									on:keyup={construirNuevaEntidad}
									placeholder={etiqueta.descripcion}
								/>
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
				Etiquetas Disponibles
			</label>
			{#if !cont}
				<p class="text-red-500 text-xs italic">No existen etiquetas disponibles</p>
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
</div>

<style>
	.noRef {
		@apply w-full;
	}
</style>
