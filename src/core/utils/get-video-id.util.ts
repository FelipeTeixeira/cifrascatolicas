export function getVideoId(video: string): string {
    if (video.includes('youtu.be')) {
        return video.split('youtu.be').at(-1) as string;
    } else {
        const videoId = video.split('v=')[1];
        const ampersandPosition = videoId.indexOf('&');
        const versaoString =
            ampersandPosition !== -1
                ? videoId.substring(0, ampersandPosition)
                : videoId;

        return versaoString;
    }
}
