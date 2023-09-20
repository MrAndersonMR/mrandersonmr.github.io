import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import {
  Badge,
  Button,
  Col,
  Container,
  Form,
  Nav,
  NavDropdown,
  Navbar,
  OverlayTrigger,
  Popover,
  Toast,
  ToastContainer,
  Tooltip,
} from "react-bootstrap";
import Icon from "../icon/icon";
import SecModal from "./secModal";
import SecOffcanvas from "./secOffcanvas";

import translations from "../../lib/translations";
// import { useLanguage, useLanguageUpdate } from "../../context/languageContext";
import { ThemeStyle, User } from "../../interfaces";
import SecProfile from "./secProfile";
import SecLayoutPage from "./secLayoutPage";
import Link from "next/link";
// import {
//   useThemeStyle,
//   useThemeStyleUpdate,
// } from "../../context/themeStyleContext";
import { useRouter } from "next/navigation";
import { LanguageContext } from "../../context/languageContext";
import { ThemeContext } from "../../context/themeContext";
import { ThemeStyleContext } from "../../context/themeStyleContext";
import AtIcon from "../atoms/atIcon";
import AtText from "../atoms/atText";
import AtButton from "../atoms/atButton";
import AtForm from "../atoms/atForm";
import AtImage from "../atoms/atImage";
import AtPopover from "../atoms/atPopover";
import AtOverlay from "../atoms/atOverlay";
import AtToast from "../atoms/atToast";

