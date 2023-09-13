// import React, { useContext, useState } from "react";

// import { ThemeStyle } from "../interfaces/index";

// export const ThemeStyleContext = React.createContext<ThemeStyle>({
//   themeName: "",
//   texts: {
//     title: "l|CZAR+",
//     subtitle: "messageNoLogged",
//     labels: [],
//     contacts: [],
//     quotes: [],
//     links: ["lmb|messageNoLogged"],
//   },
//   images: {
//     bg: {
//       shadow: "",
//       radius: "diagonal",
//       decoration: "",
//       animation: "",
//       url: "https://images.unsplash.com/photo-1601106315698-ee39716dd442?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
//     },
//     navBar: {
//       shadow: "",
//       radius: "diagonal",
//       decoration: "",
//       animation: "",
//       url: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1031&q=80",
//     },
//     defaultProfile: {
//       shadow: "",
//       radius: "diagonal",
//       decoration: "",
//       animation: "",
//       url: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1031&q=80",
//     },
//   },
//   button: {
//     main: {
//       color: [],
//       bg: "",
//       radius: "diagonal",
//       shadow: "",
//       size: "",
//       hover: "",
//       animation: "",
//       decoration: "",
//     },
//     secondary: {
//       color: [],
//       bg: "",
//       radius: "full",
//       shadow: "",
//       size: "",
//       hover: "",
//       animation: "fade-in",
//       decoration: "",
//     },
//   },
//   text: {
//     main: {
//       font: "Gloock",
//       size: "",
//       color: [],
//       animation: "",
//       shadow: "",
//     },
//     secondary: {
//       font: "Gloock",
//       size: "",
//       color: [],
//       animation: "",
//       shadow: "",
//     },
//     base: {
//       font: "'Yanone_Kaffeesatz'",
//       size: "",
//       color: [],
//       animation: "",
//       shadow: "",
//     },
//     sub: {
//       font: "'Nixie_One'",
//       size: "",
//       color: [],
//       animation: "",
//       shadow: "",
//     },
//   },
//   form: {
//     main: {
//       color: [],
//       bg: "",
//       size: "",
//       shadow: "",
//       animation: "",
//       decoration: "",
//       radius: "",
//     },
//     secondary: {
//       color: [],
//       bg: "",
//       size: "",
//       shadow: "",
//       animation: "",
//       decoration: "",
//       radius: "",
//     },
//   },
//   icon: {
//     main: {
//       style: "thin",
//       color: [],
//       size: "",
//       bg: "lime-500",
//       radius: "lg",
//       shadow: "",
//       animation: "",
//     },
//     secondary: {
//       style: "outline",
//       color: [],
//       size: "",
//       bg: "",
//       radius: "none",
//       shadow: "",
//       animation: "",
//     },
//   },
//   image: {
//     shadow: "",
//     radius: "diagonal",
//     decoration: "",
//     animation: "",
//   },
//   mainComponent: {
//     layout: "",
//     bg: "",
//     size: "",
//     shadow: "",
//     radius: "",
//     animation: "",
//     decoration: "",
//   },
//   secondaryComponent: {
//     layout: "",
//     bg: "lime-500",
//     size: "",
//     shadow: "",
//     radius: "diagonal",
//     animation: "",
//     decoration: "",
//   },
//   specialComponent: {
//     layout: "",
//     bg: "",
//     size: "",
//     shadow: "",
//     radius: "",
//     animation: "",
//     decoration: "",
//   },
//   block: {
//     layout: "",
//     bg: "",
//     shadow: "",
//     radius: "",
//     decoration: "",
//     animation: "",
//   },
//   modal: {
//     layout: "",
//     bg: "",
//     shadow: "",
//     radius: "",
//     decoration: "",
//     animation: "",
//   },
//   offcanvas: {
//     layout: "",
//     bg: "",
//     shadow: "",
//     radius: "",
//     decoration: "",
//     animation: "",
//   },
//   navbar: {
//     layout: "",
//     bg: "",
//     shadow: "",
//     radius: "",
//     decoration: "",
//     animation: "",
//   },
// });

// const ThemeStyleUpdateContext = React.createContext((th?: ThemeStyle) => {
//   alert(th);
// });

// export function useThemeStyle() {
//   return useContext(ThemeStyleContext);
// }

// export function useThemeStyleUpdate() {
//   return useContext(ThemeStyleUpdateContext);
// }

