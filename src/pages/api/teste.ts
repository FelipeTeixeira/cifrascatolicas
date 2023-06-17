import type { NextApiRequest, NextApiResponse } from 'next';
const superagent = require('superagent');

type Data = {
    slug: string;
    nome: string;
    cifra: string;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    // TODO Alterar depois
    const url =
        'http://api.musicasparamissa.com.br/cifrascatolicas/artistas/daniel-de-angeles/acolhe-o-deus-o-nosso-canto';
    superagent.get(url).then((response: any) => {
        res.status(200).send(response.text);
    });
}
