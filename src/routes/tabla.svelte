<script lang="ts">
	import { onDestroy, onMount } from 'svelte';

	//@ts-nocheck
	import SvelteTable from 'svelte-table';

	let rows: any[] = [];
	$: rows;

	let src =
		'http://www.cenaim.espol.edu.ec/sites/cenaim.espol.edu.ec/files/2020/Imagenes/CENAIM-2.jpg';

	
	const apiStandardization = import.meta.env.VITE_API_STANDARDIZATION;

	var myHeaders = new Headers();
	myHeaders.append('Content-Type', 'application/json');

	const raw = JSON.stringify({
		pointsIds: [],
		filtroPorEtiquetas: {
			etiquetas: []
		},
		limite: 200
	});

	const requestOptions: any = {
		method: 'POST',
		headers: myHeaders,
		body: raw,
		redirect: 'follow'
	};

	let interval: any;
	let timeRefreshData = 30;

	onMount(async () => {
		if (!interval) {
			console.log('INICIAR INTERVALO, tiempo: ', timeRefreshData);
			interval = setInterval(async () => await convertResponseFormat(), timeRefreshData * 1000);
		}
	});

	const convertResponseFormat = async () => {
		const data = await fetch(`${apiStandardization}/obtener-datos`, requestOptions);
		const res = await data.json();
		const response = res.response;
		rows = response.map((item: any) => {
			return item.registro;
		});
		//console.log(rows)
	};
	convertResponseFormat();

	const columns: any = [
		{
			key: 'dis',
			title: 'Parámetro',
			value: (v: any) => v['dis'],
			class: 'col border-t border-b border-l border-r border-gray-900',
			sortable: true,
			headerClass: 'text-left border-t border-b border-l border-r border-gray-900'
		},
		{
			key: 'value',
			title: 'Valor',
			value: (v: any) => v.value,
			class: 'row border-t border-b border-l border-r border-gray-900',
			sortable: true,
			headerClass: 'text-left border-t border-b border-l border-r border-gray-900'
		}
	];

	onDestroy(() => {
		clearInterval(interval);
	});
</script>

<div class="mt-24">
	<div class="logo_cenaim">
		<div class="logo">
			<img class="foto_logo" src="http://www.cenaim.espol.edu.ec/sites/cenaim.espol.edu.ec/files/imagenes/logo_cenaim.png" alt="CENAIM_logo" />
		</div>
	</div>
	<div class="cenaimsquare">
		<div class="imagen">
			<img class="foto" {src} alt="CENAIM" />
		</div>
	</div>
	<div class="text  w-12/12 text-justify">
		<h1>
			<p>El CENAIM es un centro de investigación marina y acuícola construido en 1990 por gestión de la Escuela Superior Politécnica del Litoral (ESPOL) con apoyo financiero del Gobierno de Japón. 
					El CENAIM forma parte integral de la ESPOL, siendo su misión el mejoramiento y desarrollo sustentable de la acuicultura y biodiversidad marina del Ecuador a través de la investigación científica, el desarrollo tecnológico, la capacitación y la difusión.
					El CENAIM se encuentra localizado San Pedro de Manglaralto, Provincia de Santa Elena. Tiene una infraestructura funcional conformada por laboratorios de análisis, salas de experimentación, oficinas, sala de computo, biblioteca, áreas de instrucción y recreación, y habitaciones para técnicos y estudiantes.
					Su estación experimental en Palmar, a 10 minutos del CENAIM complementa las investigaciones en campo.</p><br>

			<b>A continuación se muestra información acerca de las variables medidas por los sensores: </b>
		</h1>
		
	</div>

	<div class="mt-5 row text-justify justify-self-center ">
		{#key rows}
			<SvelteTable {columns} {rows} rowKey="dis" />
		{/key}
	</div>
</div>

<style>
	.imagen {
		margin-top: 2%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.foto {
		height: 300px;
	}

	.cenaimsquare {
		position: absolute;
		width: 100%;
		left: 0;
		background-color: #b2e3f8;
		padding: 2rem;
		display: flex;
		flex-direction: column;
		
	}

	.foto_logo {
		height: 100px;
		margin-bottom: 3%;
	}

	.text {
		/*position: fixed;*/
		margin-top: 29%;
		font-family: Georgia, 'Times New Roman', Times, serif;
	}
</style>
