// paramLang - parametr z url
// cookie - cookie z prohlizece

// browserLang - i18n locale z prohlizece
// cookieLocale - i18n locale z cookie
// urlLocale - i18n locale z url

/* dulezitost: URL -> COOKIE -> BROWSER */

export const assignLocale = (paramLang, cookie, browserLang, cookieLocale, urlLocale) => {
	// inicializace finalniho locale (default en)
	let finalLocale = 'en';

	/* detekce jestli je paramLang definovany */
	if (
		paramLang === undefined ||
		paramLang === 'undefined' ||
		paramLang === void 0 ||
		paramLang === ''
	) {
		/* detekce jestli je cookie definovana */
		if (cookie === undefined || cookie === 'undefined' || cookie === void 0 || cookie === '') {
			/* console.log('neni definovana cookie'); */
			finalLocale = browserLang;
		} else {
			/* console.log('je definovana cookie'); */
			finalLocale = cookieLocale;
		}
	} else {
		finalLocale = urlLocale;
	}

	return finalLocale;
};
