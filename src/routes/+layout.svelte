<script lang="ts">
	import { APP_NAME } from '$lib/constants';

	import './layout.css';

	let { children } = $props();
</script>

<svelte:head>
	<title>{APP_NAME}</title>
</svelte:head>

{@render children()}
