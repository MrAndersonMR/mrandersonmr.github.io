import React, { useEffect, useState } from "react";
import AtText from "./atText";
import AtButton from "./atButton";
import Icon from "../icon/icon";
import { Product, User } from "../../interfaces";
import AtIcon from "./atIcon";

function AtScore({
  user,
  products,
  setProducts,
  f,
  e,
  j,
}: {
  user: User;
  products: any;
  setProducts: any;
  f: any;
  e: any;
  j: any;
}) {
  const [star, setStar] = useState(0);

  function vote(histProductId, purchaseId, id) {
    console.log(id);
    console.log("AQUI: " + purchaseId + " | " + histProductId + " | " + id);
    let usersScp = JSON.parse(localStorage.getItem("users")).filter(
      (e) => e.id !== user.id
    );
    let userScp = JSON.parse(localStorage.getItem("users")).filter(
      (e) => e.id === user.id
    )[0];
    let userHistProd =
      userScp.histPurchase[Number(purchaseId)].purchase.products[Number(id)]
        .product;
    console.log(
      userScp.histPurchase[Number(purchaseId)].purchase.products[Number(id)]
        .product
    );
    if (userHistProd) {
      userHistProd.scored = star;
      userHistProd.voted = true;
    }
    console.log(userHistProd);
    userScp.histPurchase[Number(purchaseId)].purchase.products[
      Number(id)
    ].product = userHistProd;
    usersScp.push(userScp);
    console.log(usersScp);
    localStorage.setItem("users", JSON.stringify(usersScp));

    // console.log(
    //   userScp.histPurchase.purchase.filter((e) => e.id === histProductId)[0]
    // );

    let productScp = products.filter((e) => e.id === histProductId)[0];
    console.log(productScp);
    productScp.voted = true;
    productScp.scored = star;
    let productsScp = products.filter((e) => e.id !== histProductId);
    productsScp.push(productScp);
    setProducts(productsScp);
    // userHist.push(productsScp);

    console.log(products);

    let productsSco = JSON.parse(localStorage.getItem("products")).filter(
      (e) => e.id !== histProductId
    );
    let productSco = JSON.parse(localStorage.getItem("products")).filter(
      (e) => e.id === histProductId
    )[0];

    let currentVotes = productSco.vote ? productSco.vote : 0;
    let currentScore = productSco.score ? productSco.score : 0;
    let sum = (currentVotes * currentScore) / (currentVotes + 1);
    productSco.vote = currentVotes + 1;
    productSco.score = sum + star / (currentVotes + 1);
    productsSco.push(productSco);
    console.log(productsSco);
    localStorage.setItem("products", JSON.stringify(productsSco));
    console.log(JSON.parse(localStorage.getItem("products")));
  }

  return (
    <>
      {!f.product.scored ? (
        <AtButton
          sentence={"eval"}
          css="mr-3"
          click={() => vote(f.product.id, e.id, f.id)}
        />
      ) : f.product.scored ? (
        <AtText
          type="legend"
          sentence={
            f.product.scored < 2.5
              ? "sorryFriend"
              : f.product.scored > 4
              ? "veryThanksFriend"
              : "greatFriend"
          }
        />
      ) : (
        <></>
      )}
      <AtText
        type="text"
        sentence={
          "l|:" + (f.product.scored ? JSON.stringify(f.product.scored) : "")
        }
      />
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
            {f.product.scored ? (
              f.product.scored ? (
                f.product.scored === k + 0.5 ? (
                  <AtIcon iconType="fa" icon="FaStarHalfAlt" /> //Icon("fa", "FaStarHalfAlt")
                ) : f.product.scored >= k + 1 ? (
                  <AtIcon iconType="fa" icon="FaStar" /> //Icon("fa", "FaStar")
                ) : (
                  <AtIcon iconType="fa" icon="FaRegStar" /> //Icon("fa", "FaRegStar")
                )
              ) : f.product.scored === k + 0.5 ? (
                <AtIcon iconType="fa" icon="FaStarHalfAlt" /> //Icon("fa", "FaStarHalfAlt")
              ) : f.product.scored >= k + 1 ? (
                <AtIcon iconType="fa" icon="FaStar" /> //Icon("fa", "FaStar")
              ) : (
                <AtIcon iconType="fa" icon="FaRegStar" /> //Icon("fa", "FaRegStar")
              )
            ) : star ? (
              star === k + 0.5 ? (
                <AtIcon iconType="fa" icon="FaStarHalfAlt" /> //Icon("fa", "FaStarHalfAlt")
              ) : star >= k + 1 ? (
                <AtIcon iconType="fa" icon="FaStar" /> //Icon("fa", "FaStar")
              ) : (
                <AtIcon iconType="fa" icon="FaRegStar" /> //Icon("fa", "FaRegStar")
              )
            ) : star === k + 0.5 ? (
              <AtIcon iconType="fa" icon="FaStarHalfAlt" /> //Icon("fa", "FaStarHalfAlt")
            ) : star >= k + 1 ? (
              <AtIcon iconType="fa" icon="FaStar" /> //Icon("fa", "FaStar")
            ) : (
              <AtIcon iconType="fa" icon="FaRegStar" /> //Icon("fa", "FaRegStar")
            )}
          </div>
        );
      })}
    </>
  );
}

export default AtScore;
