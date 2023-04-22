import Image from 'next/image'
import styles from './advertising.module.scss'
import { Tag } from '@components/tag/tag'
import Anuncio from '@public/teste/anuncio.png'

export function AdvertisingSection(props: {
    hasPadding: boolean;
}) {
    return (
        <section className={`${props.hasPadding ? styles.advertising : ''}`}>
            <Tag>
                Publicidade
            </Tag>
            <Image src={Anuncio} alt='' className={styles.image} />
        </section>
    )
}

AdvertisingSection.defaultProps = {
    hasPadding: true,
};
