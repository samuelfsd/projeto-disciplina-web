import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";

interface IThemeProps  { 
  children:ReactNode
}

const fontSizes: any = [14,18,20,96]
fontSizes.body = fontSizes[0]
fontSizes.bodyLarge = fontSizes[1]
fontSizes.bodyExtraLarge = fontSizes[2]
fontSizes.displayLarge = fontSizes[3]

const primary = '#2567b4';
const secondary = '#f9b531'

const theme = {
  fontSizes,
  fonts: {
    primary: 'Raleway', 
    secondary: 'Roboto',
  },
  colors: {
    primary,
    secondary,
  }
}

export type themeType = typeof theme;

export const Theme = ({ children }: IThemeProps) => {
  return (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  )
}