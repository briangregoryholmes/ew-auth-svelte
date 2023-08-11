<script context="module" lang="ts">
	const validationCriteria = [
		{ test: (p: string) => /.{8,}/.test(p), text: '8 or more characters' },
		{ test: (p: string) => /[0-9]/.test(p), text: 'At least one number' },
		{
			test: (p: string) => /[\W_]/.test(p),
			text: 'At least one special character'
		},
		{
			test: (p: string) => /[A-Z]/.test(p) && /[a-z]/.test(p),
			text: 'Upper and lowercase letters'
		},
		{ test: (p: string, c: string) => p === c, text: 'Passwords match' }
	];
</script>

<script lang="ts">
	import ListItem from './ListItem.svelte';

	export let password: string;
	export let confirm: string;

	console.log({ password, confirm });
</script>

<div id="password-validation" class="hidden w-full">
	{#each validationCriteria as { test, text }, key}
		<ListItem valid={test(password, confirm)} {text} />
	{/each}
</div>
