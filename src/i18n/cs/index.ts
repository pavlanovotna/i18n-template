import type { Translation } from '../i18n-types'

const cs = {
	// this is an example Translation, just rename or delete this folder if you want
	HI: "Vítejte na této ukázkové stránce. Tento obsah je zobrazen pomocí typesafe-i18n.",
	HELLO: 'Ahoj Svelte',
	about: 'O nas',
	aboutText: 'Nějaký obsah stránky O nás. Nic moc se tu bohžel nedozvíte.',
	LINK: '/cs{0}'
} satisfies Translation

export default cs
