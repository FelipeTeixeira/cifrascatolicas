export interface SongInterface {
    info: string;
    nome: string;
    slug: string;
}

export interface SongDetailsInterface {
    artista: SongInterface;
    cifra: string;
    info: string;
    nome: string;
    slug: string;
    video?: string;
}

export interface ArtistInterface {
    slug: string;
    nome: string;
    info?: string;
    musicas: SongInterface[];
}
