import type { Locale } from "./i18n";

function withBase(path: string): string {
  const base = import.meta.env.BASE_URL ?? "/";
  const normalizedBase = base === "/" ? "" : base.replace(/\/$/, "");
  return `${normalizedBase}${path}`;
}

export function assetHref(path: string): string {
  if (/^(https?:)?\/\//.test(path) || path.startsWith("data:")) return path;
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return withBase(normalizedPath);
}

export function pageHref(locale: Locale, slug: string): string {
  if (slug === "home") return withBase(`/${locale}`);
  return withBase(`/${locale}/${slug}`);
}
