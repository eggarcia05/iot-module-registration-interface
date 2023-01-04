<script lang="ts">
	// export const prerender = true;

	import Select from 'svelte-select';
	import { buildRequest } from '../utils/helper-functions';
	// import TestPlot from '../components/plots/test-plot.svelte';
	import { onMount } from 'svelte';
	import Tab from '../components/tab-equipment/tabs-container.svelte';

	let MyComponent: any;

	onMount(async () => {
		const module = await import('../components/plots/timeseries-chart.svelte');
		MyComponent = module.default;
	});

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
		try {
		const res = await fetch(`/api/queries-fetcher`, buildRequest('point'));
		const response = await res.json();

		items = formatPoints(response?.point);

		} catch (error) {
			
		}
	}

	function handleSelect(event: any) {
		selectedPointId = event.detail.value;
	}

	getPoints();
</script>

<div class="mt-24 w-full">
	<!-- <div class=" items-center md:flex mb-8">
		<div class="ml-24">Punto:</div>
		<div class="ml-8 w-full mr-14">
			<Select {items} {value} on:select={handleSelect} />
		</div>
	</div> -->
	<div class=" w-full h-10">
		<Tab />
		<div class="grid  grid-cols-1">
			{#if selectedPointId}
				{#key selectedPointId}
					<svelte:component this={MyComponent} pointId={selectedPointId} />
				{/key}
			{/if}
			{#if selectedPointId}
				{#key selectedPointId}
					<svelte:component this={MyComponent} pointId={selectedPointId} />
				{/key}
			{/if}
		</div>
	</div>
</div>

<style>
	.themed {
		--border: 3px solid blue;
		--borderRadius: 10px;
		--placeholderColor: blue;
	}
</style>
