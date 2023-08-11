<script lang="ts">
	import Arrow from './icons/Arrow.svelte';
	import OrSeparator from './OrSeparator.svelte';
	import ProviderIcon from './icons/ProviderIcon.svelte';
	import { webAuth } from '../lib/auth0';

	export function login(provider: string) {
		webAuth.authorize({
			connection: provider
		});
	}
</script>

<div class="wrapper">
	<a class="guest-flow" href="https://##SITE_DOMAIN##/create-persona">
		<p>Continue as guest</p>
		<Arrow />
	</a>

	<OrSeparator />

	<div class="providers">
		<button on:click={() => login('google-oauth2')}>
			<ProviderIcon service="google" />
		</button>
		<button on:click={() => login('discord')}>
			<ProviderIcon service="discord" />
		</button>
	</div>
</div>

<style>
	.wrapper {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
		gap: 8px;
		color: var(--neutral-black-2);
		fill: var(--neutral-black-2);
	}

	.guest-flow {
		display: flex;
		font-weight: 600;
		justify-content: center;
		align-items: center;
		text-transform: uppercase;
		text-decoration: none;
		gap: 0.5rem;
		color: var(--neutral-black-2);
	}

	.guest-flow:hover {
		color: var(--grayOne);
		fill: var(--grayOne);
	}

	.providers {
		display: flex;
		gap: 1rem;
	}
</style>
