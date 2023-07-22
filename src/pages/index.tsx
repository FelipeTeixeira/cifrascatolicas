import Head from 'next/head'
import Image from 'next/image'
import styles from '@styles/index.module.scss'
import BannerDesktop from '@public/banner-desktop.jpg'
import BannerMobile from '@public/banner-mobile.jpg'
import { MostAccessedSection } from '@sections/most-accessed/most-accessed'
import { HighlightsSection } from '@sections/highlights/highlights'
import { RepertoireSection } from '@sections/repertoire/repertoire'
import { ArtistsSection } from '@components/sections/artists/artists'
import { BannerMusicasParaMissaSection } from '@sections/banner-musicas-para-missa/banner-musicas-para-missa'
import { AdvertisingSection } from '@components/sections/advertising/advertising'
import { Container } from '@components/container/container'
import { GetServerSideProps } from 'next'
import { MusicResponseInterface } from '@interfaces/song.interface'
import { getAllMusics } from '@services/music.service'

type Props = {
    musicsHighlightsResponse: MusicResponseInterface;
    musicsMostAccessedResponse: MusicResponseInterface;
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
    const musicsHighlightsResponse = await getAllMusics(0, 3);
    const musicsMostAccessedResponse = await getAllMusics(3, 9);

    return {
        props: {
            musicsHighlightsResponse,
            musicsMostAccessedResponse
        }
    }
}

export default function Home(props: Props): JSX.Element {
    const { musicsHighlightsResponse, musicsMostAccessedResponse } = props;

    return (
        <>
            <Head>
                <title>Cifras Católicas</title>
                <meta name="description" content="Todas as músicas católicas reunidas para você tocar!" />
            </Head>

            <main className={styles.main}>
                <section>
                    <Container className={styles.container}>
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

                <HighlightsSection musics={musicsHighlightsResponse.data} />
                <MostAccessedSection musics={musicsMostAccessedResponse.data} />
                <RepertoireSection />
                <ArtistsSection />
                <BannerMusicasParaMissaSection />
                <AdvertisingSection />
            </main>
        </>
    )
}
