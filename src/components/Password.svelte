<script context="module" lang="ts">
	import { form } from '../stores/form';
	import { flow } from '../stores/mode';
	import { Flow } from '../types/app';
	import Input from './Input.svelte';
</script>

<script lang="ts">
	const password = form.password.value;
	const emailValid = form.email.valid;
	const passwordValid = form.password.valid;
</script>

<div class="password-wrapper">
	<Input type="password" />

	{#if $flow === Flow.Signup}
		<Input
			type="confirm"
			match={$password}
			enabled={$emailValid && $passwordValid}
		/>
	{/if}
</div>

<style>
	.password-wrapper {
		display: flex;
		gap: 1rem;
		width: 100%;
	}
</style>
