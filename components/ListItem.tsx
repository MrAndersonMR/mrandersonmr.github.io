import React from "react";
import Link from "next/link";

import { Product, User } from "../interfaces";

type Props = {
  data: User | Product;
  type: "user" | "product";
};

const ListItem = ({ data, type }: Props) =>
  type === "user" ? (
    <Link href="/users/[id]" as={`/users/${data.id}`}>
      {data.id}:{data.name}
    </Link>
  ) : (
    <Link href="/products/[id]" as={`/products/${data.id}`}>
      {data.id}:{data.name}
    </Link>
  );

export default ListItem;
