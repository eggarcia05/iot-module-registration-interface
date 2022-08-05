<script lang="ts">
	//@ts-ignore
	import Select from 'svelte-select';
	import { buildRequest } from '../utils/helper-functions';
	import TestPlot from '../components/plots/test-plot.svelte';

	let items: any[] = [];
	$: items;
	let selectedPointId: any;
	$: {
		selectedPointId;
	}

	const value = { value: '0', label: 'Seleccionar...' };
	const formatPoints = (responseArray: any) => {
		const result = [];
		for (let response of responseArray) {
			result.push({
				value: response.id,
				label: response.dis
			});
		}
		return result;
	};

	const getPoints = async (): Promise<any> => {
		const res = await fetch(`/api/queries-fetcher`, buildRequest('point'));
		const response = await res.json();
		console.log(response);

		items = formatPoints(response?.point);
	};

	function handleSelect(event: any) {
		selectedPointId = event.detail.value;
	}

	getPoints();
</script>

<div class="mt-24 ">
	<div class=" items-center md:flex mb-8">
		<div class="ml-24">Punto:</div>
		<div class="ml-8 w-full mr-14">
			<Select {items} {value} on:select={handleSelect} />
		</div>
	</div>
	{#key selectedPointId}
		<TestPlot pointId={selectedPointId} />
	{/key}
</div>

<style>
	.themed {
		--border: 3px solid blue;
		--borderRadius: 10px;
		--placeholderColor: blue;
	}
</style>
