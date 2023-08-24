import React, { useContext, useState } from "react";
// import {
//   useThemeStyle,
//   useThemeStyleUpdate,
// } from "../../context/themeStyleContext";
import { Button, Form } from "react-bootstrap";
import { ThemeStyleContext } from "../../context/themeStyleContext";

function PgInfo() {
  // const themeStyle = useThemeStyle();
  // const toggleThemeStyle: any = useThemeStyleUpdate();
  const [themeStyle, setThemeStyle] = useContext(ThemeStyleContext);

  const [animation, setAnimation] = useState("");

  function styleRadius(type, border) {
    const values = {
      button: {
        none: "!rounded-none",
        full: "!rounded-full",
        diagonal:
          "!rounded-tl-3xl !rounded-tr-md !rounded-br-3xl !rounded-bl-md",
        sm: "!rounded-sm",
        lg: "!rounded-2xl",
      },
    };
    return values[type][border];
  }

  return (
    <>
      {false ? (
        <>
          <div>
            {themeStyle.text.main.font}
            {/* <h3 className="font-['Bigshot_One']">A</h3> */}
            <Button
              className={styleRadius("button", themeStyle.button.main.radius)}
            >
              Mendes
            </Button>
            <Button
              className={styleRadius("button", themeStyle.button.main.radius)}
            >
              Ribeiro
            </Button>
            <div className="w-[3rem] h-[3rem] bg-pink-500 rounded-full">
              border: none, full, diagonal, sm, lg | icon: fill, line
            </div>
            <h3 className="text-sky-400">Mendes</h3>
            <h1
              className={
                "font-[" +
                themeStyle.text.main.font +
                "] text-" +
                themeStyle.text.base.color +
                " "
              }
            >
              Anderson
            </h1>
            {themeStyle.text.secondary.color}
            {/* <div
                        className={
                          "w-[30px] h-[30px] bg-gradient-to-t from-amber-400 to-amber-600 border-b-2 border-l-2 rounded-full m-2 active:brightness-110 " /* border-gradient-to-t from-pink-600 to-pink-400 / +
                          (color === "yellow"
                            ? "outline outline-2 outline-offset-[3px] outline-amber-100"
                            : "")
                        }
                        onClick={() => {
                          color === "yellow"
                            ? setColor("")
                            : setColor("yellow");
                        }}
                      ></div>
                      <div
                        className={
                          "w-[30px] h-[30px] bg-gradient-to-t from-lime-600 to-lime-400 border-b-4 border-b-white rounded-full m-2 active:brightness-110 " /* border-l-2 / +
                          (color === "green"
                            ? "outline outline-2 outline-offset-[3px] outline-lime-100"
                            : "")
                        }
                        onClick={() => {
                          color === "green" ? setColor("") : setColor("green");
                        }}
                      ></div>
                      <div
                        className={
                          "w-[30px] h-[30px] bg-slate-400 border-b-2 border-l-2 rounded-full m-2 active:brightness-110 " +
                          (color === "gray"
                            ? "outline outline-2 outline-offset-[3px] outline-slate-100"
                            : "")
                        }
                        onClick={() => {
                          color === "gray" ? setColor("") : setColor("gray");
                        }}
                      ></div> */}
            <h2 className="font-[Cormorant]">
              <span
                className="inline-block scale-y-[-1] scale-x-[-1]"
                style={{ filter: "fliph" }}
              >
                V
              </span>
              TL
              <span
                className="inline-block scale-y-[-1] scale-x-[-1]"
                style={{ filter: "fliph" }}
              >
                V
              </span>
              TICO
            </h2>
            Variables users token cart favorites comments | Const advertisers
            products types - cards, addresses translations | intro Head - Navbar
            Page Footer | base Modal Offcanvas Page - PageLayout | essential
            Contact About | comp Block Board Navbar Logo - Block List - Block
            Nav - Block Paragraph Grid Gallery Filter Divisor Container
            https://images.unsplash.com/photo-1592878858320-cec76c56da82?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80
          </div>
          <div>
            fonts: fonts - colors - sizes - shadowns
            <h1></h1>
            <h3></h3>
            <h6></h6>
            <h6></h6>
            colors: main<div></div>
            secondary<div></div>
            bg<div></div>
            detail<div></div>
            special<div></div>
            button | colors - sizes - shadowns <div></div>
            form<div></div>
            sizes: mainIcon | sizes - shadowns<div></div>
            secondaryIcon | sizes - shadowns<div></div>
            mainComponent<div></div>
            secondaryComponent<div></div>
            specialComponent<div></div>
            modal | sizes - shadown<div></div>
            form | sizes - shadows<div></div>
            block | shadows <div></div>
          </div>
        </>
      ) : undefined}
      <div
        className={[
          "w-[50px] h-[50px] rounded-full bg-lime-500",
          animation,
        ].join(" ")}
      ></div>
      <div className="flex justify-center">
        <Button onClick={() => setAnimation("fade-in")}>fade-in</Button>
        <Button onClick={() => setAnimation("fade-in-top")}>fade-in-top</Button>
        <Button onClick={() => setAnimation("fade-in-bottom")}>
          fade-in-bottom
        </Button>
        <Button onClick={() => setAnimation("flicker-in-1")}>
          flicker-in-1
        </Button>
        <Button onClick={() => setAnimation("swing-in-right-bck")}>
          swing-in-right-bck
        </Button>
        <Button onClick={() => setAnimation("swing-in-left-bck")}>
          swing-in-left-bck
        </Button>
        <Button onClick={() => setAnimation("bounce-in-fwd")}>
          bounce-in-fwd
        </Button>
        <Button onClick={() => setAnimation("slide-in-bck-center")}>
          slide-in-bck-center
        </Button>
        <Button onClick={() => setAnimation("slide-in-fwd-center")}>
          slide-in-fwd-center
        </Button>
        <Button onClick={() => setAnimation("slit-in-horizontal")}>
          slit-in-horizontal
        </Button>
        <Button onClick={() => setAnimation("flip-in-ver-right")}>
          flip-in-ver-right
        </Button>
        <Button onClick={() => setAnimation("rotate-in-2-bck-cw")}>
          rotate-in-2-bck-cw
        </Button>
        <Button onClick={() => setAnimation("rotate-in-ver")}>
          rotate-in-ver
        </Button>
        <Button onClick={() => setAnimation("scale-in-hor-center")}>
          scale-in-hor-center
        </Button>
        <Button onClick={() => setAnimation("scale-in-ver-center")}>
          scale-in-ver-center
        </Button>
      </div>

      <Form.Select aria-label="Default select example">
        <option>Open this select menu</option>
        <option
          value={"fade-in"}
          onChange={(e) => setAnimation(e.currentTarget.value)}
        >
          fade-in
        </option>
        <option
          value={"fade-in-top"}
          onClick={(e) => setAnimation(e.currentTarget.value)}
        >
          fade-in-top
        </option>
        <option
          value={"fade-in-bottom"}
          onChange={(e) => setAnimation(e.currentTarget.value)}
        >
          fade-in-bottom
        </option>
      </Form.Select>
      {animation}
    </>
  );
}

export default PgInfo;
