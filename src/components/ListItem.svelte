<script context="module" lang="ts">
	import Checkmark from './icons/Checkmark.svelte';
	import Invalid from './icons/Invalid.svelte';
</script>

<script lang="ts">
	export let text: string;
	export let valid: boolean | null = null;
</script>

<li class="list-item">
	{#if valid != false}
		<Checkmark />
	{:else}
		<Invalid />
	{/if}

	<p class:valid class:invalid={valid === false}>
		{text}
	</p>
</li>

<style>
	li {
		display: flex;
		align-items: center;
		padding: 0;
		height: 1.25rem;
		gap: 0.5rem;
	}

	.valid {
		color: var(--secondary-green-1);
	}

	.invalid {
		color: var(--secondary-red-1);
	}
</style>
