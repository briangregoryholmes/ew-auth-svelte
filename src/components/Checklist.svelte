<script>
	import ListItem from './ListItem.svelte';
</script>

<ul class="checklist">
	<ListItem text="Customize your digital personae" />
	<ListItem text="Chat with new connections" />
	<ListItem text="Make friends or find romance virtually" />
</ul>

<style>
	.checklist {
		display: flex;
		padding: 0;
		justify-content: center;
		align-items: flex-start;
		flex-direction: column;
		width: 100%;
		gap: 0.8rem;
		font-weight: 500;
	}
</style>
