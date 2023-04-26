import { StaticImageData } from "next/image";

export interface Song {
    music: string;
    artist: string;
    image?: StaticImageData;
}
