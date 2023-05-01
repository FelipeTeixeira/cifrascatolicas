import Head from 'next/head'
import styles from '@styles/repertorio.module.scss'
import { Header } from '@components/header/header'
import { Button } from '@components/button/button'
import { RepertoireSection } from '@sections/repertoire/repertoire'
import { AdvertisingSection } from '@sections/advertising/advertising'
import { AddIcon } from '@components/icons/add-icon'
import { BottomSheet } from '@components/bottom-sheet/bottom-sheet'
import { useState } from 'react'
import { RepertoireRegisterSection } from '@sections/repertoire-register/repertoire-register'
import { SongDetailsModal } from '@components/song-details-modal/song-details-modal'
import { Song } from '@interfaces/song.interface'
import { RepertoireListSection } from '@sections/repertoire-list/repertoire-list'
import Artista from '@public/teste/artista.png'
import Artista2 from '@public/teste/artista-2.png'

export default function Repertorio() {
    const [visible, setVisible] = useState(false);
    const [selectedSong, setSelectedSong] = useState<Song>();
    const MOCK: Song[] = [
        {
            song: '1- Fogo abrasador',
            artist: '1- Comunidade Católica Colo de Deus',
            image: Artista,
        },
        {
            song: '2- Fogo abrasador',
            artist: '2- Comunidade Católica Colo de Deus',
            image: Artista2,
        },
        {
            song: '3- Fogo abrasador',
            artist: 'Comunidade Católica Colo de Deus',
            image: Artista,
        }
    ];

    return (
        <>
            <Head>
                <title>Cifras Católicas - Criar repertório</title>
                <meta name="description" content="Crie seu repertório e salve as músicas para tocar no offline" />
            </Head>

            <Header />

            <main>
                <section className={styles.section}>
                    <h1 className={styles.title}>
                        Crie seu repertório e salve as músicas para tocar no offline
                    </h1>

                    <Button onClick={() => setVisible(true)}>
                        <AddIcon fill='#fff' width={30} height={30} />
                        Criar repertório
                    </Button>
                </section>

                <RepertoireListSection name='Missa de domingo' songs={MOCK} />
                <RepertoireListSection name='Missa de sábado' songs={MOCK} />
                <RepertoireSection />
                <AdvertisingSection />

                <BottomSheet isVisible={visible} onClose={() => setVisible(false)} >
                    {visible &&
                        <RepertoireRegisterSection
                            songs={MOCK}
                            onSelectSong={(event: Song) => setSelectedSong(event)}
                            onCreateRepertoire={() => setVisible(false)} />
                    }
                </BottomSheet>

                {selectedSong &&
                    <SongDetailsModal
                        song={selectedSong}
                        onClose={() => setSelectedSong(undefined)}
                    />
                }
            </main >
        </>
    )
}
