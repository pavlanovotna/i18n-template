import type { Locale } from 'typesafe-i18n/types/runtime/src/core.mjs';

export const replaceLocaleInURL = (url: string, locale: FormDataEntryValue): string | Locale => {
	/* replace first slash from path if exists and then add it back */
	url = url.replace(/^\/+/, '');
	url = '/' + url;

	/* get language value from url eg /de/about => de */
	const [, languageInUrl] = url.split('/');

	/* boolean if the languge from url is in our locales => exists */
	let isLanguage;
	if (languageInUrl === 'cs' || languageInUrl === 'de') {
		isLanguage = true;
	} else {
		isLanguage = false;
	}

	/* full url behind trailing slash */
	const fullUrl = url;
	let cleanUrl = '';

	if (isLanguage) {
		/* if there is languge in url remove it from full url path  (cs/de version)*/
		cleanUrl = fullUrl.replace(/^\/+/, '');
		cleanUrl = cleanUrl.replace(/^(cs|de)+/, '');
		cleanUrl = cleanUrl.replace(/^\/+/, '');
	} else {
		/* if there is no languge in url remove first slash from full url path (en version) */
		cleanUrl = fullUrl.replace(/^\/+/, '');
	}

	let finalRedirectUrl;
	/* if the lang is english we don't need to add it to the url */
	if (locale === 'en') {
		finalRedirectUrl = cleanUrl;
	} else {
		/* if the path is more than not root */
		if (cleanUrl) {
			finalRedirectUrl = locale + '/' + cleanUrl;
		} else {
			/* if the path is root */
			finalRedirectUrl = locale;
		}
	}

	/* add first slash so the path is correct */
	return '/' + finalRedirectUrl;
};
