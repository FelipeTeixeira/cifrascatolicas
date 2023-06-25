import Head from 'next/head'
import styles from '@styles/artistas.module.scss'
import { SubHeader } from '@components/subheader/subheader'

import { Container } from '@components/container/container'
import { Section } from '@components/section/section'
import { PageTitle } from '@components/page-title/page-title'
import { ArtistCard } from '@components/artist-card/artist-card'
import Link from 'next/link'
import { AdvertisingSidebar } from '@components/advertising-sidebar/advertising-sidebar'
import { Artist, getAllArtist } from '@services/song.service'
import { GetStaticProps } from 'next'


type Props = {
    artists: Artist[];
}

export const getStaticProps: GetStaticProps<Props> = async () => {
    const artists = await getAllArtist();
    return { props: { artists } }
}

export default function Artista(props: Props): JSX.Element {
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
                            {props.artists.map((artist, index) => (
                                <Link
                                    href={artist.slug}
                                    className={styles.link}
                                    title={artist.nome}
                                    key={index}>

                                    <ArtistCard
                                        image={`https://cifrascatolicas.com.br/imagens/${artist.slug}.png`}
                                        alt={artist.nome}
                                    />

                                    <strong>{artist.nome}</strong>
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
