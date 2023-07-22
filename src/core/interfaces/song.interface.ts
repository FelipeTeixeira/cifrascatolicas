import { StaticImageData } from 'next/image';
import { MetaInterface } from './meta.interface';
import { Links } from './links.interface';

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

export interface MusicDetailsInterface {
    artista: SongInterface;
    cifra: string;
    info: string;
    nome: string;
    slug: string;
    video?: string;
}

export interface MusicResponseInterface {
    data: MusicDetailsInterface[];
    meta: MetaInterface;
    links: Links;
}
