import React, { useContext, useState } from "react";
import { ThemeStyle } from "../../interfaces";
import { OverlayTrigger, Popover } from "react-bootstrap";
import { ThemeStyleContext } from "../../context/themeStyleContext";
import AtButton from "../atoms/atButton";
import AtImage from "../atoms/atImage";

const millcayacTheme: ThemeStyle = {
  themeName: "",
  texts: {
    logo: (
      <>
        <AtImage
          src="./mountDay.svg"
          width={100}
          height={100}
          css="!rounded-0"
        />
      </>
    ),
    title: "l|:millcayac",
    subtitle: "l|:andean fashion",
    messages: [],
    labels: [],
    contacts: [],
    quotes: [],
    links: ["lmb|messageNoLogged"],
    linksActions: ["lmb|:messageNoLogged"],
  },
  layouts: {
    base: ["navbar", "head", "filter", "list", "footer"],
    navbar: {
      placement: undefined,
      iconsName: undefined,
      variant: undefined,
    },
    head: {
      css: "underline decoration-dotted decoration-white",
    },
  },
  definitions: {
    navbar: {
      additionalButtons: [
        "search",
        "brightness",
        "language",
        "shop",
        "account",
      ],
    },
  },
  images: {
    bg: {
      shadow: "",
      radius: "diagonal",
      decoration: "",
      animation: "",
      url: "https://images.unsplash.com/photo-1631148550197-19d37c2a835e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=408&q=80",
    },
    navbar: {
      shadow: "",
      radius: "",
      decoration: "",
      animation: "",
      url: undefined,
    },
    defaultProfile: {
      shadow: "",
      radius: "",
      decoration: "",
      animation: "fade-in",
      url: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1031&q=80",
    },
  },
  button: {
    main: {
      color: [],
      bg: "",
      radius: "diagonal",
      shadow: "",
      size: "",
      hover: "",
      animation: "",
      decoration: "",
    },
    secondary: {
      color: [],
      bg: "",
      radius: "full",
      shadow: "",
      size: "",
      hover: "",
      animation: "fade-in",
      decoration: "",
    },
  },
  text: {
    main: {
      font: "Gloock",
      size: "5xl",
      color: [],
      animation: "",
      shadow: "",
      decoration: "",
    },
    secondary: {
      font: "Gloock",
      size: "",
      color: [],
      animation: "",
      shadow: "",
      decoration: "",
    },
    base: {
      font: "'Yanone_Kaffeesatz'",
      size: "",
      color: [],
      animation: "",
      shadow: "",
      decoration: "",
    },
    sub: {
      font: "'Nixie_One'",
      size: "",
      color: [],
      animation: "",
      shadow: "",
      decoration: "",
    },
  },
  form: {
    main: {
      color: [],
      bg: "",
      size: "",
      shadow: "",
      animation: "",
      decoration: "",
      radius: "full",
    },
    secondary: {
      color: [],
      bg: "",
      size: "",
      shadow: "",
      animation: "",
      decoration:
        "backdrop-blur-sm bg-transparent !border-white !border-t-0 !border-b-2 !border-x-0",
      radius: "none",
    },
  },
  icon: {
    main: {
      style: "thin",
      color: [],
      size: "",
      bg: "lime-500",
      radius: "lg",
      shadow: "",
      animation: "",
    },
    secondary: {
      style: "thin",
      color: [],
      size: "",
      bg: "",
      radius: "none",
      shadow: "",
      animation: "",
    },
  },
  image: {
    shadow: "",
    radius: "diagonal",
    decoration: "",
    animation: "",
  },
  mainComponent: {
    layout: "",
    bg: ["slate-50", "slate-700"],
    size: "",
    shadow: "",
    radius: "",
    animation: "",
    decoration: "",
  },
  secondaryComponent: {
    layout: "",
    bg: [],
    size: "",
    shadow: "",
    radius: "diagonal",
    animation: "",
    decoration: "",
  },
  specialComponent: {
    layout: "",
    bg: [],
    size: "",
    shadow: "",
    radius: "",
    animation: "",
    decoration: "",
  },
  block: {
    layout: "",
    bg: [],
    shadow: "",
    radius: "",
    decoration: "",
    animation: "",
  },
  modal: {
    layout: "",
    bg: [],
    shadow: "",
    radius: "",
    decoration: "",
    animation: "",
  },
  offcanvas: {
    layout: "",
    bg: [],
    shadow: "",
    radius: "",
    decoration: "",
    animation: "",
  },
  navbar: {
    layout: "",
    bg: [],
    shadow: "",
    radius: "",
    decoration: "",
    animation: "",
  },
};