// export function ThemeStyleProvider({ children }: { children: any }) {
//   const [themeStyle, setThemeStyle] = useState<ThemeStyle>({
//     themeName: "",
//     texts: {
//       title: "l|CZAR+",
//       subtitle: "messageNoLogged",
//       labels: [],
//       contacts: [],
//       quotes: [],
//       links: ["lmb|messageNoLogged"],
//     },
//     images: {
//       bg: {
//         shadow: "",
//         radius: "diagonal",
//         decoration: "",
//         animation: "",
//         url: "https://images.unsplash.com/photo-1601106315698-ee39716dd442?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
//       },
//       navBar: {
//         shadow: "",
//         radius: "diagonal",
//         decoration: "",
//         animation: "",
//         url: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1031&q=80",
//       },
//       defaultProfile: {
//         shadow: "",
//         radius: "diagonal",
//         decoration: "",
//         animation: "",
//         url: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1031&q=80",
//       },
//     },
//     button: {
//       main: {
//         color: [],
//         bg: "",
//         radius: "diagonal",
//         shadow: "",
//         size: "",
//         hover: "",
//         animation: "",
//         decoration: "",
//       },
//       secondary: {
//         color: [],
//         bg: "",
//         radius: "full",
//         shadow: "",
//         size: "",
//         hover: "",
//         animation: "fade-in",
//         decoration: "",
//       },
//     },
//     text: {
//       main: {
//         font: "Jost",
//         size: "8xl",
//         color: ["lime-500", "pink-500"],
//         animation: "",
//         shadow: "lg",
//       },
//       secondary: {
//         font: "'Source_Serif_4'",
//         size: "3xl",
//         color: [],
//         animation: "",
//         shadow: "",
//       },
//       base: {
//         font: "'Source_Serif_4'",
//         size: "3xl",
//         color: ["lime-500", "pink-500"],
//         animation: "",
//         shadow: "",
//       },
//       sub: {
//         font: "",
//         size: "",
//         color: [],
//         animation: "",
//         shadow: "",
//       },
//     },
//     form: {
//       main: {
//         color: [],
//         bg: "",
//         size: "",
//         shadow: "",
//         animation: "",
//         decoration: "",
//         radius: "",
//       },
//       secondary: {
//         color: [],
//         bg: "",
//         size: "",
//         shadow: "",
//         animation: "",
//         decoration: "",
//         radius: "",
//       },
//     },
//     icon: {
//       main: {
//         style: "default",
//         color: [],
//         size: "",
//         bg: "lime-500",
//         radius: "lg",
//         shadow: "",
//         animation: "",
//       },
//       secondary: {
//         style: "default",
//         color: [],
//         size: "",
//         bg: "",
//         radius: "none",
//         shadow: "",
//         animation: "",
//       },
//     },
//     image: {
//       shadow: "",
//       radius: "diagonal",
//       decoration: "",
//       animation: "",
//     },
//     mainComponent: {
//       layout: "",
//       bg: "",
//       size: "",
//       shadow: "",
//       radius: "",
//       animation: "",
//       decoration: "",
//     },
//     secondaryComponent: {
//       layout: "",
//       bg: "lime-500",
//       size: "",
//       shadow: "",
//       radius: "diagonal",
//       animation: "",
//       decoration: "",
//     },
//     specialComponent: {
//       layout: "",
//       bg: "",
//       size: "",
//       shadow: "",
//       radius: "",
//       animation: "",
//       decoration: "",
//     },
//     block: {
//       layout: "",
//       bg: "",
//       shadow: "",
//       radius: "",
//       decoration: "",
//       animation: "",
//     },
//     modal: {
//       layout: "",
//       bg: "",
//       shadow: "",
//       radius: "",
//       decoration: "",
//       animation: "",
//     },
//     offcanvas: {
//       layout: "",
//       bg: "",
//       shadow: "",
//       radius: "",
//       decoration: "",
//       animation: "",
//     },
//     navbar: {
//       layout: "",
//       bg: "",
//       shadow: "",
//       radius: "",
//       decoration: "",
//       animation: "",
//     },
//   });

