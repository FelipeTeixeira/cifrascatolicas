import styles from '@styles/repertorio.module.scss'
import { Button } from '@components/button/button'
import { RepertoireSection } from '@sections/repertoire/repertoire'
import { AdvertisingSection } from '@sections/advertising/advertising'
import { AddIcon } from '@components/icons/add-icon'
import { BottomSheet } from '@components/bottom-sheet/bottom-sheet'
import { useState } from 'react'
import { RepertoireRegisterSection } from '@sections/repertoire-register/repertoire-register'
import { SongDetailsModal } from '@components/song-details-modal/song-details-modal'
import { MusicDetailsInterface } from '@interfaces/song.interface'
import { RepertoireListSection } from '@sections/repertoire-list/repertoire-list'
import Artista from '@public/teste/artista.png'
import Artista2 from '@public/teste/artista-2.png'
import { Container } from '@components/container/container'
import { Section } from '@components/section/section'
import { PageTitle } from '@components/page-title/page-title'
import { MetaTags } from '@components/meta-tags/meta-tags'

export default function Repertorio() {
    const [visible, setVisible] = useState(false);
    const [selectedSong, setSelectedSong] = useState<MusicDetailsInterface>();

    return (
        <>
            <MetaTags title="Criar repertório - Cifras Católicas" description="Crie seu repertório e salve as músicas para tocar no offline"  />

            <main>
                <Section className={styles.section}>
                    <Container>
                        <PageTitle>
                            Crie seu repertório e salve as músicas para tocar no offline
                        </PageTitle>

                        <Button onClick={() => setVisible(true)} className={styles.button}>
                            <AddIcon fill='#fff' />
                            Criar repertório
                        </Button>
                    </Container>
                </Section>

                {/*
                VOLTAR ISSO
                <RepertoireListSection name='Missa de domingo' songs={MOCK} />
                <RepertoireListSection name='Missa de sábado' songs={MOCK} /> */}

                <RepertoireSection />

                <AdvertisingSection />

                <BottomSheet isVisible={visible} onClose={() => setVisible(false)} >
                    {visible &&
                        <RepertoireRegisterSection
                            onSelectSong={(event: MusicDetailsInterface) => setSelectedSong(event)}
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
