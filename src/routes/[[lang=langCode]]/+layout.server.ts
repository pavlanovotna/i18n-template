import type { LayoutServerLoad } from './$types';
import { initAcceptLanguageHeaderDetector } from 'typesafe-i18n/detectors';
import { detectLocale } from '$root/i18n/i18n-util';

/* automatic langugae detection on layout load (happens only once) */
export const load = (async (event) => {
	// taha jazyk dle jazyku v prohlizeci
	const acceptLanguageHeaderDetector = initAcceptLanguageHeaderDetector(event.request);
	const detectedLocale = detectLocale(acceptLanguageHeaderDetector);

	// natazeni jazyku z URL pomoci svelte cesty [lang]
	// detectLocale to vzdy porovna s i18n a da dostupnou hodnotu nebo default jazyk
	const detectedLocaleUrl = detectLocale(() => [event.params.lang ?? '']);

	// natazeni jazyku z cookie s nazvem 'lang'
	const detectedLocaleCookie = detectLocale(() => [event.cookies.get('lang') ?? '']);

	return {
		detectedLocale: detectedLocale,
		cookieLocale: detectedLocaleCookie,
		urlLocale: detectedLocaleUrl,
		cookie: event.cookies.get('lang'),
		currentUrlPath: event.url.pathname
	};
}) satisfies LayoutServerLoad;
