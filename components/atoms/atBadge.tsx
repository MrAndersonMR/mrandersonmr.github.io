import React, { useContext } from "react";
import { Badge } from "react-bootstrap";
import AtText from "./atText";

function AtBadge({
  sentence = undefined,
  bg = undefined,
  iconType = undefined,
  icon = undefined,
  iconSize = undefined,
  css = undefined,
}: {
  sentence?: string;
  bg?: string;
  iconType?: string;
  icon?: string;
  iconSize?: string;
  css?: string;
}) {
  // const [language, setLanguage] = useContext(LanguageContext);

  // function labelFormat() {
  //   if (iconType) return Icon(iconType, icon, iconSize ? iconSize : undefined);
  //   return sentence.split("|:")[0] === "l"
  //     ? sentence.split("|:")[1]
  //     : translations(sentence, language);
  // }

  function cssFormat() {
    return ["flex items-center", css].join(" ");
  }

  return (
    <Badge bg={bg} className={cssFormat()}>
      <AtText type="legend" sentence={sentence} />
    </Badge>
  );
}

export default AtBadge;
