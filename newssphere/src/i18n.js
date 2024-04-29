import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    lng: "en",
    fallbackLng: "en",
    returnObjects: true,
    resources: {
      en: {
        translation: {
          greeting: "Hello",
          langOptHeader: "Language & region of interest",
          selectLang: "Select a language",
          languages: [
            { value: "en", label: "English" },
            { value: "es", label: "Spanish" },
            { value: "hi", label: "Hindi" },
          ],
        },
      },
      hi: {
        translation: {
          greeting: "Hello",
          langOptHeader: "भाषा और क्षेत्र की चयन",
          selectLang: "एक भाषा का चयन करें",
          languages: [
            { value: "en", label: "अंग्रेज़ी" },
            { value: "es", label: "स्पेनिश" },
            { value: "hi", label: "हिंदी" },
          ],
        },
      },
      es: {
        translation: {
          langOptHeader: "Idioma y región de interés",
          selectLang: "Selecciona un idioma",
          languages: [
            { value: "en", label: "Inglés" },
            { value: "es", label: "Español" },
            { value: "hi", label: "Hindi" },
          ],
        },
      },
    },
  });
