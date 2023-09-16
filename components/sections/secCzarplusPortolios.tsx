import React, { useContext, useState } from "react";
import { ThemeStyle } from "../../interfaces";
import { Button, Modal, OverlayTrigger, Popover } from "react-bootstrap";
import { ThemeStyleContext } from "../../context/themeStyleContext";
import AtButton from "../atoms/atButton";
import AtImage from "../atoms/atImage";
import AtText from "../atoms/atText";
import { styleRadius } from "../config/stylesConfig";
import AtIcon from "../atoms/atIcon";
import Router from "next/router";

const millcayacTheme: ThemeStyle = {
  themeName: "",
  texts: {
    logo: (
      <>
        <AtImage
          src={["./mountDay.svg", "./mountNite.svg"]}
          width={30}
          height={30}
          css="!rounded-0 select-none"
          invert={true}
        />
        <AtText
          type="subtitle"
          sentence={"l|:millcayac"}
          css="capitalize mx-3 select-none"
        />
      </>
    ),
    title: "l|:millcayac",
    subtitle: "l|:andean fashion",
    messages: [],
    labels: [],
    contacts: [],
    quotes: [],
    links: ["nb|:about", ["nb|:team", "contact"]],
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
      links: ["home", ["about", "team", "brazil"]],
    },
    grid: {
      filter: "millcayac",
    },
    footer: {
      colNum: 1,
      links: ["team", "about", "contact"],
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
      color: ["amber-500"],
      animation: "",
      shadow: "",
      decoration: "",
    },
    secondary: {
      font: "Gloock",
      size: "",
      color: ["yellow-500"],
      animation: "",
      shadow: "",
      decoration: "my-1",
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
      color: ["black", "black"],
      bg: [],
      size: "",
      shadow: "",
      animation: "",
      decoration: "",
      radius: "full",
    },
    secondary: {
      color: ["black", "white"],
      bg: [],
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
    bg: ["slate-300", "slate-500"],
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
    bg: ["primary", "secondary"],
    shadow: "",
    radius: "",
    decoration: "",
    animation: "",
  },
};

