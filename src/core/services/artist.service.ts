import {
    ArtistInterface,
    SongDetailsInterface,
} from '@interfaces/artist.interface';

const API = process.env.API;

export async function getSong(
    artist: string,
    song: string
): Promise<SongDetailsInterface> {
    const response = await fetch(`${API}/artistas/${artist}/${song}`);
    return await response.json();
}

export async function getAllArtist(): Promise<ArtistInterface[]> {
    const response = await fetch(`${API}/artistas`);
    return await response.json();
}

export async function getArtistDetails(slug: string): Promise<ArtistInterface> {
    const response = await fetch(`${API}/artistas/${slug}`);
    return await response.json();
}
