import * as React from "react";

import { User, Product } from "../interfaces";
import Image from "next/image";

type ListDetailProps = {
  item: User | Product;
  type?: "user" | "product";
};

const ListDetail = ({ item: item, type: type }: ListDetailProps) => (
  <div>
    {type === "user" ? (
      <>
        <h1>Detail for {item.name}</h1>
        <p>ID: {item.id}</p>
      </>
    ) : type === "product" ? (
      <>
        <h1>Detail for {item.name}</h1>
        <p>ID: {item.id}</p>
        {/* {item.urls.map((e, i) => {
          return <Image key={i} src={e} alt={""} width={100} height={100} />;
        })} */}
      </>
    ) : (
      <></>
    )}
  </div>
);

export default ListDetail;
