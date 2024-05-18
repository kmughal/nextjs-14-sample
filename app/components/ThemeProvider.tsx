"use client";

import React from "react";

type Theme = {
    color: {
        primary: string;
        secondary: string;
    }
}

const defaultTheme: Theme = {
    color: {
        primary: "red",
        secondary: "blue"
    }
}

const ThemeContext = React.createContext(defaultTheme);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    return <ThemeContext.Provider value={defaultTheme}>
        {children}
    </ThemeContext.Provider>
}

export const useTheme = () => {
    return React.useContext(ThemeContext);
}