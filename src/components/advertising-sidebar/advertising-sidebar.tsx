import styles from './advertising-sidebar.module.scss'
import { Tag } from '@components/tag/tag';
import Anuncio from '@public/teste/anuncio-2.png'
import Image from 'next/image';

export function AdvertisingSidebar(props: {
    style: string;
}) {
    return (
        <aside className={styles.aside}>
            <div className={styles.advertising}>
                <Tag style={styles.tag}>
                    Publicidade
                </Tag>
                <Image src={Anuncio} alt='' className={styles.image} />
            </div>

            <div className={styles.advertising}>
                <Tag style={styles.tag}>
                    Publicidade
                </Tag>
                <Image src={Anuncio} alt='' className={styles.image} />
            </div>
        </aside>
    )
}

AdvertisingSidebar.defaultProps = {
    style: '',
};