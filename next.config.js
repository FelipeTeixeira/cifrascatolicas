/*
- colocar links na pagina da home pra cada section

ALINHAR GUSTAVO
- API/musicas, nao precisa retornar letra e cifra


https://g1k8r5gt46.execute-api.us-east-1.amazonaws.com/prod/cc/musicas?sortBy=visits:DESC
https://g1k8r5gt46.execute-api.us-east-1.amazonaws.com/prod/cc/swagger/


ARTISTAS
    Listagem artistas
    https://g1k8r5gt46.execute-api.us-east-1.amazonaws.com/prod/api/cifrascatolicas/artistas


TELA DA MUSICA
    - Fazer POST
*/



/*
    - criar modal frella do Txai, add no final da pagina
    - cadastrar repertorio no storage
    - colocar as meta tags de facebook e tals

    - integrar a home com mock
    - colocar face id do facebook na pagina
    - fazer acoes da tela da musica.
    - fazer modal de busca funcionar com google
    - sujerir pra Clara botoes do lado
    - remover modal de busca e deixar direto na caixa

    GUSTAVO
    - endpoint do artista retorna a imagem de cada musica
    - endpoint do artista retornar os albuns
    - http://localhost:3000/anjos-de-resgate/a-voz-que-te-chama - HTML zoado por ter uma <tag> b como pai de tudo



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
