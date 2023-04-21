import Image from 'next/image'
import styles from './advertising.module.scss'
import { Tag } from '../tag/tag'
import Anuncio from '@public/teste/anuncio.png'

export function Advertising() {
    return (
        <div className={styles.advertising}>
            <Tag>
                Publicidade
            </Tag>
            <Image src={Anuncio} alt='' className={styles.image} />
        </div>
    )
}
