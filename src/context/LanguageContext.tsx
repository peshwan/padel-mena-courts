
import React, { createContext, useContext, useState, ReactNode } from 'react';

type LanguageContextType = {
  isArabic: boolean;
  toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Set default language to Arabic (true)
  const [isArabic, setIsArabic] = useState<boolean>(true);

  const toggleLanguage = () => {
    setIsArabic(prev => !prev);
  };

  return (
    <LanguageContext.Provider value={{ isArabic, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
