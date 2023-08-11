<script context="module" lang="ts">
	import { form } from '../stores/form';
	import { flow } from '../stores/mode';
	import { Flow } from '../types/app';
	import { writable } from 'svelte/store';

	type InputType = 'email' | 'password' | 'confirm';

	function isValid(str: string, type: InputType, match = str) {
		const testString = type === 'email' ? str.trim().toLowerCase() : str;
		const result = form[type].regex.exec(testString);

		return !!result && result[0] !== null && str === match;
	}

	function createShowText() {
		const { subscribe, set, update } = writable<false | 'text'>(false);

		return {
			subscribe,
			set,
			toggle: () => update((value) => (value === false ? 'text' : false))
		};
	}
</script>

<script lang="ts">
	export let type: InputType;
	export let enabled = true;
	export let match = '';

	const showText = createShowText();

	const value = form[type].value;
	const valid = form[type].valid;

	function checkValidity(
		e: Event & {
			currentTarget: EventTarget & HTMLInputElement;
		}
	) {
		const value = e.currentTarget.value;

		const valid = isValid(value, type, (confirm && match) || undefined);
		console.log(type);
		form[type].value.set(value);
		form[type].valid.set(valid);
	}

	$: mode = type === 'email' ? '' : $flow === Flow.Signup ? 'new-' : 'current-';
</script>

<div class="input-wrapper">
	<input
		class="form-input"
		disabled={!enabled}
		class:invalid={$value.length ? !$valid : false}
		type={$showText || form[type].type}
		placeholder={form[type].text}
		autocomplete={mode + form[type].type}
		autocapitalize="off"
		autocorrect="off"
		maxlength="254"
		aria-required="true"
		spellcheck={form[type].type !== 'password'}
		name={type}
		required
		on:input={checkValidity}
	/>
	{#if type !== 'email' && $value.length}
		<button
			class="show-password"
			on:click|preventDefault={() => showText.toggle()}
		>
			{$showText ? 'Hide' : 'Show'}
		</button>
	{/if}
</div>

<style>
	.form-input {
		width: 100%;
		border-radius: 6px;
		background-color: transparent;
		border: solid 1px var(--grayTwo);
		padding: 0.75rem;
	}

	.show-password {
		position: absolute;
		right: 8px;
		top: 50%;
		transform: translateY(-50%);
		color: var(--grayTwo);
		font-size: 0.75rem;
		cursor: pointer;
	}

	.show-password:hover {
		color: var(--grayOne);
	}

	.input-wrapper {
		position: relative;
		width: 100%;
	}
	.form-input:disabled {
		cursor: not-allowed;
		opacity: 40%;
	}

	.invalid {
		border-color: var(--secondary-red-1);
		color: var(--secondary-red-1);
	}

	.form-input:focus {
		border-color: var(--grayOne);
		color: var(--grayOne);
	}
</style>
