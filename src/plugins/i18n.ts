import { createI18n } from 'vue-i18n';
import en from '../locales/en.json';
import pt from '../locales/pt.json';
import es from '../locales/es.json';
import ru from '../locales/ru.json';
import jp from '../locales/jp.json';

const messages = {
  en,
  pt,
  es,
  ru,
  jp
};

const i18n = createI18n({
  legacy: false,
  locale: navigator.language.split('-')[0] || 'en',
  fallbackLocale: 'en',
  messages,
});

export default i18n;