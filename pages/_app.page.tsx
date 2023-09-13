import React, { useContext } from "react";

import "styles/globals.css";
import Layout from "../components/Layout";
import { AppProps } from "next/app";

import "bootstrap/dist/css/bootstrap.min.css";
import SecNavbar from "../components/sections/secNavbar";
import SecFooter from "../components/sections/secFooter";
import { LanguageProvider } from "../context/languageContext";
import { ThemeProvider } from "../context/themeContext";
import {
  ThemeStyleContext,
  ThemeStyleProvider,
} from "../context/themeStyleContext";
import { Button, OverlayTrigger, Popover } from "react-bootstrap";
import AtButton from "../components/atoms/atButton";
import { ThemeStyle } from "../interfaces";
import SecCzarplusPortolios from "../components/sections/secCzarplusPortolios";
import AtImage from "../components/atoms/atImage";
// import { LanguageProvider } from "../context/simpleThemeContext";
//import "bootswatch/dist/materia/bootstrap.min.css";

// color | shadows | fonts - title, subtitle, paragraph | icons - main, secondary | borders - main, modal, secondary | layout - text, modal, image, special | animation - main, text, button, image, loading | decoration

function loadTailwind() {
  return (
    <div className="absolute top-0 left-0 hidden">
      <span className="font-[Gloock] font-['Fragment_Mono'] font-['Libre_Bodoni'] font-['Square_Peg'] font-[Elsie] font-['Julius_Sans_One'] font-[Economica] font-[Jost] font-['Euphoria_Script'] font-[Tauri] font-['Nixie_One'] font-['Six_Caps'] font-['PT_Serif_Caption'] font-['Yanone_Kaffeesatz'] font-[Fredoka] font-['M_PLUS_Code_Latin'] font-[Syne] font-[Hurricane] font-[Calistoga] font-['Modern_Antiqua'] font-['Suez_One'] font-['Meow_Script'] font-['Poltawski_Nowy'] font-[Prata] font-[Artifika] font-['Yeseva_One'] font-['Petit_Formal_Script']">
        1
      </span>
      <span className="text-xs text-sm text-base text-lg text-xl text-2xl text-3xl text-4xl text-5xl text-6xl text-7xl text-8xl text-9xl">
        2
      </span>
      <span className="drop-shadow-md drop-shadow-xl drop-shadow-2xl drop-shadow-none">
        3
      </span>
      <span className="text-transparent text-black text-white text-slate-500 text-gray-500 text-zinc-500 text-neutral-500 text-stone-500 text-red-500 text-orange-500 text-amber-500 text-yellow-500 text-lime-500 text-green-500 text-esmerald-500 text-teal-500 text-cyan-500 text-sky-500 text-blue-500 text-indigo-500 text-violet-500 text-purple-500 text-fuchsia-500 text-pink-500 text-rose-500">
        4
      </span>
      <span className="bg-gradient-to-t from-slate-400 to-slate-600 bg-gradient-to-t from-gray-400 to-gray-600 bg-gradient-to-t from-zinc-400 to-zinc-600 bg-gradient-to-t from-neutral-400 to-neutral-600 bg-gradient-to-t from-stone-400 to-stone-600 bg-gradient-to-t from-red-400 to-red-600 bg-gradient-to-t from-orange-400 to-orange-600 bg-gradient-to-t from-amber-400 to-amber-600 bg-gradient-to-t from-yellow-400 to-yellow-600 bg-gradient-to-t from-lime-400 to-lime-600 bg-gradient-to-t from-green-400 to-green-600 bg-gradient-to-t from-esmerald-400 to-esmerald-600 bg-gradient-to-t from-teal-400 to-teal-600 bg-gradient-to-t from-cyan-400 to-cyan-600 bg-gradient-to-t from-sky-400 to-sky-600 bg-gradient-to-t from-blue-400 to-blue-600 bg-gradient-to-t from-indigo-400 to-indigo-600 bg-gradient-to-t from-violet-400 to-violet-600 bg-gradient-to-t from-purple-400 to-purple-600 bg-gradient-to-t from-fuchsia-400 to-fuchsia-600 bg-gradient-to-t from-pink-400 to-pink-600 bg-gradient-to-t from-rose-400 to-rose-600 bg-gradient-to-t from-slate-100 to-slate-600 bg-gradient-to-t from-slate-900 to-slate-600">
        5
      </span>
      <span className="!w-[40%] !rounded-full !border-black !border-x-0">
        6
      </span>
      <span className="!bg-slate-500 bg-slate-500 text-slate-300 !text-slate-300 bg-slate-300 !bg-slate-300 text-slate-100 !text-slate-100 bg-slate-100 !bg-slate-100 bg-slate-50 bg-slate-700 !bg-slate-50 !bg-slate-700 !border-slate-700 !text-slate-700 !border-white hover:!border-slate-700 hover:!border-black hover:!border-white">
        7
      </span>
      <span className="bottom-0 top-0 font-['Source_Serif_4']">8</span>
      <span className="backdrop-blur-none backdrop-blur-sm backdrop-blur backdrop-blur-md backdrop-blur-lg backdrop-blur-xl backdrop-blur-2xl backdrop-blur-3xl">
        9
      </span>
      <span className="!rounded-tl-[5rem] !rounded-br-[5rem] rounded-tl-[5rem] rounded-br-[5rem] rounded-none rounded-sm rounded rounded-md rounded-lg rounded-xl rounded-2xl rounded-3xl rounded-full">
        10
      </span>
      <span className="text-ellipsis truncate max-w-full max-w-fit gap-y-3 !rounded-lg select-none invert !w-[40%] !w-[100%] ease-linear ease-in ease-out ease-in-out delay-100 delay-200 delay-300 delay-700 transition delay-150 duration-300 ease-in-out">
        11
      </span>
    </div>
  );
}

