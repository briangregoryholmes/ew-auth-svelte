<script>
	import { emailSent } from '../stores/mode';
	import { form } from '../stores/form';
	import { get } from 'svelte/store';
</script>

{#if $emailSent}
	<p>
		Please check the email address {get(form.email.value)} for instructions to reset
		your password.
	</p>
{:else}
	<p>
		Enter your email address and we will send you instructions to reset your
		password.
	</p>
{/if}