const drDogoTheme: ThemeStyle = {
  themeName: "",
  texts: {
    logo: (
      <AtText
        type="title"
        sentence="l|:dr. dogo"
        css="capitalize !text-[2rem]"
      />
    ),
    title: "l|:dr. dogo",
    subtitle: "l|:petshop y veterinaria",
    messages: [],
    labels: [],
    contacts: [],
    quotes: [],
    links: ["lmb|:messageNoLogged"],
    linksActions: ["lmb|:messageNoLogged"],
  },
  layouts: {
    base: ["navbar", "head", "list"],
    navbar: {
      placement: undefined,
      iconsName: undefined,
      variant: "dark",
    },
    head: {
      css: "",
    },
  },
  definitions: {
    navbar: {
      additionalButtons: ["brightness", "language", "shop", "account"],
      links: [],
    },
    grid: {
      filter: "drDogo",
    },
    footer: {
      colNum: 1,
      links: ["about", "team", "contacts"],
    },
  },
  images: {
    bg: {
      shadow: "",
      radius: "full",
      decoration: "",
      animation: "",
      url: undefined,
    },
    navbar: {
      shadow: "",
      radius: "full",
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
      radius: "lg",
      shadow: "",
      size: "",
      hover: "",
      animation: "",
      decoration: "",
    },
    secondary: {
      color: [],
      bg: "",
      radius: "lg",
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
      size: "8xl",
      color: [],
      animation: "",
      shadow: "",
      decoration: "",
    },
    secondary: {
      font: "Artifika",
      size: "3xl",
      color: [],
      animation: "",
      shadow: "",
      decoration: "",
    },
    base: {
      font: "Fredoka",
      size: "",
      color: [],
      animation: "",
      shadow: "",
      decoration: "",
    },
    sub: {
      font: "'PT_Serif_Caption'",
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
      bg: [],
      size: "",
      shadow: "",
      animation: "",
      decoration: "",
      radius: "full",
    },
    secondary: {
      color: [],
      bg: [],
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
      style: "outline",
      color: [],
      size: "",
      bg: "lime-500",
      radius: "lg",
      shadow: "",
      animation: "",
    },
    secondary: {
      style: "outline",
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
    radius: "full",
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
    bg: ["secondary", "dark"],
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
  layouts: {
    base: ["navbar", "head", "list"],
    navbar: {
      placement: undefined,
      iconsName: undefined,
      variant: undefined,
    },
    head: {
      css: "",
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
      links: ["home", ["about", "team", "brazil"]],
    },
    grid: {
      filter: "sanTelmo",
    },
    footer: {
      colNum: 1,
      links: ["team", "about", "contact"],
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
      radius: "sm",
      shadow: "",
      size: "",
      hover: "",
      animation: "",
      decoration: "",
    },
    secondary: {
      color: [],
      bg: "",
      radius: "sm",
      shadow: "",
      size: "",
      hover: "",
      animation: "fade-in",
      decoration: "",
    },
  },
  text: {
    main: {
      font: "'Yeseva_One'",
      size: "6xl",
      color: [],
      animation: "",
      shadow: "",
      decoration: "",
    },
    secondary: {
      font: "'Modern_Antiqua'",
      size: "",
      color: [],
      animation: "",
      shadow: "",
      decoration: "",
    },
    base: {
      font: "'Poltawski_Nowy'",
      size: "",
      color: [],
      animation: "",
      shadow: "",
      decoration: "",
    },
    sub: {
      font: "'Libre_Bodoni'",
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
      bg: [],
      size: "",
      shadow: "",
      animation: "",
      decoration: "",
      radius: "full",
    },
    secondary: {
      color: [],
      bg: [],
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
  themeName: "trebol4hojas",
  texts: {
    logo: (
      <>
        <AtIcon iconType="fa6" icon="FaClover" size="32px" css="mr-2" />
        <AtText
          type="title"
          sentence="l|:trebol 4 hojas"
          css="text-[2rem] capitalize"
        />
      </>
    ),
    title: "l|:trebol 4 hojas",
    subtitle: "pharmacy",
    messages: [],
    labels: [],
    contacts: [],
    quotes: [],
    links: [""],
    linksActions: [""],
  },
  layouts: {
    base: ["navbar", "head", "list", "footer"],
    navbar: {
      placement: "top",
      iconsName: undefined,
      variant: undefined,
    },
    head: {
      css: "",
    },
  },
  definitions: {
    navbar: {
      additionalButtons: ["brightness", "language", "shop", "account"],
      links: [],
    },
    grid: {
      filter: "trebol4hojas",
    },
    footer: {
      colNum: 1,
      links: ["team", "about", "contact"],
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
      url: "",
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
      radius: "full",
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
      size: "6xl",
      color: [],
      animation: "",
      shadow: "",
      decoration: "",
    },
    secondary: {
      font: "'Petit_Formal_Script'",
      size: "4xl",
      color: [],
      animation: "",
      shadow: "",
      decoration: "",
    },
    base: {
      font: "'Nixie_One'",
      size: "",
      color: [],
      animation: "",
      shadow: "",
      decoration: "",
    },
    sub: {
      font: "'Meow_Script'",
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
      bg: [],
      size: "",
      shadow: "",
      animation: "",
      decoration: "",
      radius: "full",
    },
    secondary: {
      color: [],
      bg: [],
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
      style: "circle",
      color: [],
      size: "",
      bg: "lime-500",
      radius: "lg",
      shadow: "",
      animation: "",
    },
    secondary: {
      style: "circle",
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
    bg: ["info", "primary"],
    shadow: "",
    radius: "",
    decoration: "",
    animation: "",
  },
};

const rioLumpurTheme: ThemeStyle = {
  themeName: "",
  texts: {
    logo: (
      <AtText
        type="title"
        sentence="l|:rio-lumpur"
        css="capitalize !text-[2rem]"
      />
    ),
    title: "l|:rio-lumpur",
    subtitle: "l|:brazilian-malaysian gastronomy",
    messages: [],
    labels: [],
    contacts: [],
    quotes: [],
    links: [""],
    linksActions: [""],
  },
  layouts: {
    base: ["navbar", "head", "filter", "list", "footer"],
    navbar: {
      placement: "bottom",
      iconsName: undefined,
      variant: undefined,
    },
    head: {
      css: "",
    },
  },
  definitions: {
    navbar: {
      additionalButtons: ["brightness", "language", "shop", "account"],
      links: [],
    },
    grid: {
      filter: "rioLumpur",
    },
    footer: {
      colNum: 1,
      links: [],
    },
  },
  images: {
    bg: {
      shadow: "",
      radius: "diagonal",
      decoration: "",
      animation: "",
      url: "v|:https://player.vimeo.com/video/702458133?autoplay=1&muted=1&showinfo=0&controls=0&playlist=702458133&loop=1",
    },
    navbar: {
      shadow: "",
      radius: "",
      decoration: "",
      animation: "",
      url: "",
    },
    defaultProfile: {
      shadow: "",
      radius: "full",
      decoration: "",
      animation: "fade-in",
      url: "https://images.unsplash.com/photo-1544502062-f82887f03d1c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1559&q=80",
    },
  },
  button: {
    main: {
      color: [],
      bg: "",
      radius: "lg",
      shadow: "",
      size: "",
      hover: "",
      animation: "",
      decoration: "",
    },
    secondary: {
      color: [],
      bg: "",
      radius: "lg",
      shadow: "",
      size: "",
      hover: "",
      animation: "fade-in",
      decoration: "",
    },
  },
  text: {
    main: {
      font: "'Petit_Formal_Script'",
      size: "6xl",
      color: ["green-500", "yellow-500"],
      animation: "",
      shadow: "",
      decoration: "",
    },
    secondary: {
      font: "'Yanone_Kaffeesatz'",
      size: "",
      color: ["yellow-500"],
      animation: "",
      shadow: "",
      decoration: "",
    },
    base: {
      font: "Prata",
      size: "",
      color: [],
      animation: "",
      shadow: "",
      decoration: "",
    },
    sub: {
      font: "'Meow_Script'",
      size: "",
      color: [],
      animation: "",
      shadow: "",
      decoration: "",
    },
  },
  form: {
    main: {
      color: ["black", "black"],
      bg: [],
      size: "",
      shadow: "",
      animation: "",
      decoration: "",
      radius: "full",
    },
    secondary: {
      color: ["black", "black"],
      bg: [],
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
      style: "rounded",
      color: [],
      size: "",
      bg: "lime-500",
      radius: "lg",
      shadow: "",
      animation: "",
    },
    secondary: {
      style: "circle",
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
    bg: ["warning", "danger"],
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
    subtitle: "l|:de las termas para el mundo",
    messages: [],
    labels: [],
    contacts: [],
    quotes: [],
    links: ["lmb|messageNoLogged"],
    linksActions: ["lmb|:messageNoLogged"],
  },
  layouts: {
    base: ["navbar", "head", "list"],
    navbar: {
      placement: undefined,
      iconsName: undefined,
      variant: undefined,
    },
    head: {
      css: "",
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
      links: [],
    },
    grid: {
      filter: "hostelSantiagoDelEstero",
    },
    footer: {
      colNum: 1,
      links: ["team", "about", "contact"],
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
      radius: "lg",
      shadow: "",
      size: "",
      hover: "",
      animation: "",
      decoration: "",
    },
    secondary: {
      color: [],
      bg: "",
      radius: "sm",
      shadow: "",
      size: "",
      hover: "",
      animation: "fade-in",
      decoration: "",
    },
  },
  text: {
    main: {
      font: "'Poltawski_Nowy'",
      size: "5xl",
      color: [],
      animation: "",
      shadow: "",
      decoration: "",
    },
    secondary: {
      font: "Elsie",
      size: "2xl",
      color: [],
      animation: "",
      shadow: "",
      decoration: "",
    },
    base: {
      font: "'Libre_Bodoni'",
      size: "",
      color: [],
      animation: "",
      shadow: "",
      decoration: "",
    },
    sub: {
      font: "'Modern_Antiqua'",
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
      bg: [],
      size: "",
      shadow: "",
      animation: "",
      decoration: "",
      radius: "full",
    },
    secondary: {
      color: [],
      bg: [],
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
    radius: "lg",
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
  layouts: {
    base: ["navbar", "head", "list"],
    navbar: {
      placement: undefined,
      iconsName: undefined,
      variant: undefined,
    },
    head: {
      css: "",
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
      links: [],
    },
    grid: {
      filter: "institutoViena",
    },
    footer: {
      colNum: 1,
      links: ["team", "about", "contact"],
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
      radius: "sm",
      shadow: "",
      size: "",
      hover: "",
      animation: "",
      decoration: "",
    },
    secondary: {
      color: [],
      bg: "",
      radius: "sm",
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
      size: "8xl",
      color: ["red-500", "white"],
      animation: "",
      shadow: "",
      decoration: "",
    },
    secondary: {
      font: "Syne",
      size: "3xl",
      color: ["white", "red-500"],
      animation: "",
      shadow: "",
      decoration: "",
    },
    base: {
      font: "Prata",
      size: "",
      color: [],
      animation: "",
      shadow: "",
      decoration: "",
    },
    sub: {
      font: "'M_PLUS_Code_Latin'",
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
      bg: [],
      size: "",
      shadow: "",
      animation: "",
      decoration: "",
      radius: "full",
    },
    secondary: {
      color: [],
      bg: [],
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
    radius: "sm",
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
      links: [],
    },
    grid: {
      filter: "",
    },
    footer: {
      colNum: 1,
      links: ["team", "about", "contact"],
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
      font: "'Julius_Sans_One'",
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
      bg: [],
      size: "",
      shadow: "",
      animation: "",
      decoration: "",
      radius: "full",
    },
    secondary: {
      color: [],
      bg: [],
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
  const [qrShow, setQrShow] = useState(false);

  return (
    <>
      {themeStyle.themeName === "czar+" ? (
        <AtButton
          sentence="blankSpace"
          css="absolute bottom-0 left-0 bg-transparent border-0"
          click={() => setQrShow(true)}
        />
      ) : (
        <></>
      )}
      <Modal
        show={qrShow}
        onHide={() => setQrShow(false)}
        backdrop="static"
        keyboard={false}
        className="noPrint"
      >
        <Modal.Header className="border-0 noPrint" closeButton>
          <Modal.Title>CZAR+</Modal.Title>
        </Modal.Header>
        {/* id="printSection" */}

        <Modal.Body className="flex flex-col justify-center items-center">
          <div
            id="printSection"
            className="flex flex-col items-center justify-center -ml-[13rem] -mt-[5rem]"
          >
            <div className="flex items-center justify-center">
              <div className="flex flex-col items-center justify-center mr-6">
                <AtImage width={300} height={300} src={["/czarpluslogo.png"]} />
                <div className="w-[300px]"></div>
                <div className="my-3">
                  <AtText
                    type="legend"
                    sentence="l|:página web desde $90mil + hospedaje | e-commerce personalizada para ti"
                    css="text-4xl capitalize text-center"
                  />
                </div>
              </div>
              <div className="flex flex-col items-center justify-center">
                <AtText
                  type="title"
                  sentence="l|:CZAR+"
                  css="bg-black rounded-lg !p-2 !text-7xl"
                />
                <div className="w-[600px]"></div>
                {/* <div className="my-3">
                  <AtText
                    type="legend"
                    sentence="l|:Anderson Mendes Ribeiro"
                    css="text-4xl"
                  />
                </div> */}
                <div className="flex flex-col items-center justify-center">
                  <div className="my-3">
                    <AtText
                      type="legend"
                      sentence="l|:mira portifolios >>> scanea el QRcode y proba"
                      css="text-center text-4xl text-white bg-black rounded-lg !p-2"
                    />
                  </div>
                  <AtImage
                    width={250}
                    height={250}
                    src={["/portfolioQR.png"]}
                  />
                  <AtText
                    type="legend"
                    sentence="l|:https://mrandersonmr.github.io/"
                    css="text-3xl"
                  />
                </div>
              </div>
            </div>
            <div>
              <div className="flex justify-center items-center">
                <div>
                  <AtImage
                    width={150}
                    height={150}
                    src={["/qrCZARsquade.png"]}
                  />
                  <AtText
                    type="legend"
                    sentence="l|:https://czar.dev/"
                    css="text-3xl"
                  />
                </div>
                <AtText
                  type="legend"
                  sentence="l|:<<< mira la página oficial de CZAR+ | hacemos páginas web, e-commerce y aplicaciones - tenemos data center próprio - precios asequibles - hospedamos tu página en días | puedes pagar en hasta 3 cuotas"
                  css="text-3xl ml-4 capitalize text-center"
                />
              </div>
            </div>
            <div className="w-full border-b-2 border-black mt-3"></div>
            <div className="flex items-center justify-center mt-3">
              <div className="flex flex-col items-center justify-center mr-6">
                <AtImage width={300} height={300} src={["/czarpluslogo.png"]} />
                <div className="w-[300px]"></div>
                <div className="my-3">
                  <AtText
                    type="legend"
                    sentence="l|:página web desde $90mil + hospedaje | e-commerce personalizada para ti"
                    css="text-4xl capitalize text-center"
                  />
                </div>
              </div>
              <div className="flex flex-col items-center justify-center">
                <AtText
                  type="title"
                  sentence="l|:CZAR+"
                  css="bg-black rounded-lg !p-2 !text-7xl"
                />
                <div className="w-[600px]"></div>
                {/* <div className="my-3">
                  <AtText
                    type="legend"
                    sentence="l|:Anderson Mendes Ribeiro"
                    css="text-4xl"
                  />
                </div> */}
                <div className="flex flex-col items-center justify-center">
                  <div className="my-3">
                    <AtText
                      type="legend"
                      sentence="l|:mira portifolios >>> scanea el QRcode y proba"
                      css="text-center text-4xl text-white bg-black rounded-lg !p-2"
                    />
                  </div>
                  <AtImage
                    width={250}
                    height={250}
                    src={["/portfolioQR.png"]}
                  />
                  <AtText
                    type="legend"
                    sentence="l|:https://mrandersonmr.github.io/"
                    css="text-3xl"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div>
                <AtImage width={150} height={150} src={["/qrCZARsquade.png"]} />
                <AtText
                  type="legend"
                  sentence="l|:https://czar.dev/"
                  css="text-3xl"
                />
              </div>
              <AtText
                type="legend"
                sentence="l|:<<< mira la página oficial de CZAR+ | hacemos páginas web, e-commerce y aplicaciones - tenemos data center próprio - precios asequibles - hospedamos tu página en días | puedes pagar en hasta 3 cuotas"
                css="text-3xl ml-4 capitalize text-center"
              />
            </div>
          </div>
          {/* <AtImage width={500} height={500} src={["/czarpluslogo.png"]} /> */}
        </Modal.Body>
        <Modal.Footer className="border-0">
          <AtButton
            iconType="ti"
            icon="TiPrinter"
            click={() => {
              window.print(); //Router.push("/about");
            }}
          />
          {/* <Button variant="secondary" onClick={() => setQrShow(false)}>
            Close
          </Button>
          <Button variant="primary">Understood</Button> */}
        </Modal.Footer>
      </Modal>
      {themeStyle.themeName === "czar+" && position === "bottom-0" ? (
        <div className="absolute right-[1rem] bottom-[1.5rem] flex justify-end text-white animate-pulse">
          <AtText sentence="l|:mis portifolios" css="text-[1rem]" />
          &nbsp;
          <AtIcon iconType="tb" icon="TbSquareRoundedChevronsDownFilled" />
        </div>
      ) : undefined}
      <OverlayTrigger
        trigger="click"
        placement={position === "bottom-0" ? "top" : "bottom"}
        overlay={
          <Popover
            id="popover-basic"
            className={[
              "bg-transparent !flex",
              position === "bottom-0" ? "!flex-col" : "!flex-col-reverse",
              " gap-2 backdrop-blur-sm border-[1px] border-white p-1",
              styleRadius(
                "button",
                themeStyle.button.secondary.radius,
                "secondary"
              ),
            ].join(" ")}
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
            {/* <AtButton
              level="secondary"
              iconType="gi"
              icon="GiBedLamp"
              iconSize="16px"
              click={() => setThemeStyle(madeInSanTelmoTheme)}
            /> */}
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
            {/* <AtButton
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
            /> */}
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
        {/* <AtButton sentence="l|:anderson" /> */}

        <h6
          className={[
            "fixed right-0",
            position,
            "font-[Jost] text-right text-amber-500 m-2 drop-shadow-2xl cursor-pointer !z-[9999] select-none",
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
