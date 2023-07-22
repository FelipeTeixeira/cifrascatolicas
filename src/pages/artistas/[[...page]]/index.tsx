import Head from 'next/head'
import styles from '@styles/artistas.module.scss'
import { SubHeader } from '@components/subheader/subheader'

import { Container } from '@components/container/container'
import { Section } from '@components/section/section'
import { PageTitle } from '@components/page-title/page-title'
import { ArtistCard } from '@components/artist-card/artist-card'
import Link from 'next/link'
import { AdvertisingSidebar } from '@components/advertising-sidebar/advertising-sidebar'
import { GetServerSideProps } from 'next'
import { ArtistResponseInterface } from '@interfaces/artist.interface'
import { getAllArtist } from '@services/artist.service'
import { useRef } from 'react'
import { Pagination } from '@components/pagination/pagination'

type Props = {
    artistResponse: ArtistResponseInterface;
}

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
    const pageSelected = context.params?.page ? Number(context.params.page[1] || 0) : 0;
    const artistResponse = await getAllArtist(pageSelected);

    return {
        props: { artistResponse }
    }
}

export default function Artista(props: Props): JSX.Element {
    const { artistResponse } = props;
    const refMain = useRef<HTMLElement>(null);

    return (
        <>
            <Head>
                <title>Artistas | Cifras Católicas</title>
                <meta name="description" content="Artistas" />
            </Head>

            <SubHeader previousUrl='/' />
            <main ref={refMain}>
                <Section>
                    <Container hasSidebar={true}>
                        <PageTitle>
                            Todos os artistas
                        </PageTitle>

                        {artistResponse.data.length ?
                            <>
                                <div className={styles.content}>
                                    {artistResponse.data.map((artist, index) => (
                                        <Link
                                            href={artist.slug}
                                            className={styles.link}
                                            title={artist.nome}
                                            key={index}>

                                            <ArtistCard
                                                image={artist.imagem}
                                                alt={artist.nome}
                                            />

                                            <strong>{artist.nome}</strong>
                                        </Link>
                                    ))}
                                </div>

                                <Pagination meta={artistResponse.meta} />
                            </>
                            : null}

                        <AdvertisingSidebar refMain={refMain} />
                    </Container>
                </Section>
            </main >
        </>
    )
}
