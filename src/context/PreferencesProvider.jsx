import { useEffect, useMemo, useState } from 'react';
import PreferencesContext from './preferences-context';
import translations from '../i18n/translations';

const getInitialTheme = () => {
  const savedTheme = localStorage.getItem('portfolio-theme');
  if (savedTheme === 'light' || savedTheme === 'dark') return savedTheme;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

const getInitialLanguage = () => {
  const savedLanguage = localStorage.getItem('portfolio-language');
  return savedLanguage === 'es' ? 'es' : 'en';
};

const PreferencesProvider = ({ children }) => {
  const [theme, setTheme] = useState(getInitialTheme);
  const [language, setLanguage] = useState(getInitialLanguage);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.lang = language;
    localStorage.setItem('portfolio-language', language);
  }, [language]);

  const value = useMemo(() => ({
    theme,
    language,
    copy: translations[language],
    toggleTheme: () => setTheme((current) => (current === 'light' ? 'dark' : 'light')),
    toggleLanguage: () => setLanguage((current) => (current === 'en' ? 'es' : 'en')),
  }), [language, theme]);

  return (
    <PreferencesContext.Provider value={value}>
      {children}
    </PreferencesContext.Provider>
  );
};

export default PreferencesProvider;
