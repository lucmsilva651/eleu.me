import { createI18n } from 'vue-i18n';
import en from '../locales/en.json';
import pt from '../locales/pt.json';
import es from '../locales/es.json';
import ru from '../locales/ru.json';
import jp from '../locales/jp.json';
import zh from '../locales/zh.json';
import de from '../locales/de.json';
import fr from '../locales/fr.json';
import it from '../locales/it.json';
import nl from '../locales/nl.json';
import sv from '../locales/sv.json';
import ko from '../locales/ko.json';
import ar from '../locales/ar.json';
import vi from '../locales/vi.json';
import hi from '../locales/hi.json';

const messages = {
  en, pt, es,
  ru, jp, zh,
  de, fr, it,
  nl, sv, ko,
  hi, vi, ar
};

const i18n = createI18n({
  legacy: false,
  locale: navigator.language.split('-')[0] || 'en',
  fallbackLocale: 'en',
  messages,
});

export default i18n;