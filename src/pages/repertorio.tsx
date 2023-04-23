import Head from 'next/head'
import styles from '@styles/repertorio.module.scss'
import { Header } from '@components/header/header'
import { Button } from '@components/button/button'
import { RepertoireSection } from '@sections/repertoire/repertoire'
import { AdvertisingSection } from '@components/sections/advertising/advertising'
import { AddIcon } from '@components/icons/add-icon'
import { BottomSheet } from '@components/bottom-sheet/bottom-sheet'
import { useState } from 'react'
import { RepertoireRegisterSection } from '@sections/repertoire-register/repertoire-register'
import { MusicDetailsModal } from '@components/music-details-modal/music-details-modal'
import { Song } from '@interfaces/song.interface'

export default function Repertorio() {
    const [visible, setVisible] = useState(false);
    const [selectedSong, setSelectedSong] = useState<Song>();
    const MOCK: Song[] = [
        {
            music: '1- Fogo abrasador',
            artist: '1- Comunidade Católica Colo de Deus'
        },
        {
            music: '2- Fogo abrasador',
            artist: '2- Comunidade Católica Colo de Deus'
        },
        {
            music: '3- Fogo abrasador',
            artist: '3- Comunidade Católica Colo de Deus'
        }
    ];

    return (
        <>
            <Head>
                <title>Cifras Católicas - Criar repertório</title>
                <meta name="description" content="Crie seu repertório e salve as músicas para tocar no offline" />
            </Head>

            <Header />

            <main className={styles.main}>
                <section className={styles.section}>
                    <h1 className={styles.title}>
                        Crie seu repertório e salve as músicas para tocar no offline
                    </h1>

                    <Button onClick={() => setVisible(true)}>
                        <AddIcon fill='#fff' width={30} height={30} />
                        Criar repertório
                    </Button>
                </section>

                <RepertoireSection />
                <AdvertisingSection />

                <BottomSheet isVisible={visible} onClose={() => setVisible(false)} >
                    {visible &&
                        <RepertoireRegisterSection
                            songs={MOCK}
                            onSelectMusic={(event: Song) => setSelectedSong(event)} />
                    }
                </BottomSheet>

                {selectedSong &&
                    <MusicDetailsModal
                        song={selectedSong}
                        onClose={() => setSelectedSong(undefined)}
                    />
                }
            </main >
        </>
    )
}
