import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import pt from './locales/pt.json';
import en from './locales/en.json';

// eslint-disable-next-line import/no-named-as-default-member
i18n.use(initReactI18next).init({
  fallbackLng: 'pt',
  debug: false,
  resources: {
    pt,
    en,
  },
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
