import Head from 'next/head'
import Artista from '@public/teste/artista.png'
import { SubHeader } from '@components/subheader/subheader'
import { Thumbnail } from '@components/thumbnail/thumbnail'
import { Section } from '@components/section/section'
import { PageTitle } from '@components/page-title/page-title'
import { Container } from '@components/container/container'

export default function MusicasMaisAcessadas() {
    return (
        <>
            <Head>
                <title>Cifras Católicas - Músicas mais acessadas</title>
                <meta name="description" content="Músicas mais acessadas" />
            </Head>

            <SubHeader />

            <main>
                <Section>
                    <Container>
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
                    </Container>
                </Section>
            </main >
        </>
    )
}
