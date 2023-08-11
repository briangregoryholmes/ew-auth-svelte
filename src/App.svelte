<script context="module" lang="ts">
	import AuthForm from './components/AuthForm.svelte';
	import Checklist from './components/Checklist.svelte';
	import AltAuth from './components/AltAuth.svelte';
	import PersonaImage from './components/PersonaImage.svelte';
	import Header from './components/Header.svelte';
	import ModeToggle from './components/ModeToggle.svelte';
	import Everyworld from './components/icons/Everyworld.svelte';
	import ResetStatus from './components/ResetStatus.svelte';
	import { flow } from './stores/mode';
	import { Flow } from './types/app';
</script>

<main class="main-wrapper">
	<section class="auth-section">
		<div class="auth-elements">
			<Everyworld />
			<Header />

			{#if $flow === Flow.Reset}
				<ResetStatus />
			{/if}

			{#if $flow === Flow.Signup}
				<Checklist />
			{/if}

			<AuthForm />

			{#if $flow !== Flow.Reset}
				<AltAuth />
				<ModeToggle />
			{/if}
		</div>
	</section>

	<PersonaImage />
</main>

<style>
	.auth-section {
		width: 100%;
		display: flex;
		min-width: 400px;
		max-width: 700px;
		flex-direction: column;
		gap: 10px;
		padding-top: 3rem;
		align-items: center;
	}

	.auth-elements {
		width: 80%;
		max-width: 480px;
		display: flex;
		flex-direction: column;
		gap: 20px;
		justify-content: center;
		align-items: center;
	}

	.main-wrapper {
		display: flex;
		height: 100vh;
		width: 100vw;
		position: relative;
	}
</style>
