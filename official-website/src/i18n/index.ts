import { createI18n } from 'vue-i18n'
import en from '../locales/en.json'
import zh from '../locales/zh.json'
import es from '../locales/es.json'
import fr from '../locales/fr.json'
import de from '../locales/de.json'
import ja from '../locales/ja.json'
import ko from '../locales/ko.json'

const messages = {
  en,
  zh,
  es,
  fr,
  de,
  ja,
  ko,
}

type SupportedLocale = 'en' | 'zh' | 'es' | 'fr' | 'de' | 'ja' | 'ko'

function detectLocale(): SupportedLocale {
  // When running in non-browser environments (SSR/test), default to English
  if (typeof navigator === 'undefined') return 'en'

  const nav: any = navigator
  const raw = Array.isArray(nav.languages) && nav.languages.length ? nav.languages[0] : nav.language || nav.userLanguage || 'en'
  const short = String(raw).split('-')[0].toLowerCase()

  // Map language codes to supported locales
  const localeMap: Record<string, SupportedLocale> = {
    'zh': 'zh',
    'en': 'en',
    'es': 'es',
    'fr': 'fr',
    'de': 'de',
    'ja': 'ja',
    'ko': 'ko',
  }

  return localeMap[short] || 'en'
}

const locale = detectLocale()

const i18n = createI18n({
  legacy: false,
  locale,
  fallbackLocale: 'en',
  messages,
})

export default i18n
