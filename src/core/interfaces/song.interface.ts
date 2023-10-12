import { MetaInterface } from './meta.interface';
import { Links } from './links.interface';

export interface SongInterface {
    info: string;
    nome: string;
    slug: string;
    imagem: string;
}

export interface MusicDetailsInterface {
    artista: SongInterface;
    cifra: string;
    letra: string;
    info: string;
    nome: string;
    slug: string;
    visits: string;
    imagem: string;
    code_video?: string;
    link_video?: string;
}

export interface MusicResponseInterface {
    data: MusicDetailsInterface[];
    meta: MetaInterface;
    links: Links;
}
