import React, { ReactNode } from "react";
import Icon from "../icon/icon";
import { Button } from "react-bootstrap";

import translations from "../../lib/translations";
// import { useLanguage, useLanguageUpdate } from "../../context/languageContext";

function SecLayoutPage({ children }: { children?: ReactNode }) {
  // const language = useLanguage();
  // const toggleLanguage = useLanguageUpdate();

  return (
    <>
      <Button className="m-2 !p-2 !rounded-tr-2xl !rounded-tl-md !rounded-bl-2xl !rounded-br-md">
        {Icon("ri", "RiArrowLeftSLine")}
      </Button>
      {/* {translations("home", language)}
      {language} */}
      {children}
    </>
  );
}

export default SecLayoutPage;
