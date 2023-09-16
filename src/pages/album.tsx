import styles from '@styles/album.module.scss'
import { SubHeader } from '@components/subheader/subheader'
import AlbumImage from '@public/teste/album.png'
import { ArtistCard } from '@components/artist-card/artist-card'
import { Section } from '@components/section/section'
import { Container } from '@components/container/container'
import { PageTitle } from '@components/page-title/page-title'
import { GetServerSideProps } from 'next'
import { setPreviousUrl } from '@utils/set-previous-url.util'
import { useRef } from 'react'
import { AdvertisingSidebar } from '@components/advertising-sidebar/advertising-sidebar'
import { MetaTags } from '@components/meta-tags/meta-tags'

type Props = {
    previousUrl: string;
}

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
    const previousUrl = setPreviousUrl(context, '/');

    return { props: { previousUrl } }
}

export default function Album(props: Props): JSX.Element {
    const refMain = useRef<HTMLElement>(null);

    return (
        <>
            <MetaTags title="Eu Vou Crer em Ti - Cifras Católicas" />

            <SubHeader previousUrl={props.previousUrl} />

            <main ref={refMain}>
                <Section>
                    <Container className={styles.container} hasSidebar={true}>
                        <ArtistCard image={AlbumImage} alt='Eu Vou Crer em Ti' className={styles.albumImage} />

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
                        <AdvertisingSidebar ref={refMain} />
                    </Container>
                </Section>

                {/* TODO - falta integrar */}
                {/* <PlaylistSection /> */}
            </main >
        </>
    )
}
