import type { Locale } from "./i18n";

type UiCopy = {
  brandSubtitle: string;
  footerNote: string;
  primaryNavAria: string;
  languageNavAria: string;
  subpagesHeading: string;
  relatedPagesAria: string;
  portraitAlt: string;
  profileTag: string;
  publicationFiltersAria: string;
  publicationListAria: string;
  filterAll: string;
  filterBooks: string;
  filterArticles: string;
  filterChapters: string;
  filterForthcoming: string;
  publicationOpenLink: string;
};

const uiByLocale: Record<Locale, UiCopy> = {
  en: {
    brandSubtitle: "Comparative Literature | Jewish Cultural History",
    footerNote: "Framework scaffold for Dr. Michal Peles-Almagor | Editable via Git-based CMS",
    primaryNavAria: "Primary navigation",
    languageNavAria: "Language switcher",
    subpagesHeading: "Subpages",
    relatedPagesAria: "Related pages",
    portraitAlt: "Portrait of Dr. Michal Peles-Almagor",
    profileTag: "Academic Profile",
    publicationFiltersAria: "Publication filters",
    publicationListAria: "Publication list",
    filterAll: "All",
    filterBooks: "Books",
    filterArticles: "Articles",
    filterChapters: "Chapters",
    filterForthcoming: "Forthcoming",
    publicationOpenLink: "Open link",
  },
  he: {
    brandSubtitle: "ספרות השוואתית | היסטוריה תרבותית יהודית",
    footerNote: "תשתית אתר לד״ר מיכל פלס-אלמגור | ניתנת לעריכה דרך CMS מבוסס Git",
    primaryNavAria: "ניווט ראשי",
    languageNavAria: "בחירת שפה",
    subpagesHeading: "תתי-עמודים",
    relatedPagesAria: "עמודים קשורים",
    portraitAlt: "דיוקן של ד\"ר מיכל פלס-אלמגור",
    profileTag: "פרופיל אקדמי",
    publicationFiltersAria: "סינון פרסומים",
    publicationListAria: "רשימת פרסומים",
    filterAll: "הכול",
    filterBooks: "ספרים",
    filterArticles: "מאמרים",
    filterChapters: "פרקים",
    filterForthcoming: "עתידים להתפרסם",
    publicationOpenLink: "קישור",
  },
  ar: {
    brandSubtitle: "الأدب المقارن | التاريخ الثقافي اليهودي",
    footerNote: "هيكل موقع للدكتورة ميخال بيليس-ألماغور | قابل للتحرير عبر CMS مبني على Git",
    primaryNavAria: "التنقّل الرئيسي",
    languageNavAria: "مبدّل اللغة",
    subpagesHeading: "صفحات فرعية",
    relatedPagesAria: "صفحات ذات صلة",
    portraitAlt: "صورة الدكتورة ميخال بيليس-ألماغور",
    profileTag: "ملف أكاديمي",
    publicationFiltersAria: "مرشحات المنشورات",
    publicationListAria: "قائمة المنشورات",
    filterAll: "الكل",
    filterBooks: "كتب",
    filterArticles: "مقالات",
    filterChapters: "فصول",
    filterForthcoming: "قريبًا",
    publicationOpenLink: "فتح الرابط",
  },
  de: {
    brandSubtitle: "Vergleichende Literaturwissenschaft | Jüdische Kulturgeschichte",
    footerNote: "Website-Grundgerüst für Dr. Michal Peles-Almagor | Bearbeitbar über ein Git-basiertes CMS",
    primaryNavAria: "Hauptnavigation",
    languageNavAria: "Sprachumschalter",
    subpagesHeading: "Unterseiten",
    relatedPagesAria: "Verwandte Seiten",
    portraitAlt: "Porträt von Dr. Michal Peles-Almagor",
    profileTag: "Akademisches Profil",
    publicationFiltersAria: "Publikationsfilter",
    publicationListAria: "Publikationsliste",
    filterAll: "Alle",
    filterBooks: "Bucher",
    filterArticles: "Artikel",
    filterChapters: "Kapitel",
    filterForthcoming: "Angekundigt",
    publicationOpenLink: "Link offnen",
  },
};

export function getUiCopy(locale: Locale): UiCopy {
  return uiByLocale[locale];
}
