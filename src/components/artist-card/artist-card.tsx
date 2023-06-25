import Image, { StaticImageData } from 'next/image'
import styles from './artist-card.module.scss'
import { Avatar } from '@components/avatar/avatar';

// TODO - mudar nome pra ficar correto
export function ArtistCard(props: {
    image: StaticImageData | string;
    legend: string;
    style: string;
    alt: string;
}) {
    return (
        <div className={`${styles.artistCard} ${props.style}`}>
            {props.legend ? <strong className={styles.legend}>{props.legend}</strong> : null}
            <Avatar image={props.image} alt={props.alt} />
        </div>
    )
}

ArtistCard.defaultProps = {
    legend: '',
    style: '',
};
