import Image, { StaticImageData } from 'next/image'
import styles from './avatar.module.scss'
import { useState } from 'react';

export function Avatar(props: {
    image: StaticImageData | string;
    alt: string;
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

                : <span role="img" className={styles.avatar}>{props.alt}</span>
            }
        </>
    )
}

Avatar.defaultProps = {
};
