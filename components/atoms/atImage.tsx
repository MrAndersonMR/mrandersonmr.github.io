import React, { useContext } from "react";
import Image from "next/image";
// import { useThemeStyle } from "../../context/themeStyleContext";
import { styleRadius } from "../config/stylesConfig";
import { ThemeStyleContext } from "../../context/themeStyleContext";

function AtImage({
  src = "",
  alt = "",
  width = undefined,
  height = undefined,
  fill = false,
  sizes = undefined,
  click = undefined,
  css = undefined,
  iLevel = "bg",
}: {
  src: string;
  alt?: string;
  fill?: boolean;
  sizes?: string;
  width?: number;
  height?: number;
  click?: any;
  css?: string;
  iLevel?: "bg" | "navbar" | "defaultProfile";
}) {
  // const themeStyle = useThemeStyle();
  const [themeStyle, setThemeStyle] = useContext(ThemeStyleContext);

  function cssStyle() {
    return [
      css,
      iLevel
        ? styleRadius("images", themeStyle.images[iLevel].radius, iLevel)
        : styleRadius("image", themeStyle.image.radius),
    ].join(" ");
  }

  return (
    <Image
      src={src}
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
