import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import { Col, Container, ProgressBar, Row } from "react-bootstrap";
import translations from "../../lib/translations";
// import { useLanguage, useLanguageUpdate } from "../../context/languageContext";
import { Product, User } from "../../interfaces";
// import {
//   useThemeStyle,
//   useThemeStyleUpdate,
// } from "../../context/themeStyleContext";
import { styleRadius } from "../config/stylesConfig";
import AtText from "../atoms/atText";
import AtBadge from "../atoms/atBadge";
import Icon from "../icon/icon";
import AtButton from "../atoms/atButton";
import { LanguageContext } from "../../context/languageContext";
import { ThemeStyleContext } from "../../context/themeStyleContext";
import AtScore from "../atoms/atScore";
import AtIcon from "../atoms/atIcon";
import AtForm from "../atoms/atForm";
import { monetaryFormat } from "../config/formatConfig";
import AtAccordion from "../atoms/atAccordion";

function SecProfile({ user }: { user: User }) {
  // const themeStyle = useThemeStyle();
  // const toggleThemeStyle: any = useThemeStyleUpdate();
  const [themeStyle, setThemeStyle] = useContext(ThemeStyleContext);

  // const language = useLanguage();
  // const toggleLanguage = useLanguageUpdate();
  const [language, setLanguage] = useContext(LanguageContext);

  const [products, setProducts] = useState<Product[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [userA, setUser] = useState<User>();
  const [star, setStar] = useState(0);
  const [userState, setUserState] = useState("");
  const [userContact, setUserContact] = useState("");
  const [userId, setUserId] = useState(user.personalId ? user.personalId : "");
  const [userCard, setUserCard] = useState(user.card ? user.card : "");

  useEffect(() => {
    setProducts(JSON.parse(localStorage.getItem("products")));
    setUsers(JSON.parse(localStorage.getItem("users")));
    users.map((e) => {
      if (e.token !== "" && e.token !== undefined) setUser(e);
    });
  }, []);

  // function vote(histProductId, purchaseId, id) {
  //   alert("VOTE");
  //   console.log(id);
  //   console.log("AQUI: " + purchaseId + " | " + histProductId + " | " + id);
  //   let usersScp = JSON.parse(localStorage.getItem("users")).filter(
  //     (e) => e.id !== user.id
  //   );
  //   let userScp = JSON.parse(localStorage.getItem("users")).filter(
  //     (e) => e.id === user.id
  //   )[0];
  //   let userHistProd =
  //     userScp.histPurchase[Number(purchaseId)].purchase.products[Number(id)]
  //       .product;
  //   console.log(
  //     userScp.histPurchase[Number(purchaseId)].purchase.products[Number(id)]
  //       .product
  //   );
  //   if (userHistProd) {
  //     userHistProd.scored = star;
  //     userHistProd.voted = true;
  //   }
  //   console.log(userHistProd);
  //   userScp.histPurchase[Number(purchaseId)].purchase.products[
  //     Number(id)
  //   ].product = userHistProd;
  //   usersScp.push(userScp);
  //   console.log(usersScp);
  //   localStorage.setItem("users", JSON.stringify(usersScp));

  //   // console.log(
  //   //   userScp.histPurchase.purchase.filter((e) => e.id === histProductId)[0]
  //   // );

  //   let productScp = products.filter((e) => e.id === histProductId)[0];
  //   console.log(productScp);
  //   productScp.voted = true;
  //   productScp.scored = star;
  //   let productsScp = products.filter((e) => e.id !== histProductId);
  //   productsScp.push(productScp);
  //   setProducts(productsScp);
  //   // userHist.push(productsScp);

  //   console.log(products);

  //   let productsSco = JSON.parse(localStorage.getItem("products")).filter(
  //     (e) => e.id !== histProductId
  //   );
  //   let productSco = JSON.parse(localStorage.getItem("products")).filter(
  //     (e) => e.id === histProductId
  //   )[0];

  //   let currentVotes = productSco.vote ? productSco.vote : 0;
  //   let currentScore = productSco.score ? productSco.score : 0;
  //   let sum = (currentVotes * currentScore) / (currentVotes + 1);
  //   productSco.vote = currentVotes + 1;
  //   productSco.score = sum + star / (currentVotes + 1);
  //   productsSco.push(productSco);
  //   console.log(productsSco);
  //   localStorage.setItem("products", JSON.stringify(productsSco));
  //   console.log(JSON.parse(localStorage.getItem("products")));
  // }

  function updateUserAddress(address) {
    if (user)
      if (user.addresses) {
        user.addresses.push(address);
        setUserState("");
      } else {
        user.addresses = [];
        user.addresses.push(address);
        setUserState("");
      }
    let usersScp = users.filter((e) => e.id !== user.id);
    let userScp = users.filter((e) => e.id === user.id)[0];
    if (userScp)
      if (userScp.addresses) userScp.addresses.push(address);
      else {
        userScp.addresses = [];
        userScp.addresses.push(address);
      }
    if (usersScp) usersScp.push(userScp);
    else {
      usersScp = [];
      usersScp.push(userScp);
    }
    localStorage.setItem("users", JSON.stringify(usersScp));
  }

  function updateUserContact(contact) {
    if (user)
      if (user.contacts) {
        user.contacts.push(contact);
        setUserContact("");
      } else {
        user.contacts = [];
        user.contacts.push(contact);
        setUserContact("");
      }
    let usersScp = users.filter((e) => e.id !== user.id);
    let userScp = users.filter((e) => e.id === user.id)[0];
    if (userScp)
      if (userScp.contacts) userScp.contacts.push(contact);
      else {
        userScp.contacts = [];
        userScp.contacts.push(contact);
      }
    if (usersScp) usersScp.push(userScp);
    else {
      usersScp = [];
      usersScp.push(userScp);
    }
    localStorage.setItem("users", JSON.stringify(usersScp));
  }

  function updateUserPersonalId(id) {
    if (user) user.personalId = id;
    let usersScp = users.filter((e) => e.id !== user.id);
    let userScp = users.filter((e) => e.id === user.id)[0];
    if (userScp) userScp.personalId = id;
    if (usersScp) usersScp.push(userScp);
    else {
      usersScp = [];
      usersScp.push(userScp);
    }
    localStorage.setItem("users", JSON.stringify(usersScp));
  }

  function updateUserCard(card) {
    if (user) user.card = card;
    let usersScp = users.filter((e) => e.id !== user.id);
    let userScp = users.filter((e) => e.id === user.id)[0];
    if (userScp) userScp.card = card;
    if (usersScp) usersScp.push(userScp);
    else {
      usersScp = [];
      usersScp.push(userScp);
    }
    localStorage.setItem("users", JSON.stringify(usersScp));
  }

  const foodList = {
    banana: {
      calories: "110",
      carbohydrates: "23g",
      fats: "0.3g",
      proteins: "1.1g",
      vitamins: "",
      calcium: "5mg",
      fiber: "2.6g",
      iron: "0mg",
    },
    spaghetti: {
      calories: "221",
      carbohydrates: "43.2g",
      fats: "1.3g",
      proteins: "8.1g",
      vitamins: "",
      calcium: "",
      fiber: "2.5g",
      iron: "1.01mg",
    },
    empanada: {
      calories: "263",
      carbohydrates: "20.2g",
      fats: "17.3g",
      proteins: "6.7g",
      vitamins: "",
      calcium: "",
      fiber: "0g",
      iron: "",
    },
  };

  const foodListNames = Object.keys(foodList);

  const [food, setFood] = useState("");

  const userType = (type) => {
    const types = {
      adm: <></>,
      patient: (
        <>
          <Row>
            <Col className="md:border-r-2 border-r-0 border-sky-500">
              <AtText type="subtitle" sentence="l|:settings" css="mt-4" />
              <div className="mt-6" />
              <AtAccordion
                headers={["l|:meal", "l|:food"]}
                bodies={[
                  <>
                    <AtForm
                      level="main"
                      placeholder="l|:new meal"
                      css={["my-2"]}
                      click={[() => {}]}
                      iconName={["add"]}
                    />
                    <AtForm
                      level="main"
                      placeholder="l|:average hour"
                      css={["my-2"]}
                    />
                  </>,
                  <>
                    <AtForm
                      level="main"
                      placeholder="l|:new food"
                      css={["my-2"]}
                      click={[() => {}]}
                      iconName={["add"]}
                    />
                    <AtForm
                      level="main"
                      placeholder="l|:calories"
                      css={["my-2"]}
                    />
                    <AtText type="legend" sentence="l|:composition" />
                    <AtForm
                      level="main"
                      placeholder="l|:carbohydrates"
                      css={["my-2"]}
                    />
                    <AtForm level="main" placeholder="l|:fats" css={["my-2"]} />
                    <AtForm
                      level="main"
                      placeholder="l|:proteins"
                      css={["my-2"]}
                    />
                  </>,
                ]}
              />
              {/* <AtText
                type="text"
                sentence="l|:meal"
                css="mt-6 mb-3 border-b-2 border-green-500"
              />
              <AtForm
                level="main"
                placeholder="l|:new meal"
                css={["my-2"]}
                click={[() => {}]}
                iconName={["add"]}
              />
              <AtForm
                level="main"
                placeholder="l|:average hour"
                css={["my-2"]}
              />
              <AtText
                type="text"
                sentence="l|:food"
                css="mt-6 mb-3 border-b-2 border-green-500"
              />
              <AtForm
                level="main"
                placeholder="l|:new food"
                css={["my-2"]}
                click={[() => {}]}
                iconName={["add"]}
              />
              <AtForm level="main" placeholder="l|:calories" css={["my-2"]} />
              <AtText type="legend" sentence="l|:composition" />
              <AtForm
                level="main"
                placeholder="l|:carbohydrates"
                css={["my-2"]}
              />
              <AtForm level="main" placeholder="l|:fats" css={["my-2"]} />
              <AtForm level="main" placeholder="l|:proteins" css={["my-2"]} />
              <AtForm level="main" placeholder="l|:vitamins" css={["my-2"]} />
              <AtForm level="main" placeholder="l|:calcium" css={["my-2"]} />
              <AtForm level="main" placeholder="l|:fiber" css={["my-2"]} />
              <AtForm level="main" placeholder="l|:iron" css={["my-2"]} /> */}
            </Col>
            <Col>
              <AtText type="subtitle" sentence="l|:my routine" css="mt-4" />
              <AtText type="text" sentence="l|:select a meal" css="mt-6" />
              <AtForm
                type="select"
                listValues={[]}
                level="main"
                placeholder="l|:new meal topic"
                css={["my-2"]}
              />
              <AtText type="text" sentence="l|:select a food" />
              <AtForm
                type="select"
                listValues={foodListNames}
                value={food}
                change={(e) => {
                  setFood(e.target.value);
                }}
                level="main"
                placeholder="l|:new meal topic"
                css={["my-2"]}
              />
              <div
                className={foodListNames[food] !== undefined ? "" : "hidden"}
              >
                <AtText type="text" sentence="l|:calories" />
                <div className="flex items-center">
                  <ProgressBar
                    striped
                    variant="primary"
                    max={300}
                    now={
                      foodListNames[food]
                        ? foodList[foodListNames[food]].calories.replace(
                            /[^\d.-]/g,
                            ""
                          )
                        : 0
                    }
                    className="w-[90%]"
                  />
                  <AtText
                    css="ml-2"
                    type="legend"
                    sentence={
                      "l|:" +
                      (foodListNames[food]
                        ? foodList[foodListNames[food]].calories
                        : // .replace(
                          //     /[^\d.-]/g,
                          //     ""
                          //   )
                          undefined)
                    }
                  />
                </div>
                <AtText type="text" sentence="l|:carbohydrates" />
                <div className="flex items-center">
                  <ProgressBar
                    striped
                    variant="secondary"
                    now={
                      foodListNames[food]
                        ? foodList[foodListNames[food]].carbohydrates.replace(
                            /[^\d.-]/g,
                            ""
                          )
                        : 0
                    }
                    className="w-[90%]"
                  />
                  <AtText
                    css="ml-2"
                    type="legend"
                    sentence={
                      "l|:" +
                      (foodListNames[food]
                        ? foodList[foodListNames[food]].carbohydrates
                        : // .replace(
                          //     /[^\d.-]/g,
                          //     ""
                          //   )
                          undefined)
                    }
                  />
                </div>
                <AtText type="text" sentence="l|:fats" />
                <div className="flex items-center">
                  <ProgressBar
                    striped
                    variant="secondary"
                    aria-valuemax={200}
                    now={
                      foodListNames[food]
                        ? foodList[foodListNames[food]].fats.replace(
                            /[^\d.-]/g,
                            ""
                          )
                        : 0
                    }
                    className="w-[90%]"
                  />
                  <AtText
                    css="ml-2"
                    type="legend"
                    sentence={
                      "l|:" +
                      (foodListNames[food]
                        ? foodList[foodListNames[food]].fats
                        : // .replace(
                          //     /[^\d.-]/g,
                          //     ""
                          //   )
                          undefined)
                    }
                  />
                </div>
                <AtText type="text" sentence="l|:proteins" />
                <div className="flex items-center">
                  <ProgressBar
                    striped
                    variant="secondary"
                    now={
                      foodListNames[food]
                        ? foodList[foodListNames[food]].proteins.replace(
                            /[^\d.-]/g,
                            ""
                          )
                        : 0
                    }
                    className="w-[90%]"
                  />
                  <AtText
                    css="ml-2"
                    type="legend"
                    sentence={
                      "l|:" +
                      (foodListNames[food]
                        ? foodList[foodListNames[food]].proteins
                        : // .replace(
                          //     /[^\d.-]/g,
                          //     ""
                          //   )
                          undefined)
                    }
                  />
                </div>
                {/* <AtText type="text" sentence="l|:vitamins" />
                <div className="flex items-center">
                  <ProgressBar
                    striped
                    variant="secondary"
                    now={
                      foodListNames[food]
                        ? foodList[foodListNames[food]].vitamins.replace(
                            /[^\d.-]/g,
                            ""
                          )
                        : 0
                    }
                    className="w-[90%]"
                  />
                  <AtText
                    css="ml-2"
                    type="legend"
                    sentence={
                      "l|:" +
                      (foodListNames[food]
                        ? foodList[foodListNames[food]].vitamins.replace(
                            /[^\d.-]/g,
                            ""
                          )
                        : undefined)
                    }
                  />
                </div>
                <AtText type="text" sentence="l|:calcium" />
                <div className="flex items-center">
                  <ProgressBar
                    striped
                    variant="secondary"
                    now={
                      foodListNames[food]
                        ? foodList[foodListNames[food]].calcium.replace(
                            /[^\d.-]/g,
                            ""
                          )
                        : 0
                    }
                    className="w-[90%]"
                  />
                  <AtText
                    css="ml-2"
                    type="legend"
                    sentence={
                      "l|:" +
                      (foodListNames[food]
                        ? foodList[foodListNames[food]].calcium.replace(
                            /[^\d.-]/g,
                            ""
                          )
                        : undefined)
                    }
                  />
                </div>
                <AtText type="text" sentence="l|:fiber" />
                <div className="flex items-center">
                  <ProgressBar
                    striped
                    variant="secondary"
                    now={
                      foodListNames[food]
                        ? foodList[foodListNames[food]].fiber.replace(
                            /[^\d.-]/g,
                            ""
                          )
                        : 0
                    }
                    className="w-[90%]"
                  />
                  <AtText
                    css="ml-2"
                    type="legend"
                    sentence={
                      "l|:" +
                      (foodListNames[food]
                        ? foodList[foodListNames[food]].fiber.replace(
                            /[^\d.-]/g,
                            ""
                          )
                        : undefined)
                    }
                  />
                </div>
                <AtText type="text" sentence="l|:iron" />
                <div className="flex items-center">
                  <ProgressBar
                    striped
                    variant="secondary"
                    now={
                      foodListNames[food]
                        ? foodList[foodListNames[food]].iron.replace(
                            /[^\d.-]/g,
                            ""
                          )
                        : 0
                    }
                    className="w-[90%]"
                  />
                  <AtText
                    css="ml-2"
                    type="legend"
                    sentence={
                      "l|:" +
                      (foodListNames[food]
                        ? foodList[foodListNames[food]].iron.replace(
                            /[^\d.-]/g,
                            ""
                          )
                        : undefined)
                    }
                  />
                </div> */}
              </div>
              <div className="mb-4" />
            </Col>
          </Row>
        </>
      ),
      client: (
        <>
          <Row>
            <Col>
              <AtText
                type="title"
                sentence={"personalData"}
                css="mb-2 !text-3xl"
              />
              <Row>
                <Col>
                  <AtText type="legend" sentence={"personalId"} css="mb-1" />
                  {user.personalId ? (
                    <div
                      className={[
                        "flex items-center justify-between border-t-[1px] border-x-[1px] border-b-[3px] border-sky-500 pl-3 pr-1 py-1 my-2 mx-3",
                        styleRadius(
                          "button",
                          themeStyle.button.secondary.radius,
                          "secondary"
                        ),
                      ].join(" ")}
                    >
                      <AtText sentence={"l|:" + user.personalId} />
                    </div>
                  ) : (
                    <div
                      className={[
                        "flex items-center justify-between pl-3 pr-1 py-1 my-2 mx-6",
                      ].join(" ")}
                    >
                      <AtText sentence={"noValue"} />
                    </div>
                  )}
                </Col>
                <Col>
                  <AtText type="legend" sentence={"card"} css="mb-1" />
                  {user.card ? (
                    <div
                      className={[
                        "flex items-center justify-between border-t-[1px] border-x-[1px] border-b-[3px] border-sky-500 pl-3 pr-1 py-1 my-2 mx-3",
                        styleRadius(
                          "button",
                          themeStyle.button.secondary.radius,
                          "secondary"
                        ),
                      ].join(" ")}
                    >
                      <AtText sentence={"l|:" + user.card} />
                    </div>
                  ) : (
                    <div
                      className={[
                        "flex items-center justify-between pl-3 pr-1 py-1 my-2 mx-6",
                      ].join(" ")}
                    >
                      <AtText sentence={"noValue"} />
                    </div>
                  )}
                </Col>
              </Row>
              <AtText type="legend" sentence={"contacts"} css="mb-1" />
              {user.contacts ? (
                user.contacts.map((ad, i) => {
                  return (
                    <div
                      key={i}
                      className={[
                        "flex items-center justify-between border-t-[1px] border-x-[1px] border-b-[3px] border-sky-500 pl-3 pr-1 py-1 my-2 mx-3",
                        styleRadius(
                          "button",
                          themeStyle.button.secondary.radius,
                          "secondary"
                        ),
                      ].join(" ")}
                    >
                      <AtText sentence={"l|:" + ad} />
                      <AtButton
                        level="secondary"
                        iconName="less"
                        iconSize="16px"
                      />
                    </div>
                  );
                })
              ) : (
                <div
                  className={[
                    "flex items-center justify-between pl-3 pr-1 py-1 my-2 mx-6",
                  ].join(" ")}
                >
                  <AtText sentence={"noValue"} />
                </div>
              )}
              <AtText type="legend" sentence={"addresses"} css="mb-1" />
              {user.addresses ? (
                user.addresses.map((ad, i) => {
                  return (
                    <div
                      key={i}
                      className={[
                        "flex items-center justify-between border-t-[1px] border-x-[1px] border-b-[3px] border-sky-500 pl-3 pr-1 py-1 my-2 mx-3",
                        styleRadius(
                          "button",
                          themeStyle.button.secondary.radius,
                          "secondary"
                        ),
                      ].join(" ")}
                    >
                      <AtText sentence={"l|:" + ad} />
                      <AtButton
                        level="secondary"
                        iconName="less"
                        iconSize="16px"
                      />
                    </div>
                  );
                })
              ) : (
                <div
                  className={[
                    "flex items-center justify-between pl-3 pr-1 py-1 my-2 mx-6",
                  ].join(" ")}
                >
                  <AtText sentence={"noValue"} />
                </div>
              )}
              <Row>
                <Col>
                  <AtText
                    type="title"
                    sentence={"myCart"}
                    css="mb-2 !text-3xl"
                  />
                  {user.cartList.map((item, i) => {
                    return (
                      <div key={i}>
                        <AtText
                          type="text"
                          sentence={"l|:" + item.product.name}
                        />
                      </div>
                    );
                  })}
                </Col>
                <Col>
                  <AtText
                    type="title"
                    sentence={"myFavorites"}
                    css="mb-2 !text-3xl"
                  />
                  {products ? (
                    products.map((e, i) => {
                      if (user.fav)
                        return user.fav.map((f, j) => {
                          if (e.id === f)
                            return (
                              <div key={j} className="flex items-center gap-2">
                                <AtIcon
                                  iconType="ri"
                                  icon="RiHeart2Fill"
                                  size="32px"
                                />
                                <AtText type="text" sentence={"l|:" + e.name} />
                              </div>
                            );
                          else return <></>;
                        });
                    })
                  ) : (
                    <></>
                  )}
                </Col>
              </Row>
              <div>
                {user && user.histPurchase ? (
                  user.histPurchase.map((e, i) => {
                    return (
                      <div key={i}>
                        <div className="flex mt-6 mb-2 gap-2">
                          <AtText
                            type="title"
                            sentence={"purchase"}
                            css="!text-3xl"
                          />
                          <AtText
                            type="title"
                            sentence={"l|:" + (i + 1)}
                            css="!text-3xl"
                          />
                        </div>
                        {e.purchase && e.purchase.products ? (
                          e.purchase.products.map((f, j) => {
                            return (
                              <div key={j} className="">
                                <Row>
                                  <Col>
                                    <div>
                                      <AtText
                                        type="text"
                                        sentence={"l|:" + f.product.name}
                                        css="mb-2 mt-2"
                                      />
                                      <div className="flex gap-3 flex-col md:flex-row items-center md:items-start">
                                        <div className="flex gap-2">
                                          <AtText
                                            type="text"
                                            sentence={"size"}
                                          />
                                          <AtBadge
                                            sentence={"l|:" + f.product.size}
                                          />
                                        </div>
                                        <div className="flex gap-2">
                                          <AtText
                                            type="text"
                                            sentence={"color"}
                                          />
                                          <AtBadge
                                            sentence={"l|:" + f.product.color}
                                          />
                                        </div>
                                        <div className="flex gap-2">
                                          <AtText
                                            type="text"
                                            sentence={"count"}
                                          />
                                          <AtBadge
                                            sentence={"l|:" + f.product.count}
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </Col>
                                  <Col className="flex justify-end">
                                    <div className="flex items-center my-2 justify-end gap-1">
                                      <AtScore
                                        f={f}
                                        e={e}
                                        user={user}
                                        products={products}
                                        setProducts={setProducts}
                                        j={j}
                                      />
                                      {/* <AtText
                                type="text"
                                sentence={
                                  "l|:" +
                                  (f.product.scored
                                    ? JSON.stringify(f.product.scored)
                                    : "")
                                }
                              />
                              {!f.product.scored ? (
                                <AtButton
                                  sentence={"l|:confirm"}
                                  click={() => vote(f.product.id, e.id, f.id)}
                                />
                              ) : (
                                <AtText type="text" sentence={"l|:well done"} />
                              )}
                              {Array.from(Array(5), (e, k) => {
                                return (
                                  <div
                                    key={k + j}
                                    onClick={() => {
                                      star === k
                                        ? setStar(k + 0.5)
                                        : star === k + 0.5
                                        ? setStar(k + 1)
                                        : setStar(k);
                                    }}
                                  >
                                    {f.product.scored
                                      ? f.product.scored
                                        ? f.product.scored === k + 0.5
                                          ? Icon("fa", "FaStarHalfAlt")
                                          : f.product.scored >= k + 1
                                          ? Icon("fa", "FaStar")
                                          : Icon("fa", "FaRegStar")
                                        : f.product.scored === k + 0.5
                                        ? Icon("fa", "FaStarHalfAlt")
                                        : f.product.scored >= k + 1
                                        ? Icon("fa", "FaStar")
                                        : Icon("fa", "FaRegStar")
                                      : star
                                      ? star === k + 0.5
                                        ? Icon("fa", "FaStarHalfAlt")
                                        : star >= k + 1
                                        ? Icon("fa", "FaStar")
                                        : Icon("fa", "FaRegStar")
                                      : star === k + 0.5
                                      ? Icon("fa", "FaStarHalfAlt")
                                      : star >= k + 1
                                      ? Icon("fa", "FaStar")
                                      : Icon("fa", "FaRegStar")}
                                  </div>
                                );
                              })} */}
                                    </div>
                                  </Col>
                                </Row>
                              </div>
                            );
                          })
                        ) : (
                          <></>
                        )}
                        <div className="flex flex-col md:flex-row justify-end">
                          <div className="flex items-baseline">
                            <AtText type="legend" sentence={"creationDate"} />
                            <AtText
                              type="legend"
                              sentence={"l|:: "}
                              css="mr-2"
                            />
                            <AtText
                              type="legend"
                              sentence={
                                "l|:" +
                                [
                                  new Date(e.purchase.creationDate).getDate(),
                                  new Date(e.purchase.creationDate).getMonth() +
                                    1,
                                  new Date(
                                    e.purchase.creationDate
                                  ).getFullYear(),
                                ].join("/")
                              }
                              css="mr-3"
                            />
                          </div>
                          <div className="flex">
                            <AtText type="legend" sentence={"deliveryDate"} />
                            <AtText
                              type="legend"
                              sentence={"l|:: "}
                              css="mr-2"
                            />
                            <AtText
                              type="legend"
                              sentence={
                                "l|:" +
                                [
                                  new Date(e.purchase.deliveryDate).getDate(),
                                  new Date(e.purchase.deliveryDate).getMonth() +
                                    1,
                                  new Date(
                                    e.purchase.deliveryDate
                                  ).getFullYear(),
                                ].join("/")
                              }
                            />
                          </div>
                        </div>
                        <div className="flex flex-col md:flex-row items-baseline justify-end">
                          <div className="flex items-baseline">
                            <AtText type="text" sentence={"status"} />
                            <AtText type="text" sentence={"l|:: "} css="mr-2" />
                            <AtText
                              type="subtitle"
                              sentence={"l|:" + e.purchase.status}
                              css="mr-3"
                            />
                          </div>
                          <div className="flex items-baseline">
                            <AtText type="text" sentence={"receivedDate"} />
                            <AtText type="text" sentence={"l|:: "} css="mr-2" />
                            <AtText
                              type="text"
                              sentence={
                                "l|:" +
                                [
                                  new Date(e.purchase.receivedDate).getDate(),
                                  new Date(e.purchase.receivedDate).getMonth() +
                                    1,
                                  new Date(
                                    e.purchase.receivedDate
                                  ).getFullYear(),
                                ].join("/")
                              }
                            />
                          </div>
                        </div>
                        <div className="w-full flex flex-col md:flex-row justify-between items-baseline">
                          <div className="flex">
                            <AtText type="text" sentence={"deliveryFee"} />
                            <AtText type="text" sentence={"l|:: "} css="mr-2" />
                            <AtText
                              type="text"
                              sentence={
                                "l|:" +
                                monetaryFormat(e.purchase.total.deliveryFee)
                              }
                            />
                          </div>
                          <div className="flex">
                            <AtText type="text" sentence={"discount"} />
                            <AtText type="text" sentence={"l|:: "} css="mr-2" />
                            <AtText
                              type="text"
                              sentence={
                                "l|:" +
                                monetaryFormat(e.purchase.total.discount)
                              }
                            />
                          </div>
                          <div className="flex">
                            <AtText type="text" sentence={"subtotal"} />
                            <AtText type="text" sentence={"l|:: "} css="mr-2" />
                            <AtText
                              type="text"
                              sentence={
                                "l|:" +
                                monetaryFormat(e.purchase.total.subtotal)
                              }
                            />
                          </div>
                          <div className="flex">
                            <AtText type="subtitle" sentence={"total"} />
                            <AtText
                              type="subtitle"
                              sentence={"l|:: "}
                              css="mr-2"
                            />
                            <AtText
                              type="subtitle"
                              sentence={
                                "l|:" +
                                monetaryFormat(
                                  e.purchase.total.deliveryFee +
                                    e.purchase.total.discount +
                                    e.purchase.total.subtotal
                                )
                              }
                            />
                          </div>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <></>
                )}
              </div>
            </Col>
          </Row>
        </>
      ),
    };
    return types[type];
  };

  return (
    <>
      <Container>
        <Row>
          <Col
            md={user.type === "patient" ? 12 : 4}
            className={
              user.type === "patient" ? "flex flex-col items-center" : ""
            }
          >
            <div className={"w-100 flex justify-around flex-col md:flex-row"}>
              <div
                className={
                  user.type === "patient"
                    ? "flex flex-col items-center"
                    : "flex flex-col items-center"
                }
              >
                <div
                  className="w-[200px] overflow-hidden relative"
                  style={{ height: "200px" }}
                >
                  <Image
                    src={
                      user && user.image
                        ? user.image
                        : themeStyle.images.defaultProfile.url
                    }
                    fill
                    sizes="auto"
                    className={[
                      "object-cover",
                      // styleRadius("image", themeStyle.image.radius, undefined),
                    ].join(" ")}
                    // "rounded-tl-[5rem] rounded-tr-2xl rounded-br-[5rem] rounded-bl-2xl"
                    alt={""}
                  />
                </div>
                <AtText
                  type="title"
                  sentence={["l|:", user.name].join(" ")}
                  css="my-1 !text-3xl"
                />
                <AtText type="text" sentence={["l|:", user.email].join(" ")} />
              </div>
              <div className={user.type === "patient" ? "" : "hidden"}>
                <AtText type="title" sentence={"personalData"} />
                <Row>
                  <Col>
                    <AtText type="legend" sentence={"personalId"} css="mb-2" />
                    {user.personalId ? (
                      <div
                        className={[
                          "flex items-center justify-between border-t-[1px] border-x-[1px] border-b-[3px] border-sky-500 pl-3 pr-1 py-1 my-2 mx-3",
                          styleRadius(
                            "button",
                            themeStyle.button.secondary.radius,
                            "secondary"
                          ),
                        ].join(" ")}
                      >
                        <AtText sentence={"l|:" + user.personalId} />
                      </div>
                    ) : (
                      <div
                        className={[
                          "flex items-center justify-between border-t-[1px] border-x-[1px] border-b-[3px] border-sky-500 pl-3 pr-1 py-1 my-2 mx-3",
                          styleRadius(
                            "button",
                            themeStyle.button.secondary.radius,
                            "secondary"
                          ),
                        ].join(" ")}
                      >
                        <AtText sentence={"blankSpace"} />
                      </div>
                    )}
                  </Col>
                  <Col>
                    <AtText type="legend" sentence={"card"} />
                    {user.card ? (
                      <div
                        className={[
                          "flex items-center justify-between border-t-[1px] border-x-[1px] border-b-[3px] border-sky-500 pl-3 pr-1 py-1 my-2 mx-3",
                          styleRadius(
                            "button",
                            themeStyle.button.secondary.radius,
                            "secondary"
                          ),
                        ].join(" ")}
                      >
                        <AtText sentence={"l|:" + user.card} />
                      </div>
                    ) : (
                      <div
                        className={[
                          "flex items-center justify-between border-t-[1px] border-x-[1px] border-b-[3px] border-sky-500 pl-3 pr-1 py-1 my-2 mx-3",
                          styleRadius(
                            "button",
                            themeStyle.button.secondary.radius,
                            "secondary"
                          ),
                        ].join(" ")}
                      >
                        <AtText sentence={"blankSpace"} />
                      </div>
                    )}
                  </Col>
                </Row>
                <AtText type="legend" sentence={"contacts"} css="mb-1" />
                {user.contacts ? (
                  user.contacts.map((ad, i) => {
                    return (
                      <div
                        key={i}
                        className={[
                          "flex items-center justify-between border-t-[1px] border-x-[1px] border-b-[3px] border-sky-500 pl-3 pr-1 py-1 my-2 mx-3",
                          styleRadius(
                            "button",
                            themeStyle.button.secondary.radius,
                            "secondary"
                          ),
                        ].join(" ")}
                      >
                        <AtText sentence={"l|:" + ad} />
                        <AtButton
                          level="secondary"
                          iconName="less"
                          iconSize="16px"
                          click={() => {}}
                        />
                      </div>
                    );
                  })
                ) : (
                  <></>
                )}
                <AtText type="legend" sentence={"addresses"} css="mb-1" />
                {user.addresses ? (
                  user.addresses.map((ad, i) => {
                    return (
                      <div
                        key={i}
                        className={[
                          "flex items-center justify-between border-t-[1px] border-x-[1px] border-b-[3px] border-sky-500 pl-3 pr-1 py-1 my-2 mx-3",
                          styleRadius(
                            "button",
                            themeStyle.button.secondary.radius,
                            "secondary"
                          ),
                        ].join(" ")}
                      >
                        <AtText sentence={"l|:" + ad} />
                        <AtButton
                          level="secondary"
                          iconName="less"
                          iconSize="16px"
                        />
                      </div>
                    );
                  })
                ) : (
                  <></>
                )}
              </div>
            </div>
            <AtForm
              level="main"
              placeholder="l|:new contact"
              css={["my-2"]}
              value={userContact}
              change={(e) => {
                setUserContact(e.target.value);
              }}
              click={[() => updateUserContact(userContact)]}
              iconName={["add"]}
            />
            <AtForm
              level="main"
              placeholder="l|:new address"
              css={["my-2"]}
              value={userState}
              change={(e) => {
                setUserState(e.target.value);
              }}
              click={[() => updateUserAddress(userState)]}
              iconName={["add"]}
            />
            <AtForm
              level="main"
              placeholder="l|:personal id"
              css={["my-2"]}
              value={userId}
              change={(e) => {
                setUserId(e.target.value);
              }}
              click={[() => updateUserPersonalId(userId)]}
              iconName={["edit"]}
            />
            <AtForm
              level="main"
              placeholder="l|:card"
              css={["my-2"]}
              value={userCard}
              change={(e) => {
                setUserCard(e.target.value);
              }}
              click={[() => updateUserCard(userCard)]}
              iconName={["edit"]}
            />
          </Col>
          <Col md={user.type === "patient" ? 12 : 8}>{userType(user.type)}</Col>
        </Row>
      </Container>
    </>
  );
}

export default SecProfile;
