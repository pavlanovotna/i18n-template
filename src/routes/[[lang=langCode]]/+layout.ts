import { redirect } from '@sveltejs/kit';
import { setLocale } from '$root/i18n/i18n-svelte';
import { loadLocaleAsync } from '$root/i18n/i18n-util.async';
import type { LayoutLoad } from './$types';
import { replaceLocaleInURL } from '$root/utils/replaceLocaleInUrl';
import { assignLocale } from '$root/utils/assignLocale';
import type { Locale } from 'typesafe-i18n/types/runtime/src/core.mjs';
/* searches and determines the final language */
/* export universal load functions that run both on the server and in the browser */
export const load = (async (event) => {
	/* vypis veci z prohlizece (taha se primo tady) */
	//parametr z url
	const paramLang = event.params.lang;

	//cookie z prohlizece
	const cookie = event.data.cookie;

	// vypis veci ze serveru (taha se z layout.server)
	const browserLang = event.data.detectedLocale;
	const cookieLocale = event.data.cookieLocale;
	const urlLocale = event.data.urlLocale;

	// nastaveni vitezneho jazyka (logika je funkci assignLocale)
	const finalLocale = assignLocale(paramLang, cookie, browserLang, cookieLocale, urlLocale);
	const locale: Locale | any = finalLocale;

	// asynchronous loading of locales
	// it only loads the locale that is currently needed to render the page
	await loadLocaleAsync(locale);

	// setup all stores
	setLocale(locale);

	/* set final route to a new langugage mutation */
	const finalRedirectUrl = replaceLocaleInURL(event.url.pathname, locale);

	/* testujeme jestli je aktuální jazyk odpovídá tomu v url */
	if (finalLocale !== urlLocale) {
		throw redirect(302, finalRedirectUrl);
	}

	return event.data;
}) satisfies LayoutLoad;
