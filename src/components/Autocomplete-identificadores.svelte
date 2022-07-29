<script lang="ts">
	import AutoComplete from 'simple-svelte-autocomplete';
	import { NUEVA_ENTIDAD } from '../stores/nueva-entidad';
	import { buildRequest } from '../utils/helper-functions';
	export let tipoEntidad: string;

	let itemSeleccionado: any;

	const getSitesDuplicados = async () => {
		const res = await fetch(`/api/queries-fetcher`, buildRequest(tipoEntidad));
		const response = await res.json();

		return response?.[tipoEntidad] ?? [];
	};
</script>

<AutoComplete
	searchFunction={async () => await getSitesDuplicados()}
	bind:selectedItem={itemSeleccionado}
	labelFieldName="id"
	on:click={getSitesDuplicados}
	maxItemsToShowInList="10"
	inputClassName="appearance-none block w-full  h-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4  focus:outline-none focus:bg-white focus:border-gray-500"
	className="appearance-none block  py-2  leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
	noResultsText="El sitio que busca no está registrado"
	delay="500"
	showLoadingIndicator="true"
	localFiltering="false"
	onChange={() => {
		$NUEVA_ENTIDAD['id'] = itemSeleccionado?.id;
		$NUEVA_ENTIDAD['tags']['id'] = itemSeleccionado?.id;
	}}
/>
