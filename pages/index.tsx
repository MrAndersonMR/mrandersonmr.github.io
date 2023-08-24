import Link from "next/link";
import Layout from "../components/Layout";
import React, { Component, useContext } from "react";
import SecHead from "../components/sections/secHead";
import SecBlock from "../components/sections/secBlock";
import SecFilter from "../components/sections/secFilter";
import SecLayoutPage from "../components/sections/secLayoutPage";
import SecGrid from "../components/sections/secGrid";
import { Product } from "../interfaces";
import { sampleProductData } from "../utils/sample-product-data";
import { GetStaticProps } from "next";
import PgInfo from "../components/sections/pgInfo";
import { ThemeStyleContext } from "../context/themeStyleContext";

type Props = {
  items: Product[];
};

export const getStaticProps: GetStaticProps = async () => {
  const items: Product[] = sampleProductData;
  return { props: { items } };
};

function IndexPage({ items }: Props) {
  // <Layout title="Home | Next.js + TypeScript Example">
  const [themeStyle, setThemeStyle] = useContext(ThemeStyleContext);

  return (
    <>
      {/* <PgInfo /> */}
      {themeStyle.layouts && themeStyle.layouts.base.includes("head") ? (
        <SecHead
          layout="right"
          css={[themeStyle.layouts ? themeStyle.layouts.head.css : ""]}
        />
      ) : (
        <></>
      )}
      {themeStyle.layouts && themeStyle.layouts.base.includes("filter") ? (
        <SecFilter />
      ) : (
        <></>
      )}
      {/* <SecLayoutPage>
      <SecBlock
        type="productShowcaseEdit"
        iconType="fa"
        icon="FaUserTie"
        title="Anderson"
        paragraph="Mendes Ribeiro"
      />
      <SecFilter />
    </SecLayoutPage> */}
      {themeStyle.layouts && themeStyle.layouts.base.includes("list") ? (
        <SecGrid list={items} />
      ) : (
        <></>
      )}
      {/* <h1 className="text-green-500">Hello Next.js 👋</h1>
    <p>
      <Link href="/about">About</Link>
    </p> */}
    </>
  );
  // </Layout>
}

export default IndexPage;
