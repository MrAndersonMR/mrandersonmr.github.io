// import React, { useContext, useState } from "react";

// import { Theme } from "../interfaces/index";

// export const ThemeContext = React.createContext<Theme>("dark");
// const ThemeUpdateContext = React.createContext((th?: Theme) => {
//   alert(th);
// });

// export function useTheme() {
//   return useContext(ThemeContext);
// }

// export function useThemeUpdate() {
//   return useContext(ThemeUpdateContext);
// }

// export function ThemeProvider({ children }: { children: any }) {
//   const [theme, setTheme] = useState<Theme>("light");

//   function toggleTheme(theme?: Theme) {
//     if (theme) setTheme(theme);
//     else setTheme("light");
//   }

//   return (
//     <ThemeContext.Provider value={theme}>
//       <ThemeUpdateContext.Provider value={toggleTheme}>
//         {children}
//       </ThemeUpdateContext.Provider>
//     </ThemeContext.Provider>
//   );
// }

import React, { Dispatch, SetStateAction, useState } from "react";

import { Theme } from "../interfaces/index";

export const ThemeContext = React.createContext<
  [Theme, Dispatch<SetStateAction<Theme>>]
>(["light", (e) => {}]);

export function ThemeProvider({ children }: { children: any }) {
  const [theme, setTheme] = useState<Theme>("light");

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      {children}
    </ThemeContext.Provider>
  );
}
