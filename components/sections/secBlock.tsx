import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  Badge,
  Button,
  ButtonGroup,
  Card,
  Col,
  Container,
  Form,
  Row,
  Table,
} from "react-bootstrap";
import Icon from "../icon/icon";
import Image from "next/image";
import SecModal from "./secModal";
import { CartItem, Comment, User } from "../../interfaces";
// import {
//   useThemeStyle,
//   useThemeStyleUpdate,
// } from "../../context/themeStyleContext";
// import { useLanguage, useLanguageUpdate } from "../../context/languageContext";
import translations from "../../lib/translations";
import { styleRadius, styleTheme } from "../config/stylesConfig";
import AtButton from "../atoms/atButton";
import AtImage from "../atoms/atImage";
import AtCard from "../atoms/atCard";
import AtTable from "../atoms/atTable";
import AtText from "../atoms/atText";
import AtForm from "../atoms/atForm";
import AtBadge from "../atoms/atBadge";
import { monetaryFormat } from "../config/formatConfig";
import { LanguageContext } from "../../context/languageContext";
import { ThemeStyleContext } from "../../context/themeStyleContext";
import AtPopover from "../atoms/atPopover";
import AtToast from "../atoms/atToast";

function SecBlock({
  type = undefined,
  title = undefined,
  subtitle = undefined,
  paragraph = undefined,
  iconType = undefined,
  icon = undefined,
  layout = undefined,
  item = undefined,
  setCartPR = undefined,
  list = undefined,
  setList = undefined,
}: {
  type?: string;
  title?: string;
  subtitle?: string;
  paragraph?: string;
  iconType?: string;
  icon?: string;
  layout?: string;
  item?: any;
  setCartPR?: any;
  list?: any[];
  setList?: any;
}) {
  const [quantity, setQuantity] = useState(item ? item.count : 1);
  const [menu, setMenu] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const [showNoTokenModal, setShowNoTokenModal] = useState(false);
  const [showCommentForm, setShowCommentForm] = useState(false);
  // const [color, setColor] = useState("");
  // const [size, setSize] = useState("");
  const [star, setStar] = useState(0);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState<Comment[]>([]);
  const [user, setUser] = useState<User>();
  const [userCart, setUserCart] = useState<CartItem[]>();
  const [showCartModal, setShowCartModal] = useState(false);
  const [render, setRender] = useState(false);

  const [badgeIcon, setBadgeIcon] = useState("RiHeart2Line");

  // const themeStyle = useThemeStyle();
  // const toggleThemeStyle: any = useThemeStyleUpdate();
  const [themeStyle, setThemeStyle] = useContext(ThemeStyleContext);

  // const language = useLanguage();
  // const toggleLanguage = useLanguageUpdate();
  const [language, setLanguage] = useContext(LanguageContext);

  const [showToast, setShowToast] = useState(false);

  // const images = [
  //   "https://images.unsplash.com/photo-1592878858320-cec76c56da82?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80",
  //   "https://images.unsplash.com/photo-1592878956815-2feeac767f7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80",
  //   "https://images.unsplash.com/photo-1472591651607-70e2d88ae3c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80",
  // ];
  let images: string[] = item ? item.urls : [];
  const [image, setImage] = useState(images[0]);

  const colorTarget = useRef(null);

  const memoizedHandleClick = useCallback(
    () => {
      console.log("Click happened");
    },
    [] // Tells React to memoize regardless of arguments.
  );

  useEffect(() => {
    // if (setList) setList(user.cartList);
  }, [user]);

  // const [cart, setCart] = useState({
  //   cartList: [] as CartItem[],
  // });

  // useEffect(() => {
  //   const local = JSON.parse(localStorage.getItem("cart"));
  //   if (local) setCart(local);
  // }, []);

  const updateCart = () => {
    if (verifyLogged()) {
      let usersAX = localStorage.getItem("users");
      let usersListAX = JSON.parse(usersAX);
      // let userAX;

      usersListAX.map((e, i) => {
        if (e.id === user.id) {
          // userAX = e;
          e.cartList.push({
            id: user.cartList.length.toString(),
            product: item,
            status: "processing",
            count: 1,
          });
          // alert(JSON.stringify(e));
          setUserCart(e.cartList);
        }
        setUser(e);
      });

      // if (userAX)
      //   userAX.cartList.push({
      //     id: user.cartList.length.toString(),
      //     product: item,
      //     status: "processing",
      //     count: 1,
      //   });

      // usersListAX.filter((i) => i.id === user.id)

      localStorage.setItem("users", JSON.stringify(usersListAX));
      setShowCartModal(true);
      // let cartAX: { cartList: CartItem[] } =
      //   cart !== undefined
      //     ? cart
      //     : {
      //         cartList: [] as CartItem[],
      //       };
      // cartAX.cartList.push({
      //   id: cartAX.cartList.length.toString(),
      //   product: item,
      //   status: "processing",
      //   count: 1,
      // });
      // setCart(cartAX);
      // localStorage.setItem("cart", JSON.stringify(cartAX));
      // setRender(!render);
      // setShowCartModal(true);
    }
  };

  function verifyLogged() {
    let check = false;
    JSON.parse(localStorage.getItem("users")).map((e, i) => {
      if (e.token !== "" && e.token !== undefined) {
        check = true;
        setUser(e);
      }
    });

    if (!check) {
      setShowNoTokenModal(true);
    } else {
      setShowCommentForm(true);
    }
    return check;
  }

  useEffect(() => {
    const local = JSON.parse(localStorage.getItem("comments"));
    if (local) setComments(local);
    setComments(local);
    const userLocal = JSON.parse(localStorage.getItem("users"));
    userLocal.map((e, i) => {
      if (e.token !== "" && e.token !== undefined) {
        setUser(e);
        setUserCart(e.cartList);
      }
    });
  });

  useEffect(() => {
    if (user && user.fav && item)
      user.fav.map((e) => {
        if (e === item.id) setBadgeIcon("RiHeart2Fill");
      });
  });

  const updateComments = () => {
    let commentsAX: Comment[] = item.comments !== null ? item.comments : [];
    commentsAX.push({
      user: user ? user.name : "",
      comment: comment,
      date: new Date().toISOString().split("T")[0],
    });
    item.comments = commentsAX;
    setRender(!render);
    setComments(commentsAX);
    let productsList = localStorage.getItem("products");
    let productsDTOList = JSON.parse(productsList);
    productsDTOList = productsDTOList.filter((e, i) => e.id !== item.id);
    console.log(productsDTOList);
    productsDTOList.push(item);
    localStorage.setItem("products", JSON.stringify(productsDTOList));
  };

  function removeCart(item: any) {
    // let cartAX =
    //   cart !== null
    //     ? cart
    //     : {
    //         cartList: [],
    //       };
    // cartAX.cartList.push({
    //   id: cartAX.cartList.length.toString(),
    //   product: item,
    //   status: "processing",
    //   count: 1,
    // });
    // setCart(cartAX);
    let userAX = user;
    let ArrayCart = userAX.cartList.filter((i) => i.product.id !== item.id);
    userAX.cartList = ArrayCart;
    setUser(userAX);
    setList(ArrayCart);
    // setRender(!render);
    let usersAX = localStorage.getItem("users");
    let usersListAX = JSON.parse(usersAX);
    usersListAX.map((e, i) => {
      if (e.id === user.id) {
        e.cartList = ArrayCart;
      }
    });

    localStorage.setItem("users", JSON.stringify(usersListAX));

    // let cartArrayAx = JSON.parse(cartAX);
    // let ArrayAx = cartArrayAx.cartList.filter((i) => i.product.id !== item.id);
    // // alert("AQUI" + JSON.stringify(ArrayAx.length));
    // // setCart({ cartList: ArrayAx });
    // localStorage.setItem("cart", JSON.stringify({ cartList: ArrayAx }));
    // setRender(!render);
    // setShowCartModal(true);
  }

  function generateScore(stars: number) {
    let score = (
      <>
        {Array.from(Array(5), (e, i) => {
          return (
            <div key={i}>
              {stars > i
                ? stars - i === 0.5
                  ? Icon("fa", "FaStarHalfAlt")
                  : Icon("fa", "FaStar")
                : Icon("fa", "FaRegStar")}
            </div>
          );
        })}
      </>
    );
    return score;
  }

  function listLocalStorage(variable: string) {
    let list = JSON.parse(localStorage.getItem(variable));
    return list;
  }

  function getLocalStorage(variable: string, id: string) {
    let element = JSON.parse(localStorage.getItem(variable)).filter((e) => {
      e.id === id;
    });
    return element;
  }

  function setLocalStorage(variable: string, list: any) {
    localStorage.setItem(variable, JSON.stringify(list));
  }

  function handleFav() {
    // badgeIcon === "RiHeart2Fill"
    //   ? setBadgeIcon("RiHeart2Line")
    //   : setBadgeIcon("RiHeart2Fill");

    // console.log(user);
    if (badgeIcon === "RiHeart2Line") {
      setBadgeIcon("RiHeart2Fill");

      let userScp = user;
      if (userScp.fav) userScp.fav.push(item.id);
      else {
        userScp.fav = [];
        userScp.fav.push(item.id);
      }
      setUser(userScp);

      let usersScp = listLocalStorage("users");
      if (usersScp.filter((e) => e.id === user.id)[0].fav !== undefined)
        usersScp.filter((e) => e.id === user.id)[0].fav.push(item.id);
      else {
        usersScp.filter((e) => e.id === user.id)[0].fav = [];
        usersScp.filter((e) => e.id === user.id)[0].fav.push(item.id);
      }
      setLocalStorage("users", usersScp);
    } else {
      setBadgeIcon("RiHeart2Line");

      let userScp = user;
      if (userScp.fav) userScp.fav = userScp.fav.filter((e) => e !== item.id);
      setUser(userScp);
      console.log(user);

      let usersScp = listLocalStorage("users");
      if (usersScp.filter((e) => e.id === user.id)[0].fav)
        usersScp.filter((e) => e.id === user.id)[0].fav = usersScp
          .filter((e) => e.id === user.id)[0]
          .fav.filter((e) => e !== item.id);
      setLocalStorage("users", usersScp);
    }
  }

  return (
    <>
      {type === "product" ? (
        <Card
          className="overflow-hidden"
          style={{ width: "18rem", height: "18rem" }}
        >
          {/* <Card.Img
          variant="top"
          src="https://images.unsplash.com/photo-1592878858320-cec76c56da82?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80"
        /> */}
          <Card.Body className="flex flex-col justify-between text-white bg-cover bg-[url('https://images.unsplash.com/photo-1592878858320-cec76c56da82?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80')]">
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the cards content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      ) : type === "productElem" ? (
        <div
          className={
            "flex justify-center pt-2 pb-4 !border-y-2 border-transparent hover:!" +
            styleTheme("border", ["slate-700", "white"]) +
            " !rounded-lg"
          }
        >
          <Card className="!flex w-[95%] bg-transparent !rounded-none border-0">
            <div
              className="flex items-center lg:flex-row flex-col"
              onClick={() => setMenu(!menu)}
            >
              <Card.Img
                variant="top"
                className={[
                  "m-4 !w-[9rem]",
                  // styleRadius("image", themeStyle.image.radius, undefined)
                  styleRadius("image", themeStyle.image.radius),
                ].join(" ")}
                src={item.urls[0]}
              />
              <Card.Body className="flex flex-col items-end justify-between">
                <div>
                  <Card.Title>
                    <AtText type="subtitle" sentence={"l|:" + item.name} />
                  </Card.Title>
                  <Card.Text>
                    <AtText type="legend" sentence={"l|:" + item.description} />
                  </Card.Text>
                  <AtText
                    type="text"
                    sentence={"l|:" + monetaryFormat(item.price)}
                  />
                </div>
              </Card.Body>
            </div>
            <div
              className={
                "flex justify-center border-t-2 " +
                styleTheme("border", ["slate-700", "white"]) +
                " mx-9 px-3 " +
                (menu ? "" : "hidden")
              }
            >
              {/* <Button
                className="bg-transparent !rounded-full !p-2 my-2 border-2 border-white rotate-[15deg]"
                onClick={() => {
                  removeCart(item); //alert(JSON.stringify(item));
                }}
              >
                {Icon("fa", "FaTrash", "16px")}
              </Button> */}
              <AtButton
                level="secondary"
                iconName="erase"
                css={
                  "bg-transparent border-2 !" +
                  styleTheme("border", ["slate-700", "white"]) +
                  " !" +
                  styleTheme("text", ["slate-700", "white"]) +
                  " rotate-[15deg] !p-2 my-2"
                }
                click={() => {
                  removeCart(item);
                }}
              />
            </div>
            <div className="flex justify-center my-2 gap-2">
              <AtText sentence="size" type="text" />
              <AtBadge sentence={"l|:" + item.size} />
              <AtText sentence="color" type="text" />
              <AtBadge sentence={"l|:" + item.color} />
            </div>
            <div className="flex justify-center">
              {/* <ButtonGroup aria-label="Basic example">
                <Button
                  variant="secondary"
                  className="!rounded-tl-3xl !rounded-bl-md !p-3"
                  onClick={() => {
                    if (quantity > 0) setQuantity(quantity - 1);
                  }}
                >
                  {Icon("bs", "BsDashLg", "18px")}
                </Button>
                <Form.Control
                  type="text"
                  placeholder="Input group example"
                  aria-label="Input group example"
                  aria-describedby="btnGroupAddon"
                  value={quantity}
                  className="!rounded-none min-w-[4rem] max-w-[6rem] border-0"
                />

                <Button
                  variant="secondary"
                  className="!rounded-tr-md !rounded-br-3xl !p-3"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  {Icon("bs", "BsPlusLg", "18px")}
                </Button>
              </ButtonGroup> */}
              <div className="flex items-center gap-2">
                {/* <AtButton
                  level="secondary"
                  iconName="less"
                  // iconType="bs"
                  // icon="BsDashLg"
                  click={() => {
                    if (quantity > 0) setQuantity(quantity - 1);
                  }}
                /> */}
                <AtForm level="secondary" value={quantity} />
                {/* <AtButton
                  level="secondary"
                  iconName="add"
                  // iconType="bs"
                  // icon="BsPlusLg"
                  click={() => setQuantity(quantity + 1)}
                /> */}
              </div>
            </div>
          </Card>
        </div>
      ) : type === "item" ? (
        <div
          className={
            "flex items-start " + (layout === "vertical" ? "flex-col" : "")
          }
        >
          <div className="my-2 p-3 rounded-tl-3xl rounded-tr-md rounded-bl-md rounded-br-3xl bg-lime-500">
            {Icon(iconType, icon, "36px")}
          </div>
          <div className={"" + (layout === "vertical" ? "" : "ml-3")}>
            <h2>{title}</h2>
            <h6>{paragraph}</h6>
          </div>
        </div>
      ) : type === "productShowcase" ? (
        <Card className="bg-transparent border-0" style={{ width: "16rem" }}>
          <div className="flex justify-center">
            <Card.Img
              variant="center"
              className={[
                "!h-[16rem] !self-center !object-cover",
                styleRadius("image", themeStyle.image.radius),
              ].join(" ")}
              src={item.urls[0]}
              onClick={() => {
                setShowModal(true);
              }}
            />
            <div className="absolute top-[10px] right-[10px]">
              {/* <Badge
              bg="danger"
              className="!rounded-tl-xl !rounded-tr-sm !rounded-bl-sm !rounded-br-xl"
            >
              New
            </Badge> */}
              <Badge
                bg="light"
                onClick={() => {
                  user ? handleFav() : setShowToast(true);
                }}
                className={[
                  "text-black !p-2 hover:!bg-red-300 hover:!text-white",
                  styleRadius(
                    "button",
                    themeStyle.button.secondary.radius,
                    "secondary"
                  ),
                ].join(" ")}
              >
                {Icon("ri", badgeIcon, "24px")}
              </Badge>
            </div>
          </div>
          <Card.Body className="flex items-center justify-between">
            <div className="pr-3">
              <Card.Text className="mb-0">
                <AtText type="legend" sentence={"l|:" + item.name} />
              </Card.Text>
              <Card.Title>
                <AtText
                  type="subtitle"
                  sentence={"l|:" + monetaryFormat(item.price)}
                />
              </Card.Title>
            </div>
            <AtButton
              // iconType="ri"
              // icon="RiEyeLine"
              iconName="view"
              iconSize="24px"
              variant="dark"
              click={() => {
                setShowModal(true);
              }}
            />
          </Card.Body>
        </Card>
      ) : type === "productShowcaseEdit" ? (
        <></>
      ) : type === "board" ? (
        <Col>
          <Card className="w-[90%] !rounded-tl-[3rem] !rounded-bl-md !rounded-tr-md !rounded-br-[3rem] !border-0">
            <div className="flex">
              <Card.Img
                variant="top"
                className="!w-[30%] !rounded-tl-[3rem] !rounded-bl-md !rounded-r-none"
                src="https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
              />
              <Card.Body className="flex flex-col items-start justify-center">
                <Card.Text>This</Card.Text>
                <Card.Title>
                  <h1>Card title</h1>
                </Card.Title>
                <Button>Go</Button>
              </Card.Body>
            </div>
          </Card>
        </Col>
      ) : type === "card" ? (
        <Col className="flex justify-center">
          <Card
            bg="dark"
            className="w-[90%] !rounded-tl-[3rem] !rounded-bl-md !rounded-tr-md !rounded-br-[3rem] !border-0 text-white"
          >
            <div className="flex">
              <Card.Img
                variant="top"
                className="!w-[33%] !rounded-tl-[3rem] !rounded-bl-md !rounded-r-none"
                src="https://images.unsplash.com/photo-1648161235864-00702f154f09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
              />
              <Card.Body className="flex items-end justify-end">
                <div className="flex flex-col items-end justify-end mr-3">
                  <Card.Text>
                    <AtText type="legend" sentence={"l|:VISA"} />
                  </Card.Text>
                  <Card.Text>
                    <AtText
                      type="subtitle"
                      sentence={"l|:" + (user && user.name ? user.name : "")}
                    />
                  </Card.Text>
                  <Card.Title className="tracking-widest">
                    <AtText
                      sentence={"l|:" + (user && user.card ? user.card : "")}
                    />
                  </Card.Title>
                </div>
                <div>
                  <Button className="p-1 !rounded-full">
                    {Icon("bs", "BsCreditCard2FrontFill", "24px")}
                  </Button>
                </div>
              </Card.Body>
            </div>
          </Card>
        </Col>
      ) : undefined}
      <SecModal
        show={showModal}
        setShow={setShowModal}
        size={"xl"}
        type="item"
        item={item}
        closeButton="stylized"
        carts={{ cartList: [] }}
      />
      <SecModal
        show={showCartModal}
        setShow={setShowCartModal}
        type="cart"
        carts={{ cartList: userCart }}
      />
      <SecModal
        show={showNoTokenModal}
        setShow={setShowNoTokenModal}
        type="token"
        carts={{ cartList: [] }}
      />
      <AtToast
        defShow={showToast}
        defSetShow={setShowToast}
        position="bottom-center"
        title="notLogged"
        content="pleaseDoLogin"
      />
    </>
  );
}

export default SecBlock;
