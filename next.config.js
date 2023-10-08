/*
    TELA DA MUSICA
    - quando mexer na paginação, exibir um loading de alguma forma.
    - criar modal frella do Txai, add no final da pagina
    - cadastrar repertorio no storage
    - fazer modal de busca funcionar com google
    - sujerir pra Clara botoes do lado



    - fazer acoes da tela da musica.
        precisa do back-end
            - TOM
            - acordes
            - original e simplificada

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
            {
                protocol: 'https',
                hostname: 'static.cifrascatolicas.com.br',
                port: '',
                pathname: '/imagens/**',
            },
        ],
    },
}

module.exports = nextConfig
