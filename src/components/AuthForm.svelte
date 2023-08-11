<script context="module" lang="ts">
	import { form } from '../stores/form';
	import Terms from './Terms.svelte';
	import Input from './Input.svelte';
	import Validation from './Validation.svelte';
	import AuthButton from './AuthButton.svelte';
	import { flow } from '../stores/mode';
	import { webAuth, connection } from '../lib/auth0';
	import Error, { setError } from './Error.svelte';
	import { Flow } from '../types/app';
	import { emailSent } from '../stores/mode';
	import * as a0 from '../utils/auth0Handlers';

	const email = form.email.value;
	const password = form.password.value;
	const confirm = form.confirm.value;
	const emailValid = form.email.valid;
	const passwordValid = form.password.valid;
</script>

<script lang="ts">
	import Password from './Password.svelte';

	let captchaContainer: HTMLDivElement;
	let hidden = true;

	$: buttonDisabled = !$emailValid || !$passwordValid || $password !== $confirm;

	const renderCaptcha = () => {
		webAuth.renderCaptcha(captchaContainer);
		hidden = false;
	};

	function handleSubmit() {
		const trimmedEmail = $email.trim();
		const handleError = setError;

		switch ($flow) {
			case Flow.Reset:
				a0.handleReset(trimmedEmail, handleError);
				break;
			case Flow.Signup:
				a0.handleSignup(trimmedEmail, $password, handleError);
				break;
			case Flow.Login:
				a0.handleLogin(trimmedEmail, $password, connection, handleError);
				break;
			default:
				break;
		}
	}
</script>

<svelte:window on:load={renderCaptcha} />

<form class="form-wrapper" on:submit|preventDefault={handleSubmit}>
	{#if !$emailSent}
		<Input type="email" />
	{/if}

	{#if $flow !== Flow.Reset}
		<Password />

		{#if $flow === Flow.Signup}
			{#if $password.length}
				<Validation password={$password} confirm={$confirm} />
			{/if}

			<Terms />
		{/if}
	{/if}

	{#if $flow === Flow.Login}
		<button
			type="button"
			class="forgot"
			on:click|preventDefault={() => flow.set(Flow.Reset)}
		>
			Forgot your password?
		</button>
	{/if}

	<Error />

	{#if !$emailSent}
		<AuthButton disabled={$flow === Flow.Signup ? buttonDisabled : false} />
	{/if}

	{#if $flow === Flow.Reset}
		<button type="button" on:click|preventDefault={() => flow.set(Flow.Login)}>
			Back to Sign In
		</button>
	{/if}
</form>

<div class:hidden bind:this={captchaContainer}></div>

<style>
	.form-wrapper {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.hidden {
		display: none;
	}

	.forgot {
		align-self: flex-start;
	}
</style>
