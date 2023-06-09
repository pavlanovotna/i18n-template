// This file was auto-generated by 'typesafe-i18n'. Any manual changes will be overwritten.
/* eslint-disable */
import type { BaseTranslation as BaseTranslationType, LocalizedString, RequiredParams } from 'typesafe-i18n'

export type BaseTranslation = BaseTranslationType
export type BaseLocale = 'en'

export type Locales =
	| 'cs'
	| 'de'
	| 'en'

export type Translation = RootTranslation

export type Translations = RootTranslation

type RootTranslation = {
	/**
	 * W​e​l​c​o​m​e​ ​t​o​ ​t​h​i​s​ ​d​e​m​o​ ​s​i​t​e​.​ ​T​h​i​s​ ​c​o​n​t​e​n​t​ ​i​s​ ​d​i​s​p​l​a​y​e​d​ ​b​y​ ​t​y​p​e​s​a​f​e​-​i​1​8​n​.
	 */
	HI: string
	/**
	 * H​e​l​l​o​ ​S​v​e​l​t​e
	 */
	HELLO: string
	/**
	 * A​b​o​u​t​ ​u​s​ ​p​a​g​e
	 */
	about: string
	/**
	 * S​o​m​e​ ​A​b​o​u​t​ ​u​s​ ​p​a​g​e​ ​c​o​n​t​e​n​t​.
	 */
	aboutText: string
	/**
	 * {​0​}
	 * @param {unknown} 0
	 */
	LINK: RequiredParams<'0'>
}

export type TranslationFunctions = {
	/**
	 * Welcome to this demo site. This content is displayed by typesafe-i18n.
	 */
	HI: () => LocalizedString
	/**
	 * Hello Svelte
	 */
	HELLO: () => LocalizedString
	/**
	 * About us page
	 */
	about: () => LocalizedString
	/**
	 * Some About us page content.
	 */
	aboutText: () => LocalizedString
	/**
	 * {0}
	 */
	LINK: (arg0: unknown) => LocalizedString
}

export type Formatters = {}
