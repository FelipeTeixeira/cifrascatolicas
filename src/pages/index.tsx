import Head from 'next/head'
import Image from 'next/image'
import styles from '@styles/home.module.scss'
import BannerDesktop from '@public/banner-desktop.jpg'
import BannerMobile from '@public/banner-mobile.jpg'
import { Header } from '@components/header/header'
import { MostAccessedSection } from '@sections/most-accessed/most-accessed'
import { HighlightsSection } from '@sections/highlights/highlights'
import { RepertoireSection } from '@sections/repertoire/repertoire'
import { ArtistsSection } from '@components/sections/artists/artists'
import { BannerMusicasParaMissaSection } from '@sections/banner-musicas-para-missa/banner-musicas-para-missa'
import { AdvertisingSection } from '@components/sections/advertising/advertising'
import { Container } from '@components/container/container'
import { Footer } from '@components/footer/footer'

export default function Home() {
    return (
        <>
            <Head>
                <title>Cifras Católicas</title>
                <meta name="description" content="Todas as músicas católicas reunidas para você tocar!" />
            </Head>

            <Header hasBackground={false} />

            <main className={styles.main}>
                <section>
                    <Container style={styles.container}>
                        <h1 className={styles.title}>
                            Todas as músicas católicas reunidas para você tocar!
                        </h1>
                    </Container>

                    <Image
                        className={`${styles.banner} showMobile`}
                        src={BannerMobile}
                        alt='Todas as músicas católicas reunidas para você tocar!'
                    />

                    <Image
                        src={BannerDesktop}
                        className={`${styles.banner} showDesktop`}
                        alt='Todas as músicas católicas reunidas para você tocar!'
                    />
                </section>

                <HighlightsSection />
                <MostAccessedSection />
                <RepertoireSection />
                <ArtistsSection />
                <BannerMusicasParaMissaSection />
                <AdvertisingSection />
            </main>

            <Footer />
        </>
    )
}
