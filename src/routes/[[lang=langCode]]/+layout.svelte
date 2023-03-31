<script lang="ts">
	import type { LayoutData } from './$types';
	import LL, { locale } from '$root/i18n/i18n-svelte';
	import { enhance } from '$app/forms';
	export let data: LayoutData;
</script>

<a href={$LL.LINK('/')}>Home</a> - <a href={$LL.LINK('/about')}>About</a>
<br /><br />

<slot />

<form method="POST" use:enhance action="/?/setLanguage">
	<label for="selectedLang">Select language:</label>
	<select name="selectedLang" id="selectedLang">
		<option value="en" selected={String($locale) === 'en' ? true : false}>English</option>
		<option value="de" selected={String($locale) === 'de' ? true : false}>German</option>
		<option value="cs" selected={String($locale) === 'cs' ? true : false}>Czech</option>
		<!-- <option value="es" selected={String($locale) === 'es' ? true : false}>Spanish</option> -->
	</select>
	<input type="submit" value="Set language" />
</form>

<br />
<br />
<hr />
<div>🍪 Cookie locale: {data.cookieLocale}</div>
<hr />
<div>🔗 URL locale: {data.urlLocale}</div>
<hr />
<div>🧭 Detected locale from browser: {data.detectedLocale}</div>
