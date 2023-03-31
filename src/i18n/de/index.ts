import type { Translation } from '../i18n-types';

const de = {
	// this is an example Translation, just rename or delete this folder if you want
	HI: 'Willkommen auf dieser Demo-Seite. Dieser Inhalt wird mit typesafe-i18n angezeigt.',
	HELLO: 'Hallo Zvelte',
	about: 'Über uns',
	aboutText: 'Hier ist der Text der About-Seite. Leider lernt man hier nicht viel.',
	LINK: '/de{0}'
} satisfies Translation;

export default de;
