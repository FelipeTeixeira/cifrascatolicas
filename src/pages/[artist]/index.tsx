import Head from 'next/head'
import styles from '@styles/artista.module.scss'
import { SubHeader } from '@components/subheader/subheader'

import { ToggleButton } from '@components/toggle-button/toggle-button'

import { PlaylistSection } from '@components/sections/playlist/playlist'
import { useRef, useState } from 'react'
import { AlbumSection } from '@components/sections/album/album'
import { Section } from '@components/section/section'
import { Container } from '@components/container/container'
import { PageTitle } from '@components/page-title/page-title'
import { AdvertisingSidebar } from '@components/advertising-sidebar/advertising-sidebar'
import { GetServerSideProps } from 'next'
import { getArtistDetails } from '@services/artist.service'
import { Avatar } from '@components/avatar/avatar'
import { ArtistInterface } from '@interfaces/artist.interface'
import { setPreviousUrl } from '@utils/set-previous-url.util'

type Props = {
    artist: ArtistInterface;
    previousUrl: string;
}

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
    const slug = context.params?.artist as string;
    const artist = await getArtistDetails(slug);
    const previousUrl = setPreviousUrl(context, '/artistas');

    return { props: { artist, previousUrl } }
}

export default function Artista(props: Props): JSX.Element {
    const { nome, imagem } = props.artist;
    const [tabSelected, setTabSelected] = useState('Músicas');
    const refMain = useRef<HTMLElement>(null);

    return (
        <>
            <Head>
                <title>{`${nome?.trim()} - Cifras Católicas`}</title>
                <meta name="description" content={nome} />
            </Head>

            <SubHeader previousUrl={props.previousUrl} />

            <main ref={refMain}>
                <Section>
                    <Container className={styles.container} hasSidebar={true}>

                        <figure className={styles.avatar}>
                            <Avatar
                                image={imagem}
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

                        <AdvertisingSidebar ref={refMain} />
                    </Container>
                </Section>

                {tabSelected === 'Músicas' && <PlaylistSection artist={props.artist} />}
                {tabSelected === 'Álbuns' && <AlbumSection />}
            </main >
        </>
    )
}
