<script module="context" lang="ts">
	// throw new Error(
	// 	'@migration task: Add data prop (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292707)'
	// );

	export const ssr = false;
	import '../app.css';
	import LogIn from '../components/LogIn.svelte';
	import { dev } from '$app/environment';
	import { user } from '../stores/user-session';
	import Navbar from '../components/navbar.svelte';
</script>

{#if dev}
	<div class="text-center bg-red-500 text-white font-bold">Dev mode on</div>
{/if}

{#if true || $user?.aud === 'authenticated'}
	<div class="w-11/12 mx-auto px-4 sm:px-6 lg:px-8 pb-20 md:pb-44 ">
		<Navbar />
		<slot />
	</div>
{:else}
	<LogIn />
{/if}
