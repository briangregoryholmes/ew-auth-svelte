<script lang="ts">
	import { flow } from '../stores/mode';
	import { Flow } from '../types/app';

	const buttonText = {
		[Flow.Reset]: 'Back to Sign In',
		[Flow.Signup]: 'Sign In',
		[Flow.Login]: 'Sign Up'
	};

	function redirect() {
		switch ($flow) {
			case Flow.Signup:
				flow.set(Flow.Login);
				return;
			case Flow.Login:
				flow.set(Flow.Signup);
				return;
			case Flow.Reset:
				flow.set(Flow.Login);
				return;
			default:
				return;
		}
	}
</script>

<p>
	{#if $flow === Flow.Signup}
		Already on Everyworld?
	{:else if $flow === Flow.Login}
		Don't have an account?
	{/if}

	<button on:click={redirect}>
		{buttonText[$flow]}
	</button>
</p>

<style>
	button {
		color: var(--secondary-green-1);
	}

	p {
		font-weight: 600;
	}
</style>
