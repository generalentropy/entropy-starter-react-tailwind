// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import translationEN from "./locales/en/translation.json";
import translationFR from "./locales/fr/translation.json";

i18n
  .use(LanguageDetector) // Détecte la langue du navigateur
  .use(initReactI18next) // Initialise avec React
  .init({
    resources: {
      en: {
        translation: translationEN,
      },
      fr: {
        translation: translationFR,
      },
    },
    fallbackLng: "en", // fallback
    interpolation: {
      escapeValue: false, // By default, React DOM escapes any values embedded in JSX before rendering them
    },
  });

export default i18n;
