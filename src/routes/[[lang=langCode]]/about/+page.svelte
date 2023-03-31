<script lang="ts">
	import Lang from '$root/components/lang.svelte';
	import Switch from '$root/components/ls.svelte';
	import LL from '$root/i18n/i18n-svelte';

	// load your locales
	console.log($LL.HELLO());
</script>

<h1>{$LL.about()}</h1>

<p>
	{$LL.aboutText()}
</p>

<strong>Your language: <Lang /></strong>
<br /><br />


<!-- switcher mi moc nefunguje, nenatahne novy data, jen zmeni locale -->
<!-- <div><Switch /></div> -->
