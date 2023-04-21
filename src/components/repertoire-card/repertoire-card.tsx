import Image, { StaticImageData } from 'next/image'
import styles from './repertoire-card.module.scss'

export function RepertoireCard(props: {
    image: StaticImageData
}) {
    return (
        <div className={styles.repertoireCard}>
            <strong className={styles.tag}>
                Louvor e adoração
            </strong>
            <Image src={props.image} alt='Logo do Cifras Católicas' />
        </div>
    )
}
