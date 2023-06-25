import Head from 'next/head'
import styles from '@styles/artista.module.scss'
import { SubHeader } from '@components/subheader/subheader'

import { ToggleButton } from '@components/toggle-button/toggle-button'

import { PlaylistSection } from '@components/sections/playlist/playlist'
import { useState } from 'react'
import { AlbumSection } from '@components/sections/album/album'
import { Section } from '@components/section/section'
import { Container } from '@components/container/container'
import { PageTitle } from '@components/page-title/page-title'
import { AdvertisingSidebar } from '@components/advertising-sidebar/advertising-sidebar'
import { GetStaticPaths, GetStaticProps } from 'next'
import { ArtistType, getArtistDetails } from '@services/song.service'
import { Avatar } from '@components/avatar/avatar'

type Props = {
    artist: ArtistType;
}

export const getStaticProps: GetStaticProps<Props> = async (context) => {
    const slug = context.params?.artist as string;
    const artist = await getArtistDetails(slug);

    return { props: { artist } }
}

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
    return {
        paths: [],
        fallback: 'blocking'
    }
}

export default function Artista(props: Props): JSX.Element {
    const { nome, musicas, slug } = props.artist;
    const [tabSelected, setTabSelected] = useState('Músicas');

    return (
        <>
            <Head>
                <title>{`${nome.trim()} - Cifras Católicas`}</title>
                <meta name="description" content={nome} />
            </Head>

            <SubHeader />

            <main>
                <Section>
                    <Container style={styles.container} hasSidebar={true}>

                        <figure className={styles.avatar}>
                            <Avatar
                                image={`https://cifrascatolicas.com.br/imagens/${slug}.png`}
                                alt={nome}
                            />
                        </figure>

                        <div className={styles.content}>
                            <PageTitle>
                                {nome}
                            </PageTitle>

                            <ToggleButton
                                onClick={(event: string) => setTabSelected(event)}
                                options={['Músicas', 'Álbuns']}
                                hasButtonSpacing={true}
                            />
                        </div>
                        <AdvertisingSidebar />
                    </Container>
                </Section>

                {tabSelected === 'Músicas' && <PlaylistSection songs={musicas} />}
                {tabSelected === 'Álbuns' && <AlbumSection />}
            </main >
        </>
    )
}
