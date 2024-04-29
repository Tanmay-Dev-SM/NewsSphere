import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    returnObjects: true,
    resources: {
      en: {
        translation: {
          langOptHeader: "Language & Region of interest",
          selectLang: "Select a language",
          languages: [
            { value: "en", label: "English" },
            { value: "es", label: "Spanish" },
            { value: "hi", label: "Hindi" },
          ],
          searchBarLabel: "Search for topics, location and sources",
          updateButton: "Update",
          cancelButton: "Cancel",
          topics: {
            top: "Top",
            sports: "Sports",
            entertainment: "Entertainment",
            business: "Business",
          },
          langRegionLabel: "Language & Region",
        },
      },
      hi: {
        translation: {
          langOptHeader: "भाषा और क्षेत्र की चयन",
          selectLang: "एक भाषा का चयन करें",
          languages: [
            { value: "en", label: "अंग्रेज़ी" },
            { value: "es", label: "स्पेनिश" },
            { value: "hi", label: "हिंदी" },
          ],
          searchBarLabel: "विषयों, स्थानों और स्रोतों के लिए खोजें",
          updateButton: "अपडेट करें",
          cancelButton: "रद्द करें",
          topics: {
            top: "शीर्ष",
            sports: "खेल",
            entertainment: "मनोरंजन",
            business: "व्यापार",
          },
          langRegionLabel: "भाषा और क्षेत्र",
        },
      },
      es: {
        translation: {
          langOptHeader: "Idioma y Región de interés",
          selectLang: "Selecciona un idioma",
          languages: [
            { value: "en", label: "Inglés" },
            { value: "es", label: "Español" },
            { value: "hi", label: "Hindi" },
          ],
          searchBarLabel: "Buscar temas, ubicaciones y fuentes",
          updateButton: "Actualizar",
          cancelButton: "Cancelar",
          topics: {
            top: "Principal",
            sports: "Deportes",
            entertainment: "Entretenimiento",
            business: "Negocios",
          },
          langRegionLabel: "Idioma y Región",
        },
      },
    },
  });
