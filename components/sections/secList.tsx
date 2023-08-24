import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import SecBlock from "./secBlock";

function SecList({ list }: { list: any[] }) {
  const [listAX, setListAX] = useState(list);

  return (
    <>
      <Container className="my-6">
        <Row className="gap-4">
          {listAX
            .sort((first, second) =>
              Number(first.id) > Number(second.id) ? 1 : -1
            )
            .map((item, key) => {
              return (
                <div key={key}>
                  <SecBlock
                    type="productElem"
                    item={item.product}
                    list={listAX}
                    setList={setListAX}
                  />
                </div>
              );
            })}
        </Row>
      </Container>
    </>
  );
}

export default SecList;
