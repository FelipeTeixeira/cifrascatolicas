import Image, { StaticImageData } from 'next/image'
import styles from './artist-card.module.scss'

export function ArtistCard(props: {
    image: StaticImageData;
    legend: string;
}) {
    return (
        <div className={styles.artistCard}>
            <strong className={styles.legend}>
                {props.legend}
            </strong>
            <Image src={props.image} alt='Logo do Cifras Católicas' />
        </div>
    )
}

ArtistCard.defaultProps = {
    legend: '',
};
