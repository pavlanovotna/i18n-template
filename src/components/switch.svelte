<script>
	import { setLocale } from '$root/i18n/i18n-svelte';
</script>

<div id="language-picker">
	Choose language:

	<button on:click={() => setLocale('en')}> english </button>

	<button on:click={() => setLocale('de')}> deutsch </button>
</div>
