import Image, { StaticImageData } from 'next/image'
import styles from './thumbnail.module.scss'
import { Avatar } from '@components/avatar/avatar';

export function Thumbnail(props: {
    image: StaticImageData,
    song: string;
    artist: string;
}) {
    return (
        <div className={styles.thumbnail}>
            <span className={styles.image}>
                <Avatar
                    image={props.image}
                    alt={`${props.song} ${props.artist}`}
                />
            </span>

            <p className={styles.description}>
                <strong>
                    {props.song}
                </strong>
                {props.artist}
            </p>
        </div>
    )
}
