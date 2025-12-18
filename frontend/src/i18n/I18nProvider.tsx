import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import type { PropsWithChildren } from "react";
import { Platform } from "react-native";
import type { LanguageCode, TranslationKey } from "./translations";
import { translations } from "./translations";

type I18nContextValue = {
  language: LanguageCode;
  setLanguage: (next: LanguageCode) => void;
  t: (key: TranslationKey) => string;
};

const I18nContext = createContext<I18nContextValue | null>(null);

const STORAGE_KEY = "fasttrack.language";

function readStoredLanguage(): LanguageCode {
  if (Platform.OS !== "web") return "en";
  try {
    const v = window.localStorage.getItem(STORAGE_KEY);
    return v === "en" || v === "hi" || v === "pa" ? v : "en";
  } catch {
    return "en";
  }
}

export function I18nProvider({ children }: PropsWithChildren) {
  const [language, setLanguage] = useState<LanguageCode>(() => readStoredLanguage());

  useEffect(() => {
    if (Platform.OS !== "web") return;
    try {
      window.localStorage.setItem(STORAGE_KEY, language);
    } catch {
      // ignore
    }
  }, [language]);

  const t = useCallback(
    (key: TranslationKey) => {
      return translations[language]?.[key] ?? translations.en[key] ?? key;
    },
    [language]
  );

  const value = useMemo<I18nContextValue>(() => ({ language, setLanguage, t }), [language, t]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
