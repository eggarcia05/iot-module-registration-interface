<script lang="ts">
	import Switch from 'svelte-switch';

	export let pointId: string;

	$: pointId;
	let checkedValue: any;
	$: checkedValue;

	//@ts-ignore
	var myHeaders = new Headers();
	myHeaders.append('Content-Type', 'application/json');

	const raw = JSON.stringify({
		pointsIds: [pointId],
		filtroPorEtiquetas: {
			etiquetas: []
		},
		limite: 1
	});

	const requestOptions: any = {
		method: 'POST',
		headers: myHeaders,
		body: raw,
		redirect: 'follow'
	};

	const getEstadoActuador = async () => {
		try {
			const res = await fetch('http://localhost:8081/obtener-datos', requestOptions);
			const response = await res.json();
			checkedValue = response.result?.[0]?.registro.value === 'on';
			console.log(checkedValue);

			return response.result?.[0];
		} catch (e: any) {
			throw new Error(e);
		}
	};

	async function handleChange(e: any) {
		console.log('🚀 ~ file: actuador.svelte ~ line 44 ~ handleChange ~ e.detail.checked', e);
		// await getEstadoActuador();
        checkedValue = !checkedValue;
	}
</script>

<div class="block">

	<div class="float-right sm:max-w-screen ml-20 mb-8 flex items-center">
		{#await getEstadoActuador()}
			<p>Obteniendo estado del Actuador...</p>
		{:then value}
			<span
				class= "font-bold not-italic text-base text-gray-700 inline-block align-middle mr-8 pl-1"
			>
				{value.registro.dis}: {value.registro['value'].toUpperCase()}
			</span>
			{#key checkedValue}
				<button
						type="button"
						class={checkedValue ? "toOff" : "toOn"}
						on:click={handleChange}
					>
						{checkedValue ? "Apagar" : "Encender"}
					</button>
			{/key}
		{:catch error}
			<p>Something went wrong: {error.message}</p>
		{/await}
	</div>
</div>

<style>
    .toOn {
		@apply inline-block px-7 py-3 bg-gray-400 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-slate-700 hover:shadow-lg ease-in-out;
	}

    .toOff {
		@apply inline-block px-7 py-3 bg-slate-700 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-gray-400 hover:shadow-lg ease-in-out;
	}
</style>