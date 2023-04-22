import styles from './banner-musicas-para-missa.module.scss'
import Banner from '@public/banner-musicas-para-missa.png'
import Image from 'next/image'

export function BannerMusicasParaMissaSection() {
    return (
        <section className={styles.sectionBanner}>
            <div className={styles.container}>
                <h3 className={styles.title}>
                    Músicas para missa
                </h3>
                <p className={styles.description}>
                    Encontre as músicas litúrgicas usadas na Santa Missa.
                </p>
            </div>

            <Image src={Banner} alt='Banner do Músicas para missa' className={styles.banner} />
        </section>
    )
}
