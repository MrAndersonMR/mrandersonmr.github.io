import React, { Dispatch, SetStateAction, useState } from "react";

import { Language } from "../interfaces/index";

export const LanguageContext = React.createContext<
  [Language, Dispatch<SetStateAction<Language>>]
>(["en", (e) => {}]);

export function LanguageProvider({ children }: { children: any }) {
  const [language, setLanguage] = useState<Language>("en");

  return (
    <LanguageContext.Provider value={[language, setLanguage]}>
      {children}
    </LanguageContext.Provider>
  );
}
