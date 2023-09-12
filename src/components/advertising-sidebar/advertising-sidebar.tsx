import styles from './advertising-sidebar.module.scss'
import { Tag } from '@components/tag/tag';
import Anuncio from '@public/teste/anuncio-2.png'
import { getElementHeight } from '@utils/get-element-height';
import Image from 'next/image';
import { useEffect, useRef, forwardRef } from 'react';

const AdvertisingSidebar = forwardRef((props: { className?: string }, ref: any) => {
    const refAside = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (ref && ref?.current) {
            const asideHeight = refAside.current?.clientHeight as number;
            const mainHeight = getElementHeight(ref.current);

            if (mainHeight < asideHeight) {
                const margin = asideHeight - mainHeight;
                ref.current.style.marginBottom = `${margin}px`;
            }
        }
    }, [ref]);

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
});

export default AdvertisingSidebar;

AdvertisingSidebar.defaultProps = {
    className: '',
};
