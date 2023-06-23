import Head from 'next/head'
import styles from '@styles/artista.module.scss'
import { SubHeader } from '@components/subheader/subheader'

import { ToggleButton } from '@components/toggle-button/toggle-button'

import Artista2 from '@public/teste/artista-2.png'
import Image from 'next/image'
import { PlaylistSection } from '@components/sections/playlist/playlist'
import { useState } from 'react'
import { AlbumSection } from '@components/sections/album/album'
import { Section } from '@components/section/section'
import { Container } from '@components/container/container'
import { PageTitle } from '@components/page-title/page-title'
import { AdvertisingSidebar } from '@components/advertising-sidebar/advertising-sidebar'

export default function Artista() {
    const [tabSelected, setTabSelected] = useState('Músicas');

    return (
        <>
            <Head>
                <title>Cifras Católicas - Frei Gilson</title>
                <meta name="description" content="Frei Gilson" />
            </Head>

            <SubHeader />

            <main>
                <Section>
                    <Container style={styles.container} hasSidebar={true}>
                        <Image src={Artista2} alt='Frei Gilson' className={styles.avatar} />

                        <div>
                            <PageTitle>
                                Frei Gilson
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

                {tabSelected === 'Músicas' && <PlaylistSection />}
                {tabSelected === 'Álbuns' && <AlbumSection />}
            </main >
        </>
    )
}
