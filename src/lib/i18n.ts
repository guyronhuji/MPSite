export type Locale = "en" | "he" | "ar" | "de";

export const defaultLocale: Locale = "en";

export const locales: Record<Locale, { label: string; nativeLabel: string; dir: "ltr" | "rtl"; flag: string }> = {
  en: { label: "English", nativeLabel: "English", dir: "ltr", flag: "🇬🇧" },
  he: { label: "Hebrew", nativeLabel: "עברית", dir: "rtl", flag: "🇮🇱" },
  ar: { label: "Arabic", nativeLabel: "العربية", dir: "rtl", flag: "🇸🇦" },
  de: { label: "German", nativeLabel: "Deutsch", dir: "ltr", flag: "🇩🇪" },
};

export const localeList = Object.keys(locales) as Locale[];

export function isLocale(value: string): value is Locale {
  return value in locales;
}
