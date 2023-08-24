import { GetStaticProps, GetStaticPaths } from "next";

import { Product } from "../../interfaces";
import { sampleProductData } from "../../utils/sample-product-data";
import Layout from "../../components/Layout";
import ListDetail from "../../components/ListDetail";
import React, { Component } from "react";

type Props = {
  item?: Product;
  errors?: string;
};

const StaticPropsDetail = ({ item, errors }: Props) => {
  if (errors) {
    return (
      <Layout title="Error | Next.js + TypeScript Example">
        <p>
          <span style={{ color: "red" }}>Error:</span> {errors}
        </p>
      </Layout>
    );
  }

  return (
    <Layout
      title={`${
        item ? item.name : "Product Detail"
      } | Next.js + TypeScript Example`}
    >
      {item && <ListDetail item={item} type="product" />}
    </Layout>
  );
};

export default StaticPropsDetail;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = sampleProductData.map((product) => ({
    params: { id: product.id.toString() },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const id = params?.id;
    const item = sampleProductData.find((data) => data.id === String(id));
    return { props: { item } };
  } catch (err: any) {
    return { props: { errors: err.message } };
  }
};
