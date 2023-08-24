import React, { useContext, useRef, useState } from "react";
import { Button } from "react-bootstrap";
// import { useThemeStyle } from "./../../context/themeStyleContext";
import { labelFormat } from "../config/formatConfig";
import { styleRadius } from "../config/stylesConfig";
import AtText from "./atText";
import AtIcon from "./atIcon";
import { ThemeStyleContext } from "../../context/themeStyleContext";
import AtOverlay from "./atOverlay";

function AtButton({
  sentence = "blankSpace",
  iconName = undefined,
  iconType = undefined,
  icon = undefined,
  iconSize = "24px",
  level = "main",
  css = undefined,
  click = undefined,
  change = undefined,
  href = undefined,
  variant = "primary",
  tooltip = undefined,
  size = "md",
}: // bref = undefined,
{
  sentence?: string;
  iconName?: string;
  iconType?: string;
  icon?: string;
  iconSize?: string;
  level?: "main" | "secondary";
  css?: string;
  click?: any;
  change?: any;
  href?: string;
  variant?: string;
  tooltip?: any;
  size?: "sm" | "md" | "lg";
  // bref?: any;
}) {
  // const themeStyle = useThemeStyle();
  const [themeStyle, setThemeStyle] = useContext(ThemeStyleContext);
  const [showTooltip, setShowTooltip] = useState(false);
  const target = useRef(null);

  function cssStyle(level: string) {
    return [
      css,
      iconType || iconName ? "!p-2" : "",
      styleRadius("button", themeStyle.button[level].radius, level),
    ].join(" ");
  }

  return (
    <>
      <Button
        className={cssStyle(level)}
        onClick={!tooltip ? click : () => setShowTooltip(!showTooltip)}
        onChange={change}
        href={href}
        variant={variant}
        ref={target}
        // ref={bref}
      >
        {iconType || iconName ? (
          iconName ? (
            <>
              <AtIcon name={iconName} size={iconSize} />
            </>
          ) : (
            <AtIcon iconType={iconType} icon={icon} size={iconSize} />
          )
        ) : (
          <AtText
            type={
              size === "sm" ? "legend" : size === "md" ? "text" : "subtitle"
            }
            sentence={sentence}
          />
        )}
        {/* {labelFormat(sentence, iconType, icon, iconSize)} */}
        {/* {tooltip} */}
      </Button>
      <AtOverlay show={showTooltip} target={target} content={tooltip} />
    </>
  );
}

export default AtButton;
