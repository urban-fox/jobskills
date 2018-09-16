import * as React from "react";

export const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee',
  },
  dark: {
    foreground: '#ffffff',
    background: '#555555',
  },
};

export const ThemeContext = React.createContext({
  theme: themes.dark
});