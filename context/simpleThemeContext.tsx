import React, { Dispatch, SetStateAction, useContext, useState } from "react";

import { Language } from "../interfaces/index";

export const SimpleLanguageContext = React.createContext<
  [Language, Dispatch<SetStateAction<Language>>]
>(["en", (e) => {}]);

export function LanguageProvider({ children }: { children: any }) {
  const [language, setLanguage] = useState<Language>("en");

  return (
    <SimpleLanguageContext.Provider value={[language, setLanguage]}>
      {children}
    </SimpleLanguageContext.Provider>
  );
}
