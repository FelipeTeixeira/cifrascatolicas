import Head from 'next/head'
import styles from '@styles/album.module.scss'
import { SubHeader } from '@components/subheader/subheader'
import AlbumImage from '@public/teste/album.png'
import { PlaylistSection } from '@components/sections/playlist/playlist'
import { ArtistCard } from '@components/artist-card/artist-card'
import { Section } from '@components/section/section'
import { Container } from '@components/container/container'
import { PageTitle } from '@components/page-title/page-title'
import { AdvertisingSidebar } from '@components/advertising-sidebar/advertising-sidebar'

export default function Album() {
    return (
        <>
            <Head>
                <title>Cifras Católicas - Eu Vou Crer em Ti</title>
                <meta name="description" content="Eu Vou Crer em Ti" />
            </Head>

            <SubHeader />

            <main>

                <Section>
                    <Container style={styles.container} hasSidebar={true}>
                        <ArtistCard image={AlbumImage} alt='Eu Vou Crer em Ti' style={styles.albumImage} />

                        <div className={styles.content}>
                            <PageTitle>
                                Eu Vou Crer em Ti
                            </PageTitle>

                            <p className={styles.detail}>
                                Álbum
                                <span>
                                    Frei Gilson
                                </span>
                            </p>

                            <p className={styles.detail}>
                                10 músicas
                                <span>
                                    32 minutos
                                </span>
                            </p>
                        </div>
                        <AdvertisingSidebar />
                    </Container>
                </Section>

                <PlaylistSection />
            </main >
        </>
    )
}
