import { NextApiRequest, NextApiResponse } from 'next';

const API = process.env.NEXT_PUBLIC_API;

// Bff criado por questão de problemas no Cors no front-end
export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const {
            query: { slug_musica, artista },
        } = req;

        const url = `${API}/artistas/${artista}/musicas/${slug_musica}`;

        const fetchResponse = await fetch(url);
        const responseData = await fetchResponse.json();

        res.status(fetchResponse.status).json(responseData);
    } catch (error) {
        res.status(500).json({ error: 'Ocorreu um erro ao buscar os dados.' });
    }
};
