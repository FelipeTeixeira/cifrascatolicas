import Image, { StaticImageData } from 'next/image'
import styles from './artist-card.module.scss'

export function ArtistCard(props: {
    image: StaticImageData;
    name: string;
}) {
    return (
        <div className={styles.artistCard}>
            <strong className={styles.name}>
                {props.name}
            </strong>
            <Image src={props.image} alt='Logo do Cifras Católicas' />
        </div>
    )
}
