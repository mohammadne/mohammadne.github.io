import type { NextPage } from "next";

import AppHead from "src/components/AppHead";
import Footer from "src/components/Footer";
import LinkButton from "src/components/LinkButton";
import Loader from "src/components/Loader";

import { meta } from "src/pages";
import { createContext, useEffect, useState } from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";
import { useTheme } from "../../hooks/terminal/useTheme";
import GlobalStyle from "../../components/terminal/styles/GlobalStyle";
import Terminal from "../../components/terminal/Terminal";

export const themeContext = createContext<
    ((switchTheme: DefaultTheme) => void) | null
>(null);

const Page: NextPage = () => {
    // themes
    const { theme, themeLoaded, setMode } = useTheme();
    const [selectedTheme, setSelectedTheme] = useState(theme);

    // Disable browser's default behavior
    // to prevent the page go up when Up Arrow is pressed
    useEffect(() => {
        window.addEventListener(
            "keydown",
            e => {
                ["ArrowUp", "ArrowDown"].indexOf(e.code) > -1 && e.preventDefault();
            },
            false
        );
    }, []);

    useEffect(() => {
        setSelectedTheme(theme);
    }, [themeLoaded]);

    // Update meta tag colors when switching themes
    useEffect(() => {
        const themeColor = theme.colors?.body;

        const metaThemeColor = document.querySelector("meta[name='theme-color']");
        const maskIcon = document.querySelector("link[rel='mask-icon']");
        const metaMsTileColor = document.querySelector(
            "meta[name='msapplication-TileColor']"
        );

        metaThemeColor && metaThemeColor.setAttribute("content", themeColor);
        metaMsTileColor && metaMsTileColor.setAttribute("content", themeColor);
        maskIcon && maskIcon.setAttribute("color", themeColor);
    }, [selectedTheme]);

    const themeSwitcher = (switchTheme: DefaultTheme) => {
        setSelectedTheme(switchTheme);
        setMode(switchTheme);
    };

    return (
        <>
            <AppHead
                title="Terminal"
                url={`${process.env.NEXT_PUBLIC_URL}`}
                meta={meta}
            />
            <Loader>Terminal</Loader>
            <h1 className="sr-only" aria-label="Terminal Portfolio">
                Terminal Portfolio
            </h1>
            {themeLoaded && (
                <ThemeProvider theme={selectedTheme}>
                    <GlobalStyle />
                    <themeContext.Provider value={themeSwitcher}>
                        <Terminal />
                    </themeContext.Provider>
                </ThemeProvider>
            )}
        </>
    );
};

export default Page;
