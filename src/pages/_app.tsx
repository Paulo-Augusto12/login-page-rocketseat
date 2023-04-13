import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import useTheme from '../styles/theme'

export default function App({ Component, pageProps }: AppProps) {
  return (
  <ChakraProvider theme={useTheme} >
    <Component {...pageProps} />
  </ChakraProvider>
  
  )
}
