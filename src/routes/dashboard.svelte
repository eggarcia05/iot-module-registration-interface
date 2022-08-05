<script lang="ts">
	import TestPlot from '../components/plots/test-plot.svelte';
	if (typeof window !== 'undefined') {
		console.log('You are on the browser');
	} else {
		console.log('You are on the server');
	}
</script>

<div class="mt-24">
	<TestPlot />
</div>

<style>
</style>
