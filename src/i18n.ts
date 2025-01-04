import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import translationEN from './locales/text_eng.json'
import translationPL from './locales/text_pl.json'

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: translationEN },
    pl: { translation: translationPL },
  },
  lng: 'en', // default language
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
