<script lang="ts">
	export let point: any;

	const apiStandardization = import.meta.env.VITE_API_STANDARDIZATION;

	$: point;
	let checkedValue: any;
	$: checkedValue;

	//@ts-ignore
	var myHeaders = new Headers();
	myHeaders.append('Content-Type', 'application/json');

	const raw = JSON.stringify({
		pointsIds: [point.value],
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

	var myHeaders = new Headers();
	myHeaders.append('Content-Type', 'application/json');

	const changeEstadoActuador = async () => {
		const raw = JSON.stringify({
			id: point.equipRef,
			[point.clave_esperada]: checkedValue ? 'OFF' : 'ON'
		});
		console.log(raw);

		const requestOptions: any = {
			method: 'POST',
			headers: myHeaders,
			body: raw,
			redirect: 'follow'
		};

		const res = await fetch(`${apiStandardization}/registrar-datos`, requestOptions);
		const response = await res.json();
		console.log(response);
	};

	const getEstadoActuador = async () => {
		try {
			const res = await fetch(`${apiStandardization}/obtener-datos`, requestOptions);
			const response = await res.json();
			checkedValue = response.response?.[0]?.registro.value.toUpperCase() === 'on'.toUpperCase();
			console.log(response);

			return response.response?.[0];
		} catch (e: any) {
			throw new Error(e);
		}
	};

	const encenderAC = async () => {
		const raw = JSON.stringify({
			status: !checkedValue
		});

		const requestOptions: any = {
			method: 'POST',
			headers: myHeaders,
			body: raw
		};

		const res = await fetch('http://localhost:8000/toggle-ac-status', requestOptions);
		const response = await res.json();
		console.log(response);
	};

	async function handleChange() {
		await changeEstadoActuador();
		await encenderAC();
		await getEstadoActuador();
		checkedValue = !checkedValue;
		console.log(checkedValue);
	}
</script>

<div class="block">
	<div class="float-right sm:max-w-screen ml-20 mb-8 flex items-center">
		{#key checkedValue}
			{#await getEstadoActuador()}
				<p>Obteniendo estado del Actuador...</p>
			{:then response}
				<span
					class="font-bold not-italic text-base text-gray-700 inline-block align-middle mr-8 pl-1"
				>
					{response?.registro?.dis ?? point.label}: {(
						response?.registro?.['value'] ?? 'off'
					).toUpperCase()}
				</span>
			{:catch error}
				<p>Something went wrong: {error.message}</p>
			{/await}
			<button type="button" class={checkedValue ? 'toOff' : 'toOn'} on:click={handleChange}>
				{checkedValue ? 'Apagar' : 'Encender'}
			</button>
		{/key}
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
