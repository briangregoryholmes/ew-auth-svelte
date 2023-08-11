<script lang="ts">
	import { flow } from '../stores/mode';
	import { Flow } from '../types/app';
	import { emailSent } from '../stores/mode';
</script>

<h3 class="header">
	{#if $flow === Flow.Reset}
		{#if $emailSent}
			Check your email
		{:else}
			forgot your password?
		{/if}
	{:else if $flow === Flow.Signup}
		sign up for free
	{:else if $flow === Flow.Login}
		sign in
	{/if}
</h3>

<style>
	.header {
		text-transform: uppercase;
		font-size: 1.5rem;
		line-height: 1.5rem;
		font-weight: 600;
		width: 100%;
	}
</style>
