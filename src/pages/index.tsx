import Head from 'next/head'
import Image from 'next/image'
import styles from '@styles/Home.module.scss'
import Banner from '@public/banner.jpg'
import { Header } from '@components/header/header'
import { MostAccessedSection } from '@sections/most-accessed/most-accessed'
import { HighlightsSection } from '@sections/highlights/highlights'
import { RepertoireSection } from '@sections/repertoire/repertoire'
import { ArtistsSection } from '@components/sections/artists/artists'
import { BannerMusicasParaMissaSection } from '@sections/banner-musicas-para-missa/banner-musicas-para-missa'
import { AdvertisingSection } from '@components/sections/advertising/advertising'

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
                    <h1 className={styles.title}>
                        Todas as músicas católicas reunidas para você tocar!
                    </h1>

                    <Image src={Banner} alt='' priority />
                </section>

                <HighlightsSection />
                <MostAccessedSection />
                <RepertoireSection />
                <ArtistsSection />
                <BannerMusicasParaMissaSection />
                <AdvertisingSection />
            </main>
        </>
    )
}
