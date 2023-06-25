import Image, { StaticImageData } from 'next/image'
import styles from './artist-card.module.scss'
import { useState } from 'react';

// TODO - mudar nome pra ficar correto
export function ArtistCard(props: {
    image: StaticImageData | string;
    legend: string;
    style: string;
    alt: string;
}) {
    const [hideImage, setHideImage] = useState(false);

    return (
        <div className={`${styles.artistCard} ${props.style}`}>
            {props.legend ? <strong className={styles.legend}>{props.legend}</strong> : null}

            {!hideImage ?
                <Image
                    src={props.image}
                    alt={props.alt}
                    fill
                    loading="lazy"
                    onError={() => {
                        setHideImage(true);
                    }}
                />

                : <span role="img" className={styles.avatar}>{props.alt}</span>
            }

        </div>
    )
}

ArtistCard.defaultProps = {
    legend: '',
    style: '',
};
