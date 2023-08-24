import React, { useContext } from "react";

import Icon from "../icon/icon";
import { styleIcon, styleTheme } from "../config/stylesConfig";
import { ThemeStyleContext } from "../../context/themeStyleContext";
// import { useThemeStyle } from "../../context/themeStyleContext";

function AtIcon({
  style = "default",
  name = undefined,
  iconType = undefined,
  icon = undefined,
  size = undefined,
  css = undefined,
  type = "secondary",
  fill = undefined,
  click = undefined,
}: {
  style?: string;
  name?: string;
  iconType?: string;
  icon?: string;
  size?: string;
  css?: string;
  type?: "main" | "secondary";
  fill?: string;
  click?: any;
}) {
  // const themeStyle = useThemeStyle();
  const [themeStyle, setThemeStyle] = useContext(ThemeStyleContext);

  function typeStyle(type) {
    const values = {
      main: [
        styleTheme("text", themeStyle.icon.main.color),
        ["text-", themeStyle.icon.main.size].join(""),
        themeStyle.icon.main.animation,
      ].join(" "),
      secondary: [
        styleTheme("text", themeStyle.icon.secondary.color),
        ["text-", themeStyle.icon.secondary.size].join(""),
        themeStyle.icon.secondary.animation,
      ].join(" "),
    };
    return values[type];
  }

  function cssStyle() {
    return [css, typeStyle(type)].join(" ");
  }

  return (
    <div onClick={click} className={cssStyle()}>
      {name
        ? styleIcon(
            style !== "default" ? style : themeStyle.icon[type].style,
            name,
            size
          )
        : Icon(iconType, icon, size)}
    </div>
  );
}

export default AtIcon;
