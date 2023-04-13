import { extendTheme, theme, type ThemeConfig } from "@chakra-ui/react";


const colors = {
    purple: {
        ...theme.colors.purple,
        900: "#e879"
    }
}
const config: ThemeConfig = {
    initialColorMode: 'dark',
    useSystemColorMode: false
}
const useTheme = extendTheme({colors, config})

export default useTheme