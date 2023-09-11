import Head from 'next/head'
import { SubHeader } from '@components/subheader/subheader'
import { Thumbnail } from '@components/thumbnail/thumbnail'
import { Section } from '@components/section/section'
import { PageTitle } from '@components/page-title/page-title'
import { Container } from '@components/container/container'
import { AdvertisingSidebar } from '@components/advertising-sidebar/advertising-sidebar'
import { useRef } from 'react'
import { MusicResponseInterface } from '@interfaces/song.interface'
import { GetServerSideProps } from 'next'
import { getAllMusics } from '@services/music.service'
import { Pagination } from '@components/pagination/pagination'
import { useRouter } from 'next/router'

type Props = {
    musicResponse: MusicResponseInterface;
}

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
    const pageSelected = context.query.pagina ? Number(context.query.pagina) : 0;
    const musics = await getAllMusics(pageSelected);

    return {
        props: {
            musicResponse: musics,
        }
    }
}

export default function MusicasMaisAcessadas(props: Props): JSX.Element {
    const { musicResponse } = props;
    const refMain = useRef<HTMLElement>(null);
    const { push } = useRouter();

    if (!musicResponse.data.length) {
        push('/');
    }

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

                        {musicResponse.data.length ?
                            <>
                                <ul>
                                    {musicResponse.data.map((music, index) => (
                                        <li key={index}>
                                            <Thumbnail music={music} />
                                        </li>
                                    ))}
                                </ul>

                                <Pagination meta={musicResponse.meta} />
                            </>
                            : null}

                        <AdvertisingSidebar refMain={refMain} />
                    </Container>
                </Section>
            </main >
        </>
    )
}
