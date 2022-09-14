import Head from 'next/head'
import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { useEffect } from 'react';
import TagManager from 'react-gtm-module';

import theme from 'styles/theme'

function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-NRPSJ6T' });
  }, []);
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Head>
        <title>Cifras Católicas</title>
        <meta name="description" content="O melhor site de cifras para tocar e cantar músicas católicas" />
      </Head>

      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default App
