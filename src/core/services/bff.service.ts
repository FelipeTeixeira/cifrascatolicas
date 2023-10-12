import { MusicDetailsInterface, MusicResponseInterface } from '@interfaces/song.interface';
import { setURLParams } from '@utils/url-params.util';

const API = process.env.NEXT_PUBLIC_API + 'url';

export async function bffGetAllMusics(
    search = '',
    page = 1,
    start = 0,
    limit = 20,
): Promise<MusicResponseInterface> {
    const params: Record<string, string> = {
        search,
        page: page.toString(),
        start: start.toString(),
        limit: limit.toString(),
        sortBy: 'visits:DESC',
    };
    const response = await fetch(`api/bff/musicas${setURLParams(params)}`);
    return await response.json();
}

export async function bffGetArtistSong(
    artista: string,
    slug_musica: string
): Promise<MusicDetailsInterface> {
    const response = await fetch(`api/bff/artistas/${artista}/${slug_musica}`);
    return await response.json();
}
