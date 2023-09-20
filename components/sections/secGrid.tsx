import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import SecBlock from "./secBlock";
import { Product } from "../../interfaces";
import { sampleProductData } from "../../utils/sample-product-data";

function SecGrid({
  list,
  filter,
  owner,
}: {
  list: Product[];
  filter: string;
  owner: string;
}) {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // alert(JSON.stringify(sampleProductData));
    const local = JSON.parse(localStorage.getItem("products"));
    if (local) setProducts(local);
    else {
      localStorage.setItem("products", JSON.stringify(sampleProductData));
      const local = JSON.parse(localStorage.getItem("products"));
      if (local) setProducts(local);
    }
  }, []);

  return (
    <>
      {/* <div className="relative flex justify-center items-center w-full h-[100vh] overflow-hidden">
        <div className="absolute block h-full bg-cover bg-[url('https://images.unsplash.com/photo-1601106315698-ee39716dd442?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80')]">
          <h1>Anderson</h1>
          <h2>Mendes</h2>
        </div>
        <div className="absolute block w-[100vw] h-[10vh] rotate-45 bg-white"></div>
      </div> */}
      <Container className="my-6">
        <Row>
          {products
            .sort((a, b) => (Number(a.id) > Number(b.id) ? 1 : -1))
            // .filter((e) => e.name !== "")
            .filter((e) => e.owners.includes(owner))
            .filter((e) => e.name.toLowerCase().includes(filter.toLowerCase()))
            .map((item, i) => {
              return (
                <Col key={i} md={4} className="flex justify-center">
                  <SecBlock type="productShowcase" item={item} />
                </Col>
              );
            })}
          {/* <Col md={4} className="flex justify-center">
            <SecBlock type="productShowcase" />
          </Col>
          <Col md={4} className="flex justify-center">
            <SecBlock type="productShowcase" />
          </Col>
          <Col md={4} className="flex justify-center">
            <SecBlock type="productShowcase" />
          </Col> */}
        </Row>
      </Container>
    </>
  );
}

export default SecGrid;
