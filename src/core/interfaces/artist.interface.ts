import { Links } from "./links.interface";
import { MetaInterface } from "./meta.interface";
import { SongInterface } from "./song.interface";

export interface ArtistInterface {
    slug: string;
    nome: string;
    info?: string;
    imagem: string;
    musicas: SongInterface[];
}

export interface ArtistResponseInterface {
    data: ArtistInterface[];
    meta: MetaInterface;
    links: Links;
}
