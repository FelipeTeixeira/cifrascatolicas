import Image, { StaticImageData } from 'next/image'
import styles from './card.module.scss'

export function Card(props: {
    image: StaticImageData
}) {
    return (
        <div className={styles.card}>

            <div className={styles.container}>
                <h4 className={styles.title}>
                    De Ti Preciso
                </h4>
                <p className={styles.description}>
                    Cifra simplificada
                </p>

                <strong className={styles.tag}>
                    Frei Gilson
                </strong>
            </div>

            <Image src={props.image} alt='Logo do Cifras Católicas' />
        </div>
    )
}
