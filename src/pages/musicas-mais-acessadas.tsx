import Head from 'next/head'
import Artista from '@public/teste/artista.png'
import { Header } from '@components/header/header'
import { SubHeader } from '@components/subheader/subheader'
import { SectionTitle } from '@components/section-title/section-title'
import { Thumbnail } from '@components/thumbnail/thumbnail'
import { Section } from '@components/sections/section/section'

export default function MusicasMaisAcessadas() {
    return (
        <>
            <Head>
                <title>Cifras Católicas - Músicas mais acessadas</title>
                <meta name="description" content="Músicas mais acessadas" />
            </Head>

            <Header hideMobile={true} />
            <SubHeader />

            <main>
                <Section>
                    <SectionTitle>
                        Músicas mais acessadas
                    </SectionTitle>

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
                </Section>
            </main >
        </>
    )
}
