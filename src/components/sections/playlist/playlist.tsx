import styles from './playlist.module.scss'
import { CircleButton } from '@components/circle-button/circle-button'
import { ShareIcon } from '@components/icons/share-icon'
import { PlaylistIcon } from '@components/icons/playlist-icon'
import Artista2 from '@public/teste/artista-2.png'
import Image from 'next/image'
import { Section } from '@components/section/section'
import { Container } from '@components/container/container'
import { ArtistInterface } from '@interfaces/artist.interface'
import Link from 'next/link'
import { Modal } from '@components/modal/modal'
import { TEXTS } from 'src/core/constants/texts'
import { ShareModal } from '@components/share-modal/share-modal'
import { useState } from 'react'
import { SongInterface } from '@interfaces/song.interface'

export function PlaylistSection(props: {
    artist: ArtistInterface;
}) {
    const { nome, slug, musicas } = props.artist;
    const [songSelected, setSongSelected] = useState<SongInterface>();
    const [visibleShareModal, setVisibleShareModal] = useState<boolean>(false);
    const getPageTitle = (): string => `${nome.trim()} - ${songSelected?.nome}`;

    return (
        <>
            <Section className={styles.playlist}>
                <Container hasSidebar={true}>
                    <ul>
                        {musicas?.map((song, index) => (
                            <li key={index} className={styles.song}>
                                <Image src={Artista2} alt={song.nome} className={styles.albumImage} />

                                <Link href={`${slug}/${song.slug}`} className={styles.link}>
                                    {song.nome}
                                </Link>

                                <CircleButton onClick={() => alert('teste')} hasBorder={false}>
                                    <PlaylistIcon />
                                </CircleButton>

                                <CircleButton onClick={() => {
                                    setVisibleShareModal(true);
                                    setSongSelected(song);
                                }} color='white'>
                                    <ShareIcon />
                                </CircleButton>
                            </li>
                        ))}
                    </ul>
                </Container>
            </Section>


            {visibleShareModal ?
                <Modal
                    title={TEXTS.SHARE_MODAL.TITLE}
                    description={TEXTS.SHARE_MODAL.DESCRIPTION}
                    onClose={() => setVisibleShareModal(false)}>
                    <ShareModal
                        description={getPageTitle()}
                        url={`${window.location.href}/${songSelected?.slug}`}
                    />
                </Modal> : ''}
        </>
    )
}
