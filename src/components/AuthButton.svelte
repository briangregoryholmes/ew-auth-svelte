<script lang="ts">
	import { flow } from '../stores/mode';
	import { Flow } from '../types/app';

	export let disabled: boolean;

	const buttonText = {
		[Flow.Reset]: 'CONTINUE',
		[Flow.Signup]: 'AGREE & JOIN',
		[Flow.Login]: 'SIGN IN'
	};
</script>

<button type="submit" class="auth-button" {disabled}>
	{buttonText[$flow]}
</button>

<style>
	.auth-button {
		background-color: var(--secondary-green-1);
		border-radius: 4px;
		border: none;
		color: black;
		cursor: pointer;
		font-size: 1rem;
		font-weight: 600;
		line-height: 1.5rem;
		padding: 0.8rem 1rem;
		text-transform: uppercase;
		width: 100%;
	}

	.auth-button:disabled {
		background-color: var(--neutral-black-2);
		color: var(--grayTwo);
		cursor: not-allowed;
	}
</style>
