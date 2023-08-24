// import { useLanguage } from "../../context/languageContext";
import { useContext } from "react";
import translations from "../../lib/translations";
import Icon from "../icon/icon";
import { LanguageContext } from "../../context/languageContext";

export function monetaryFormat(value: number) {
  const [language, setLanguage] = useContext(LanguageContext);

  return (
    translations("currencySign", language) +
    (language !== "en" ? value.toFixed(2).replace(".", ",") : value.toFixed(2))
  );
}

export function labelFormat(
  sentence: string,
  iconType?: string,
  icon?: string,
  iconSize?: string
) {
  // const language = useLanguage();
  const [language, setLanguage] = useContext(LanguageContext);

  if (iconType) return Icon(iconType, icon, iconSize ? iconSize : undefined);
  return sentence.split("|:")[0] === "l"
    ? sentence.split("|:")[1]
    : translations(sentence, language);
}

export function typeofString(object) {
  console.log(object);
  if (typeof object === "string") return object;
  else return "";
}
