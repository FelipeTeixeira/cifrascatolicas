import { ShareIcon } from '@components/icons/share-icon';
import styles from './video.module.scss'
import { CircleButton } from '@components/circle-button/circle-button'
import { PlaylistIcon } from '@components/icons/playlist-icon';


export function Video() {
    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <h3 className={styles.soung}>
                    <strong>Água viva</strong> - Adriana Gil
                </h3>

                <CircleButton onClick={() => alert('teste')} color='white' hasBorder={false}>
                    <PlaylistIcon />
                </CircleButton>

                <CircleButton onClick={() => alert('teste')} color='white' hasBorder={false}>
                    <ShareIcon />
                </CircleButton>
            </div>

            <div className={styles.video}>
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/0q6udS0A4HY"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
                </iframe>
            </div>
        </div>
    )
}
