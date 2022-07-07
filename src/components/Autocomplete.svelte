<script lang="ts">
	import AutoComplete from "simple-svelte-autocomplete";

	let itemSeleccionado: any;

</script>

<AutoComplete
	searchFunction={async () => []}
	bind:selectedItem={itemSeleccionado}
	labelFieldName="nombre"
	maxItemsToShowInList="10"
	className="input"
	delay="500"
	localFiltering="false"
	onChange={() => []}
/>
