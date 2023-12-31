import Image, { StaticImageData } from 'next/image'
import styles from './avatar.module.scss'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export function Avatar(props: {
    image: StaticImageData | string;
    alt: string;
    className: string;
}) {
    const [hideImage, setHideImage] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const handleRouteChange = () => {
            setHideImage(false);
        };

        router.events.on('routeChangeComplete', handleRouteChange);

        return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, [router.events]);

    return (
        <>
            {!hideImage ?
                <Image
                    className={styles.image}
                    src={props.image}
                    alt={props.alt}
                    fill
                    loading="lazy"
                    onError={() => setHideImage(true) }
                />

                : <span role="img" className={`${styles.avatar} ${props.className}`}>{props.alt}</span>
            }
        </>
    )
}

Avatar.defaultProps = {
    className: ''
};
