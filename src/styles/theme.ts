import { extendTheme, theme, type ThemeConfig } from "@chakra-ui/react";

const customTheme = {
  colors: {
    purple: {
      ...theme.colors.purple,
      500: "#8257e5",
    },
    gray: {
      ...theme.colors.gray,
      300: "#e1e1e6",
      600: "#29292e",
      700: "#202024",
      800: "#121214",
    },
  },
  fontWeights: {
    normal: 400,
    medium: 500,
    bold: 700,
  },
  radii: {
    sm: "5px",
    md: "8px",
  },
  fonts: {
    body: "Roboto, system-ui, sans-serif",
    heading: "Roboto, system-ui, sans-serif",
    mono: "Menlo, monospace",
  },
};

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};
const useTheme = extendTheme(customTheme, { config });

export default useTheme;
