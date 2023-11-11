import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { LOCALS } from "./constants";
import { ukr } from "./copies/ukr";
import { eng } from "./copies/eng";

const resources = {
  [LOCALS.ENG]: {
    translation: eng,
  },
  [LOCALS.UKR]: {
    translation: ukr,
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .init({
    debug: true,
    resources,
    fallbackLng: LOCALS.UKR, // if LanguageDetector don`t work

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
