<script>
	import '../app.css';
	import LogIn from '../components/LogIn.svelte';
	import { dev } from '$app/env';
	import { user } from '../stores/user-session';
</script>

{#if dev}
	<div class="text-center bg-red-500 text-white font-bold">Dev mode on</div>
{/if}

{#if true || $user?.aud === 'authenticated'}
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 md:pb-44 ">
        <slot />
    </div>
{:else}
	<LogIn />
{/if}