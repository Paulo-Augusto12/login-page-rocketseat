import React from 'react'
import {CSSReset, ChakraProvider as ChakraThemeProvider, ColorModeProvider} from '@chakra-ui/react'
import {ThemeProvider as EmotionThemeProvider} from '@emotion/react'
import useTheme from '../../styles/theme'


export function ThemeContainer (children: React.ReactNode) {
    return (
        <ChakraThemeProvider theme={useTheme}>
            <ColorModeProvider value='dark'>
                <EmotionThemeProvider theme={useTheme}>
                    <CSSReset />
                    {children}
                </EmotionThemeProvider>
            </ColorModeProvider>
        </ChakraThemeProvider>
    )
}