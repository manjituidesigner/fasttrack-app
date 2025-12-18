import { createContext, useMemo } from "react";
import { useColorScheme } from "react-native";
import type { PropsWithChildren } from "react";
import type { AppTheme } from "./themes";
import { darkTheme, lightTheme } from "./themes";

export const ThemeContext = createContext<AppTheme>(lightTheme);

export function ThemeProvider({ children }: PropsWithChildren) {
  const scheme = useColorScheme();

  const theme = useMemo<AppTheme>(() => {
    return scheme === "dark" ? lightTheme : lightTheme;
  }, [scheme]);

  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
}
