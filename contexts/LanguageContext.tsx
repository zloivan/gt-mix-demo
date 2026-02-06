
import React, { createContext, useState, useContext, ReactNode } from 'react';
import { translations } from '../translations';
import get from 'lodash.get';

type Language = 'ge' | 'en' | 'ru';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('ge');

  const t = (key: string): string => {
    return get(translations[language], key, key);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useTranslations = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useTranslations must be used within a LanguageProvider');
  }
  return context;
};
