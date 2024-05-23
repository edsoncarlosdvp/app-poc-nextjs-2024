'use client';

import React, { createContext, useState, ReactNode } from 'react';
import { ThemeProvider, Theme } from '@mui/material/styles';
import { lightTheme, darkTheme } from './theme';

interface IThemeContext {
  theme: Theme;
  themeName?: string;
  toggleTheme: () => void;
}

interface IThemeProviderProps {
  children: ReactNode;
}

const defaultValue: IThemeContext = {
  theme: lightTheme,
  themeName: 'Light',
  toggleTheme: () => {},
};

export const ThemeContext = createContext<IThemeContext>(defaultValue);

export const ThemeProviderContext: React.FC<IThemeProviderProps> = ({
  children,
}) => {
  const [theme, setTheme] = useState<Theme>(lightTheme);
  const [themeName, setThemeName] = useState<string>('Light');

  const toggleTheme = () => {
    if (themeName === 'Light') {
      setTheme(darkTheme);
      setThemeName('Dark');
    } else {
      setTheme(lightTheme);
      setThemeName('Light');
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, themeName, toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
