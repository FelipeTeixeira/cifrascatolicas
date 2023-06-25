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

export interface ArtistType {
    slug: string;
    nome: string;
    info?: string;
    musicas: ArtistaType[];
}

export async function getSong(): Promise<SongType> {
    const response = await fetch(
        `${process.env.API}/artistas/daniel-de-angeles/acolhe-o-deus-o-nosso-canto`
    );
    return await response.json();
}

export async function getAllArtist(): Promise<ArtistType[]> {
    const response = await fetch(`${process.env.API}/artistas`);
    return await response.json();
}

export async function getArtistDetails(slug: string): Promise<ArtistType> {
    const response = await fetch(`${process.env.API}/artistas/${slug}`);
    return await response.json();
}
