import React, { useContext, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
// import {
//   useThemeStyle,
//   useThemeStyleUpdate,
// } from "../../context/themeStyleContext";
import translations from "../../lib/translations";
// import { useLanguage, useLanguageUpdate } from "../../context/languageContext";

import { styleRadius, styleShadow } from "../config/stylesConfig";
import { LanguageContext } from "../../context/languageContext";
import AtIcon from "../atoms/atIcon";
import AtText from "../atoms/atText";
import { ThemeStyleContext } from "../../context/themeStyleContext";
import AtButton from "../atoms/atButton";

//moda, petshop, moveis, farmacia, comida, hostel, curso
//Formosa, Dr. Dogo, Made In San Telmo, farmacia trébol de 4 hojas, Rio-Lumpur, Instituto de Ensino Viena

function SecHead({
  layout = "center",
  css = undefined,
}: {
  layout: "center" | "left" | "right";
  css?: string[];
}) {
  // const themeStyle = useThemeStyle();
  // const toggleThemeStyle: any = useThemeStyleUpdate();

  // const language = useLanguage();
  // const toggleLanguage = useLanguageUpdate();
  const [language, setLanguage] = useContext(LanguageContext);
  const [themeStyle, setThemeStyle] = useContext(ThemeStyleContext);

  const [show, setShow] = useState(false);

  function mainComponentStyle() {
    return [
      "flex justify-center items-center",
      "w-full h-[100vh]",
      "bg-cover bg-center bg-[url('" + themeStyle.images.bg.url + "')]",
      themeStyle.images.bg.shadow,
      themeStyle.images.bg.radius,
      themeStyle.images.bg.decoration,
      themeStyle.images.bg.animation,
    ].join(" ");
  }

  const styleConst = "fill";

  return (
    <>
      <Button className="fixed let-0 bottom-0" onClick={() => setShow(!show)}>
        show
      </Button>
      {show ? (
        <>
          <AtText type="title" sentence="l|:Gloock" css="!font-[Gloock]" />
          <AtText
            type="title"
            sentence="l|:Fragment_Mono"
            css="!font-['Fragment_Mono']"
          />
          <AtText
            type="title"
            sentence="l|:Libre_Bodoni"
            css="!font-['Libre_Bodoni']"
          />
          <AtText
            type="title"
            sentence="l|:Square_Peg"
            css="!font-['Square_Peg']"
          />
          <AtText type="title" sentence="l|:Elsie" css="!font-[Elsie]" />
          <AtText
            type="title"
            sentence="l|:Julius_Sans_One"
            css="!font-['Julius_Sans_One']"
          />
          <AtText
            type="title"
            sentence="l|:Economica"
            css="!font-[Economica]"
          />
          <AtText type="title" sentence="l|:Jost" css="!font-[Jost]" />
          <AtText
            type="title"
            sentence="l|:Euphoria_Script"
            css="!font-['Euphoria_Script']"
          />
          <AtText type="title" sentence="l|:Tauri" css="!font-[Tauri]" />
          <AtText
            type="title"
            sentence="l|:Nixie_One"
            css="!font-['Nixie_One']"
          />
          <AtText
            type="title"
            sentence="l|:Six_Caps"
            css="!font-['Six_Caps']"
          />
          <AtText
            type="title"
            sentence="l|:PT_Serif_Caption"
            css="!font-['PT_Serif_Caption']"
          />
          <AtText
            type="title"
            sentence="l|:Yanone_Kaffeesatz"
            css="!font-['Yanone_Kaffeesatz']"
          />
          <AtText type="title" sentence="l|:Fredoka" css="!font-[Fredoka]" />
          <AtText
            type="title"
            sentence="l|:M_PLUS_Code_Latin"
            css="!font-['M_PLUS_Code_Latin']"
          />
          <AtText type="title" sentence="l|:Syne" css="!font-[Syne]" />
          <AtText
            type="title"
            sentence="l|:Hurricane"
            css="!font-[Hurricane]"
          />
          <AtText
            type="title"
            sentence="l|:Calistoga"
            css="!font-[Calistoga]"
          />
          <AtText
            type="title"
            sentence="l|:Modern_Antiqua"
            css="!font-['Modern_Antiqua']"
          />
          <AtText
            type="title"
            sentence="l|:Suez_One"
            css="!font-['Suez_One']"
          />
          <AtText
            type="title"
            sentence="l|:Liu_Jian_Mao_Cao"
            css="!font-['Liu_Jian_Mao_Cao']"
          />
          <AtText
            type="title"
            sentence="l|:Poltawski_Nowy"
            css="!font-['Poltawski_Nowy']"
          />
          <AtText type="title" sentence="l|:Prata" css="!font-[Prata]" />
          <AtText type="title" sentence="l|:Artifika" css="!font-[Artifika]" />
          <AtText
            type="title"
            sentence="l|:Yeseva_One"
            css="!font-['Yeseva_One']"
          />

          <AtText type="title" sentence="l|:Atlantico" />
          <AtText type="subtitle" sentence="l|:Anderson" />
          <AtText type="text" sentence="l|:Anderson" />
          <AtText type="legend" sentence="l|:Anderson" />
          <h1 className="text-white">Base</h1>
          <span className="text-white gap-2 flex">
            <AtIcon style={styleConst} name="home" size="72px" />
            <AtIcon style={styleConst} name="profile" size="72px" />
            <AtIcon style={styleConst} name="id" size="72px" />
            <AtIcon style={styleConst} name="password" size="72px" />
            <AtIcon style={styleConst} name="login" size="72px" />
            <AtIcon style={styleConst} name="logout" size="72px" />
            <AtIcon style={styleConst} name="file" size="72px" />
            <AtIcon style={styleConst} name="email" size="72px" />
            <AtIcon style={styleConst} name="return" size="72px" />
          </span>
          <h1 className="text-white">Mudança</h1>
          <span className="text-white gap-2 flex">
            <AtIcon style={styleConst} name="arrowLeft" size="72px" />
            <AtIcon style={styleConst} name="arrowRight" size="72px" />
            <AtIcon style={styleConst} name="confirm" size="72px" />
            <AtIcon style={styleConst} name="cancel" size="72px" />
            <AtIcon style={styleConst} name="search" size="72px" />
            <AtIcon style={styleConst} name="filter" size="72px" />
            <AtIcon style={styleConst} name="language" size="72px" />
            <AtIcon style={styleConst} name="brightness" size="72px" />
            <AtIcon style={styleConst} name="darkness" size="72px" />
            <AtIcon style={styleConst} name="close" size="72px" />
            <AtIcon style={styleConst} name="open" size="72px" />
            <AtIcon style={styleConst} name="upload" size="72px" />
          </span>
          <h1 className="text-white">Estrutura</h1>
          <span className="text-white gap-2 flex">
            <AtIcon style={styleConst} name="setting" size="72px" />
            <AtIcon style={styleConst} name="menu" size="72px" />
            <AtIcon style={styleConst} name="list" size="72px" />
            <AtIcon style={styleConst} name="grid" size="72px" />
          </span>
          <h1 className="text-white">Crud</h1>
          <span className="text-white gap-2 flex">
            <AtIcon style={styleConst} name="add" size="72px" />
            <AtIcon style={styleConst} name="less" size="72px" />
            <AtIcon style={styleConst} name="view" size="72px" />
            <AtIcon style={styleConst} name="edit" size="72px" />
            <AtIcon style={styleConst} name="erase" size="72px" />
          </span>
          <h1 className="text-white">Venda</h1>
          <span className="text-white gap-2 flex">
            <AtIcon style={styleConst} name="shop" size="72px" />
            <AtIcon style={styleConst} name="money" size="72px" />
            <AtIcon style={styleConst} name="card" size="72px" />
            <AtIcon style={styleConst} name="wallet" size="72px" />
            <AtIcon style={styleConst} name="tag" size="72px" />
            <AtIcon style={styleConst} name="product" size="72px" />
          </span>
          <h1 className="text-white">Extra</h1>
          <span className="text-white gap-2 flex">
            <AtIcon style={styleConst} name="chart" size="72px" />
            <AtIcon style={styleConst} name="share" size="72px" />
            <AtIcon style={styleConst} name="qr" size="72px" />
            <AtIcon style={styleConst} name="quote" size="72px" />
            <AtIcon style={styleConst} name="alert" size="72px" />
            <AtIcon style={styleConst} name="warning" size="72px" />
            <AtIcon style={styleConst} name="send" size="72px" />
            <AtIcon style={styleConst} name="star" size="72px" />
            <AtIcon style={styleConst} name="heart" size="72px" />
            <AtIcon style={styleConst} name="like" size="72px" />
            <AtIcon style={styleConst} name="dislike" size="72px" />
          </span>
          <h1 className="text-white">Extra2</h1>
          <span className="text-white gap-2 flex">
            <AtIcon style={styleConst} name="calc" size="72px" />
            <AtIcon style={styleConst} name="annex" size="72px" />
            <AtIcon style={styleConst} name="calendar" size="72px" />
            <AtIcon style={styleConst} name="photo" size="72px" />
            <AtIcon style={styleConst} name="image" size="72px" />
            <AtIcon style={styleConst} name="confetti" size="72px" />
            <AtIcon style={styleConst} name="receipt" size="72px" />
            <AtIcon style={styleConst} name="comment" size="72px" />
            <AtIcon iconType={"fa"} icon={"FaStar"} />
          </span>
        </>
      ) : undefined}
      <div
        className={[
          "flex justify-center items-center w-full h-[100vh] bg-cover bg-center bg-[url('",
          themeStyle.images.bg.url,
          "')]",
        ].join("")}
      >
        <Row className="w-full">
          {layout === "right" ? <Col></Col> : undefined}
          <Col
            className={
              "flex flex-col " +
              (layout === "center"
                ? "items-center justify-center"
                : layout === "left"
                ? "items-end justify-end"
                : "items-start justify-start")
            }
          >
            {/* <h1
              className={[
                "font-[" + themeStyle.text.main.font + "]",
                "text-" + themeStyle.text.main.color,
                "text-" + themeStyle.text.main.size,
                // styleShadow("text", "main", themeStyle.text.main.shadow),
              ].join(" ")}
            >
              {themeStyle.texts.title.split("|")[0] === "l"
                ? themeStyle.texts.title.split("|")[1]
                : translations(themeStyle.texts.title, language)}
            </h1> */}
            <AtText
              type="title"
              sentence={themeStyle.texts.title}
              css={[css[0], "capitalize"].join(" ")}
            />
            <AtText type="subtitle" sentence={themeStyle.texts.subtitle} />
            {/* <h6
              className={[
                "font-[" + themeStyle.text.secondary.font + "]",
                "text-" + themeStyle.text.secondary.color,
                "text-" + themeStyle.text.secondary.size,
                // styleShadow(
                //   "text",
                //   "secondary",
                //   themeStyle.text.secondary.shadow
                // ),
              ].join(" ")}
            >
              {themeStyle.texts.subtitle.split("|")[0] === "l"
                ? themeStyle.texts.subtitle.split("|")[1]
                : translations(themeStyle.texts.subtitle, language)}
            </h6> */}
            <div>
              {false ? (
                themeStyle.texts.links.map((e, i) => {
                  if (e.split("|")[0] === "lmb" || e.split("|")[0] === "mb")
                    return (
                      <div key={i}>
                        <AtButton sentence={"l|:" + e} />
                      </div>
                      // <Button
                      //   key={i}
                      //   className={styleRadius(
                      //     "button",
                      //     themeStyle.button.main.radius,
                      //     "main"
                      //   )}
                      // >
                      //   <span
                      //     className={[
                      //       "font-[" + themeStyle.text.base.font + "]",
                      //       "text-" + themeStyle.text.base.color,
                      //       " text-" + themeStyle.text.base.size,
                      //       // styleShadow(
                      //       //   "text",
                      //       //   "base",
                      //       //   themeStyle.text.base.shadow
                      //       // ),
                      //     ].join(" ")}
                      //   >
                      //     {e.split("|")[0] === "lmb"
                      //       ? e.split("|")[1]
                      //       : translations(e.split("|")[1], language)}
                      //   </span>
                      // </Button>
                    );
                })
              ) : (
                <></>
              )}
              {/* <Button
                className={getBorder("button", "main", themeStyle.button.main.border)}
                variant={"dark"}
              >
                <span
                  className={
                    "font-[" +
                    themeStyle.text.base.font +
                    "] text-" +
                    themeStyle.text.base.color +
                    " text-" +
                    themeStyle.text.base.size +
                    " " +
                    getShadow(themeStyle.text.base.shadow)
                  }
                >
                  Mendes
                </span>
              </Button>
              <Button
                className={getBorder("button", "main", themeStyle.button.main.border)}
              >
                <span
                  className={
                    "font-[" +
                    themeStyle.text.base.font +
                    "] text-" +
                    themeStyle.text.base.color +
                    " text-" +
                    themeStyle.text.base.size +
                    " " +
                    getShadow(themeStyle.text.base.shadow)
                  }
                >
                  Ribeiro
                </span>
              </Button> */}
            </div>
          </Col>
          {layout === "left" ? <Col></Col> : undefined}
        </Row>
      </div>
    </>
  );
}

export default SecHead;
