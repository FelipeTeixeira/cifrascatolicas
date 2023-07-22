import Image, { StaticImageData } from 'next/image'
import styles from './avatar.module.scss'
import { useState } from 'react';

// TODO - deixar path da imagem fixa na string
// https://cifrascatolicas.com.br/imagens/albums/200/${slug}.png
export function Avatar(props: {
    image: StaticImageData | string;
    alt: string;
    className: string;
}) {
    const [hideImage, setHideImage] = useState(false);

    return (
        <>
            {!hideImage ?
                <Image
                    className={styles.image}
                    src={props.image}
                    alt={props.alt}
                    fill
                    loading="lazy"
                    onError={() => {
                        setHideImage(true);
                    }}
                />

                : <span role="img" className={`${styles.avatar} ${props.className}`}>{props.alt}</span>
            }
        </>
    )
}

Avatar.defaultProps = {
    className: ''
};
