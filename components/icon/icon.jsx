import React from "react";

import * as IconsAi from "react-icons/ai"
import * as IconsBi from "react-icons/bi"
import * as IconsBs from "react-icons/bs"
import * as IconsCg from "react-icons/cg"
import * as IconsCi from "react-icons/ci"
import * as IconsDi from "react-icons/di"
import * as IconsFa from "react-icons/fa"
import * as IconsFc from "react-icons/fc"
import * as IconsFi from "react-icons/fi"
import * as IconsFa6 from "react-icons/fa6"
import * as IconsGi from "react-icons/gi"
import * as IconsGo from "react-icons/go"
import * as IconsGr from "react-icons/gr"
import * as IconsHi from "react-icons/hi"
import * as IconsHi2 from "react-icons/hi2"
import * as IconsIm from "react-icons/im"
import * as IconsLia from "react-icons/lia"
import * as IconsIo from "react-icons/io"
import * as IconsIo5 from "react-icons/io5"
import * as IconsLu from "react-icons/lu"
import * as IconsMd from "react-icons/md"
import * as IconsPi from "react-icons/pi"
import * as IconsRi from "react-icons/ri"
import * as IconsRx from "react-icons/rx"
import * as IconsSi from "react-icons/si"
import * as IconsSl from "react-icons/sl"
import * as IconsTb from "react-icons/tb"
import * as IconsTfi from "react-icons/tfi"
import * as IconsTi from "react-icons/ti"
import * as IconsVsc from "react-icons/vsc"
import * as IconsWi from "react-icons/wi"

import { BsSlashCircleFill } from "react-icons/bs"

export default function Icon(ico, name, size = "auto") { //, margin="0", fill = "current"
  let IconComponent;

  if (ico === "ai") IconComponent = IconsAi[name];
  if (ico === "bi") IconComponent = IconsBi[name];
  if (ico === "bs") IconComponent = IconsBs[name];
  if (ico === "cg") IconComponent = IconsCg[name];
  if (ico === "ci") IconComponent = IconsCi[name];
  if (ico === "di") IconComponent = IconsDi[name];
  if (ico === "md") IconComponent = IconsMd[name];
  if (ico === "fa") IconComponent = IconsFa[name];
  if (ico === "fc") IconComponent = IconsFc[name];
  if (ico === "fi") IconComponent = IconsFi[name];
  if (ico === "fa6") IconComponent = IconsFa6[name];
  if (ico === "gi") IconComponent = IconsGi[name];
  if (ico === "go") IconComponent = IconsGo[name];
  if (ico === "gr") IconComponent = IconsGr[name];
  if (ico === "hi") IconComponent = IconsHi[name];
  if (ico === "hi2") IconComponent = IconsHi2[name];
  if (ico === "im") IconComponent = IconsIm[name];
  if (ico === "lia") IconComponent = IconsLia[name];
  if (ico === "lu") IconComponent = IconsLu[name];
  if (ico === "io") IconComponent = IconsIo[name];
  if (ico === "io5") IconComponent = IconsIo5[name];
  if (ico === "pi") IconComponent = IconsPi[name];
  if (ico === "ri") IconComponent = IconsRi[name];
  if (ico === "rx") IconComponent = IconsRx[name];
  if (ico === "si") IconComponent = IconsSi[name];
  if (ico === "sl") IconComponent = IconsSl[name];
  if (ico === "tb") IconComponent = IconsTb[name];
  if (ico === "tfi") IconComponent = IconsTfi[name];
  if (ico === "ti") IconComponent = IconsTi[name];
  if (ico === "vsc") IconComponent = IconsVsc[name];
  if (ico === "wi") IconComponent = IconsWi[name];
  if (!IconComponent) {
    return <BsSlashCircleFill style={{ width: size, height: size }} />; //style={{ width: size, height: size, fill: fill }}
  }

  return <IconComponent style={{ width: size, height: size }} />; //style={{ width: size, height: size, margin: margin, fill: fill }}
}