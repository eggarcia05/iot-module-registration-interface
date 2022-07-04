<script lang="ts">
	import CheckboxComponet from './checkbox-componet.svelte';

	export let etiquetas: Etiqueta[];
	let url = '';
	let cont = 0;


	const handleContador = (event: any) => (cont += event.detail);
</script>

<div class="w-full max-w-lg">
	<div class="flex flex-wrap -mx-3 mb-6">
		<div class="w-full px-3 mb-6 md:mb-0">
			{#if etiquetas}
				<div class="grid grid-cols-2 gap-4">
					{#each etiquetas as etiqueta}
						{#if etiqueta.nombre && etiqueta.requerido !== false}
							<div class={etiqueta.tag === 'siteRef' ? 'siteRef' : 'noRef'}>
								<label
									class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
									for="grid-last-name"
								>
									{etiqueta.nombre}
									{etiqueta.requerido ? ' *' : ''}
								</label>
								<input
									class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
									id={'descripcion'}
									type="text"
									bind:value={url}
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
		<div class="w-full px-3">
			<label
				class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
				for="grid-password"
			>
				Etiquetas Disponibles
			</label>
			{#if etiquetas}
				<div class="grid grid-cols-3 gap-4 mt-5 ml-4">
					{#each etiquetas as etiqueta}
						{#if !etiqueta?.nombre}
							<CheckboxComponet data={etiqueta} on:contador={handleContador} />
						{/if}
					{/each}
					{#if !cont}
						<p class="text-red-500 text-xs italic">No existen etiquetas disponibles</p>
					{/if}
				</div>
			{:else}
				<p class="text-red-500 text-xs italic">Seleccione un tipo de entidad</p>
			{/if}
		</div>
	</div>
</div>

<style>
	.siteRef {
		@apply w-full col-span-2;
	}
	.noRef {
		@apply w-full;
	}
</style>
