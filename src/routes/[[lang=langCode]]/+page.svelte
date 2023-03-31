<script lang="ts">
	import Lang from '$root/components/lang.svelte';
	import LL, { locale } from '$root/i18n/i18n-svelte';
</script>

<h1>{$LL.HELLO()}</h1>

<p>{$LL.HI()}</p>

<strong>Your language: <Lang /></strong>
<br /><br />
