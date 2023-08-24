import React, { useContext } from "react";
import Icon from "../icon/icon";
import translations from "../../lib/translations";
// import { useLanguage } from "../../context/languageContext";
// import { useThemeStyle } from "../../context/themeStyleContext";
import { styleRadius } from "../config/stylesConfig";
import { LanguageContext } from "../../context/languageContext";
import AtText from "../atoms/atText";
import AtIcon from "../atoms/atIcon";
import { ThemeStyleContext } from "../../context/themeStyleContext";

function SecBoard({
  type = undefined,
  title = undefined,
  text = undefined,
  iconType = undefined,
  icon = undefined,
  iconSize = undefined,
  layout = undefined,
}: {
  type?: string;
  title?: string;
  text?: string;
  iconType?: string;
  icon?: string;
  iconSize?: string;
  layout?: "horizontal" | "vertical";
}) {
  // const language = useLanguage();
  const [language, setLanguage] = useContext(LanguageContext);
  // const themeStyle = useThemeStyle();
  const [themeStyle, setThemeStyle] = useContext(ThemeStyleContext);

  function boardType() {
    const types = {
      sm: (
        <div
          className={[
            "flex items-center gap-3",
            layout === "vertical" ? "flex-col" : "",
            cssFormat(),
          ].join(" ")}
        >
          <div
            className={[
              cssIcon(),
              // styleRadius("icon", "main", themeStyle.icon.main.radius),
            ].join(" ")}
          >
            <AtIcon type="main" name={"shop"} size="24px" />
            {/* {Icon(iconType, icon, iconSize)} */}
          </div>
          <div>
            <AtText type="subtitle" sentence={title} />
            <AtText type="legend" sentence={text} />
            {/* <h6>{labelFormat(text)}</h6> */}
          </div>
        </div>
      ),
    };
    return types[type];
  }

  function cssFormat() {
    return "";
  }

  function cssIcon() {
    return ["p-3", "bg-" + themeStyle.icon.main.bg].join(" ");
  }

  function labelFormat(sentence) {
    return sentence.split("|:")[0] === "l"
      ? sentence.split("|:")[1]
      : translations(sentence, language);
  }

  return boardType();
}

export default SecBoard;
