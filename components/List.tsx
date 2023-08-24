import * as React from "react";
import ListItem from "./ListItem";
import { Product, User } from "../interfaces";

type Props = {
  items: User[] | Product[];
  type?: "user" | "product";
};

const List = ({ items, type }: Props) => (
  <ul>
    {type === "user" ? (
      items.map((item) => (
        <li key={item.id}>
          <ListItem data={item} type={"user"} />
        </li>
      ))
    ) : type === "product" ? (
      items.map((item) => (
        <li key={item.id}>
          <ListItem data={item} type={"product"} />
        </li>
      ))
    ) : (
      <></>
    )}
  </ul>
);

export default List;
