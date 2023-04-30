import Image, { StaticImageData } from 'next/image'
import styles from './artist-card.module.scss'

// TODO - mudar nome pra ficar correto
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
