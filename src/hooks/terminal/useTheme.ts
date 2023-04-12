import { useEffect, useState } from "react";

import { DefaultTheme } from "styled-components";

import themes from "src/components/terminal/styles/themes";
import { setToLS, getFromLS } from "../../utils/terminal/storage";

declare module 'styled-components' {
  export interface DefaultTheme {
    id: string;
    name: string;

    colors: {
      body: string;
      main?: string;
      secondary: string;
      text: Record<number, string>;
      primary: string;
      scrollHandle: string;
      scrollHandleHover: string;
    };
  }
}

export const useTheme = () => {
  const [theme, setTheme] = useState<DefaultTheme>(themes.dark);
  const [themeLoaded, setThemeLoaded] = useState(false);

  const setMode = (mode: DefaultTheme) => {
    setToLS("tsn-theme", mode.name);
    setTheme(mode);
  };

  useEffect(() => {
    const localThemeName = getFromLS("tsn-theme");
    localThemeName ? setTheme(themes[localThemeName]) : setTheme(themes.dark);
    setThemeLoaded(true);
  }, []);

  return { theme, themeLoaded, setMode };
};
