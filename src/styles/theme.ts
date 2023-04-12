import { extendTheme, theme } from "@chakra-ui/react";


const colors = {
    ...theme.colors.purple
}
const useTheme = extendTheme({colors})

export default useTheme