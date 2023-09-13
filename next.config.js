/*
    TELA DA MUSICA
    - quando mexer na paginação, exibir um loading de alguma forma.
    - criar modal frella do Txai, add no final da pagina
    - cadastrar repertorio no storage
    - colocar as meta tags de facebook e tals

    - colocar face id do facebook na pagina
    - fazer acoes da tela da musica.
    - fazer modal de busca funcionar com google
    - sujerir pra Clara botoes do lado


    BOTAO VOLTAR, testar depois quando tiver mais paginas
        const previousUrl = context.req.headers.referer ? new URL(context.req.headers.referer).pathname : `/${context.resolvedUrl.split('/')[1]}`;
        return { props: { artist, previousUrl } }
*/


/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cifrascatolicas.com.br',
                port: '',
                pathname: '/imagens/**',
            },
        ],
    },
}

module.exports = nextConfig
