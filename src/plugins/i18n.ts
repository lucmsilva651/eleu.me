import { createI18n } from 'vue-i18n';
import en from '../locales/en.json';
import pt from '../locales/pt.json';
import es from '../locales/es.json';

const messages = {
  en, pt, es
};

const i18n = createI18n({
  legacy: false,
  locale: navigator.language.split('-')[0] || 'en',
  fallbackLocale: 'en',
  messages,
});

export default i18n;