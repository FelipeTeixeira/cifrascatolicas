import Head from 'next/head'
import styles from '@styles/artista.module.scss'
import { Header } from '@components/header/header'
import { SubHeader } from '@components/subheader/subheader'

import { ToggleButton } from '@components/toggle-button/toggle-button'

import Artista2 from '@public/teste/artista-2.png'
import Image from 'next/image'
import { PlaylistSection } from '@components/sections/playlist/playlist'
import { useState } from 'react'
import { AlbumSection } from '@components/sections/album/album'

export default function Artista() {
    const [tabSelected, setTabSelected] = useState('Músicas');

    return (
        <>
            <Head>
                <title>Cifras Católicas - Frei Gilson</title>
                <meta name="description" content="Frei Gilson" />
            </Head>

            <Header />
            <SubHeader />

            <main>
                <section className={styles.section}>
                    <Image src={Artista2} alt='Frei Gilson' className={styles.avatar} />

                    <div>
                        <h1 className={styles.title}>
                            Frei Gilson
                        </h1>

                        <ToggleButton
                            onClick={(event: string) => setTabSelected(event)}
                            options={['Músicas', 'Álbuns']}
                            hasButtonSpacing={true}
                        />
                    </div>

                </section>

                {tabSelected === 'Músicas' && <PlaylistSection />}
                {tabSelected === 'Álbuns' && <AlbumSection />}
            </main >
        </>
    )
}
