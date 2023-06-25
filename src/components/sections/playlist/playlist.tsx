import styles from './playlist.module.scss'
import { CircleButton } from '@components/circle-button/circle-button'
import { ShareIcon } from '@components/icons/share-icon'
import { PlaylistIcon } from '@components/icons/playlist-icon'
import Artista2 from '@public/teste/artista-2.png'
import Image from 'next/image'
import { Section } from '@components/section/section'
import { Container } from '@components/container/container'
import { SongInterface } from '@interfaces/artist.interface'
import Link from 'next/link'

export function PlaylistSection(props: {
    songs: SongInterface[],
    slugArtist: string,
}) {
    return (
        <Section style={styles.playlist}>
            <Container hasSidebar={true}>
                <ul>
                    {props.songs.map((song, index) => (
                        <li key={index}>
                            <Link href={`${props.slugArtist}/${song.slug}`} className={styles.song}>
                                <Image src={Artista2} alt='Frei Gilson' className={styles.albumImage} />

                                <p>
                                    {song.nome}
                                </p>

                                <CircleButton onClick={() => alert('teste')} hasBorder={false}>
                                    <PlaylistIcon />
                                </CircleButton>

                                <CircleButton onClick={() => alert('teste')} color='white'>
                                    <ShareIcon />
                                </CircleButton>
                            </Link>
                        </li>
                    ))}
                </ul>
            </Container>
        </Section>
    )
}
