import Image, { StaticImageData } from 'next/image'
import styles from './thumbnail.module.scss'

export function Thumbnail(props: {
    image: StaticImageData,
    song: string;
    artist: string;
}) {
    return (
        <div className={styles.thumbnail}>
            <Image src={props.image} alt='' />

            <p className={styles.description}>
                <strong>
                    {props.song}
                </strong>
                {props.artist}
            </p>
        </div>
    )
}
