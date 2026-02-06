
import React from 'react';
import { useTranslations } from '../contexts/LanguageContext';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useTranslations();

  const languages = [
    { code: 'ge', label: 'GE' },
    { code: 'en', label: 'EN' },
    { code: 'ru', label: 'RU' },
  ] as const;

  return (
    <div className="flex items-center space-x-3 text-sm font-bold">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => setLanguage(lang.code)}
          className={`uppercase transition-colors duration-200 ${
            language === lang.code
              ? 'text-white'
              : 'text-gray-500 hover:text-white'
          }`}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
