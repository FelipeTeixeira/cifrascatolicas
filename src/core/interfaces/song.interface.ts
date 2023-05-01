import { StaticImageData } from "next/image";

export interface Song {
    song: string;
    artist: string;
    image?: StaticImageData;
}
