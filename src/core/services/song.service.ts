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

export async function getSong(): Promise<SongType> {
    const res = await fetch(`${process.env.API}/teste`);
    const song: SongType = await res.json();
    return song;
}
