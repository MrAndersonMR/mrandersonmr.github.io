import React, { useContext, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { styleRadius } from "../config/stylesConfig";
// import { useThemeStyle } from "../../context/themeStyleContext";
// import { useLanguage } from "../../context/languageContext";
import translations from "../../lib/translations";
import Icon from "../icon/icon";
import AtButton from "./atButton";
import AtBadge from "./atBadge";
import SecBoard from "../sections/secBoard";
import { monetaryFormat } from "../config/formatConfig";
import { LanguageContext } from "../../context/languageContext";
import AtText from "./atText";
import AtIcon from "./atIcon";
import { ThemeStyleContext } from "../../context/themeStyleContext";

function AtCard({
  image = undefined,
  wImage = undefined,
  hImage = undefined,
  item = undefined,
  title = "blankSpace",
  text = "blankSpace",
  layout = [],
  additional = [],
  actions = [],
  clicks = [],
  // buttonsRef = [],
  tooltips = [],
  css = undefined,
}: {
  image?: string;
  wImage?: string;
  hImage?: string;
  item?: any;
  title?: string;
  text?: string;
  layout?: string[];
  additional?: string[];
  actions?: string[];
  clicks?: any[];
  // buttonsRef?: any[];
  tooltips?: any[];
  css?: string;
}) {
  const [size, setSize] = useState();
  const [color, setColor] = useState();

  const [themeStyle, setThemeStyle] = useContext(ThemeStyleContext);

  function cssFormat() {
    return [
      css,
      layout.includes("transparent") ? "bg-transparent border-0" : "",
    ].join(" ");
  }

  function cssBodyFormat() {
    return [
      "md:flex-row flex-col md:items-start items-center",
      layout.includes("horizontal") ? "flex" : "",
    ].join(" ");
  }

  function cssImageFormat() {
    return [
      "!object-cover",
      "!w-[" + wImage + "]",
      "!h-[" + hImage + "]",
      // styleRadius("image", themeStyle.image.radius, undefined),
    ].join(" ");
  }

  function bColorFormat(e) {
    return [
      "w-[30px] h-[30px] bg-gradient-to-t from-" +
        (e === "white"
          ? "slate-100 to-stone-600"
          : e === "black"
          ? "slate-900 to-stone-600"
          : e.toString() + "-400 to-" + e.toString() + "-600"),
      "active:brightness-110",
      styleRadius("button", themeStyle.button.secondary.radius, "secondary"),
      // styleRadius("button", "secondary", themeStyle.button.secondary.radius),
    ].join(" ");
    // ,
    // (color === e
    //   ? "outline outline-2 outline-offset-[3px] outline-" +
    //     e +
    //     "-200"
    //   : "")
  }

  // function labelFormat(sentence: string) {
  //   return sentence.split("|:")[0] === "l"
  //     ? sentence.split("|:")[1]
  //     : translations(title, language);
  // }

  function generateScore(stars: number) {
    let score = (
      <div className="flex gap-1">
        {Array.from(Array(5), (e, i) => {
          return (
            <div key={i}>
              {stars > i ? (
                stars - i > 0 && stars - i <= 0.5 ? (
                  <AtIcon iconType={"fa"} icon={"FaStarHalfAlt"} />
                ) : (
                  <AtIcon iconType={"fa"} icon={"FaStar"} />
                )
              ) : (
                <AtIcon iconType={"fa"} icon={"FaRegStar"} />
              )}
            </div>
          );
        })}
      </div>
    );
    return score;
  }

  return (
    <Card className={cssFormat()}>
      <div className={cssBodyFormat()}>
        {image ? (
          <>
            <Card.Img
              src={image}
              className={[
                cssImageFormat(),
                styleRadius("image", themeStyle.image.radius),
              ].join(" ")}
            />
            <div className="absolute top-[10px] left-[10px]">
              <AtBadge bg={"danger"} sentence={"new"} />
            </div>
          </>
        ) : undefined}
        <Card.Body>
          <Card.Title>
            {/* <h1>{labelFormat(title)}</h1> */}
            <AtText type="title" sentence={title} />
          </Card.Title>
          <div className="flex gap-3">
            {additional.includes("score") ? (
              <div className="flex items-center gap-2">
                {generateScore(item.score)}
                <AtText sentence={"l|:" + item.score.toFixed(2).toString()} />
                {/* <h6 className="mb-0 mx-2">{item.score}</h6> */}
              </div>
            ) : undefined}
            {additional.includes("comments") ? (
              <div className="flex items-center gap-2">
                {/* {Icon("fa", "FaRegCommentDots")} */}
                <AtIcon name="comment" />
                {/* <h6 className="mb-0 mx-2">{item.comments.length}</h6> */}
                <AtText sentence={"l|:" + item.comments.length.toString()} />
              </div>
            ) : undefined}
          </div>
          <div>
            {additional.includes("clothesFilter") ? (
              <div className="flex my-1 gap-2">
                {actions.map((action, i) => {
                  return action === "sizes" ? (
                    item.sizes.map((button) => {
                      return (
                        <div key={i}>
                          <AtButton
                            sentence={"l|:" + button}
                            css={
                              "uppercase " +
                              (size === button
                                ? "!bg-lime-400 !border-lime-400"
                                : "")
                            }
                            click={() => {
                              setSize(button);
                              clicks[i](button);
                            }}
                          />
                        </div>
                      );
                    })
                  ) : (
                    <></>
                  );
                })}
              </div>
            ) : undefined}
            {additional.includes("clothesFilter") ? (
              <div className="flex my-3 gap-3">
                {actions.map((action, i) => {
                  return action === "colors" ? (
                    item.colors.map((c) => {
                      return (
                        <div
                          key={i}
                          className={[
                            bColorFormat(c),
                            color === c
                              ? [
                                  "outline outline-2 outline-offset-[3px] outline-",
                                  c,
                                  "-200",
                                ].join("")
                              : "",
                          ].join(" ")}
                          onClick={() => {
                            setColor(c);
                            clicks[i](c);
                          }}
                        />
                      );
                    })
                  ) : (
                    <></>
                  );
                })}
              </div>
            ) : undefined}
          </div>
          <Card.Text>
            <AtText sentence={text} />
          </Card.Text>
          <div className="flex items-center gap-2">
            <AtText
              type="title"
              sentence={"l|:" + monetaryFormat(item.price)}
            />
            {actions.map((action, i) => {
              if (action === "buy")
                return (
                  <div key={i}>
                    <AtButton
                      iconName="shop"
                      tooltip={tooltips[i]}
                      // bref={buttonsRef[i]}
                      // iconType="ri"
                      // icon="RiShoppingCart2Line"
                      iconSize="24px"
                      click={clicks[i]}
                    />
                    {/* <Button ref={buttonsRef[i]}>Anderson</Button> */}
                  </div>
                );
            })}
          </div>
          {/* AQUI SECGRID */}
          <div className="my-3">
            <SecBoard
              type="sm"
              title="l|:Anderson"
              text="l|:Anderson"
              iconType="bs"
              icon="BsChevronDown"
              iconSize="36px"
            />
          </div>
        </Card.Body>
      </div>
    </Card>
  );
}

export default AtCard;
