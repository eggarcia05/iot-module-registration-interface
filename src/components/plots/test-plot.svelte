<script lang="ts">
	export const prerender = false;
	import FusionCharts from 'fusioncharts';
	import Timeseries from 'fusioncharts/fusioncharts.timeseries';
	import SvelteFC, { fcRoot } from 'svelte-fusioncharts';
	import { onMount } from 'svelte';

	export let pointId: string;
	fcRoot(FusionCharts, Timeseries);

	$: {
		pointId;
		data = [];
	}
	//@ts-ignore
	var myHeaders = new Headers();
	myHeaders.append('Content-Type', 'application/json');

	const raw = JSON.stringify({
		pointsIds: [pointId],
		filtroPorEtiquetas: {
			etiquetas: []
		},
		limite: 25
	});

	const requestOptions: any = {
		method: 'POST',
		headers: myHeaders,
		body: raw,
		redirect: 'follow'
	};

	let response: any;
	let data: any[] = [];

	$: captionText = '';
	$: subCaptionText = '';
	$: unit = '';

	const formatResponse = (response: any) => {
		data = [];
		captionText = response.result?.[0].point.dis;
		subCaptionText = response.result?.[0].point.equip.dis;
		unit = response.result?.[0].registro.unit;
		for (let rv of response.result.slice(0,25)) {
			data = [...data, [rv.timestamp_registro.split('.')[0], rv.registro.value]];
		}

		return data;
	};
	const getSensorData = async () => {
		const res = await fetch('http://localhost:8081/obtener-datos', requestOptions);
		response = await res.json();
		formatResponse(response);
		getChartConfig();
		console.log('OK');

		setTimeout(getSensorData, 40 * 1000);
	};

	onMount(() => {
		getSensorData();
	});

	const schema = [
		{
			name: 'Marca de tiempo',
			type: 'date',
			format: '%Y-%m-%dT%H:%M:%S'
		},
		{
			name: `Lectura de ${captionText}`,
			type: 'number'
		}
	];

	let chartConfig: any;
	$: chartConfig;

	const getChartConfig = () => {
		schema[1].name = `Lecturas de ${captionText} (${unit})`;

		const fusionDataStore = new FusionCharts.DataStore(),
			fusionTable = fusionDataStore.createDataTable(data, schema);

		chartConfig = {
			type: 'timeseries',
			width: '100%',
			height: 450,
			renderAt: 'chart-container',
			dataSource: {
				data: fusionTable,
				caption: {
					text: captionText
				},
				subcaption: {
					text: subCaptionText
				},
				yAxis: [
					{
						plot: {
							value: 'Grocery Sales Value',
							type: 'line'
						},
						format: {
							sufix: '$'
						},
						title: 'Sale Value'
					}
				]
			}
		};
	};
</script>

<div id="chart-container">
	{#if chartConfig}
		<!-- {#key chartConfig} -->
			<SvelteFC {...chartConfig} />
		<!-- {/key} -->
	{/if}
</div>
