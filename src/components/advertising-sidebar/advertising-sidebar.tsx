import styles from './advertising-sidebar.module.scss'
import { Tag } from '@components/tag/tag';
import Anuncio from '@public/teste/anuncio-2.png'
import { getElementHeight } from '@utils/get-element-height';
import Image from 'next/image';
import { RefObject, useEffect, useRef } from 'react';

export function AdvertisingSidebar(props: {
    className: string;
    refMain: RefObject<HTMLElement>;
}) {
    const refAside = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (props?.refMain && props.refMain?.current) {
            const asideHeight = refAside.current?.clientHeight as number;
            const mainHeight = getElementHeight(props.refMain.current);

            if (mainHeight < asideHeight) {
                const margin = asideHeight - mainHeight;
                props.refMain.current.style.marginBottom = `${margin}px`;
            }
        }
    }, [props.refMain]);

    return (
        <aside className={`${styles.aside} ${props.className}`}>
            <div className={styles.sticky} ref={refAside}>
                <div className={styles.advertising}>
                    <Tag className={styles.tag}>
                        Publicidade
                    </Tag>
                    <Image src={Anuncio} alt='' className={styles.image} />
                </div>

                <div className={styles.advertising}>
                    <Tag className={styles.tag}>
                        Publicidade
                    </Tag>
                    <Image src={Anuncio} alt='' className={styles.image} />
                </div>
            </div>
        </aside>
    )
}

AdvertisingSidebar.defaultProps = {
    className: '',
};