function loadImages() {
  return (
    <div className="absolute top-0 left-0 hidden">
      <div className="bg-[url('https://images.unsplash.com/photo-1632059368252-be6d65abc4e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')]"></div>
      {/*millcayac*/}
      <div className="bg-[url('https://images.unsplash.com/photo-1598162148064-51f41779e988?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80')]"></div>
      <div className="bg-[url('https://images.unsplash.com/photo-1631148550197-19d37c2a835e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=408&q=80')]"></div>
      {/*dr.dogo*/}
      <div className="bg-[url('https://images.unsplash.com/photo-1589652717406-1c69efaf1ff8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80')]"></div>
      {/*vienaInst*/}
      <div className="bg-[url('https://images.unsplash.com/photo-1485081669829-bacb8c7bb1f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80')]"></div>
      {/*nutri*/}
      <div className="bg-[url('https://images.unsplash.com/photo-1611077543693-a0194a16b034?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1006&q=80')]"></div>
      <div className="bg-[url('https://images.unsplash.com/photo-1587996597484-04743eeb56b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80')]"></div>
      <div className="bg-[url('https://images.unsplash.com/photo-1617957854609-873e56de0d41?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80')]"></div>
      <div className="bg-[url('https://images.unsplash.com/photo-1617884157905-b66741c4a445?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80')]"></div>
      <div className="bg-[url('https://images.unsplash.com/photo-1621054143165-33e0e77558d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80')]"></div>
      <div className="bg-[url('https://images.unsplash.com/photo-1619846227717-205b9dccac17?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80')]"></div>
      <div className="bg-[url('https://images.unsplash.com/photo-1621484488308-3fc11031f2b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80')]"></div>
      <div className="bg-[url('https://images.unsplash.com/photo-1618724980108-a4d3856fd8f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80')]"></div>
      <div className="bg-[url('https://images.unsplash.com/photo-1620882133512-5149956b1261?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80')]"></div>
      <div className="bg-[url('https://images.unsplash.com/photo-1619674072044-da7ecf3b17cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80')]"></div>
      <div className="bg-[url('https://images.unsplash.com/photo-1618897996318-5a901fa6ca71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80')]"></div>
      <div className="bg-[url('https://images.unsplash.com/photo-1619502735729-13b7525f13e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80')]"></div>
      <div className="bg-[url('https://images.unsplash.com/photo-1620278596990-fdf04885f5b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80')]"></div>
      <div className="bg-[url('https://images.unsplash.com/photo-1620706857370-e1b9770e8bb1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80')]"></div>
      <div className="bg-[url('https://images.unsplash.com/photo-1547499417-61a435d27cb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80')]"></div>
    </div>
  );
}

const popover = (
  <Popover
    id="popover-basic"
    className="bg-transparent rounded-0 border-0 !flex !flex-col gap-2"
  >
    {/* <AtButton
      level="secondary"
      iconName="shop"
      click={changeThmeStyle("petShop")}
    /> */}
    <AtButton level="secondary" iconName="setting" />
    <AtButton level="secondary" iconName="filter" />
    <AtButton level="secondary" iconName="profile" />
    <AtButton level="secondary" iconName="money" />
  </Popover>
);

function MyApp({ Component, pageProps }: AppProps) {
  pageProps.tFont = "";
  const [themeStyle, setThemeStyle] = useContext(ThemeStyleContext);

  return (
    <>
      <ThemeStyleProvider>
        <ThemeProvider>
          <LanguageProvider>
            <Layout>
              {loadTailwind()}
              {loadImages()}
              <Component {...pageProps} />
            </Layout>
          </LanguageProvider>
        </ThemeProvider>
      </ThemeStyleProvider>
    </>
  );
}

export default MyApp;
