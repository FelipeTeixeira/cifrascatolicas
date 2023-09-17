import { Footer } from '@components/footer/footer'
import { Header } from '@components/header/header'
import '@styles/globals.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }: AppProps) {
    const router = useRouter();

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />
            </Head>
            <Header
                hasBackground={router.pathname !== '/'}
                hideMenuMobile={pageProps?.hideMenuMobile}
            />
            <Component {...pageProps} />
            <Footer />
        </>
    )
}
