<script context="module" lang="ts">
	import { writable } from 'svelte/store';

	export const errorMessage = writable('');

	export function setError(err) {
		if (err) errorMessage.set(err.policy || err.description);
	}
</script>

{#if $errorMessage}
	<p class="error">{$errorMessage}</p>
{/if}
