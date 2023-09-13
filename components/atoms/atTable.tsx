import React, { useContext } from "react";
import { Table } from "react-bootstrap";
// import translations from "../../lib/translations";
// import { useLanguage } from "../../context/languageContext";
// import { useThemeStyle } from "../../context/themeStyleContext";
// import { styleRadius } from "../config/stylesConfig";
import AtButton from "./atButton";
// import { LanguageContext } from "../../context/languageContext";
import AtText from "./atText";
import { ThemeStyleContext } from "../../context/themeStyleContext";
import { styleTheme } from "../config/stylesConfig";

function AtTable({
  item = undefined,
  title = undefined,
  headers = [],
  type = "feature",
  click = undefined,
  css = undefined,
  variant = "light",
}: {
  item?: any;
  title?: string;
  headers?: string[];
  type?: "feature" | "comment";
  click?: any;
  css?: string;
  variant?: string;
}) {
  // const language = useLanguage();
  // const [language, setLanguage] = useContext(LanguageContext);
  // const themeStyle = useThemeStyle();
  const [themeStyle, setThemeStyle] = useContext(ThemeStyleContext);

  function typeFormat() {
    const values = {
      feature: (
        <tbody>
          {item &&
            item.features.map((e, i) => {
              {
                return e.split("|").map((p, j, d) => {
                  // if (j !== 0) j = j + 3;
                  if (j % 3 === 0)
                    return i === item.features.length - 1 ? (
                      <tr>
                        <td className="!bg-transparent border-0">
                          <AtText sentence={"l|:" + d[j]} />
                        </td>
                        <td className="!bg-transparent border-0">
                          <AtText sentence={"l|:" + d[j + 1]} />
                        </td>
                        <td className="!bg-transparent border-0">
                          <AtText sentence={"l|:" + d[j + 2]} />
                        </td>
                      </tr>
                    ) : (
                      <tr>
                        <td className="!bg-transparent">
                          <AtText sentence={"l|:" + d[j]} />
                        </td>
                        <td className="!bg-transparent">
                          <AtText sentence={"l|:" + d[j + 1]} />
                        </td>
                        <td className="!bg-transparent">
                          <AtText sentence={"l|:" + d[j + 2]} />
                        </td>
                      </tr>
                    );
                });
              }
            })}
        </tbody>
      ),
      comment: (
        <tbody>
          {item &&
            item.comments.map((e, i) => {
              {
                return (
                  <tr>
                    <td className="!bg-transparent">
                      <AtText type="text" sentence={"l|:" + e.user} />
                    </td>
                    <td className="!bg-transparent">
                      <AtText type="text" sentence={"l|:" + e.comment} />
                    </td>
                    <td className="!bg-transparent">
                      <AtText type="text" sentence={"l|:" + e.date} />
                    </td>
                  </tr>
                );
              }
            })}
        </tbody>
      ),
    };
    return values[type];
  }

  function cssFormat() {
    return [
      "p-[.75rem]",
      css,
      // "bg-" + themeStyle.secondaryComponent.bg,
      styleTheme("secondaryComponent", themeStyle.secondaryComponent.bg),
      // styleRadius("secondaryComponent", themeStyle.secondaryComponent.border),
    ].join(" ");
  }

  // function labelFormat(sentence) {
  //   return sentence.split("|:")[0] === "l"
  //     ? sentence.split("|:")[1]
  //     : translations(sentence, language);
  // }

  return (
    <>
      {/* <h2 className="border-l-4 pl-2 capitalize">{labelFormat(title)}</h2> */}
      <div className={cssFormat()}>
        <Table variant={variant} responsive className="mb-0">
          <thead>
            <tr className="!bg-transparent">
              {headers.map((e, i) => {
                return (
                  <th key={i} className="!bg-transparent">
                    <AtText type="text" sentence={e} />
                  </th>
                );
              })}
            </tr>
          </thead>
          {typeFormat()}
        </Table>
        {type === "comment" && click ? (
          <div className="flex justify-end">
            <AtButton css="mt-3" sentence={"addComment"} click={click} />
          </div>
        ) : undefined}
      </div>
    </>
  );
}

export default AtTable;
