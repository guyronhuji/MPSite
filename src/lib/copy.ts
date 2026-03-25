import type { Locale } from "./i18n";

type UiCopy = {
  brandSubtitle: string;
  footerNote: string;
  primaryNavAria: string;
  languageNavAria: string;
  subpagesHeading: string;
  relatedPagesAria: string;
  updatedLabel: string;
  portraitAlt: string;
  profileTag: string;
};

const uiByLocale: Record<Locale, UiCopy> = {
  en: {
    brandSubtitle: "Comparative Literature | Jewish Cultural History",
    footerNote: "Framework scaffold for Dr. Michal Peles-Almagor | Editable via Git-based CMS",
    primaryNavAria: "Primary navigation",
    languageNavAria: "Language switcher",
    subpagesHeading: "Subpages",
    relatedPagesAria: "Related pages",
    updatedLabel: "Updated",
    portraitAlt: "Portrait of Dr. Michal Peles-Almagor",
    profileTag: "Academic Profile",
  },
  he: {
    brandSubtitle: "ספרות השוואתית | היסטוריה תרבותית יהודית",
    footerNote: "תשתית אתר לד״ר מיכל פלס-אלמגור | ניתנת לעריכה דרך CMS מבוסס Git",
    primaryNavAria: "ניווט ראשי",
    languageNavAria: "בחירת שפה",
    subpagesHeading: "תתי-עמודים",
    relatedPagesAria: "עמודים קשורים",
    updatedLabel: "עודכן",
    portraitAlt: "דיוקן של ד\"ר מיכל פלס-אלמגור",
    profileTag: "פרופיל אקדמי",
  },
  ar: {
    brandSubtitle: "الأدب المقارن | التاريخ الثقافي اليهودي",
    footerNote: "هيكل موقع للدكتورة ميخال بيليس-ألماغور | قابل للتحرير عبر CMS مبني على Git",
    primaryNavAria: "التنقّل الرئيسي",
    languageNavAria: "مبدّل اللغة",
    subpagesHeading: "صفحات فرعية",
    relatedPagesAria: "صفحات ذات صلة",
    updatedLabel: "آخر تحديث",
    portraitAlt: "صورة الدكتورة ميخال بيليس-ألماغور",
    profileTag: "ملف أكاديمي",
  },
  de: {
    brandSubtitle: "Vergleichende Literaturwissenschaft | Jüdische Kulturgeschichte",
    footerNote: "Website-Grundgerüst für Dr. Michal Peles-Almagor | Bearbeitbar über ein Git-basiertes CMS",
    primaryNavAria: "Hauptnavigation",
    languageNavAria: "Sprachumschalter",
    subpagesHeading: "Unterseiten",
    relatedPagesAria: "Verwandte Seiten",
    updatedLabel: "Aktualisiert",
    portraitAlt: "Porträt von Dr. Michal Peles-Almagor",
    profileTag: "Akademisches Profil",
  },
};

export function getUiCopy(locale: Locale): UiCopy {
  return uiByLocale[locale];
}
