import { redirect } from '@sveltejs/kit';
import { replaceLocaleInURL } from '$root/utils/replaceLocaleInUrl';
import { createRelativeUrl } from '$root/utils/createRelativeUrl';
import { detectLocale } from '$root/i18n/i18n-util';

/* named action that comes from layout.svelte form  */
export const actions = {
	setLanguage: async ({ cookies, request, url }) => {
		/* get final clean relative route of the incoming post request */
		const currentRoute = request.headers.get('referer');
		const urlOrigin = url.origin;

		const finalRoute = createRelativeUrl(currentRoute, urlOrigin);

		/* get selected language input from form data */
		const data = await request.formData();
		const selectedLang: FormDataEntryValue | any = data.get('selectedLang');

		/* chceck if selected locale exist (if not set default) */
		const detectedLocale = detectLocale(() => [selectedLang ?? '']);

		/* set cookie */
		cookies.set('lang', String(detectedLocale), {
			path: '/', // send cookie for every page
			httpOnly: true, // server side only cookie so you can't use `document.cookie`
			sameSite: 'strict', // only requests from same site can send cookies
			maxAge: 60 * 60 * 24 * 30 // set cookie to expire after a month
		});

		/* set final route to a new langugage mutation */
		const finalRedirectUrl = replaceLocaleInURL(finalRoute, detectedLocale);

		throw redirect(302, finalRedirectUrl);
	}
};
