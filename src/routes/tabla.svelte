<script lang="ts">
    // @ts-nocheck
	import SvelteTable from 'svelte-table';

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
		const data = await fetch("http://localhost:8082/v1/obtener-datos", requestOptions);
		const res = await data.json();
		const response  = res.response
		rows = response.map((item) => {
			return item.registro;
		});
		console.log(rows)
	};
	convertResponseFormat();
	
	
	const columns: any = [
		{
			key: "dis",
			title: 'Parametro',
			value: (v: any) => v["dis"],
			sortable: true,
			// filterOptions: (rows) => {
			// 	// generate groupings of 0-10, 10-20 etc...
			// 	let nums = {};
			// 	rows.forEach((row) => {
			// 		let num = Math.floor(row["Nudos"] / 10);
			// 		if (nums[num] === undefined)
			// 			nums[num] = { name: `${num * 10} to ${(num + 1) * 10}`, value: num };
			// 	});
			// 	// fix order
			// 	nums = Object.entries(nums)
			// 		.sort()
			// 		.reduce((o, [k, v]) => ((o[k] = v), o), {});
			// 	return Object.values(nums);
			// },
			// filterValue: (v) => Math.floor(v["dis"] / 10),
			headerClass: 'text-left'
		},
		{
			key: "value",
			title: "Valor",
			value: (v: any) => v.value
		}
		
	];
</script>

<div class="mt-16">
	<div class="row">
		<SvelteTable columns={columns} rows={rows} rowKey="dis">
			<!-- <svelte:fragment slot="expanded" let:row>{row.detail}</svelte:fragment> -->
		</SvelteTable>
	</div>
</div>

<style>
</style>