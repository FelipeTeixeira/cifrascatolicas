import { Container } from '@components/container/container'
import styles from './banner-musicas-para-missa.module.scss'
import BannerMobile from '@public/banner-celular-musicas-para-missa.png'
import BannerDesktop from '@public/banner-desktop-musicas-para-missa.jpg'
import Image from 'next/image'

export function BannerMusicasParaMissaSection() {
    return (
        <section className={styles.sectionBanner}>
            <Container>
                <div className={styles.container}>
                    <h3 className={styles.title}>
                        Músicas para missa
                    </h3>
                    <p className={styles.description}>
                        Encontre as músicas litúrgicas usadas na Santa Missa.
                    </p>
                </div>

                <Image
                    src={BannerMobile}
                    alt='Banner do Músicas para missa'
                    className={`${styles.banner} showMobile`}
                />
                <Image
                    src={BannerDesktop}
                    alt='Banner do Músicas para missa'
                    className={`${styles.banner} showDesktop`}
                />

            </Container>
        </section>
    )
}
