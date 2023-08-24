import React, { useEffect, useState } from "react";
import AtText from "../atoms/atText";
import { Col, Form, Row } from "react-bootstrap";
import SecList from "../sections/secList";
import AtForm from "../atoms/atForm";
import SecBlock from "../sections/secBlock";
import { CartItem, User } from "../../interfaces";
import SecModal from "../sections/secModal";
import AtButton from "../atoms/atButton";
import { monetaryFormat } from "../config/formatConfig";

function ElCartList({
  carts = undefined,
}: {
  carts?: { cartList: CartItem[] };
}) {
  const [user, setUser] = useState<User>();

  const [showPurchase, setShowPurchase] = useState(false);

  function count(carts) {
    let count = 0;
    if (carts && carts.cartList)
      carts.cartList.map((e) => {
        count += e.product.price * e.product.count;
      });
    return count;
  }

  useEffect(() => {
    JSON.parse(localStorage.getItem("users")).map((item: User) => {
      if (item.token !== "") setUser(item);
      console.log(item);
    });
  }, []);

  return (
    <>
      <Row className="flex items-center">
        <Col>
          <AtText sentence={"l|:" + (user ? user.name : "")} type="text" />
        </Col>
        <Col>
          <Form.Select aria-label="Default select example">
            <option>Your Address</option>
          </Form.Select>
        </Col>
      </Row>
      <hr />
      <SecList list={carts.cartList} />
      <SecBlock type="card" />
      <AtForm
        title={"couponCode"}
        placeholder={"insertCoupon"}
        iconType={["ri"]}
        icon={["RiCoupon3Fill"]}
        css={["my-3"]}
      />
      <div className="flex justify-between my-3">
        <AtText type="text" sentence="subtotal" />
        <AtText
          type="text"
          sentence={
            "l|:" + (carts ? monetaryFormat(count(carts)) : monetaryFormat(0))
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
      <AtButton sentence="l|:Buy" click={() => setShowPurchase(true)} />
      <SecModal
        type="purchase"
        show={showPurchase}
        title="myPurchase"
        closeButton={"stylized"}
        setShow={setShowPurchase}
        carts={carts}
      />
    </>
  );
}

export default ElCartList;
