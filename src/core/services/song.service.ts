export type ArtistaType = {
    info: string;
    nome: string;
    slug: string;
};

export type SongType = {
    artista: ArtistaType;
    cifra: string;
    info: string;
    nome: string;
    slug: string;
    video: string;
};

export interface Artist {
    slug: string;
    nome: string;
    info?: string;
}

export async function getSong(): Promise<SongType> {
    const response = await fetch(
        `${process.env.API}/artistas/daniel-de-angeles/acolhe-o-deus-o-nosso-canto`
    );
    return await response.json();
}

export async function getAllArtist(): Promise<Artist[]> {
    const response = await fetch(`${process.env.API}/artistas`);
    return await response.json();
}
