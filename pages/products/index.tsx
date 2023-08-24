import { GetStaticProps } from "next";
import Link from "next/link";

import { Product } from "../../interfaces";
import { sampleProductData } from "../../utils/sample-product-data";
import Layout from "../../components/Layout";
import List from "../../components/List";
import React, { Component } from "react";

type Props = {
  items: Product[];
};

const WithStaticProps = ({ items }: Props) => (
  <Layout title="Products List | Next.js + TypeScript Example">
    <h1>Products List</h1>
    <p>
      Example fetching data from inside <code>getStaticProps()</code>.
    </p>
    <p>You are currently on: /products</p>
    <List items={items} type="product" />
    <p>
      <Link href="/">Go home</Link>
    </p>
  </Layout>
);

export const getStaticProps: GetStaticProps = async () => {
  const items: Product[] = sampleProductData;
  return { props: { items } };
};

export default WithStaticProps;
