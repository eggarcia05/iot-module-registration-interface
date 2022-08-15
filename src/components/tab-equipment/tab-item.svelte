<script lang="ts">
	export const prerender = false;

	import Select from 'svelte-select';
	import { buildRequest } from '../../utils/helper-functions';
	import { onMount } from 'svelte';
	import TimeseriesChart from '../../components/plots/timeseries-chart.svelte';
	import Actuador from '../status-actuador/actuador.svelte';

	export let equip: any;
	let MyComponent: any;

	onMount(async () => {
		const module = await import('../../components/plots/timeseries-chart.svelte');
		MyComponent = module.default;
	});

	let items: any[] = [];
	$: items;
	let selectedPointId: any;
	$: {
		selectedPointId;
	}

	const value = { value: '0', label: 'Todos los Sensores' };
	const formatPoints = (responseArray: any) => {
		const result = [];
		for (let response of responseArray) {
			result.push({
				value: response.id,
				label: response.dis,
				tags: response.tags
			});
		}
		return result;
	};

	const getPoints = async (): Promise<any> => {
		const res = await fetch(
			`/api/queries-fetcher`,
			buildRequest('point', { where: { equipRef: { _eq: equip.id } } })
		);
		const response = await res.json();
		items = formatPoints(response?.point);
	};

	function handleSelect(event: any) {
		selectedPointId = event.detail;
	}

	function handleClear(event: any) {
		selectedPointId = undefined;
	}

	getPoints();
</script>

<div class="mt-12 w-full">
	<div class=" items-center md:flex mb-8">
		<div class="ml-24">Punto:</div>
		<div class="ml-8 w-full mr-14">
			<Select {items} {value} on:select={handleSelect} on:clear={handleClear} />
		</div>
	</div>
	<div class=" w-full h-10">
		<div class="grid  grid-cols-1">
			{#if selectedPointId}
				{#key selectedPointId}
					{#if selectedPointId.tags.run}
						<Actuador
							pointId={selectedPointId.value}
						/>
					{:else}
						<svelte:component
							this={MyComponent}
							pointId={selectedPointId.value}
							timeRefreshData={equip.id !== 'dd85475c-a5ef-4a15-b00f-206e408528b2' ? 5 : undefined}
						/>
					{/if}
				{/key}
			{:else}
				{#each items as item}
					{#if item.tags.run}
						<Actuador
							pointId={item.value}
						/>
					{/if}
				{/each}
				{#each items as item}
					{#if !item.tags.run}
						<TimeseriesChart
							pointId={item.value}
							timeRefreshData={equip.id !== 'dd85475c-a5ef-4a15-b00f-206e408528b2' ? 5 : undefined}
						/>
					{/if}
				{/each}
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
