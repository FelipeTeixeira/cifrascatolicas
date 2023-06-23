import Image, { StaticImageData } from 'next/image'
import styles from './artist-card.module.scss'

// TODO - mudar nome pra ficar correto
export function ArtistCard(props: {
    image: StaticImageData;
    legend: string;
    style: string;
}) {
    return (
        <div className={`${styles.artistCard} ${props.style}`}>
            {props.legend ? <strong className={styles.legend}>{props.legend}</strong> : null}
            <Image src={props.image} alt='Logo do Cifras Católicas' />
        </div>
    )
}

ArtistCard.defaultProps = {
    legend: '',
    style: '',
};
