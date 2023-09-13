// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { User } from 'path/to/interfaces';

export type Language = "en" | "es" | "pt";

export type Theme = "light" | "dark";

export type ThemeStyle = {
  themeName: string;
  texts: {
    logo: any;
    title: string;
    subtitle: string;
    messages: string[];
    labels: string[];
    contacts: string[];
    quotes: string[];
    links: any[];
    linksActions: any[];
  };
  layouts?: {
    base: string[];
    navbar: {
      placement: "bottom" | "top";
      iconsName: string[];
      variant:
        | "dark"
        | "light"
        | "sucess"
        | "info"
        | "danger"
        | "warning"
        | "primary"
        | "secondary";
    };
    head: {
      css: string;
    };
  };
  definitions: {
    navbar: { additionalButtons: string[]; links: any[] };
    grid: { filter: string };
    footer: {
      colNum: number;
      links: string[];
    };
  };
  images: {
    bg: {
      shadow: string;
      radius: string;
      decoration: string;
      animation: string;
      url: string;
    };
    navbar: {
      shadow: string;
      radius: string;
      decoration: string;
      animation: string;
      url: string;
    };
    defaultProfile: {
      shadow: string;
      radius: string;
      decoration: string;
      animation: string;
      url: string;
    };
  };
  button: {
    main: {
      color: string[];
      bg: string;
      radius: string;
      shadow: string;
      size: string;
      hover: string;
      animation: string;
      decoration: string;
    };
    secondary: {
      color: string[];
      bg: string;
      radius: string;
      shadow: string;
      size: string;
      hover: string;
      animation: string;
      decoration: string;
    };
  };
  text: {
    main: {
      font: string;
      size: string;
      color: string[];
      animation: string;
      shadow: string;
      decoration: string;
    };
    secondary: {
      font: string;
      size: string;
      color: string[];
      animation: string;
      shadow: string;
      decoration: string;
    };
    base: {
      font: string;
      size: string;
      color: string[];
      animation: string;
      shadow: string;
      decoration: string;
    };
    sub: {
      font: string;
      size: string;
      color: string[];
      animation: string;
      shadow: string;
      decoration: string;
    };
  };
  form: {
    main: {
      color: string[];
      bg: string[];
      radius: string;
      size: string;
      shadow: string;
      animation: string;
      decoration: string;
    };
    secondary: {
      color: string[];
      bg: string[];
      radius: string;
      size: string;
      shadow: string;
      animation: string;
      decoration: string;
    };
  };
  icon: {
    main: {
      style:
        | "default"
        | "fill"
        | "thin"
        | "square"
        | "rounded"
        | "circle"
        | "outline"
        | "big"
        | "small"
        | "stylized"
        | "leak"
        | "color";
      color: string[];
      size: string;
      bg: string;
      radius: string;
      shadow: string;
      animation: string;
    };
    secondary: {
      style:
        | "default"
        | "fill"
        | "thin"
        | "square"
        | "rounded"
        | "circle"
        | "outline"
        | "big"
        | "small"
        | "stylized"
        | "leak"
        | "color";
      color: string[];
      size: string;
      bg: string;
      radius: string;
      shadow: string;
      animation: string;
    };
  };
  image: {
    shadow: string;
    radius: string;
    decoration: string;
    animation: string;
  };
  mainComponent: {
    layout: string;
    bg: string[];
    size: string;
    shadow: string;
    radius: string;
    animation: string;
    decoration: string;
  };
  secondaryComponent: {
    layout: string;
    bg: string[];
    size: string;
    shadow: string;
    radius: string;
    animation: string;
    decoration: string;
  };
  specialComponent: {
    layout: string;
    bg: string[];
    size: string;
    shadow: string;
    radius: string;
    animation: string;
    decoration: string;
  };
  block: {
    layout: string;
    bg: string[];
    shadow: string;
    radius: string;
    decoration: string;
    animation: string;
  };
  modal: {
    layout: string;
    bg: string[];
    shadow: string;
    radius: string;
    decoration: string;
    animation: string;
  };
  offcanvas: {
    layout: string;
    bg: string[];
    shadow: string;
    radius: string;
    decoration: string;
    animation: string;
  };
  navbar: {
    layout: string;
    bg: string[];
    shadow: string;
    radius: string;
    decoration: string;
    animation: string;
  };
};

// export type ThemeStyle = {
//   themeName: string;
//   texts: {};
//   fonts: {
//     main: string;
//     secondary: string;
//     base: string;
//     sub: string;
//   };
//   colors: {
//     main: string;
//     secondary: string;
//     bg: string;
//     detail: string;
//     special: string;
//     text: {
//       main: string;
//       secondary: string;
//       base: string;
//       sub: string;
//     };
//     button: string;
//     form: string;
//   };
//   sizes: {
//     text: {
//       main: string;
//       secondary: string;
//       base: string;
//       sub: string;
//     };
//     icon: {
//       main: string;
//       secondary: string;
//     };
//     mainComponent: string;
//     secondaryComponent: string;
//     specialComponent: string;
//     modal: string;
//     button: string;
//     form: string;
//   };
//   shadows: {
//     text: string;
//     icon: string;
//     block: string;
//     modal: string;
//     mainComponent: string;
//     secondaryComponent: string;
//     specialComponent: string;
//     button: string;
//     form: string;
//     image: string;
//   };
//   icons: {
//     mainType: string;
//     secondaryType: string;
//   };
//   borders: {
//     modal: string;
//     icon: {
//       main: string;
//       secondary: string;
//     };
//     mainComponent: string;
//     secondaryComponent: string;
//     specialComponent: string;
//     button: string;
//     form: string;
//     image: string;
//   };
//   layouts: {
//     mainComponent: string;
//     secondaryComponent: string;
//     specialComponent: string;
//     navBar: string;
//     head: string;
//     footer: string;
//     block: string;
//     text: string;
//     offcanvas: string;
//   };
//   animations: {
//     mainComponent: string;
//     secondaryComponent: string;
//     specialComponent: string;
//     text: {
//       main: string;
//       secondary: string;
//       base: string;
//       sub: string;
//     };
//     button: string;
//     form: string;
//     modal: string;
//     offcanvas: string;
//     block: string;
//   };
//   decorations: {
//     button: string;
//     form: string;
//     image: string;
//     modal: string;
//     offcanvas: string;
//     block: string;
//   };
// };

export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
  type: string;
  token?: string;
  image?: string;
  personalId?: string;
  addresses?: string[];
  contacts?: string[];
  card?: string;
  fav?: string[];
  cartList: CartItem[];
  histPurchase: { id: string; purchase: Purchase }[];
};

export type Advertiser = {};

export type Product = {
  id: string;
  name: string;
  type: string;
  price: number;
  description: string;
  labels: string[];
  categories: string[];
  colors?: string[];
  color?: string;
  sizes?: string[];
  size?: string;
  flavors?: string[];
  weight?: string;
  features: string[];
  faqs?: string[];
  quantity: number;
  score: number;
  scored?: number;
  count?: number;
  votes?: number;
  voted?: boolean;
  characteristics?: string[];
  owners: string[];
  comments?: Comment[];
  urls: string[];
};

export type CartItem = {
  id: string;
  product: Product;
  status: string;
};

export type Purchase = {
  id: string;
  products: CartItem[];
  status: string;
  total: {
    subtotal: number;
    deliveryFee: number;
    discount: number;
  };
  creationDate: string;
  deliveryDate: string;
  receivedDate: string;
};

export type Comment = {
  user: string;
  comment: string;
  date: string;
};

export type Info = {};
