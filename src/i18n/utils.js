import { defaultLanguage, ui } from "./ui";

export function getLangFromUrl(url) {
    const [, lang] = url.pathname.split('/');
    if (lang in ui) return lang;
    return defaultLanguage;
  }
  
  export function useTranslations(lang) {
    return function t(key) {
      return ui[lang][key] || ui[defaultLanguage][key];
    }
  }