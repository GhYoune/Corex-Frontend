import { createI18n } from "vue-i18n";

import en from "../locales/en.json";
import fr from "../locales/fr.json";

import { en as enVuetify, fr as frVuetify } from "vuetify/locale";
import useAppLanguage from "../composables/app/useAppLanguage";

const { lang } = useAppLanguage();
export default createI18n({
 legacy: false,
 globalInjection: true,
 fallbackLocale: "en",
 locale: lang.value,
 availableLocales: ["en", "fr"],
 messages: {
  en: {
   ...en,
   $vuetify: {
    ...enVuetify,
   },
  },
  fr: {
   ...fr,
   $vuetify: {
    ...frVuetify,
   },
  },
 },
});
