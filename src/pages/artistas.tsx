import Head from 'next/head'
import styles from '@styles/artistas.module.scss'
import { SubHeader } from '@components/subheader/subheader'

import { Container } from '@components/container/container'
import { Section } from '@components/section/section'
import { PageTitle } from '@components/page-title/page-title'
import { ArtistCard } from '@components/artist-card/artist-card'
import Artista2Image from '@public/teste/artista-2.png'
import Link from 'next/link'
import { AdvertisingSidebar } from '@components/advertising-sidebar/advertising-sidebar'

export default function Artista() {
    return (
        <>
            <Head>
                <title>Artistas | Cifras Católicas</title>
                <meta name="description" content="Artistas" />
            </Head>

            <SubHeader />

            <main>
                <Section>
                    <Container hasSidebar={true}>
                        <PageTitle>
                            Todos os artistas
                        </PageTitle>

                        <div className={styles.content}>
                            {Array.from(Array(10)).map((song, index) => (
                                <Link key={index} href="" className={styles.link} title={index.toString()}>
                                    <ArtistCard key={index} image={Artista2Image} />
                                    <strong>Padre Antônio Maria</strong>
                                </Link>
                            ))}
                        </div>
                        <AdvertisingSidebar />
                    </Container>
                </Section>
            </main >
        </>
    )
}
