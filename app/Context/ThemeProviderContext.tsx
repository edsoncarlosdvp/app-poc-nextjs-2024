import { createContext, useState } from 'react';

interface IThemeContext {
  theme: string;
  toggleTheme: () => void;
}

interface IThemeProviderContext {
  children: React.ReactNode;
}

const defaultValue: IThemeContext = {
  theme: 'light',
  toggleTheme: () => {},
};

export const ThemeContext = createContext<IThemeContext>(defaultValue);

export const ThemeProviderContext = ({ children }: IThemeProviderContext) => {
  const [theme, setTheme] = useState<string>('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
