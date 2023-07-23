import {
    ArtistInterface,
    ArtistResponseInterface,
} from '@interfaces/artist.interface';
import { MusicDetailsInterface } from '@interfaces/song.interface';
import { setURLParams } from '@utils/url-params.util';

const API = process.env.API;
const url = 'artistas';

export async function getSong(
    artist: string,
    song: string
): Promise<MusicDetailsInterface> {
    const response = await fetch(`${API}/${url}/${artist}/${song}`);
    return await response.json();
}

export async function getAllArtist(
    page = 1,
    limit = 20
): Promise<ArtistResponseInterface> {
    const params: Record<string, string> = {
        page: page.toString(),
        limit: limit.toString()
    };

    const response = await fetch(`${API}/${url}${setURLParams(params)}`);
    return await response.json();
}

export async function getArtistDetails(slug: string): Promise<ArtistInterface> {
    const response = await fetch(`${API}/${url}/${slug}`);
    return await response.json();
}
