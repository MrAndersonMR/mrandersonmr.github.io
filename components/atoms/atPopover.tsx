import React, { useContext } from "react";
import { Popover } from "react-bootstrap";
import { styleRadius, styleTheme } from "../config/stylesConfig";
import { ThemeStyleContext } from "../../context/themeStyleContext";

function cssStyle() {
  const [themeStyle, setThemeStyle] = useContext(ThemeStyleContext);
  return [
    styleRadius("secondaryComponent", themeStyle.secondaryComponent.radius),
    styleTheme("bg", themeStyle.secondaryComponent.radius),
  ].join(" ");
}

function popover2() {
  return <Popover>Anderson</Popover>;
}

function AtPopover({ content = undefined }: { content: any }) {
  return popover2();
}

export default AtPopover;
