import React, { useContext } from "react";
import { styleTheme } from "../config/stylesConfig";
import { labelFormat } from "../config/formatConfig";
import { ThemeStyleContext } from "../../context/themeStyleContext";
// import { useThemeStyle } from "../../context/themeStyleContext";

function AtText({
  sentence = undefined,
  type = "text",
  css = undefined,
  tag = undefined,
}: {
  sentence?: string;
  type?: "title" | "subtitle" | "text" | "legend" | "sentence";
  css?: string;
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
}): any {
  // const themeStyle = useThemeStyle();
  const [themeStyle, setThemeStyle] = useContext(ThemeStyleContext);

  function typeStyle(type) {
    const values = {
      title: [
        ["font-[", themeStyle.text.main.font, "]"].join(""),
        styleTheme("text", themeStyle.text.main.color),
        ["text-", themeStyle.text.main.size].join(""),
      ].join(" "),
      subtitle: [
        ["font-[", themeStyle.text.secondary.font, "]"].join(""),
        styleTheme("text", themeStyle.text.secondary.color),
        ["text-", themeStyle.text.secondary.size].join(""),
      ].join(" "),
      text: [
        ["font-[", themeStyle.text.base.font, "]"].join(""),
        styleTheme("text", themeStyle.text.base.color),
        ["text-", themeStyle.text.base.size].join(""),
      ].join(" "),
      legend: [
        ["font-[", themeStyle.text.sub.font, "]"].join(""),
        styleTheme("text", themeStyle.text.sub.color),
        ["text-", themeStyle.text.sub.size].join(""),
      ].join(" "),
    };
    return values[type];
  }

  function cssStyle() {
    return [css, typeStyle(type), "mb-0"].join(" ");
  }

  function textFormat(): any {
    const CustomTag = `${tag}`;
    const values = {
      title: tag ? (
        <></>
      ) : (
        // <CustomTag className={cssStyle()}>{labelFormat(sentence)}</CustomTag>
        <h2 className={cssStyle()}>{labelFormat(sentence)}</h2>
      ),
      subtitle: <h4 className={cssStyle()}>{labelFormat(sentence)}</h4>,
      text: <h5 className={cssStyle()}>{labelFormat(sentence)}</h5>,
      legend: <h6 className={cssStyle()}>{labelFormat(sentence)}</h6>,
      sentence: labelFormat(sentence),
    };
    return values[type];
  }

  return textFormat();
}

export default AtText;
