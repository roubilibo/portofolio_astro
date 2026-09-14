import { getRelativeLocaleUrl } from "astro:i18n";

export const locales = ["id", "en"] as const;
export type Locale = (typeof locales)[number];

export function getLocale(value?: string): Locale {
	return value === "en" ? "en" : "id";
}

export function localizedPath(locale: Locale, path: string): string {
	return getRelativeLocaleUrl(locale, path.replace(/^\//, ""));
}

export function languageSwitchPath(locale: Locale, pathname: string): string {
	const pathWithoutLocale = pathname.replace(/^\/en(?=\/|$)/, "");
	return localizedPath(locale, pathWithoutLocale);
}
