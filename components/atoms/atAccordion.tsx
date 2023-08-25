import React, { useContext } from "react";
import { Accordion } from "react-bootstrap";
import AtText from "./atText";
import { styleRadius } from "../config/stylesConfig";
import { ThemeStyleContext } from "../../context/themeStyleContext";

function AtAccordion({
  headers = [],
  bodies = [],
  defKey = undefined,
  css = undefined,
}: {
  headers?: string[];
  bodies?: any[];
  defKey?: string;
  css?: string;
}) {
  const [themeStyle, setThemeStyle] = useContext(ThemeStyleContext);

  function cssStyle() {
    return [
      css,
      // styleRadius("form", themeStyle.form["main"].radius, "main"),
    ].join(" ");
  }

  return (
    <>
      <Accordion defaultActiveKey={defKey}>
        {headers.map((e, i) => {
          return (
            <Accordion.Item
              key={i}
              className={cssStyle()}
              eventKey={i.toString()}
            >
              <Accordion.Header>
                <AtText sentence={e} />
              </Accordion.Header>
              <Accordion.Body>{bodies[i]}</Accordion.Body>
            </Accordion.Item>
          );
        })}
      </Accordion>
    </>
  );
}

export default AtAccordion;
