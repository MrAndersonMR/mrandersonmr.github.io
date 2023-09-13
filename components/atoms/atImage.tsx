import React, { useContext } from "react";
import Image from "next/image";
// import { useThemeStyle } from "../../context/themeStyleContext";
import { styleRadius, styleTheme } from "../config/stylesConfig";
import { ThemeStyleContext } from "../../context/themeStyleContext";
import { ThemeContext } from "../../context/themeContext";

function AtImage({
  src = [],
  alt = "",
  width = undefined,
  height = undefined,
  fill = false,
  sizes = undefined,
  click = undefined,
  css = undefined,
  invert = false,
  iLevel = "bg",
}: {
  src: string[];
  alt?: string;
  fill?: boolean;
  sizes?: string;
  width?: number;
  height?: number;
  click?: any;
  css?: string;
  invert?: boolean;
  iLevel?: "bg" | "navbar" | "defaultProfile";
}) {
  // const themeStyle = useThemeStyle();
  const [theme, setTheme] = useContext(ThemeContext);
  const [themeStyle, setThemeStyle] = useContext(ThemeStyleContext);

  function cssStyle() {
    return [
      css,
      invert && theme !== "light" ? "invert" : "",
      iLevel
        ? styleRadius("images", themeStyle.images[iLevel].radius, iLevel)
        : styleRadius("image", themeStyle.image.radius),
    ].join(" ");
  }

  return (
    <Image
      src={src[1] && theme !== "light" ? src[1] : src[0]}
      width={width}
      height={height}
      fill={fill}
      sizes={sizes}
      alt={alt}
      className={cssStyle()}
      onClick={click}
    />
  );
}

export default AtImage;
