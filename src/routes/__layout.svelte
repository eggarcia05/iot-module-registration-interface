<script module="context" , lang="ts">
	export const ssr = false;
	import '../app.css';
	import LogIn from '../components/LogIn.svelte';
	import { dev } from '$app/env';
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