function SecNavbar({
  title = undefined,
  tLogo = undefined,
  type = undefined,
  iconsNames = undefined,
  iconsTypes = undefined,
  icons = undefined,
  tIcons = undefined,
  additional = [],
  actions = [],
  links = [],
  hrefs = [],
  bg = [],
  bgImg = undefined,
  sticky = false,
  fixed = undefined,
  collapse = false,
  expand = undefined,
  variant = undefined,
}: {
  title: string;
  tLogo?: any;
  type?: "icons";
  iconsNames?: string[];
  iconsTypes?: string[];
  icons?: string[];
  tIcons?: string[];
  additional?: string[];
  actions?: string[];
  links: any[];
  hrefs: any[];
  bg?: string[];
  bgImg?: string;
  sticky?: boolean;
  fixed?: "top" | "bottom";
  collapse?: boolean;
  expand?: "sm" | "md" | "lg" | "xl" | "xxl";
  variant?: string;
}) {
  // const themeStyle = useThemeStyle();
  // const toggleThemeStyle: any = useThemeStyleUpdate();
  const [themeStyle, setThemeStyle] = useContext(ThemeStyleContext);

  const [language, setLanguage] = useContext(LanguageContext);
  const [theme, setTheme] = useContext(ThemeContext);

  const [showModal, setShowModal] = useState(false);
  const [showTuto, setShowTuto] = useState(true);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [show, setShow] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [logged, setLogged] = useState(false);
  const [user, setUser] = useState<User>();
  const [showNavbar, setShowNavbar] = useState(true);
  const [showNavbarElements, setShowNavbarElements] = useState(false);

  const [brightness, setBrightness] = useState("light");

  // const language = useLanguage();
  // const toggleLanguage: any = useLanguageUpdate();

  useEffect(() => {
    JSON.parse(localStorage.getItem("users")).map((item: User) => {
      if (item.token !== "") setUser(item);
      console.log(item);
    });
  }, []);

  const router = useRouter();

  const handleClick = (e, path) => {
    if (path === "/profile") {
      router.push(path);
    }
  };

  useEffect(() => {
    const usersLocal = JSON.parse(localStorage.getItem("users"));
    if (usersLocal)
      usersLocal.map((e, i) => {
        if (themeStyle.themeName !== "augustinNutTheme") {
          if (e.token !== "" && e.token !== undefined) {
            setUser(e);
            setLogged(true);
          }
        } else {
          if (e.token !== "" && e.token !== undefined && e.type === "patient") {
            setUser(e);
            setLogged(true);
          }
        }
      });
  });

  const navBarImage = () => {
    // if (bgImg)
    // return (
    //   <AtImage src={themeStyle.images.navBar.url} fill={true} sizes="auto" />
    // );
    if (themeStyle.images.navbar.url)
      return (
        <div
          className={
            showNavbar
              ? "flex justify-center mt-[1rem] -mb-[6rem] z-10"
              : "flex justify-center my-[1rem]"
          }
        >
          <AtImage
            src={[themeStyle.images.navbar.url]}
            // fill={true}
            css={"!relative object-cover w-[250px] h-[250px]"}
            // sizes={"auto"}
            width={250}
            height={250}
            iLevel="navbar"
          />
        </div>
      );
    return undefined;
  };

  const navBarBaseIcons = () => {
    if (iconsNames)
      return (
        <div className="!w-full flex items-center justify-center">
          {iconsNames.map((e, i) =>
            e === "darkness" ? (
              <Col key={i} className={"flex items-center justify-center"}>
                <Nav.Link
                  onClick={() => {
                    if (theme === "light") setTheme("dark");
                    else setTheme("light");
                  }}
                >
                  <AtIcon
                    name={theme === "light" ? e : "brightness"}
                    size="32px"
                    css=""
                  />
                </Nav.Link>
              </Col>
            ) : e === "profile" ? (
              <Col key={i} className={"flex items-center justify-center"}>
                <Nav.Link
                  onClick={() =>
                    logged ? setShowProfileModal(true) : setShowOffcanvas(true)
                  }
                >
                  {" "}
                  {/*setShowOffcanvas(true)}>*/}
                  <AtIcon
                    name={logged ? "login" : "logout"}
                    size="32px"
                    css=""
                  />
                </Nav.Link>
              </Col>
            ) : e === "language" ? (
              <Col key={i} className={"flex items-center justify-center"}>
                <AtIcon name={e} size="32px" css="" />
              </Col>
            ) : (
              <Col key={i} className={"flex items-center justify-center"}>
                <Nav.Link onClick={() => alert("Anderson")}>
                  <AtIcon name={e} size="32px" css="" />
                </Nav.Link>
              </Col>
            )
          )}
        </div>
      );
    if (iconsTypes)
      return (
        <div className="!w-full flex items-center justify-center">
          {iconsTypes.map((_, i) => {
            return (
              <Col
                key={i}
                className={
                  "flex items-center justify-center " +
                  (tIcons ? "flex-col " : " ") +
                  (variant === "dark" ? "text-white" : "")
                }
              >
                {Icon(iconsTypes[i], icons[i], "32px")}
                {tIcons ? <h6>{tIcons[i]}</h6> : undefined}
              </Col>
            );
          })}
        </div>
      );
  };

  function checkPlace(elem) {
    let values = elem.split("|:");
    console.log(values);
    if (values[0] === "nb") return values[1];
  }

  function checkType(elem, type) {
    return typeof elem === type;
  }

  const generateLinks = () => {
    return (
      <Nav
        className={["me-auto flex items-center", !showNavbar ? "" : ""].join(
          " "
        )}
      >
        {themeStyle.texts.links.length > 0
          ? themeStyle.texts.links.map((e: any, i: number) => {
              return checkType(e, "string") ? (
                checkPlace(e) ? (
                  <Nav.Link key={i} href={hrefs[i]}>
                    <AtText sentence={checkPlace(e)} />
                  </Nav.Link>
                ) : (
                  <></>
                )
              ) : checkPlace(e[0]) ? (
                <NavDropdown
                  key={i}
                  title={translations(checkPlace(e[0]), language)}
                  className={[
                    "text-[1.25rem]",
                    ["font-[", themeStyle.text.base.font, "]"].join(""),
                    ["text-", themeStyle.text.main.size].join(""),
                  ].join(" ")}
                  id="collasible-nav-dropdown"
                >
                  <div
                    className={[
                      theme === "dark" ? "!bg-slate-700" : "!bg-white",
                      "rounded-lg p-2",
                    ].join(" ")}
                  >
                    {e.map((f: string, j: number) => {
                      if (j !== 0)
                        return (
                          <NavDropdown.Item
                            key={j}
                            href={hrefs[i][j]}
                            className={
                              theme === "dark" ? "hover:!bg-pink-500" : ""
                            }
                          >
                            <AtText sentence={f} />
                          </NavDropdown.Item>
                        );
                    })}
                  </div>
                </NavDropdown>
              ) : undefined;
            })
          : undefined}
      </Nav>
    );
  };

  const generateAccount = () => {
    return (
      <div className="!flex !items-center">
        <AtOverlay
          type={"trigger"}
          shower={"popover"}
          placement={fixed === "bottom" ? "top" : "bottom"}
          show={showProfile}
          content={
            <div className="flex flex-col">
              <AtButton
                level="secondary"
                sentence="myProfile"
                css="mb-2"
                click={() => setShowProfileModal(true)}
              />
              <AtButton
                level="secondary"
                sentence="logout"
                click={() => {
                  let userList = localStorage.getItem("users");
                  let userListArray = JSON.parse(userList);
                  userListArray.map((e, i) => {
                    if (e.token !== "" && e.token !== undefined) {
                      e.token = "";
                      setUser(null);
                    }
                  });
                  setLogged(false);
                  localStorage.setItem("users", JSON.stringify(userListArray));
                }}
              />
            </div>
          }
          rootClose={true}
        >
          <Nav.Link onClick={() => setShowProfile(!showProfile)}>
            <div
              className="w-[20px] overflow-hidden relative"
              style={{ height: "20px" }}
            >
              <AtImage
                src={
                  user && user.image
                    ? [user.image]
                    : [themeStyle.images.defaultProfile.url]
                }
                fill={true}
                sizes="auto"
                css={[
                  "object-cover",
                  themeStyle.images.defaultProfile.animation,
                ].join(" ")}
              />
            </div>
          </Nav.Link>
        </AtOverlay>
        {/* <OverlayTrigger
            placement={fixed === "bottom" ? "top" : "bottom"}
            show={showProfile}
            overlay={
              <Tooltip id={`tooltip-`}>
                <div className="flex flex-col items-center">
                  <Button
                    className="!bg-transparent !py-[.125rem] capitalize mb-2"
                    size="sm"
                    onClick={() => setShowProfileModal(true)}
                    // {(e) => handleClick(e, "/profile")}
                  >
                    {translations("myProfile", language)}
                  </Button>
                  <Button
                    onClick={() => {
                      let userList = localStorage.getItem("users");
                      let userListArray = JSON.parse(userList);
                      userListArray.map((e, i) => {
                        if (e.token !== "" && e.token !== undefined) {
                          e.token = "";
                          setUser(null);
                        }
                      });
                      setLogged(false);
                      localStorage.setItem(
                        "users",
                        JSON.stringify(userListArray)
                      );
                    }}
                    className="!bg-transparent !py-[.125rem] capitalize"
                    size="sm"
                  >
                    {translations("logout", language)}
                  </Button>
                </div>
              </Tooltip>
            }
          >
            <Nav.Link onClick={() => setShowProfile(!showProfile)}>
              <div
                className="w-[20px] overflow-hidden relative"
                style={{ height: "20px" }}
              >
                <AtImage
                  src={
                    user && user.image
                      ? user.image
                      : themeStyle.images.defaultProfile.url
                  }
                  fill={true}
                  sizes="auto"
                  css={[
                    "object-cover",
                    themeStyle.images.defaultProfile.animation,
                  ].join(" ")}
                />
                {/* <Image
                  src={
                    user && user.image
                      ? user.image
                      : themeStyle.images.defaultProfile.url
                  }
                  fill
                  sizes="auto"
                  className={[
                    "object-cover",
                    // styleRadius(
                    //   "button",
                    //   "secondary",
                    //   themeStyle.button.secondary.radius
                    // ),
                    themeStyle.button.secondary.animation,
                  ].join(" ")}
                  alt=""
                /> /}
              </div>
            </Nav.Link>
          </OverlayTrigger> */}
        <Link
          className={[
            "!mb-0 text-decoration-none",
            variant === "light" ? "" : "text-white",
            "flex capitalize",
          ].join(" ")}
          href=""
        >
          <AtText sentence={"hello"} />
          <AtText sentence={"l|:, "} /> &nbsp;
          <AtText sentence={"l|:" + user.name} />
          <AtText sentence={"l|:!"} />
          {/* <span className="capitalize">
              {translations("", language)}
            </span>
            , {user.name}! */}
        </Link>
      </div>
    );
  };

  const countCart = () => {
    return (
      <Badge
        pill
        bg="danger"
        className={"absolute top-0 ml-2 !rounded-full !py-1 !px-[.4rem]"}
      >
        {/* <div className="w-[3px] h-[3px]"></div> */}
        {/* {JSON.stringify( */}
        {user && user.token ? (
          <AtText
            type="legend"
            css="!text-[.5rem]"
            sentence={"l|:" + user.cartList.length.toString()}
          />
        ) : undefined}
        {/* )} */}
      </Badge>
    );
  };

  const popover = false ? (
    <>
      <Popover id="popover-basic" className="rounded-0 border-0">
        {/* <Popover.Header as="h3">Popover right</Popover.Header>
      <Popover.Body>
        And heres some <strong>amazing</strong> content. Its very engaging.
        right?
      </Popover.Body> */}
        <AtButton
          // size={"sm"}
          level="secondary"
          sentence="l|:EN"
          click={() => setLanguage("en")}
          // className="!bg-transparent !py-[.125rem] mb-2"
        />
        <Button
          size={"sm"}
          onClick={() => setLanguage("es")}
          className="!bg-transparent !py-[.125rem] mb-2"
        >
          ES
        </Button>
        <Button
          size={"sm"}
          onClick={() => setLanguage("pt")}
          className="!bg-transparent !py-[.125rem]"
        >
          PT
        </Button>
      </Popover>
    </>
  ) : (
    // <AtPopover
    //   content={
    //     <AtButton
    //       level="secondary"
    //       sentence="l|:EN"
    //       click={() => setLanguage("en")}
    //     />
    //   }
    // />
    <>Anderson</>
  );

  // function popover2() {
  //   return <AtPopover content="Anderson" />;
  // }

  const generateAdditionalButtons = (item, key) => {
    const buttons = {
      // search: (
      //   <div key={key} className="flex items-center">
      //     {/* <Form className="d-flex" data-bs-theme="dark">
      //       <Form.Control
      //         type="search"
      //         placeholder={translations("search", language)}
      //         className="me-2 bg-transparent !border-t-0 !border-r-0 !border-l-0 !border-b-2 !rounded-none !border-neutral-400 !border-opacity-50 focus:!border-white"
      //         aria-label="Search"
      //       />
      //     </Form> */}
      //     <AtForm level="secondary" placeholder="search" />
      //     <Nav.Link href="#deets">
      //       {/* {Icon("ri", "RiSearchLine")} */}
      //       <AtIcon name="search" />
      //     </Nav.Link>
      //   </div>
      // ),
      language: (
        // <OverlayTrigger
        //   key={key}
        //   placement={fixed === "bottom" ? "top" : "bottom"}
        //   show={show}
        //   overlay={
        //     <Tooltip id={`tooltip-`}>
        //       <Button
        //         size={"sm"}
        //         onClick={() => setLanguage("en")}
        //         className="!bg-transparent !py-[.125rem] mb-2"
        //       >
        //         EN
        //       </Button>
        //       <br />
        //       <Button
        //         size={"sm"}
        //         onClick={() => setLanguage("es")}
        //         className="!bg-transparent !py-[.125rem] mb-2"
        //       >
        //         ES
        //       </Button>
        //       <br />
        //       <Button
        //         size={"sm"}
        //         onClick={() => setLanguage("pt")}
        //         className="!bg-transparent !py-[.125rem]"
        //       >
        //         PT
        //       </Button>
        //     </Tooltip>
        //   }
        // >
        //   <Nav.Link onClick={() => setShow(!show)}>
        //     {/* {Icon("ri", "RiTranslate")} */}
        //     <div className="flex flex-col items-center">
        //       <AtIcon name="language" />
        //       <AtText type="legend" sentence={"l|:" + language} />
        //     </div>
        //   </Nav.Link>
        // </OverlayTrigger>
        // <OverlayTrigger
        //   trigger="hover"
        //   placement="bottom"
        //   overlay={
        //     // <AtPopover content={"Anderson"} />
        //     <div>l|:Anderson</div>
        //   }
        //   rootClose
        // >
        //   <Nav.Link>
        //     {/* onClick={() => setShow(!show)} */}
        //     <div className="flex flex-col items-center">
        //       <AtIcon name="language" />
        //       <AtText type="legend" sentence={"l|:" + language} />
        //     </div>
        //   </Nav.Link>
        // </OverlayTrigger>
        <AtOverlay
          type={"trigger"}
          shower={"popover"}
          placement={fixed === "bottom" ? "top" : "bottom"}
          // title={<AtText sentence="l|:Anderson" />}
          content={
            <>
              <AtButton
                size="sm"
                level="secondary"
                sentence="l|:en"
                click={() => setLanguage("en")}
                css="mr-2"
                // className="!bg-transparent !py-[.125rem] mb-2"
              />
              <AtButton
                size="sm"
                level="secondary"
                sentence="l|:es"
                click={() => setLanguage("es")}
                css="mr-2"
                // className="!bg-transparent !py-[.125rem] mb-2"
              />
              <AtButton
                size="sm"
                level="secondary"
                sentence="l|:pt"
                click={() => setLanguage("pt")}
                // className="!bg-transparent !py-[.125rem] mb-2"
              />
            </>
          }
          rootClose={true}
        >
          <Nav.Link>
            <div className="flex flex-col items-center">
              <AtIcon name="language" />
              <AtText type="legend" sentence={"l|:" + language} />
            </div>
          </Nav.Link>
        </AtOverlay>
      ),
      shop: (
        <Nav.Link
          key={key}
          className="relative block"
          onClick={() => {
            user ? setShowModal(true) : undefined;
          }}
        >
          {/* {Icon("ri", "RiHandbagLine")} */}
          <AtIcon name="shop" />
          {countCart()}
        </Nav.Link>
      ),
      account: logged ? (
        <></>
      ) : (
        <Nav.Link key={key} onClick={() => setShowOffcanvas(true)}>
          {/* {Icon("ri", "RiUser5Line")} */}
          <AtIcon name="profile" />
        </Nav.Link>
      ),
      brightness: (
        <Nav.Link
          key={key}
          onClick={() => {
            if (theme === "light") setTheme("dark");
            else setTheme("light");
          }}
        >
          <AtIcon name={theme === "light" ? "darkness" : "brightness"} />
          {/* {theme === "light"
            ? Icon("md", "MdOutlineBrightnessMedium")
            : Icon("md", "MdOutlineBrightness2")} */}
        </Nav.Link>
      ),
    };
    return buttons[item];
  };

  const navBarDefault = () => {
    if (!iconsTypes && !iconsNames)
      return (
        <Container
          className={[
            !showNavbar ? "flex flex-col" : "",
            themeStyle.themeName === "trebol4hojas"
              ? "flex flex-col items-start"
              : "",
          ].join(" ")}
        >
          {tLogo ? tLogo : <Navbar.Brand href="#home">{title}</Navbar.Brand>}
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          {!showNavbar ? (
            <AtButton
              level="secondary"
              iconName="menu"
              css="mt-3 bg-transparent !border-transparent"
              //border-white !border-t-0 !border-r-0 !border-l-2 !border-b-4
              click={() => setShowNavbarElements(!showNavbarElements)}
            />
          ) : undefined}
          {showNavbar || showNavbarElements ? generateLinks() : undefined}
          {/* {(showNavbar || showNavbarElements) &&
          additional.includes("search") ? (
            <Form className="d-flex" data-bs-theme="dark">
              <Form.Control
                type="search"
                placeholder={translations("search", language)}
                className="me-2 bg-transparent !border-t-0 !border-r-0 !border-l-0 !border-b-2 !rounded-none !border-neutral-400 !border-opacity-50 focus:!border-white"
                aria-label="Search"
              />
            </Form>
          ) : undefined} */}
          <Nav
            className={[
              "flex items-center",
              !showNavbar ? "!flex-col w-[200px]" : "",
            ].join(" ")}
          >
            {additional.map((e, i) => {
              return (showNavbar || showNavbarElements) && e === "search" ? (
                <div key={i} className="flex items-center">
                  {/* <Form className="d-flex" data-bs-theme="dark">
                  <Form.Control
                    type="search"
                    placeholder={translations("search", language)}
                    className="me-2 bg-transparent !border-t-0 !border-r-0 !border-l-0 !border-b-2 !rounded-none !border-neutral-400 !border-opacity-50 focus:!border-white"
                    aria-label="Search"
                  />
                </Form> */}
                  <AtForm level="secondary" placeholder="search" />
                  <Nav.Link href="#deets">
                    {/* {Icon("ri", "RiSearchLine")} */}
                    <AtIcon name="search" />
                  </Nav.Link>
                </div>
              ) : undefined;
            })}
          </Nav>
          <Nav
            className={[
              "flex items-center z-20",
              !showNavbar ? "justify-center w-[200px]" : "",
            ].join(" ")}
          >
            {additional.map((e, i) => {
              return showNavbar || showNavbarElements
                ? generateAdditionalButtons(e, i)
                : undefined;
            })}
          </Nav>
          <Nav
            className={[
              "flex items-center z-20",
              !showNavbar ? "!flex-col w-[200px]" : "",
            ].join(" ")}
          >
            {additional.map((e, i) => {
              return (showNavbar || showNavbarElements) &&
                e === "account" &&
                logged
                ? generateAccount()
                : undefined;
            })}
          </Nav>
        </Container>
      );
  };

  function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });

    useEffect(() => {
      // only execute all the code below in client side
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }

      // Add event listener
      window.addEventListener("resize", handleResize);

      // Call handler right away so state gets updated with initial window size
      handleResize();

      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
  }

  const size = useWindowSize();

  useEffect(() => {
    if (size.width > 1000) setShowNavbar(true);
    else setShowNavbar(false);
  }, [size]);

  return (
    <>
      {/* {logged.toString()} */}
      {/* {size.width} */}
      <div className="flex flex-col">
        {navBarImage()}
        {/* {themeStyle.texts.logo} */}
        <Navbar
          collapseOnSelect
          variant={variant}
          expand={expand}
          fixed={fixed}
          bg={bg[1] && theme !== "light" ? bg[1] : bg[0]}
          sticky={sticky ? "top" : undefined}
          className={
            themeStyle.themeName === "trebol4hojas" ? "!inline-table" : ""
          }
        >
          {navBarDefault()}
          {navBarBaseIcons()}
        </Navbar>
      </div>
      <SecModal
        userPr={user}
        show={showProfileModal}
        title={"myProfile"}
        setShow={setShowProfileModal}
        size="xl"
        closeButton="stylized"
        type={"profile"}
        carts={{ cartList: [] }}
      />
      <SecModal
        show={showModal}
        setShow={setShowModal}
        title="myCart"
        type={"cart"}
        carts={{ cartList: user ? user.cartList : [] }}
        closeButton="stylized"
      />
      <SecOffcanvas
        type="login"
        show={showOffcanvas}
        setShow={setShowOffcanvas}
        setUser={setUser}
      />
      {/* <ToastContainer
        className="p-3"
        position={"bottom-center"}
        style={{ zIndex: 9999 }}
      >
        <Toast
          show={showOffcanvas}
          // onClose={() => setShowOffcanvas(false)}
          bg="dark"
        >
          <Toast.Header closeButton={false}>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Agrega un nuevo usuario</strong>
            <small></small>
          </Toast.Header>
          <Toast.Body className="text-white">
            Los datos no tienen por qué ser reales, es sólo un ejemplo.
          </Toast.Body>
        </Toast>
      </ToastContainer> */}
      <AtToast
        defShow={showOffcanvas}
        defSetShow={setShowOffcanvas}
        position="bottom-center"
        closeButton={false}
        title="l|:Agrega un nuevo usuario"
        content="l|:Los datos no tienen por qué ser reales, es sólo un ejemplo."
      />
    </>
  );
}

export default SecNavbar;
