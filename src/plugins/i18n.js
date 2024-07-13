import { createI18n } from 'vue-i18n';
import pt from '../locales/pt.json';
import en from '../locales/en.json';
import es from '../locales/es.json';

const locale = navigator.language.split('-')[0];

const language = {
  pt, en, es
};

const messages = language;

const i18n = createI18n({
  locale: locale || 'en',
  fallbackLocale: 'en',
  legacy: false,
  messages
});

export default i18n;