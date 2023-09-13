import React, { useContext, useState } from "react";
import { Toast, ToastContainer } from "react-bootstrap";
import AtText from "./atText";
import { styleTheme, styleVariant } from "../config/stylesConfig";
import { ThemeStyleContext } from "../../context/themeStyleContext";

function AtToast({
  defShow = false,
  defSetShow = undefined,
  bg = undefined,
  position = undefined,
  closeButton = true,
  title = "blackSpace",
  content = "blackSpace",
  fixed = true,
}: {
  defShow?: boolean;
  defSetShow?: any;
  bg?: string;
  position?:
    | "top-start"
    | "top-center"
    | "top-end"
    | "middle-start"
    | "middle-center"
    | "middle-end"
    | "bottom-start"
    | "bottom-center"
    | "bottom-end";
  closeButton?: boolean;
  title?: string;
  content?: string;
  fixed?: boolean;
}) {
  const [themeStyle, setThemeStyle] = useContext(ThemeStyleContext);

  function cssStyle() {
    return ["!" + styleTheme("bg", themeStyle.secondaryComponent.bg)].join(" ");
  }

  return (
    <ToastContainer
      position={position}
      className={["my-3", fixed ? "position-fixed" : ""].join(" ")}
    >
      <Toast
        show={defShow}
        onClose={() => defSetShow(!defShow)}
        bg={bg ? bg : styleVariant()}
      >
        <Toast.Header
          className={["flex justify-between"].join(" ")}
          closeButton={closeButton}
        >
          <AtText type="subtitle" sentence={title} css="text-[1.25rem]" />
        </Toast.Header>
        <Toast.Body>
          <AtText sentence={content} css={"text-[1rem]"} />
        </Toast.Body>
      </Toast>
    </ToastContainer>
  );
}

export default AtToast;
