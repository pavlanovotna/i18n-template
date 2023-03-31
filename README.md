# Sveltekit demo with i18n  

## Routing

- use lang-codes in url for locale (/de, /cs)
- hide default language lang-code in url (en is just /)
- detect locale from browser (if it is not set by url or cookie)
- if you set the language, save the locale to cookie for next visit

## To do:

- /src/utils/replaceLocaleInUrl.ts line:26 & line:13 change the condition based on defined languages instead of a string 
- /src/utils/assignLocale.ts line:12 load default language dynamicaly
