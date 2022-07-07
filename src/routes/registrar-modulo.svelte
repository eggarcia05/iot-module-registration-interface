<script lang="ts">
	import { onMount } from 'svelte';
	import EquipoForm from '../components/EquipoForm.svelte';
	import PuntoForm from '../components/PuntoForm.svelte';
	import SitioForm from '../components/SitioForm.svelte';
	import { NUEVA_ENTIDAD } from '../stores/nueva-entidad'

	let entidadSeleccionada: Entidad;
	let etiquetas: Etiqueta[] | null;

	$: etiquetas = null;
	$: url = '';

	const buildRequest = (query: string, variables: any = {}): RequestInit => {
		return {
			method: 'POST',
			body: JSON.stringify({
				query,
				variables
			})
		};
	};

	$: {
		if (entidadSeleccionada?.id) {
			getEtiquetas();
		}
	}

	const construirNuevaEntidad = async (): Promise<void> => {
		NUEVA_ENTIDAD.clear()
		console.log($NUEVA_ENTIDAD);
		
	}

	const getEtiquetas = async (): Promise<any> => {
		etiquetas = null;
		const variables = {
			entidad_id: entidadSeleccionada.id
		};
		const res = await fetch(`/api/queries-fetcher`, buildRequest('etiquetas', variables));
		const response = await res.json();

		etiquetas = response?.etiquetas ?? [];
	};

	const getEntidades = async (): Promise<any> => {
		const res = await fetch(`/api/queries-fetcher`, buildRequest('entidades'));
		const response = await res.json();

		return response?.entidades ?? [];
	};
	
	const guardarEntidad = async (): Promise<any> => {
		const query = entidadSeleccionada.tipo;
		const variables = {object: $NUEVA_ENTIDAD};
		const res = await fetch(`/api/mutations-fetcher`, buildRequest(query, variables));
		const response = await res.json();
		console.log(response);

		return response;
	};

	onMount(async () => {
		await getEntidades();
	});
</script>

<div class="mx-auto md:h-screen flex flex-col justify-center items-center px-6 pt-2 pt:mt-0">
	<div class="bg-white shadow rounded-lg md:mt-0 w-full sm:max-w-screen-sm xl:p-0">
		<div class="p-6 sm:p-8 lg:p-16 space-y-8">
			<h2 class="text-2xl lg:text-3xl font-bold text-gray-900">Registrar Entidad</h2>
			<form class="w-full max-w-lg">
				<div class="flex flex-wrap -mx-3 mb-6">
					<div class="w-full  px-3 mb-6 md:mb-0">
						<label
							class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
							for="grid-first-name"
						>
							Tipo
						</label>
						<div class="relative">
							<select
								class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
								id="grid-state"
								bind:value={entidadSeleccionada}
								on:change={construirNuevaEntidad}
							>
								<option value={{}}>Seleccione un tipo de Entidad</option>
								{#await getEntidades()}
									<option value={{}}>Cargando</option>
								{:then entidades}
									{#each entidades as entidad}
										<option value={entidad}>{entidad.nombre}</option>
									{/each}
								{/await}
							</select>
							<div
								class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
							>
								<svg
									class="fill-current h-4 w-4"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
									><path
										d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
									/></svg
								>
							</div>
						</div>
					</div>
				</div>
				{#if etiquetas}
					{#if entidadSeleccionada.tipo === 'equip'}
						<EquipoForm {etiquetas} />
					{:else if entidadSeleccionada.tipo === 'site'}
						<SitioForm {etiquetas} />
					{:else if entidadSeleccionada.tipo === 'point'}
						<PuntoForm {etiquetas} />
					{/if}
				{/if}
				<div class="text-center lg:text-center">
					<button
						type="button"
						class="inline-block px-7 py-3 bg-slate-700 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-stone-500 hover:shadow-lg ease-in-out"
						on:click={guardarEntidad}
					>
						Guardar
					</button>
				</div>
			</form>
		</div>
	</div>
</div>

<style>
</style>