//   function toggleThemeStyle(themeStyle?: ThemeStyle) {
//     if (themeStyle) setThemeStyle(themeStyle);
//     else
//       setThemeStyle({
//         themeName: "",
//         texts: {
//           title: "l|CZAR+",
//           subtitle: "messageNoLogged",
//           labels: [],
//           contacts: [],
//           quotes: [],
//           links: ["lmb|messageNoLogged"],
//         },
//         images: {
//           bg: {
//             shadow: "",
//             radius: "diagonal",
//             decoration: "",
//             animation: "",
//             url: "https://images.unsplash.com/photo-1601106315698-ee39716dd442?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
//           },
//           navBar: {
//             shadow: "",
//             radius: "diagonal",
//             decoration: "",
//             animation: "",
//             url: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1031&q=80",
//           },
//           defaultProfile: {
//             shadow: "",
//             radius: "diagonal",
//             decoration: "",
//             animation: "",
//             url: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1031&q=80",
//           },
//         },
//         button: {
//           main: {
//             color: [],
//             bg: "",
//             radius: "diagonal",
//             shadow: "",
//             size: "",
//             hover: "",
//             animation: "",
//             decoration: "",
//           },
//           secondary: {
//             color: [],
//             bg: "",
//             radius: "full",
//             shadow: "",
//             size: "",
//             hover: "",
//             animation: "fade-in",
//             decoration: "",
//           },
//         },
//         text: {
//           main: {
//             font: "Jost",
//             size: "8xl",
//             color: ["lime-500", "pink-500"],
//             animation: "",
//             shadow: "",
//           },
//           secondary: {
//             font: "'Source_Serif_4'",
//             size: "3xl",
//             color: [],
//             animation: "",
//             shadow: "",
//           },
//           base: {
//             font: "'Source_Serif_4'",
//             size: "3xl",
//             color: ["lime-500", "pink-500"],
//             animation: "",
//             shadow: "",
//           },
//           sub: {
//             font: "",
//             size: "",
//             color: [],
//             animation: "",
//             shadow: "",
//           },
//         },
//         form: {
//           main: {
//             color: [],
//             bg: "",
//             size: "",
//             shadow: "",
//             animation: "",
//             decoration: "",
//             radius: "",
//           },
//           secondary: {
//             color: [],
//             bg: "",
//             size: "",
//             shadow: "",
//             animation: "",
//             decoration: "",
//             radius: "",
//           },
//         },
//         icon: {
//           main: {
//             style: "default",
//             color: [],
//             size: "",
//             bg: "lime-500",
//             radius: "lg",
//             shadow: "",
//             animation: "",
//           },
//           secondary: {
//             style: "default",
//             color: [],
//             size: "",
//             bg: "",
//             radius: "none",
//             shadow: "",
//             animation: "",
//           },
//         },
//         image: {
//           shadow: "",
//           radius: "diagonal",
//           decoration: "",
//           animation: "",
//         },
//         mainComponent: {
//           layout: "",
//           bg: "",
//           size: "",
//           shadow: "",
//           radius: "",
//           animation: "",
//           decoration: "",
//         },
//         secondaryComponent: {
//           layout: "",
//           bg: "lime-500",
//           size: "",
//           shadow: "",
//           radius: "diagonal",
//           animation: "",
//           decoration: "",
//         },
//         specialComponent: {
//           layout: "",
//           bg: "",
//           size: "",
//           shadow: "",
//           radius: "",
//           animation: "",
//           decoration: "",
//         },
//         block: {
//           layout: "",
//           bg: "",
//           shadow: "",
//           radius: "",
//           decoration: "",
//           animation: "",
//         },
//         modal: {
//           layout: "",
//           bg: "",
//           shadow: "",
//           radius: "",
//           decoration: "",
//           animation: "",
//         },
//         offcanvas: {
//           layout: "",
//           bg: "",
//           shadow: "",
//           radius: "",
//           decoration: "",
//           animation: "",
//         },
//         navbar: {
//           layout: "",
//           bg: "",
//           shadow: "",
//           radius: "",
//           decoration: "",
//           animation: "",
//         },
//       });
//   }

//   return (
//     <ThemeStyleContext.Provider value={themeStyle}>
//       <ThemeStyleUpdateContext.Provider value={toggleThemeStyle}>
//         {children}
//       </ThemeStyleUpdateContext.Provider>
//     </ThemeStyleContext.Provider>
//   );
// }

import React, { Dispatch, SetStateAction, useState } from "react";

import { ThemeStyle } from "../interfaces/index";

const defaultTheme: ThemeStyle = {
  themeName: "czar+",
  texts: {
    logo: (
      <h1 className={["font-[Jost] text-white m-2"].join(" ")}>
        <span className="inline-block scale-x-[-1]" style={{ filter: "fliph" }}>
          C
        </span>
        ZAR+
      </h1>
    ),
    title: "l|:+54 11 5508-2980",
    subtitle: "l|:enviame una mensaje por whatsapp | buenos aires - argentina",
    messages: [],
    labels: [],
    contacts: [],
    quotes: [],
    links: ["home"],
    linksActions: ["lmb|:messageNoLogged"],
  },
  layouts: {
    base: ["navbar", "head"],
    navbar: {
      placement: "top",
      iconsName: undefined,
      variant: undefined,
    },
    head: {
      css: "text-center",
    },
  },
  definitions: {
    navbar: {
      additionalButtons: [],
      links: [],
    },
    grid: { filter: "" },
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
      url: "https://images.unsplash.com/photo-1547499417-61a435d27cb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80", //"https://images.unsplash.com/photo-1598162148064-51f41779e988?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
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
      font: "Jost",
      size: "5xl",
      color: ["white", "sky-500"],
      animation: "",
      shadow: "",
      decoration: "",
    },
    secondary: {
      font: "'Yanone_Kaffeesatz'",
      size: "",
      color: ["white", "sky-500"],
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
      font: "'Yanone_Kaffeesatz'",
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
    bg: ["dark", "dark"],
    shadow: "",
    radius: "",
    decoration: "",
    animation: "",
  },
};

export const ThemeStyleContext = React.createContext<
  [ThemeStyle, Dispatch<SetStateAction<ThemeStyle>>]
>([defaultTheme, (e) => {}]);

export function ThemeStyleProvider({ children }: { children: any }) {
  const [themeStyle, setThemeStyle] = useState<ThemeStyle>(defaultTheme);

  return (
    <ThemeStyleContext.Provider value={[themeStyle, setThemeStyle]}>
      {children}
    </ThemeStyleContext.Provider>
  );
}
