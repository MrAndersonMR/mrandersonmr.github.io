import React, { ReactNode, useContext } from "react";
import Link from "next/link";
import Head from "next/head";
import { ThemeStyleContext } from "../context/themeStyleContext";
import { styleTheme } from "./config/stylesConfig";
import SecFooter from "./sections/secFooter";
import SecCzarplusPortolios from "./sections/secCzarplusPortolios";
import SecNavbar from "./sections/secNavbar";

type Props = {
  children?: ReactNode;
  title?: string;
};

function Layout({ children, title = "This is the default title" }: Props) {
  const [themeStyle, setThemeStyle] = useContext(ThemeStyleContext);

  return (
    <div className={styleTheme("bg", themeStyle.mainComponent.bg)}>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {/* <header>
      <nav>
        <Link href="/">Home</Link> | <Link href="/about">About</Link> |{" "}
        <Link href="/users">Users List</Link> |{" "}
        <a href="/api/users">Users API</a>
      </nav>
    </header> */}
      {themeStyle.layouts && themeStyle.layouts.base.includes("navbar") ? (
        <SecNavbar
          title="CZAR+"
          variant={"dark"}
          tLogo={
            // <h3 className="font-['Jost'] !mb-0 rounded-lg p-2 bg-white mx-3">
            //   <span
            //     className="inline-block scale-x-[-1]"
            //     style={{ filter: "fliph" }}
            //   >
            //     C
            //   </span>
            //   ZAR+
            // </h3>
            themeStyle.texts.logo
          }
          // collapse={true}
          fixed={
            themeStyle.layouts ? themeStyle.layouts.navbar.placement : undefined
          }
          // expand={"xxl"}
          bg={themeStyle.navbar ? themeStyle.navbar.bg : undefined}
          iconsNames={
            themeStyle.layouts ? themeStyle.layouts.navbar.iconsName : []
          }
          // iconsTypes={["ri", "ri"]}
          // icons={["RiHomeSmile2Fill", "RiHomeHeartFill"]}
          // tIcons={["Anderson", "Mendes"]}
          links={themeStyle.definitions.navbar.links}
          hrefs={["", ["", ""]]}
          additional={
            themeStyle.definitions
              ? themeStyle.definitions.navbar.additionalButtons
              : []
          }
          bgImg="https://images.unsplash.com/photo-1610409017914-3d28df640107?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1557&q=80"
        />
      ) : undefined}
      {children}
      {/* <footer>
      <hr />
      <span>Im here to stay (Footer)</span>
    </footer> */}
      {themeStyle.layouts && themeStyle.layouts.base.includes("footer") ? (
        <div
          className={[
            styleTheme("secondaryComponent", themeStyle.secondaryComponent.bg),
            "pt-6",
          ].join(" ")}
        >
          <SecFooter
            title={themeStyle.texts.logo}
            colNum={themeStyle.definitions.footer.colNum}
            colTitles={themeStyle.texts.title}
            // colTitles={["Paris", "New York", "Tokyo"]}
            colLinks={themeStyle.definitions.footer.links}
            colHrefs={["", "", ""]}
            // colLinks={[
            //   ["anderson", "mendes", "ribeiro"],
            //   ["carlos", "henrique", "lopes", "zansavio"],
            //   ["daniela", "gomes"],
            // ]}
            // colHrefs={[
            //   ["anderson", "mendes", "ribeiro"],
            //   ["carlos", "henrique", "lopes", "zansavio"],
            //   ["daniela", "gomes"],
            // ]}
          />
        </div>
      ) : undefined}
      <SecCzarplusPortolios />
    </div>
  );
}

export default Layout;
