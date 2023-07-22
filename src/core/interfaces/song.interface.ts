import { StaticImageData } from 'next/image';

// TODO - excluir depois
export interface Song {
    song: string;
    artist: string;
    image?: StaticImageData;
}

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
