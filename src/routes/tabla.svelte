<script lang="ts">
    // @ts-nocheck
	import SvelteTable from 'svelte-table';

	const apiStandardization = import.meta.env.VITE_API_STANDARDIZATION;

	var myHeaders = new Headers();
	myHeaders.append('Content-Type', 'application/json');

	const raw = JSON.stringify({
		pointsIds: [],
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



	let rows = [];
	$:rows
	
	const convertResponseFormat = async() => {
		const data = await fetch(`${apiStandardization}/v1/obtener-datos`, requestOptions);
		const res = await data.json();
		const response  = res.response
		rows = response.map((item) => {
			return item.registro;
		});
		//console.log(rows)
	};
	convertResponseFormat();
	
	
	const columns: any = [
		{
			key: "dis",
			title: 'Parámetro',
			value: (v: any) => v["dis"],
			class: 'col border-t border-b border-l border-r border-gray-900',
			sortable: true,
			headerClass: 'text-left border-t border-b border-l border-r border-gray-900'
		},
		{
			key: "value",
			title: "Valor",
			value: (v: any) => v.value,
			class: 'row border-t border-b border-l border-r border-gray-900',
			sortable: true,
			headerClass: 'text-left border-t border-b border-l border-r border-gray-900'
		}
		
	];
</script>

<div class="mt-24">
	<div class="row text-justify">
		<SvelteTable
		columns={columns} 
		rows={rows} 
		rowKey="dis"
		>
		</SvelteTable>
		
	</div>
</div>

<style>
	
</style>