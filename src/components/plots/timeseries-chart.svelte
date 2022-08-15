<script lang="ts">
	import FusionCharts from 'fusioncharts';
	import Timeseries from 'fusioncharts/fusioncharts.timeseries';
	import SvelteFC, { fcRoot } from 'svelte-fusioncharts';
	import { onMount, onDestroy } from 'svelte';

	export let pointId: string;
	export let timeRefreshData: number = 45;

	fcRoot(FusionCharts, Timeseries);

	$: pointId;

	let captionText = '';
	let subCaptionText = '';
	let unit = '';

	//@ts-ignore
	var myHeaders = new Headers();
	myHeaders.append('Content-Type', 'application/json');

	const raw = JSON.stringify({
		pointsIds: [pointId],
		filtroPorEtiquetas: {
			etiquetas: []
		},
		limite: 2000
	});

	const requestOptions: any = {
		method: 'POST',
		headers: myHeaders,
		body: raw,
		redirect: 'follow'
	};

	const formatResponse = (response: any) => {
		let data: any = [];
		captionText = response.result?.[0].point.dis;
		subCaptionText = response.result?.[0].point.equip.dis;
		unit = response.result?.[0].registro.unit;
		for (let rv of response.result) {
			data = [...data, [rv.timestamp_registro.split('.')[0], rv.registro.value]];
		}
		return data;
	};
	const getSensorData = async () => {
		try {
			const res = await fetch('http://localhost:8081/obtener-datos', requestOptions);
			const response = await res.json();
			const formatedResponse = formatResponse(response);
			return formatedResponse;
		} catch (e: any) {
			throw new Error(e);
		}
	};

	onMount(() => {
		// getSensorData();
	});

	onDestroy(() => {
		clearInterval(interval);
		console.log('DEstroy');
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

	const getChartConfig = (data: any) => {
		schema[1].name = `Lecturas de ${captionText} (${unit})`;

		const fusionDataStore = new FusionCharts.DataStore();
		const fusionTable = fusionDataStore.createDataTable(data, schema);

		const chartConfig = {
			type: 'timeseries',
			width: '100%',
			height: 600,
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
							value: 'Valor Sensado',
							type: 'line',
							connectnulldata: true
						},
						format: {
							sufix: '$'
						},
						title: `Lecturas de ${captionText}`
					}
				]
			}
		};

		return chartConfig;
	};

	let chartComponent: any;

	let interval: any;

	const updateData = async () => {
		const updatedSensorData = await getSensorData();
		if (!!chartComponent?.feedData) chartComponent.feedData([...updatedSensorData]);

		// setTimeout(updateData, timeRefreshData * 1000);
	};

	const renderCompleteHandler = async (event: any) => {
		
		if(!interval){
			console.log(chartComponent?.feedData);

			interval = setInterval(async () => await updateData(), timeRefreshData * 1000);
		}
	};
</script>

<div id="chart-container" class="sm:max-w-screen">
	{#await getSensorData()}
		<p>Obteniendo datos y esquema...</p>
	{:then value}
		<SvelteFC
			{...getChartConfig(value)}
			on:renderComplete={renderCompleteHandler}
			bind:chart={chartComponent}
		/>
	{:catch error}
		<p>Something went wrong: {error.message}</p>
	{/await}
</div>
