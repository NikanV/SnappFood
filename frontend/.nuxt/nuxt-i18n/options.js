import locale774aa545 from '../../lang/fa-IR'

export const Constants = {
  COMPONENT_OPTIONS_KEY: "nuxtI18n",
  STRATEGIES: {"PREFIX":"prefix","PREFIX_EXCEPT_DEFAULT":"prefix_except_default","PREFIX_AND_DEFAULT":"prefix_and_default","NO_PREFIX":"no_prefix"},
  REDIRECT_ON_OPTIONS: {"ALL":"all","ROOT":"root","NO_PREFIX":"no prefix"},
}
export const nuxtOptions = {
  isUniversalMode: true,
  trailingSlash: undefined,
}
export const options = {
  vueI18n: {"fallbackLocale":"fa","silentTranslationWarn":true,"silentFallbackWarn":true},
  vueI18nLoader: true,
  locales: [{"code":"fa","iso":"fa-IR","file":"fa-IR","dir":"rtl","name":"Persian"},{"code":"en","iso":"en-US","file":"en-US","dir":"ltr","name":"English"}],
  defaultLocale: "fa",
  defaultDirection: "ltr",
  routesNameSeparator: "___",
  defaultLocaleRouteNameSuffix: "default",
  sortRoutes: true,
  strategy: "prefix_except_default",
  lazy: true,
  langDir: "lang/",
  rootRedirect: null,
  detectBrowserLanguage: false,
  differentDomains: false,
  baseUrl: "",
  vuex: {"moduleName":"i18n","syncRouteParams":true},
  parsePages: true,
  pages: {},
  skipSettingLocaleOnNavigate: false,
  onBeforeLanguageSwitch: () => {},
  onLanguageSwitched: () => null,
  normalizedLocales: [{"code":"fa","iso":"fa-IR","file":"fa-IR","dir":"rtl","name":"Persian"},{"code":"en","iso":"en-US","file":"en-US","dir":"ltr","name":"English"}],
  localeCodes: ["fa","en"],
  additionalMessages: [],
}
export const localeFiles = {
  0: "{",
  1: "\"",
  2: "f",
  3: "a",
  4: "-",
  5: "I",
  6: "R",
  7: "\"",
  8: ":",
  9: "\"",
  10: ".",
  11: ".",
  12: "/",
  13: "l",
  14: "a",
  15: "n",
  16: "g",
  17: "/",
  18: "f",
  19: "a",
  20: "-",
  21: "I",
  22: "R",
  23: "\"",
  24: ",",
  25: "\"",
  26: "e",
  27: "n",
  28: "-",
  29: "U",
  30: "S",
  31: "\"",
  32: ":",
  33: "\"",
  34: ".",
  35: ".",
  36: "/",
  37: "l",
  38: "a",
  39: "n",
  40: "g",
  41: "/",
  42: "e",
  43: "n",
  44: "-",
  45: "U",
  46: "S",
  47: "\"",
  48: "}",
}

export const localeMessages = {
  'fa-IR': () => Promise.resolve(locale774aa545),
  'en-US': () => import('../../lang/en-US' /* webpackChunkName: "lang-en-US" */),
}
