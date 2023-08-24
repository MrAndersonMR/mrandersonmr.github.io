import React, { useContext, useState } from "react";
import { Overlay, OverlayTrigger, Popover, Tooltip } from "react-bootstrap";
import { ThemeStyleContext } from "../../context/themeStyleContext";
import { styleRadius, styleTheme } from "../config/stylesConfig";

function AtOverlay({
  action = "click",
  type = "default",
  show = false,
  target = undefined,
  title = undefined,
  content = undefined,
  placement = "right",
  duration = 0,
  hide = 0,
  children = undefined,
  rootClose = false,
  shower = "tooltip",
}: {
  action?: "hover" | "click";
  type?: "default" | "trigger";
  shower?: "tooltip" | "popover";
  show?: boolean;
  target?: any;
  title?: any;
  content?: any;
  placement?: "right" | "left" | "bottom" | "top";
  duration?: number;
  hide?: number;
  children?: any;
  rootClose?: boolean;
}) {
  function cssStyle() {
    const [themeStyle, setThemeStyle] = useContext(ThemeStyleContext);
    return [
      "border-0",
      styleRadius("secondaryComponent", themeStyle.secondaryComponent.radius),
      styleTheme("bg", themeStyle.secondaryComponent.bg),
    ].join(" ");
  }

  function showFormat() {
    const values = {
      tooltip: <Tooltip className={cssStyle()}>{content}</Tooltip>,
      popover: (
        <Popover className={cssStyle()}>
          <Popover.Header>{title}</Popover.Header>
          <Popover.Body className="!p-[.5rem]">{content}</Popover.Body>
        </Popover>
      ),
    };
    return values[shower];
  }

  function overlayFormat() {
    const values = {
      default: target ? (
        <Overlay target={target.current} show={show} placement="right">
          {
            // (props) => (
            //   <Tooltip id="overlay-example" {...props}>
            //     {content}
            //   </Tooltip>
            // )
            showFormat()
          }
        </Overlay>
      ) : (
        <></>
      ),
      trigger: (
        <OverlayTrigger
          trigger={action}
          placement={placement}
          delay={{ show: duration, hide: hide }}
          overlay={showFormat()}
          rootClose={rootClose}
        >
          {children}
        </OverlayTrigger>
      ),
    };
    return values[type];
  }

  return overlayFormat();
}

export default AtOverlay;
