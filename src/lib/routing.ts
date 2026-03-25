import type { Locale } from "./i18n";

export function pageHref(locale: Locale, slug: string): string {
  if (slug === "home") return `/${locale}`;
  return `/${locale}/${slug}`;
}
