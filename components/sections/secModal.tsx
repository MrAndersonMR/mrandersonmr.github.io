import React, { useContext, useEffect, useState } from "react";
import { Button, Col, Form, InputGroup, Modal, Row } from "react-bootstrap";
import Icon from "../icon/icon";
import SecBlock from "./secBlock";
import { CartItem, Product, Purchase, User } from "../../interfaces";
import SecList from "./secList";
import SecProfile from "./secProfile";
import translations from "../../lib/translations";
// import { useLanguage, useLanguageUpdate } from "../../context/languageContext";
import AtText from "../atoms/atText";
import AtButton from "../atoms/atButton";
import ElShowcase from "../elements/elShowcase";
import AtForm from "../atoms/atForm";
import ElCartList from "../elements/elCartList";
import { monetaryFormat } from "../config/formatConfig";
import { LanguageContext } from "../../context/languageContext";
import AtIcon from "../atoms/atIcon";
import { ThemeContext } from "../../context/themeContext";
import { styleTheme } from "../config/stylesConfig";
import { ThemeStyleContext } from "../../context/themeStyleContext";
import AtToast from "../atoms/atToast";

function SecModal({
  userPr = undefined,
  type = undefined,
  show = false,
  setShow = undefined,
  setShowEx = undefined,
  item = undefined,
  title = undefined,
  text = undefined,
  carts = undefined,
  buttons = [],
  clicks = [],
  body = undefined,
  closeButton = "none",
  size = undefined,
}: {
  userPr?: any;
  type?: string;
  show: boolean;
  setShow: any;
  setShowEx?: any;
  item?: Product;
  title?: string;
  text?: string;
  carts?: { cartList: CartItem[] };
  buttons?: string[];
  clicks?: any[];
  body?: any;
  closeButton?: "none" | "default" | "stylized";
  size?: "sm" | "lg" | "xl";
}) {
  // const [cart, setCart] = useState();

  // useEffect(() => {
  //   const local = JSON.parse(localStorage.getItem("cart"));
  //   if (local) setCart(local);
  //   setCart(local);
  // }, []);

  // const language = useLanguage();
  // const toggleLanguage = useLanguageUpdate();
  const [language, setLanguage] = useContext(LanguageContext);
  const [themeStyle, setThemeStyle] = useContext(ThemeStyleContext);

  const [user, setUser] = useState<User>();
  const [tutorial, setTutorial] = useState(true);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("users")))
      JSON.parse(localStorage.getItem("users")).map((item: User) => {
        if (item.token !== "") setUser(item);
      });
    else localStorage.setItem("users", "[]");
  }, [user]);

  function count(carts) {
    let count = 0;
    if (carts && carts.cartList)
      carts.cartList.map((e) => {
        count += e.product.price * e.product.count;
      });
    return count;
  }

  const [list, setList] = useState<any[]>([]);

  // useEffect(() => {
  //   setList(carts.cartList);
  // }, [carts]);

  let component;

  useEffect(() => {
    component = document;
  });

  function typeFormat() {
    const values = {
      cart: (
        <>
          <ElCartList carts={carts} setShow={setShow} />
          <AtToast
            defShow={tutorial}
            defSetShow={setTutorial}
            position="bottom-center"
            closeButton={true}
            title="l|:Finaliza una compra"
            content={[
              "l|:Finaliza tu compra y despues mira los productos que ya compraste y evalualos, los que esta para comprar y tus favoritos",
            ].join(" ")}
          />
        </>
      ),
      item: (
        <>
          <ElShowcase item={item} />
          <AtToast
            defShow={tutorial}
            defSetShow={setTutorial}
            position="bottom-center"
            closeButton={true}
            title="l|:Probar agregar productos en tu carro"
            content={[
              "l|:Proba agrega productos y comenta sobre los productos",
            ].join(" ")}
          />
        </>
      ),
      noLogged: <AtText sentence="messageNoLogged" type="text" />,
      profile: userPr ? (
        <>
          <SecProfile user={userPr} />
          <AtToast
            defShow={tutorial}
            defSetShow={setTutorial}
            position="bottom-center"
            closeButton={true}
            title="l|:Actualiza los datos de tu Perfil"
            content={[
              "l|:Agrega número de documento, tarjeta, contactos y direcciones",
            ].join(" ")}
          />
        </>
      ) : (
        <></>
      ),
      purchase: (
        <>
          <AtText sentence="verifyingCard" />
          <AtText sentence="sendCartToShop" />
          <AtText sentence="deliveryCalculate" />
          <AtText sentence="thanksForBuy" />
          {/* <AtText
            type="legend"
            sentence="l|:your purchase you by delivery at"
          /> */}
          <div className="flex justify-end">
            <AtButton
              sentence="finalizePurchase"
              click={() => finishPurchase()}
            />
          </div>
          {/* {user ? JSON.stringify(user.histPurchase) : ""} */}
        </>
      ),
    };
    return values[type];
  }

  function cssBody() {
    return [styleTheme("bg", themeStyle.mainComponent.bg)].join(" ");
  }

  function cssFooter() {
    return [
      "!" + styleTheme("bg", themeStyle.mainComponent.bg),
      closeButton === "stylized" || closeButton === "none" ? "border-0" : "",
    ].join(" ");
  }

  function cssHead() {
    return [
      styleTheme("bg", themeStyle.mainComponent.bg),
      closeButton === "stylized" || closeButton === "none" ? "border-0" : "",
    ].join(" ");
  }

  function buttonHeadFormat() {
    const values = {
      none: (
        <Modal.Header className={cssHead()}>
          <Modal.Title>
            <AtText
              type="subtitle"
              sentence={item ? "l|:" + item.name : title}
            />
          </Modal.Title>
        </Modal.Header>
      ),
      default: (
        <Modal.Header className={cssHead()} closeButton>
          <Modal.Title>
            <AtText
              type="subtitle"
              sentence={item ? "l|:" + item.name : title}
            />
          </Modal.Title>
        </Modal.Header>
      ),
      stylized: (
        <Modal.Header className={cssHead()}>
          <Modal.Title>
            <AtText
              type="subtitle"
              sentence={item ? "l|:" + item.name : title}
              css="pr-9"
            />
          </Modal.Title>
          <div className="absolute top-0 right-0 pt-[.75rem] pr-[.75rem] pl-[1rem] pb-[1rem]">
            {/* border-b-2 border-l-2 border-white rounded-bl-3xl rounded-tl-md rounded-br-md */}
            {/* <Button
              className="!bg-transparent !p-0 !border-0 text-black drop-shadow-lg"
              onClick={() => setShow(false)}
            >
              {Icon("bs", "BsXLg", "28px")}
            </Button> */}
            <AtIcon
              style="thin"
              name="close"
              size="36px"
              click={() => setShow(false)}
            />
          </div>
        </Modal.Header>
      ),
    };
    return values[closeButton];
  }

  function buttonFooterFormat() {
    if (buttons)
      buttons.map((e, i) => {
        return (
          <div key={i}>
            <AtButton
              sentence={e}
              click={e === "close" ? () => setShow(false) : clicks[i]}
            />
          </div>
        );
      });
    else return <></>;
  }

  function finishPurchase() {
    let today = new Date();

    let purchaseScp = {
      id: "",
      products: carts.cartList,
      status: "saled",
      total: {
        subtotal: count(carts),
        deliveryFee: 0,
        discount: 0,
      },
      creationDate: Date().toString(),
      deliveryDate: Date().toString(), //today.getDate() + 5,
      receivedDate: Date().toString(), //today.getDate() + 5,
    };
    let userScp = user;
    if (userScp)
      if (userScp.histPurchase) {
        purchaseScp.id = userScp.histPurchase.length.toString();
        userScp.histPurchase.push({
          id: userScp.histPurchase.length.toString(),
          purchase: purchaseScp,
        });
        // alert("A");
      } else {
        userScp.histPurchase = [];
        purchaseScp.id = "0";
        userScp.histPurchase.push({ id: "0", purchase: purchaseScp });
      }
    userScp.cartList = [];
    setUser(userScp);
    console.log(user);
    let usersScp = JSON.parse(localStorage.getItem("users"));
    let usersSco;
    if (user) usersSco = usersScp.filter((e) => e.id !== user.id);
    usersSco.push(user);
    console.log(usersSco);
    localStorage.setItem("users", JSON.stringify(usersSco));
    setShow(false);
    setShowEx(false);
  }

  return (
    <>
      {false ? (
        type === "purchase" ? (
          <Modal show={show} onHide={() => setShow(false)}>
            <Modal.Header>Processing your Purchase</Modal.Header>
            <Modal.Body>
              Validating your Card | Send Cart to the Shop | Calculate date of
              Delivery | Thanks for buy with us | your purchase you by delivery
              at
              <AtButton sentence="l|:Purchase" click={() => finishPurchase()} />
              {user ? JSON.stringify(user.histPurchase) : ""}
            </Modal.Body>
            <Modal.Footer>Back Shopping</Modal.Footer>
          </Modal>
        ) : type === "cart" ? (
          <Modal show={show} onHide={() => setShow(false)}>
            <Modal.Header className="border-0 bg-gradient-to-t from-slate-700 to-slate-600">
              <Modal.Title>My Cart2</Modal.Title>
              <div className="absolute top-0 right-0 pt-[.75rem] pr-[.75rem] pl-[1rem] pb-[1rem] border-b-2 border-l-2 border-white rounded-bl-3xl rounded-tl-md rounded-br-md">
                <Button
                  className="!bg-transparent !p-0 !border-0 text-black"
                  onClick={() => setShow(false)}
                >
                  {Icon("bs", "BsXLg", "28px")}
                </Button>
              </div>
            </Modal.Header>
            <Modal.Body className="bg-slate-700">
              {false ? (
                <>
                  <Row className="flex items-center">
                    <Col>
                      <h6 className="mb-0">{user ? user.name : undefined}</h6>
                    </Col>
                    <Col>
                      <Form.Select aria-label="Default select example">
                        <option>Your Address</option>
                        <option value="1">
                          {/* {user && user.addresses ? user.addresses.map(() => {}) : ""} */}
                        </option>
                      </Form.Select>
                    </Col>
                  </Row>
                  <hr />
                  <SecList list={carts.cartList} />
                  <SecBlock type="card" />
                  {/* <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Coupon Code</Form.Label>
                <InputGroup className="mb-3">
                  <Form.Control
                    placeholder="enter here"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                  <InputGroup.Text id="basic-addon1">
                    {Icon("ri", "RiCoupon3Fill")}
                  </InputGroup.Text>
                </InputGroup>
              </Form.Group>
            </Form> */}
                  <AtForm title={"couponCode"} placeholder={"insertCoupon"} />
                  <div className="flex justify-between my-3">
                    <AtText type="text" sentence="subtotal" />
                    <AtText
                      type="text"
                      sentence={
                        "l|:" +
                        (carts
                          ? monetaryFormat(count(carts))
                          : monetaryFormat(0))
                      }
                    />
                  </div>
                  <div className="flex justify-between mb-2">
                    <AtText type="text" sentence="deliveryFee" />
                    <AtText type="text" sentence={"l|:" + monetaryFormat(5)} />
                  </div>
                  <div className="flex justify-between mb-2">
                    <AtText type="text" sentence="discount" />
                    <AtText type="text" sentence={"l|:" + monetaryFormat(0)} />
                  </div>
                  <hr />
                  <div className="flex justify-between">
                    <AtText type="text" sentence="total" />
                    <AtText
                      type="text"
                      sentence={"l|:" + monetaryFormat(count(carts) + 5)}
                    />
                  </div>
                </>
              ) : (
                <ElCartList carts={carts} setShow={setShow} />
              )}
            </Modal.Body>
            <Modal.Footer className="border-0 flex flex-col !bg-slate-700">
              <Button
                variant="secondary"
                className="!mx-0 w-full"
                onClick={() => {}}
              >
                Buy
              </Button>
            </Modal.Footer>
          </Modal>
        ) : type === "item" ? (
          <Modal size="xl" show={show} onHide={() => setShow(false)}>
            <Modal.Header className="border-0 bg-gradient-to-t from-slate-600 to-slate-700">
              <Modal.Title>
                <AtText
                  type="subtitle"
                  sentence={item ? "l|:" + item.name : "product"}
                />
              </Modal.Title>
              <AtIcon
                style="thin"
                name="close"
                size="36px"
                click={() => setShow(false)}
              />
              {/* <div className="absolute top-0 right-0 pt-[.75rem] pr-[.75rem] pl-[1rem] pb-[1rem] border-b-2 border-l-2 border-white rounded-bl-3xl rounded-tl-md rounded-br-md">
              <Button
                className="!bg-transparent !p-0 !border-0 text-black drop-shadow-lg"
                onClick={() => setShow(false)}
              >
                {Icon("bs", "BsXLg", "28px")}
              </Button>
            </div> */}
            </Modal.Header>
            <Modal.Body className="bg-slate-600">
              {/* <SecBlock type="productShowcaseEdit" item={item} /> */}
              <ElShowcase item={item} />
            </Modal.Body>
            <Modal.Footer className="border-0 !bg-slate-600"></Modal.Footer>
          </Modal>
        ) : type === "token" ? (
          <Modal show={show} onHide={() => setShow(false)}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>{translations("messageNoLogged", language)}</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShow(false)}>
                Close
              </Button>
              <Button variant="primary" onClick={() => setShow(false)}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        ) : type === "profile" ? (
          <Modal
            size="xl"
            show={show}
            onHide={() => setShow(false)}
            className={"modal-diagonal"}
          >
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            {userPr ? <SecProfile user={userPr} /> : <></>}
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShow(false)}>
                Close
              </Button>
              <Button variant="primary" onClick={() => setShow(false)}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        ) : (
          <Modal show={show} onHide={() => setShow(false)}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Woohoo, you are reading this text in a modal!
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShow(false)}>
                Close
              </Button>
              <Button variant="primary" onClick={() => setShow(false)}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        )
      ) : undefined}
      {/* {false ? ( */}
      <Modal size={size} show={show} onHide={() => setShow(false)}>
        {buttonHeadFormat()}
        <Modal.Body className={cssBody()}>
          {text ? text : typeFormat()}
        </Modal.Body>
        <Modal.Footer className={cssFooter()}>
          {buttonFooterFormat()}
        </Modal.Footer>
      </Modal>
      {/* ) : undefined} */}
      {/* <SecModal
        type="purchase "
        show={showPurchase}
        setShow={setShowPurchase}
      /> */}
    </>
  );
}

export default SecModal;
