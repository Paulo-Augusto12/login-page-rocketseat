import { ColorModeScript } from '@chakra-ui/react'
import { Html, Head, Main, NextScript } from 'next/document'
import useTheme from '../styles/theme'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <ColorModeScript initialColorMode={useTheme.config.initialColorMode}/>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
