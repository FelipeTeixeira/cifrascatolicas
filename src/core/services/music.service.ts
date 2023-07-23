import { MusicResponseInterface } from '@interfaces/song.interface';
import { setURLParams } from '@utils/url-params.util';

const API = process.env.API;

export async function getAllMusics(
    page = 1,
    start = 0,
    limit = 20
): Promise<MusicResponseInterface> {
    const params: Record<string, string> = {
        page: page.toString(),
        start: start.toString(),
        limit: limit.toString(),
        sortBy: 'visits:DESC',
    };

    const response = await fetch(`${API}/musicas${setURLParams(params)}`);
    return await response.json();
}