const drDogoTheme: ThemeStyle = {
  themeName: "",
  texts: {
    logo: "",
    title: "l|:dr. dogo",
    subtitle: "l|:petshop y veterinaria",
    messages: [],
    labels: [],
    contacts: [],
    quotes: [],
    links: ["lmb|messageNoLogged"],
    linksActions: ["lmb|:messageNoLogged"],
  },
  definitions: {
    navbar: {
      additionalButtons: [
        "search",
        "brightness",
        "language",
        "shop",
        "account",
      ],
    },
  },
  images: {
    bg: {
      shadow: "",
      radius: "diagonal",
      decoration: "",
      animation: "",
      url: undefined,
    },
    navbar: {
      shadow: "",
      radius: "none",
      decoration: "",
      animation: "",
      url: "https://images.unsplash.com/photo-1589652717406-1c69efaf1ff8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    },
    defaultProfile: {
      shadow: "",
      radius: "full",
      decoration: "",
      animation: "fade-in",
      url: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1031&q=80",
    },
  },
  button: {
    main: {
      color: [],
      bg: "",
      radius: "diagonal",
      shadow: "",
      size: "",
      hover: "",
      animation: "",
      decoration: "",
    },
    secondary: {
      color: [],
      bg: "",
      radius: "full",
      shadow: "",
      size: "",
      hover: "",
      animation: "fade-in",
      decoration: "",
    },
  },
  text: {
    main: {
      font: "'Suez_One'",
      size: "7xl",
      color: [],
      animation: "",
      shadow: "",
      decoration: "",
    },
    secondary: {
      font: "Gloock",
      size: "",
      color: [],
      animation: "",
      shadow: "",
      decoration: "",
    },
    base: {
      font: "'Yanone_Kaffeesatz'",
      size: "",
      color: [],
      animation: "",
      shadow: "",
      decoration: "",
    },
    sub: {
      font: "'Nixie_One'",
      size: "",
      color: [],
      animation: "",
      shadow: "",
      decoration: "",
    },
  },
  form: {
    main: {
      color: [],
      bg: "",
      size: "",
      shadow: "",
      animation: "",
      decoration: "",
      radius: "full",
    },
    secondary: {
      color: [],
      bg: "",
      size: "",
      shadow: "",
      animation: "",
      decoration:
        "backdrop-blur-sm bg-transparent !border-white !border-t-0 !border-b-2 !border-x-0",
      radius: "none",
    },
  },
  icon: {
    main: {
      style: "thin",
      color: [],
      size: "",
      bg: "lime-500",
      radius: "lg",
      shadow: "",
      animation: "",
    },
    secondary: {
      style: "thin",
      color: [],
      size: "",
      bg: "",
      radius: "none",
      shadow: "",
      animation: "",
    },
  },
  image: {
    shadow: "",
    radius: "diagonal",
    decoration: "",
    animation: "",
  },
  mainComponent: {
    layout: "",
    bg: ["slate-50", "slate-700"],
    size: "",
    shadow: "",
    radius: "",
    animation: "",
    decoration: "",
  },
  secondaryComponent: {
    layout: "",
    bg: [],
    size: "",
    shadow: "",
    radius: "diagonal",
    animation: "",
    decoration: "",
  },
  specialComponent: {
    layout: "",
    bg: [],
    size: "",
    shadow: "",
    radius: "",
    animation: "",
    decoration: "",
  },
  block: {
    layout: "",
    bg: [],
    shadow: "",
    radius: "",
    decoration: "",
    animation: "",
  },
  modal: {
    layout: "",
    bg: [],
    shadow: "",
    radius: "",
    decoration: "",
    animation: "",
  },
  offcanvas: {
    layout: "",
    bg: [],
    shadow: "",
    radius: "",
    decoration: "",
    animation: "",
  },
  navbar: {
    layout: "",
    bg: [],
    shadow: "",
    radius: "",
    decoration: "",
    animation: "",
  },
};

const madeInSanTelmoTheme: ThemeStyle = {
  themeName: "",
  texts: {
    logo: "",
    title: "l|:made in san telmo",
    subtitle: "l|:mobiles porteños",
    messages: [],
    labels: [],
    contacts: [],
    quotes: [],
    links: ["lmb|messageNoLogged"],
    linksActions: ["lmb|:messageNoLogged"],
  },
  definitions: {
    navbar: {
      additionalButtons: [
        "search",
        "brightness",
        "language",
        "shop",
        "account",
      ],
    },
  },
  images: {
    bg: {
      shadow: "",
      radius: "diagonal",
      decoration: "",
      animation: "",
      url: "https://images.unsplash.com/photo-1601106315698-ee39716dd442?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    },
    navbar: {
      shadow: "",
      radius: "diagonal",
      decoration: "",
      animation: "",
      url: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1031&q=80",
    },
    defaultProfile: {
      shadow: "",
      radius: "full",
      decoration: "",
      animation: "fade-in",
      url: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1031&q=80",
    },
  },
  button: {
    main: {
      color: [],
      bg: "",
      radius: "diagonal",
      shadow: "",
      size: "",
      hover: "",
      animation: "",
      decoration: "",
    },
    secondary: {
      color: [],
      bg: "",
      radius: "full",
      shadow: "",
      size: "",
      hover: "",
      animation: "fade-in",
      decoration: "",
    },
  },
  text: {
    main: {
      font: "'Modern_Antiqua'",
      size: "",
      color: [],
      animation: "",
      shadow: "",
      decoration: "",
    },
    secondary: {
      font: "Gloock",
      size: "",
      color: [],
      animation: "",
      shadow: "",
      decoration: "",
    },
    base: {
      font: "'Yanone_Kaffeesatz'",
      size: "",
      color: [],
      animation: "",
      shadow: "",
      decoration: "",
    },
    sub: {
      font: "'Nixie_One'",
      size: "",
      color: [],
      animation: "",
      shadow: "",
      decoration: "",
    },
  },
  form: {
    main: {
      color: [],
      bg: "",
      size: "",
      shadow: "",
      animation: "",
      decoration: "",
      radius: "full",
    },
    secondary: {
      color: [],
      bg: "",
      size: "",
      shadow: "",
      animation: "",
      decoration:
        "backdrop-blur-sm bg-transparent !border-white !border-t-0 !border-b-2 !border-x-0",
      radius: "none",
    },
  },
  icon: {
    main: {
      style: "thin",
      color: [],
      size: "",
      bg: "lime-500",
      radius: "lg",
      shadow: "",
      animation: "",
    },
    secondary: {
      style: "thin",
      color: [],
      size: "",
      bg: "",
      radius: "none",
      shadow: "",
      animation: "",
    },
  },
  image: {
    shadow: "",
    radius: "diagonal",
    decoration: "",
    animation: "",
  },
  mainComponent: {
    layout: "",
    bg: ["slate-50", "slate-700"],
    size: "",
    shadow: "",
    radius: "",
    animation: "",
    decoration: "",
  },
  secondaryComponent: {
    layout: "",
    bg: [],
    size: "",
    shadow: "",
    radius: "diagonal",
    animation: "",
    decoration: "",
  },
  specialComponent: {
    layout: "",
    bg: [],
    size: "",
    shadow: "",
    radius: "",
    animation: "",
    decoration: "",
  },
  block: {
    layout: "",
    bg: [],
    shadow: "",
    radius: "",
    decoration: "",
    animation: "",
  },
  modal: {
    layout: "",
    bg: [],
    shadow: "",
    radius: "",
    decoration: "",
    animation: "",
  },
  offcanvas: {
    layout: "",
    bg: [],
    shadow: "",
    radius: "",
    decoration: "",
    animation: "",
  },
  navbar: {
    layout: "",
    bg: [],
    shadow: "",
    radius: "",
    decoration: "",
    animation: "",
  },
};

const trebol4hojasTheme: ThemeStyle = {
  themeName: "",
  texts: {
    logo: "",
    title: "l|:trebol 4 hojas",
    subtitle: "l|:farmacia",
    messages: [],
    labels: [],
    contacts: [],
    quotes: [],
    links: ["lmb|messageNoLogged"],
    linksActions: ["lmb|:messageNoLogged"],
  },
  definitions: {
    navbar: {
      additionalButtons: [
        "search",
        "brightness",
        "language",
        "shop",
        "account",
      ],
    },
  },
  images: {
    bg: {
      shadow: "",
      radius: "diagonal",
      decoration: "",
      animation: "",
      url: "https://images.unsplash.com/photo-1601106315698-ee39716dd442?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    },
    navbar: {
      shadow: "",
      radius: "diagonal",
      decoration: "",
      animation: "",
      url: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1031&q=80",
    },
    defaultProfile: {
      shadow: "",
      radius: "full",
      decoration: "",
      animation: "fade-in",
      url: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1031&q=80",
    },
  },
  button: {
    main: {
      color: [],
      bg: "",
      radius: "diagonal",
      shadow: "",
      size: "",
      hover: "",
      animation: "",
      decoration: "",
    },
    secondary: {
      color: [],
      bg: "",
      radius: "full",
      shadow: "",
      size: "",
      hover: "",
      animation: "fade-in",
      decoration: "",
    },
  },
  text: {
    main: {
      font: "'Libre_Bodoni'",
      size: "",
      color: [],
      animation: "",
      shadow: "",
      decoration: "",
    },
    secondary: {
      font: "Gloock",
      size: "",
      color: [],
      animation: "",
      shadow: "",
      decoration: "",
    },
    base: {
      font: "'Yanone_Kaffeesatz'",
      size: "",
      color: [],
      animation: "",
      shadow: "",
      decoration: "",
    },
    sub: {
      font: "'Nixie_One'",
      size: "",
      color: [],
      animation: "",
      shadow: "",
      decoration: "",
    },
  },
  form: {
    main: {
      color: [],
      bg: "",
      size: "",
      shadow: "",
      animation: "",
      decoration: "",
      radius: "full",
    },
    secondary: {
      color: [],
      bg: "",
      size: "",
      shadow: "",
      animation: "",
      decoration:
        "backdrop-blur-sm bg-transparent !border-white !border-t-0 !border-b-2 !border-x-0",
      radius: "none",
    },
  },
  icon: {
    main: {
      style: "thin",
      color: [],
      size: "",
      bg: "lime-500",
      radius: "lg",
      shadow: "",
      animation: "",
    },
    secondary: {
      style: "thin",
      color: [],
      size: "",
      bg: "",
      radius: "none",
      shadow: "",
      animation: "",
    },
  },
  image: {
    shadow: "",
    radius: "diagonal",
    decoration: "",
    animation: "",
  },
  mainComponent: {
    layout: "",
    bg: ["slate-50", "slate-700"],
    size: "",
    shadow: "",
    radius: "",
    animation: "",
    decoration: "",
  },
  secondaryComponent: {
    layout: "",
    bg: [],
    size: "",
    shadow: "",
    radius: "diagonal",
    animation: "",
    decoration: "",
  },
  specialComponent: {
    layout: "",
    bg: [],
    size: "",
    shadow: "",
    radius: "",
    animation: "",
    decoration: "",
  },
  block: {
    layout: "",
    bg: [],
    shadow: "",
    radius: "",
    decoration: "",
    animation: "",
  },
  modal: {
    layout: "",
    bg: [],
    shadow: "",
    radius: "",
    decoration: "",
    animation: "",
  },
  offcanvas: {
    layout: "",
    bg: [],
    shadow: "",
    radius: "",
    decoration: "",
    animation: "",
  },
  navbar: {
    layout: "",
    bg: [],
    shadow: "",
    radius: "",
    decoration: "",
    animation: "",
  },
};

const rioLumpurTheme: ThemeStyle = {
  themeName: "",
  texts: {
    logo: "",
    title: "l|:rio-lumpur",
    subtitle: "l|:brazilian-malaysian gastronomy",
    messages: [],
    labels: [],
    contacts: [],
    quotes: [],
    links: ["lmb|messageNoLogged"],
    linksActions: ["lmb|:messageNoLogged"],
  },
  definitions: {
    navbar: {
      additionalButtons: [
        "search",
        "brightness",
        "language",
        "shop",
        "account",
      ],
    },
  },
  images: {
    bg: {
      shadow: "",
      radius: "diagonal",
      decoration: "",
      animation: "",
      url: "https://images.unsplash.com/photo-1601106315698-ee39716dd442?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    },
    navbar: {
      shadow: "",
      radius: "diagonal",
      decoration: "",
      animation: "",
      url: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1031&q=80",
    },
    defaultProfile: {
      shadow: "",
      radius: "full",
      decoration: "",
      animation: "fade-in",
      url: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1031&q=80",
    },
  },
  button: {
    main: {
      color: [],
      bg: "",
      radius: "diagonal",
      shadow: "",
      size: "",
      hover: "",
      animation: "",
      decoration: "",
    },
    secondary: {
      color: [],
      bg: "",
      radius: "full",
      shadow: "",
      size: "",
      hover: "",
      animation: "fade-in",
      decoration: "",
    },
  },
  text: {
    main: {
      font: "Hurricane",
      size: "7xl",
      color: [],
      animation: "",
      shadow: "",
      decoration: "",
    },
    secondary: {
      font: "Tauri",
      size: "",
      color: [],
      animation: "",
      shadow: "",
      decoration: "",
    },
    base: {
      font: "'Yanone_Kaffeesatz'",
      size: "",
      color: [],
      animation: "",
      shadow: "",
      decoration: "",
    },
    sub: {
      font: "'Nixie_One'",
      size: "",
      color: [],
      animation: "",
      shadow: "",
      decoration: "",
    },
  },
  form: {
    main: {
      color: [],
      bg: "",
      size: "",
      shadow: "",
      animation: "",
      decoration: "",
      radius: "full",
    },
    secondary: {
      color: [],
      bg: "",
      size: "",
      shadow: "",
      animation: "",
      decoration:
        "backdrop-blur-sm bg-transparent !border-white !border-t-0 !border-b-2 !border-x-0",
      radius: "none",
    },
  },
  icon: {
    main: {
      style: "thin",
      color: [],
      size: "",
      bg: "lime-500",
      radius: "lg",
      shadow: "",
      animation: "",
    },
    secondary: {
      style: "thin",
      color: [],
      size: "",
      bg: "",
      radius: "none",
      shadow: "",
      animation: "",
    },
  },
  image: {
    shadow: "",
    radius: "diagonal",
    decoration: "",
    animation: "",
  },
  mainComponent: {
    layout: "",
    bg: ["slate-50", "slate-700"],
    size: "",
    shadow: "",
    radius: "",
    animation: "",
    decoration: "",
  },
  secondaryComponent: {
    layout: "",
    bg: [],
    size: "",
    shadow: "",
    radius: "diagonal",
    animation: "",
    decoration: "",
  },
  specialComponent: {
    layout: "",
    bg: [],
    size: "",
    shadow: "",
    radius: "",
    animation: "",
    decoration: "",
  },
  block: {
    layout: "",
    bg: [],
    shadow: "",
    radius: "",
    decoration: "",
    animation: "",
  },
  modal: {
    layout: "",
    bg: [],
    shadow: "",
    radius: "",
    decoration: "",
    animation: "",
  },
  offcanvas: {
    layout: "",
    bg: [],
    shadow: "",
    radius: "",
    decoration: "",
    animation: "",
  },
  navbar: {
    layout: "",
    bg: [],
    shadow: "",
    radius: "",
    decoration: "",
    animation: "",
  },
};

const hostelSdETheme: ThemeStyle = {
  themeName: "",
  texts: {
    logo: "",
    title: "l|:hostel santiago del estero",
    subtitle: "l|:de las termas para el mondo",
    messages: [],
    labels: [],
    contacts: [],
    quotes: [],
    links: ["lmb|messageNoLogged"],
    linksActions: ["lmb|:messageNoLogged"],
  },
  definitions: {
    navbar: {
      additionalButtons: [
        "search",
        "brightness",
        "language",
        "shop",
        "account",
      ],
    },
  },
  images: {
    bg: {
      shadow: "",
      radius: "diagonal",
      decoration: "",
      animation: "",
      url: "https://images.unsplash.com/photo-1601106315698-ee39716dd442?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    },
    navbar: {
      shadow: "",
      radius: "diagonal",
      decoration: "",
      animation: "",
      url: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1031&q=80",
    },
    defaultProfile: {
      shadow: "",
      radius: "full",
      decoration: "",
      animation: "fade-in",
      url: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1031&q=80",
    },
  },
  button: {
    main: {
      color: [],
      bg: "",
      radius: "diagonal",
      shadow: "",
      size: "",
      hover: "",
      animation: "",
      decoration: "",
    },
    secondary: {
      color: [],
      bg: "",
      radius: "full",
      shadow: "",
      size: "",
      hover: "",
      animation: "fade-in",
      decoration: "",
    },
  },
  text: {
    main: {
      font: "Elsie",
      size: "",
      color: [],
      animation: "",
      shadow: "",
      decoration: "",
    },
    secondary: {
      font: "Gloock",
      size: "",
      color: [],
      animation: "",
      shadow: "",
      decoration: "",
    },
    base: {
      font: "'Yanone_Kaffeesatz'",
      size: "",
      color: [],
      animation: "",
      shadow: "",
      decoration: "",
    },
    sub: {
      font: "'Nixie_One'",
      size: "",
      color: [],
      animation: "",
      shadow: "",
      decoration: "",
    },
  },
  form: {
    main: {
      color: [],
      bg: "",
      size: "",
      shadow: "",
      animation: "",
      decoration: "",
      radius: "full",
    },
    secondary: {
      color: [],
      bg: "",
      size: "",
      shadow: "",
      animation: "",
      decoration:
        "backdrop-blur-sm bg-transparent !border-white !border-t-0 !border-b-2 !border-x-0",
      radius: "none",
    },
  },
  icon: {
    main: {
      style: "thin",
      color: [],
      size: "",
      bg: "lime-500",
      radius: "lg",
      shadow: "",
      animation: "",
    },
    secondary: {
      style: "thin",
      color: [],
      size: "",
      bg: "",
      radius: "none",
      shadow: "",
      animation: "",
    },
  },
  image: {
    shadow: "",
    radius: "diagonal",
    decoration: "",
    animation: "",
  },
  mainComponent: {
    layout: "",
    bg: ["slate-50", "slate-700"],
    size: "",
    shadow: "",
    radius: "",
    animation: "",
    decoration: "",
  },
  secondaryComponent: {
    layout: "",
    bg: [],
    size: "",
    shadow: "",
    radius: "diagonal",
    animation: "",
    decoration: "",
  },
  specialComponent: {
    layout: "",
    bg: [],
    size: "",
    shadow: "",
    radius: "",
    animation: "",
    decoration: "",
  },
  block: {
    layout: "",
    bg: [],
    shadow: "",
    radius: "",
    decoration: "",
    animation: "",
  },
  modal: {
    layout: "",
    bg: [],
    shadow: "",
    radius: "",
    decoration: "",
    animation: "",
  },
  offcanvas: {
    layout: "",
    bg: [],
    shadow: "",
    radius: "",
    decoration: "",
    animation: "",
  },
  navbar: {
    layout: "",
    bg: [],
    shadow: "",
    radius: "",
    decoration: "",
    animation: "",
  },
};

const vienaInstituteTheme: ThemeStyle = {
  themeName: "",
  texts: {
    logo: "",
    title: "l|:instituto viena",
    subtitle: "l|:lenguas, secundaria y oficinas",
    messages: [],
    labels: [],
    contacts: [],
    quotes: [],
    links: ["lmb|messageNoLogged"],
    linksActions: ["lmb|:messageNoLogged"],
  },
  definitions: {
    navbar: {
      additionalButtons: [
        "search",
        "brightness",
        "language",
        "shop",
        "account",
      ],
    },
  },
  images: {
    bg: {
      shadow: "",
      radius: "diagonal",
      decoration: "",
      animation: "",
      url: "https://images.unsplash.com/photo-1485081669829-bacb8c7bb1f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    },
    navbar: {
      shadow: "",
      radius: "diagonal",
      decoration: "",
      animation: "",
      url: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1031&q=80",
    },
    defaultProfile: {
      shadow: "",
      radius: "full",
      decoration: "",
      animation: "fade-in",
      url: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1031&q=80",
    },
  },
  button: {
    main: {
      color: [],
      bg: "",
      radius: "diagonal",
      shadow: "",
      size: "",
      hover: "",
      animation: "",
      decoration: "",
    },
    secondary: {
      color: [],
      bg: "",
      radius: "full",
      shadow: "",
      size: "",
      hover: "",
      animation: "fade-in",
      decoration: "",
    },
  },
  text: {
    main: {
      font: "Economica",
      size: "",
      color: [],
      animation: "",
      shadow: "",
      decoration: "",
    },
    secondary: {
      font: "Gloock",
      size: "",
      color: [],
      animation: "",
      shadow: "",
      decoration: "",
    },
    base: {
      font: "'Yanone_Kaffeesatz'",
      size: "",
      color: [],
      animation: "",
      shadow: "",
      decoration: "",
    },
    sub: {
      font: "'Nixie_One'",
      size: "",
      color: [],
      animation: "",
      shadow: "",
      decoration: "",
    },
  },
  form: {
    main: {
      color: [],
      bg: "",
      size: "",
      shadow: "",
      animation: "",
      decoration: "",
      radius: "full",
    },
    secondary: {
      color: [],
      bg: "",
      size: "",
      shadow: "",
      animation: "",
      decoration:
        "backdrop-blur-sm bg-transparent !border-white !border-t-0 !border-b-2 !border-x-0",
      radius: "none",
    },
  },
  icon: {
    main: {
      style: "thin",
      color: [],
      size: "",
      bg: "lime-500",
      radius: "lg",
      shadow: "",
      animation: "",
    },
    secondary: {
      style: "thin",
      color: [],
      size: "",
      bg: "",
      radius: "none",
      shadow: "",
      animation: "",
    },
  },
  image: {
    shadow: "",
    radius: "diagonal",
    decoration: "",
    animation: "",
  },
  mainComponent: {
    layout: "",
    bg: ["slate-50", "slate-700"],
    size: "",
    shadow: "",
    radius: "",
    animation: "",
    decoration: "",
  },
  secondaryComponent: {
    layout: "",
    bg: [],
    size: "",
    shadow: "",
    radius: "diagonal",
    animation: "",
    decoration: "",
  },
  specialComponent: {
    layout: "",
    bg: [],
    size: "",
    shadow: "",
    radius: "",
    animation: "",
    decoration: "",
  },
  block: {
    layout: "",
    bg: [],
    shadow: "",
    radius: "",
    decoration: "",
    animation: "",
  },
  modal: {
    layout: "",
    bg: [],
    shadow: "",
    radius: "",
    decoration: "",
    animation: "",
  },
  offcanvas: {
    layout: "",
    bg: [],
    shadow: "",
    radius: "",
    decoration: "",
    animation: "",
  },
  navbar: {
    layout: "",
    bg: [],
    shadow: "",
    radius: "",
    decoration: "",
    animation: "",
  },
};

const augustinNutTheme: ThemeStyle = {
  themeName: "augustinNutTheme",
  texts: {
    logo: "",
    title: "l|:sis nut",
    subtitle: "l|:sistema de nutrición",
    messages: [],
    labels: [],
    contacts: [],
    quotes: [],
    links: ["nb|:home", ["nb|:about", "about", "l|:brazil"]],
    linksActions: ["nb|:messageNoLogged"],
  },
  layouts: {
    base: ["head", "navbar"],
    navbar: {
      placement: "bottom",
      variant: "dark",
      iconsName: ["darkness", "language", "profile"],
      // iconsTypes: [],
      // icons: []
    },
    head: {
      css: "",
    },
  },
  definitions: {
    navbar: {
      additionalButtons: ["brightness", "language", "account"],
    },
  },
  images: {
    bg: {
      shadow: "",
      radius: "diagonal",
      decoration: "",
      animation: "",
      url: undefined,
    },
    navbar: {
      shadow: "",
      radius: "diagonal",
      decoration: "",
      animation: "",
      url: undefined, //"https://images.unsplash.com/photo-1631148550197-19d37c2a835e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=408&q=80",
    },
    defaultProfile: {
      shadow: "",
      radius: "full",
      decoration: "",
      animation: "fade-in",
      url: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1031&q=80",
    },
  },
  button: {
    main: {
      color: [],
      bg: "",
      radius: "none",
      shadow: "",
      size: "",
      hover: "",
      animation: "",
      decoration: "",
    },
    secondary: {
      color: [],
      bg: "",
      radius: "full",
      shadow: "",
      size: "",
      hover: "",
      animation: "fade-in",
      decoration: "",
    },
  },
  text: {
    main: {
      font: "'Six_Caps'",
      size: "7xl",
      color: ["", "lime-500"],
      animation: "",
      shadow: "",
      decoration: "",
    },
    secondary: {
      font: "'Square_Peg'",
      size: "3xl",
      color: ["orange-500"],
      animation: "",
      shadow: "",
      decoration: "",
    },
    base: {
      font: "Syne",
      size: "",
      color: [],
      animation: "",
      shadow: "",
      decoration: "",
    },
    sub: {
      font: "Syne",
      size: "",
      color: [],
      animation: "",
      shadow: "",
      decoration: "",
    },
  },
  form: {
    main: {
      color: [],
      bg: "",
      size: "",
      shadow: "",
      animation: "",
      decoration: "",
      radius: "full",
    },
    secondary: {
      color: [],
      bg: "",
      size: "",
      shadow: "",
      animation: "",
      decoration:
        "backdrop-blur-sm bg-transparent !border-white !border-t-0 !border-b-2 !border-x-0",
      radius: "none",
    },
  },
  icon: {
    main: {
      style: "fill",
      color: [],
      size: "",
      bg: "lime-500",
      radius: "lg",
      shadow: "",
      animation: "",
    },
    secondary: {
      style: "fill",
      color: ["slate-300"],
      size: "",
      bg: "",
      radius: "none",
      shadow: "",
      animation: "fade-in",
    },
  },
  image: {
    shadow: "",
    radius: "none",
    decoration: "",
    animation: "",
  },
  mainComponent: {
    layout: "",
    bg: ["slate-50", "slate-700"],
    size: "",
    shadow: "",
    radius: "",
    animation: "",
    decoration: "",
  },
  secondaryComponent: {
    layout: "",
    bg: [],
    size: "",
    shadow: "",
    radius: "",
    animation: "",
    decoration: "",
  },
  specialComponent: {
    layout: "",
    bg: [],
    size: "",
    shadow: "",
    radius: "",
    animation: "",
    decoration: "",
  },
  block: {
    layout: "",
    bg: [],
    shadow: "",
    radius: "",
    decoration: "",
    animation: "",
  },
  modal: {
    layout: "",
    bg: [],
    shadow: "",
    radius: "",
    decoration: "",
    animation: "",
  },
  offcanvas: {
    layout: "",
    bg: [],
    shadow: "",
    radius: "",
    decoration: "",
    animation: "",
  },
  navbar: {
    layout: "",
    bg: [],
    shadow: "",
    radius: "",
    decoration: "",
    animation: "",
  },
};

function SecCzarplusPortolios() {
  const [themeStyle, setThemeStyle] = useContext(ThemeStyleContext);
  const [position, setPosition] = useState("bottom-0");

  return (
    <>
      <OverlayTrigger
        trigger="click"
        placement={position === "bottom-0" ? "top" : "bottom"}
        overlay={
          <Popover
            id="popover-basic"
            className={
              "bg-transparent !flex " +
              (position === "bottom-0" ? "!flex-col" : "!flex-col-reverse") +
              " gap-2 backdrop-blur-sm border-[1px] border-white !rounded-full p-1"
            }
          >
            <AtButton
              level="secondary"
              iconType="gi"
              icon="GiAmpleDress"
              iconSize="16px"
              click={() => setThemeStyle(millcayacTheme)}
            />
            <AtButton
              level="secondary"
              iconType="gi"
              icon="GiDogBowl"
              iconSize="16px"
              click={() => setThemeStyle(drDogoTheme)}
            />
            <AtButton
              level="secondary"
              iconType="gi"
              icon="GiBedLamp"
              iconSize="16px"
              click={() => setThemeStyle(madeInSanTelmoTheme)}
            />
            <AtButton
              level="secondary"
              iconType="gi"
              icon="GiMedicines"
              iconSize="16px"
              click={() => setThemeStyle(trebol4hojasTheme)}
            />
            <AtButton
              level="secondary"
              iconType="gi"
              icon="GiKnifeFork"
              iconSize="16px"
              click={() => setThemeStyle(rioLumpurTheme)}
            />
            <AtButton
              level="secondary"
              iconType="fa"
              icon="FaConciergeBell"
              iconSize="16px"
              click={() => setThemeStyle(hostelSdETheme)}
            />
            <AtButton
              level="secondary"
              iconType="gi"
              icon="GiGraduateCap"
              iconSize="16px"
              click={() => setThemeStyle(vienaInstituteTheme)}
            />
            <AtButton
              level="secondary"
              iconType="gi"
              icon="GiWeightScale"
              iconSize="16px"
              click={() => setThemeStyle(augustinNutTheme)}
            />
            <AtButton
              level="secondary"
              variant="secondary"
              iconType="hi2"
              icon="HiOutlineArrowsUpDown"
              iconSize="16px"
              click={() =>
                position === "bottom-0"
                  ? setPosition("top-0")
                  : setPosition("bottom-0")
              }
            />
          </Popover>
        }
        rootClose
      >
        {/* <h5 className="fixed bottom-0 right-0 flex flex-col items-center leading-4 font-['Jost'] !mb-0 rounded-tl-lg rounded-tr-lg rounded-bl-[3rem] rounded-br-md p-3 bg-white m-3">
                  <span
                    className="inline-block scale-x-[-1]"
                    style={{ filter: "fliph" }}
                  >
                    C
                  </span>
                  <span>Z A</span>
                  <span>R</span>
                  <span className="absolute bottom-[10px] right-[10px]">+</span>
                </h5> */}
        <h6
          className={[
            "fixed right-0",
            position,
            "font-[Jost] text-orange-500 m-2 drop-shadow-2xl cursor-pointer !z-[9999]",
          ].join(" ")}
        >
          <span
            className="inline-block scale-x-[-1]"
            style={{ filter: "fliph" }}
          >
            C
          </span>
          ZAR+
        </h6>
      </OverlayTrigger>
    </>
  );
}

export default SecCzarplusPortolios;
