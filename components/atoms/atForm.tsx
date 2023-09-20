import React, { useContext } from "react";
import { Form } from "react-bootstrap";
import AtButton from "./atButton";
import AtText from "./atText";
import { ThemeStyleContext } from "../../context/themeStyleContext";
import { styleRadius, styleTheme } from "../config/stylesConfig";
import { labelFormat, typeofString } from "../config/formatConfig";

function AtForm({
  type = undefined,
  title = undefined,
  level = "secondary",
  value = undefined,
  click = [],
  change = undefined,
  css = [],
  iconName = [],
  iconType = [],
  icon = [],
  placeholder = undefined,
  listValues = [],
}: {
  type?: string;
  title?: string;
  level?: "main" | "secondary";
  value?: string;
  click?: any[];
  change?: any;
  css?: string[];
  iconName?: string[];
  iconType?: string[];
  icon?: string[];
  placeholder?: string;
  listValues?: string[];
}) {
  // const language = useLanguage();
  // const theme = useTheme();
  const [themeStyle, setThemeStyle] = useContext(ThemeStyleContext);

  function outStyle() {
    return [css[0], "flex justify-center items-center !w-full gap-2"].join(" ");
  }

  function cssStyle() {
    return [
      css[1],
      styleRadius("form", themeStyle.form[level].radius, level),
      styleTheme("text", themeStyle.form[level].color),
      themeStyle.form[level].decoration,
      ["font-[", themeStyle.text.base.font, "]"].join(""),
    ].join(" ");
  }

  function formStyle() {
    return ["!w-full"].join(" ");
  }

  // function labelStyle() {
  //   return [theme === "dark" ? "text-white" : ""].join(" ");
  // }

  // function labelFormat(sentence) {
  //   return sentence.split("|:")[0] === "l"
  //     ? sentence.split("|:")[1]
  //     : translations(sentence, language);
  // }

  return (
    <Form className={outStyle()}>
      {type === "select" ? (
        <Form.Select
          className={cssStyle()}
          onChange={change}
          aria-label="Default select example"
        >
          <option>Open this select menu</option>
          {listValues.map((e, i) => {
            return (
              <option key={i} value={i}>
                {e}
              </option>
            );
          })}
        </Form.Select>
      ) : (
        <Form.Group
          className={formStyle()}
          controlId="exampleForm.ControlInput1"
        >
          {title ? (
            <Form.Label>
              <AtText sentence={title} />
            </Form.Label> //className={labelStyle()}
          ) : (
            <></>
          )}
          <Form.Control
            type={type}
            className={cssStyle()}
            placeholder={
              placeholder
                ? labelFormat(placeholder) // <AtText type="sentence" sentence={placeholder} />
                : labelFormat("blankSpace") // <AtText type="sentence" sentence={"blankSpace"} />
            }
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                // alert(JSON.stringify(click));
              }
            }}
            value={value}
            onChange={change}
          />
        </Form.Group>
      )}
      {click
        ? click.map((e, i) => (
            <div key={i}>
              <AtButton
                level="secondary"
                iconName={iconName[i]}
                iconType={iconType[i]}
                icon={icon[i]}
                click={click[i]}
              />
            </div>
          ))
        : undefined}
    </Form>
  );
}

export default AtForm;
