<script lang="ts">
	import { Tabs, Tab, TabList, TabPanel } from 'svelte-tabs';
	import { onMount } from 'svelte';
	import { buildRequest } from '../../utils/helper-functions';
import TabItem from './tab-item.svelte';

	const getEquips = async (): Promise<any> => {
		const res = await fetch(`/api/queries-fetcher`, buildRequest('equip'));
		const response = await res.json();
		return response?.equip ?? new Error('No equipments found');
	};

	onMount(() => {});
</script>

<Tabs>
	{#await getEquips()}
		{'Cargando equipos...'}
	{:then response}
		<TabList>
			{#each response as equip}
				<Tab>{equip.dis}</Tab>
			{/each}
		</TabList>

		{#each response as equip}
			<TabPanel><TabItem {equip}></TabItem></TabPanel>
		{/each}
	{:catch error}
		{error.message}
	{/await}
</Tabs>
