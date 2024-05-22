'use client';

import React, { createContext, useState, ReactNode } from 'react';
import { ThemeProvider, Theme } from '@mui/material/styles';
import { lightTheme, darkTheme } from './theme';

interface IThemeContext {
  theme: Theme;
  toggleTheme: () => void;
}

interface IThemeProviderProps {
  children: ReactNode;
}

const defaultValue: IThemeContext = {
  theme: lightTheme,
  toggleTheme: () => {},
};

export const ThemeContext = createContext<IThemeContext>(defaultValue);

export const ThemeProviderContext: React.FC<IThemeProviderProps> = ({
  children,
}) => {
  const [theme, setTheme] = useState<Theme>(lightTheme);

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme.palette.mode === 'light' ? darkTheme : lightTheme
    );
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
