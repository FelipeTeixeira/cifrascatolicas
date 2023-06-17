export function getVideoId(video: string): string {
    const videoId = video.split('v=')[1];
    const ampersandPosition = videoId.indexOf('&');
    const versaoString = ampersandPosition !== -1 ? videoId.substring(0, ampersandPosition) : videoId;
    return versaoString;
}
