import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="pt-br">
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" cross-origin="true" />
                <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Nunito+Sans:wght@400;600;700&display=swap" rel="stylesheet" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
