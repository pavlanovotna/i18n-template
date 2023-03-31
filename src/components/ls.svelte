<script lang="ts">
	import LL, { locale } from '$root/i18n/i18n-svelte';
	import { enhance } from '$app/forms';
</script>

<form method="POST" action="?/setLanguage" use:enhance>
	<label for="selectedLang">Nastavit jazyk:</label>
	<select name="selectedLang" id="selectedLang">
		<option value="en" selected={String($locale) === 'en' ? true : false}>English</option>
		<option value="de" selected={String($locale) === 'de' ? true : false}>German</option>
		<option value="cs" selected={String($locale) === 'cs' ? true : false}>Czech</option>
		<option value="ru">Rusion</option>
	</select>
	<input type="submit" />
</form>
