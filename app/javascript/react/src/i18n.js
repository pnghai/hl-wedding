import i18n from "i18next";
import Backend from 'i18next-chained-backend';
import LocalStorageBackend from 'i18next-localstorage-backend'; // primary use cache
import HttpApi from 'i18next-http-backend'; // fallback http load
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
// import axios from "./utils/config/vendor/axios";
// import { DEFAULT_LANG } from "./utils/config";

// eslint-disable-next-line no-unused-vars
export async function langChangedHandle(err, t) {
  if (err) return;
  const { language } = i18n;
  // await axios.get(`/api${language === DEFAULT_LANG ? "" : `/${language}`}/changeLang`);
}
i18n
  // load translation using http -> see /public/locales
  // learn more: https://github.com/i18next/i18next-http-backend
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init(
    {
      backend: {
        backends: [
          LocalStorageBackend,  // primary backend
          HttpApi               // fallback backend
        ],
        backendOptions: [{
          defaultVersion: '0.2.10.11',
          /* options for primary backend */
        }, {
          /* options for secondary backend */
          loadPath: '/locales/{{lng}}/{{ns}}.json' // http load path for my own fallback
        }]
      },
      fallbackLng: "en",
      interpolation: {
        escapeValue: false, // react already safes from xss
      },
    },
    langChangedHandle
  );

export default i18n;
