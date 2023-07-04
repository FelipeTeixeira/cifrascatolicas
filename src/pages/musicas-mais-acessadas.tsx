import Head from 'next/head'
import Artista from '@public/teste/artista.png'
import { SubHeader } from '@components/subheader/subheader'
import { Thumbnail } from '@components/thumbnail/thumbnail'
import { Section } from '@components/section/section'
import { PageTitle } from '@components/page-title/page-title'
import { Container } from '@components/container/container'
import { AdvertisingSidebar } from '@components/advertising-sidebar/advertising-sidebar'
import { useRef } from 'react'

export default function MusicasMaisAcessadas() {
    const refMain = useRef<HTMLElement>(null);

    return (
        <>
            <Head>
                <title>Cifras Católicas - Músicas mais acessadas</title>
                <meta name="description" content="Músicas mais acessadas" />
            </Head>

            <SubHeader previousUrl='/' />

            <main ref={refMain}>
                <Section>
                    <Container hasSidebar={true}>
                        <PageTitle>
                            Músicas mais acessadas
                        </PageTitle>

                        <ul>
                            <li>
                                <Thumbnail image={Artista} song='A cruz da Salvação' artist='Anjos de resgate' />
                            </li>
                            <li>
                                <Thumbnail image={Artista} song='A cruz da Salvação' artist='Anjos de resgate' />
                            </li>
                            <li>
                                <Thumbnail image={Artista} song='A cruz da Salvação' artist='Anjos de resgate' />
                            </li>
                            <li>
                                <Thumbnail image={Artista} song='A cruz da Salvação' artist='Anjos de resgate' />
                            </li>
                            <li>
                                <Thumbnail image={Artista} song='A cruz da Salvação' artist='Anjos de resgate' />
                            </li>
                            <li>
                                <Thumbnail image={Artista} song='A cruz da Salvação' artist='Anjos de resgate' />
                            </li>
                        </ul>

                        <AdvertisingSidebar refMain={refMain} />
                    </Container>
                </Section>
            </main >
        </>
    )
}
